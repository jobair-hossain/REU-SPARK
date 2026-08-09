# SPARK website — GitHub Pages

The github-pages folder is a complete static build. It uses relative asset paths, so it works from either a user/organization Pages site or a repository subpath.

## Publish the ready-to-host build

1. Create or open the GitHub repository that will host the SPARK site.
2. Copy the contents of the github-pages folder into the publishing branch or folder selected in Settings → Pages.
3. In Settings → Pages, choose Deploy from a branch, then select that branch and / (root).
4. Keep the .nojekyll file in the published root.

## Rebuild after editing

Run npm install once, then run npm run build:github.

The updated static site will be written to the github-pages folder.

The source website is in app/SparkSite.tsx and app/globals.css. The hosted website should retain the funding-status notice until the program's NSF funding status changes.
