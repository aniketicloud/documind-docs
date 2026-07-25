// @ts-nocheck
import * as __fd_glob_31 from "../content/docs/product/settings.mdx?collection=docs"
import * as __fd_glob_30 from "../content/docs/product/features.mdx?collection=docs"
import * as __fd_glob_29 from "../content/docs/product/documents.mdx?collection=docs"
import * as __fd_glob_28 from "../content/docs/product/chat.mdx?collection=docs"
import * as __fd_glob_27 from "../content/docs/product/auth.mdx?collection=docs"
import * as __fd_glob_26 from "../content/docs/guide/local-development.mdx?collection=docs"
import * as __fd_glob_25 from "../content/docs/guide/installation.mdx?collection=docs"
import * as __fd_glob_24 from "../content/docs/guide/getting-started.mdx?collection=docs"
import * as __fd_glob_23 from "../content/docs/guide/environment.mdx?collection=docs"
import * as __fd_glob_22 from "../content/docs/guide/docker.mdx?collection=docs"
import * as __fd_glob_21 from "../content/docs/development/ui.mdx?collection=docs"
import * as __fd_glob_20 from "../content/docs/development/deploy-docs.mdx?collection=docs"
import * as __fd_glob_19 from "../content/docs/development/conventions.mdx?collection=docs"
import * as __fd_glob_18 from "../content/docs/architecture/storage.mdx?collection=docs"
import * as __fd_glob_17 from "../content/docs/architecture/security.mdx?collection=docs"
import * as __fd_glob_16 from "../content/docs/architecture/overview.mdx?collection=docs"
import * as __fd_glob_15 from "../content/docs/architecture/data-model.mdx?collection=docs"
import * as __fd_glob_14 from "../content/docs/architecture/api.mdx?collection=docs"
import * as __fd_glob_13 from "../content/docs/adr/0007-no-parse-on-upload.mdx?collection=docs"
import * as __fd_glob_12 from "../content/docs/adr/0006-redis-protected-mode.mdx?collection=docs"
import * as __fd_glob_11 from "../content/docs/adr/0005-document-allowlist.mdx?collection=docs"
import * as __fd_glob_10 from "../content/docs/adr/0004-multi-chat.mdx?collection=docs"
import * as __fd_glob_9 from "../content/docs/adr/0003-presigned-uploads-rustfs.mdx?collection=docs"
import * as __fd_glob_8 from "../content/docs/adr/0002-better-auth.mdx?collection=docs"
import * as __fd_glob_7 from "../content/docs/adr/0001-record-architecture-decisions.mdx?collection=docs"
import * as __fd_glob_6 from "../content/docs/index.mdx?collection=docs"
import { default as __fd_glob_5 } from "../content/docs/product/meta.json?collection=docs"
import { default as __fd_glob_4 } from "../content/docs/guide/meta.json?collection=docs"
import { default as __fd_glob_3 } from "../content/docs/development/meta.json?collection=docs"
import { default as __fd_glob_2 } from "../content/docs/architecture/meta.json?collection=docs"
import { default as __fd_glob_1 } from "../content/docs/adr/meta.json?collection=docs"
import { default as __fd_glob_0 } from "../content/docs/meta.json?collection=docs"
import { server } from 'fumadocs-mdx/runtime/server';
import type * as Config from '../source.config';

const create = server<typeof Config, import("fumadocs-mdx/runtime/types").InternalTypeConfig & {
  DocData: {
  }
}>();

export const docs = await create.docs("docs", "content/docs", {"meta.json": __fd_glob_0, "adr/meta.json": __fd_glob_1, "architecture/meta.json": __fd_glob_2, "development/meta.json": __fd_glob_3, "guide/meta.json": __fd_glob_4, "product/meta.json": __fd_glob_5, }, {"index.mdx": __fd_glob_6, "adr/0001-record-architecture-decisions.mdx": __fd_glob_7, "adr/0002-better-auth.mdx": __fd_glob_8, "adr/0003-presigned-uploads-rustfs.mdx": __fd_glob_9, "adr/0004-multi-chat.mdx": __fd_glob_10, "adr/0005-document-allowlist.mdx": __fd_glob_11, "adr/0006-redis-protected-mode.mdx": __fd_glob_12, "adr/0007-no-parse-on-upload.mdx": __fd_glob_13, "architecture/api.mdx": __fd_glob_14, "architecture/data-model.mdx": __fd_glob_15, "architecture/overview.mdx": __fd_glob_16, "architecture/security.mdx": __fd_glob_17, "architecture/storage.mdx": __fd_glob_18, "development/conventions.mdx": __fd_glob_19, "development/deploy-docs.mdx": __fd_glob_20, "development/ui.mdx": __fd_glob_21, "guide/docker.mdx": __fd_glob_22, "guide/environment.mdx": __fd_glob_23, "guide/getting-started.mdx": __fd_glob_24, "guide/installation.mdx": __fd_glob_25, "guide/local-development.mdx": __fd_glob_26, "product/auth.mdx": __fd_glob_27, "product/chat.mdx": __fd_glob_28, "product/documents.mdx": __fd_glob_29, "product/features.mdx": __fd_glob_30, "product/settings.mdx": __fd_glob_31, });