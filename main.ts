// SPDX-License-Identifier: MIT
import fs from "node:fs";

const ENTRY = "v2.4.1: Fixed bug where the brain rejected the correct password twice, then remembered it the moment the account locked.";

fs.mkdirSync("/output", { recursive: true });
fs.writeFileSync("/output/entry.txt", ENTRY);
