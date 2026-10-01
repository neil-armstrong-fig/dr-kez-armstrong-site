import {readdir} from "node:fs/promises";
import {extname, join} from "node:path";

import sharp from "sharp";
import {describe, expect, it} from "vitest";

const imageDirectory = new URL("../../assets/images/", import.meta.url);
const rasterExtensions = new Set([".avif", ".jpeg", ".jpg", ".png", ".webp"]);

describe("public source images", (): void => {
  it("contain no embedded metadata", async (): Promise<void> => {
    const entries = await readdir(imageDirectory);
    const rasterFiles = entries.filter((entry) => rasterExtensions.has(extname(entry).toLowerCase()));

    for (const rasterFile of rasterFiles) {
      const metadata = await sharp(join(imageDirectory.pathname, rasterFile)).metadata();

      expect(metadata.exif, `${rasterFile} contains EXIF metadata`).toBeUndefined();
      expect(metadata.icc, `${rasterFile} contains an ICC profile`).toBeUndefined();
      expect(metadata.iptc, `${rasterFile} contains IPTC metadata`).toBeUndefined();
      expect(metadata.xmp, `${rasterFile} contains XMP metadata`).toBeUndefined();
    }
  });
});
