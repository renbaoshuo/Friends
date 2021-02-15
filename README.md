# [友情链接](https://blog.baoshuo.ren/friends/)

## 友链交换须知

1. 友链友链，先友才能后链。
1. 网站的域名是很重要的，如果你的域名是免费域名的话就请不要来申请友链啦。
   + 免费域名 **包括但不限于** 下述定义：
     + 由 Freenom 公司运营的免费域名后缀，如 `.ml`、`.tk`
     + 其他不包含在 Public Suffix List 中的 **免费子域名** 服务
     + 由于下述免费子域名服务拒绝提交至 Public Suffix List，根据第二条的定义将会被拒绝：`oschina.io`、`gitee.io`、`coding.me`、`coding.io`、`coding-pages.com`
   + 免费域名 **不包括** 下述定义：
     + 向 Freenom 公司付费购买的 `.ml`、`.tk` 等域名
     + 其他任何包含于 [Public Suffix List](https://publicsuffix.org/list/) 的免费子域名服务，如 `github.io`，`gitlab.io`，`now.sh` 等
1. 原创很重要！博客可以长草，但不要滥竽充数
1. 会正确使用 Git 和 GitHub

## 友链交换流程

1. 先添加本站的友链
   + 站点名称
     + `宝硕博客`
     + `Baoshuo's Blog`
   + URL
     + `https://blog.baoshuo.ren/?utm_source=friends`
   + Logo
     + Favicon
       + [`32x32`, png](https://cdn.jsdelivr.net/npm/bsi@0.0.1/favicon/32x32.png)
       + [`192x192`, png](https://cdn.jsdelivr.net/npm/bsi@0.0.1/favicon/128x128.png)
       + [`512x512`, png](https://cdn.jsdelivr.net/npm/bsi@0.0.1/favicon/512x512.png)
       + [**svg**](https://cdn.jsdelivr.net/npm/bsi@0.0.1/favicon/favicon.svg)
       + 更多大小及格式请 [点此](https://cdn.jsdelivr.net/npm/bsi@0.0.1/favicon/) 查看
     + 头像
       + [`36x36`, png](https://cdn.jsdelivr.net/npm/bsi@0.0.1/avatar/36x36.png)
       + [`96x96`, png](https://cdn.jsdelivr.net/npm/bsi@0.0.1/avatar/96x96.png)
       + [`144x144`, png](https://cdn.jsdelivr.net/npm/bsi@0.0.1/avatar/144x144.png)
       + [`192x192`, png](https://cdn.jsdelivr.net/npm/bsi@0.0.1/avatar/192x192.png)
       + [`512x512`, png](https://cdn.jsdelivr.net/npm/bsi@0.0.1/avatar/512x512.png)
       + 更多大小及格式请 [点此](https://cdn.jsdelivr.net/npm/bsi@0.0.1/avatar/) 查看
     + 如果你的友链页面没有放 Logo 的地方就可以不用放了哦
   + Slogan
     + `学习，就是发现自己越来越菜的过程。`
     + `Learning is a process of discovering your own shortcomings.`
1. 准备一个自己站点的 Logo
   + Logo 的外形应为正方形或圆形
   + 长度与宽度应小于 **`512px`** ，以 `128px` 为佳
   + 使用常见文件格式，如 **`png`（推荐）**、`jpg`、`svg` 等（不包括 `tiff`、`webp`、`icns`）。
   + 文件大小应小于 **512 KiB** ，以 128 KiB 以内为佳
   + Logo 应符合 Gravater **G 分级** 要求（即适合在任何网站上展示给任何年龄段的任何人）
1. 准备需要展示的站点名称，长度应小于 16 个半角字符或 8 个全角字符，否则在展示时可能会被截断
   + 站点名称应适合在任何网站上展示给任何年龄段的任何人
1. （可选）准备一条 Slogan，长度建议小于 35 个半角字符或 20 个全角字符，否则在展示时可能会被截断
   + Slogan 应适合在任何网站上展示给任何年龄段的任何人
1. 在 GitHub 上 Fork 这个仓库
1. 在 `src/img` 下提交 Logo
   + 文件名格式为 `[domain].[format]`，如 `example.com.png`，`blog.example.com.jpg`
   + Commit 的标题应为 `Add: [filename] ( [url] )`，如 `Add: example.com.png ( https://example.com )`
1. 修改 `src/links.yml` 文件。
   + 按照如下格式将你的网站信息添加到 `links.yml` 文件的末尾：
     ```yml
     - name: "Site Name"          # 网站名称，请使用双引号包裹
       link: https://example.com  # 网站链接
       logo: example.com.png      # Logo 的文件名
       slogan: "Slogan"           # Slogan，请使用双引号包裹
     ```
   + Commit 的标题应为 `Add: [sitename] ( [url] )`，如 `Add: example blog ( https://example.com )`
1. 完成上述步骤后，请新建一个 Pull Request。
   + Pull Request 标题应为 `Add: [sitename] ( [url] )`，如 `Add: example blog ( https://example.com )`
1. 当你发起的 Pull Request 被 Review 并被通过、合并后，你的网站将会在 12 个小时内显示在 [友链页面](https://blog.baoshuo.ren/friends/)。
