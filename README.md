# [友情链接](https://blog.baoshuo.ren/friends/)

## 友链交换须知

1. 友链友链，先友才能后链。<br>
   <sub>如果你和我很熟的话，可以直接忽略下面的内容，把友链信息在私聊里丢给我就好啦~</sub>
2. 原则上只接受博客类型的友链申请。
3. 网站的域名是很重要的，如果你的域名是免费域名的话就请不要来申请友链啦。
   - 免费域名 **包括但不限于** 下述定义：
     - 由 Freenom 公司运营的免费域名后缀，如 `.ml`、`.tk`。
     - 其他不包含在 Public Suffix List 中的 **免费子域名** 服务。
     - 由于下述免费子域名服务拒绝提交至 Public Suffix List，根据第二条的定义将会被拒绝：`oschina.io`、`gitee.io`、`coding.me`、`coding.io`、`coding-pages.com`。
   - 免费域名 **不包括** 下述定义：
     - 向 Freenom 公司付费购买的 `.ml`、`.tk` 等域名
     - 其他任何包含于 [Public Suffix List](https://publicsuffix.org/list/) 的免费子域名服务，如 `github.io`，`gitlab.io`，`now.sh` 等。
4. 原创很重要！博客可以长草，但不要滥竽充数，没有实质性内容的博客是不受欢迎的哦~
5. 会正确使用 Git 和 GitHub 。
6. 最终解释权归宝硕所有。

## 友链交换流程

1. 先添加本站的友链。
   - 名称
     - 中文：`宝硕博客`（或 `宝硕`）
     - English: `Baoshuo's Blog` (or `Baoshuo`)
   - URL
     - `https://blog.baoshuo.ren/?utm_source=friends`
   - Logo
     - Favicon
       - [`32x32`, png](https://cdn.jsdelivr.net/npm/bsi/favicon/32x32.png)
       - [`192x192`, png](https://cdn.jsdelivr.net/npm/bsi/favicon/192x192.png)
       - [`512x512`, png](https://cdn.jsdelivr.net/npm/bsi/favicon/512x512.png)
       - [**svg**](https://cdn.jsdelivr.net/npm/bsi/favicon/favicon.svg)
       - 更多大小及格式请 [点此](https://cdn.jsdelivr.net/npm/bsi/favicon/) 查看。
     - 头像
       - [`36x36`, png](https://cdn.jsdelivr.net/npm/bsi/avatar/36x36.png)
       - [`96x96`, png](https://cdn.jsdelivr.net/npm/bsi/avatar/96x96.png)
       - [`144x144`, png](https://cdn.jsdelivr.net/npm/bsi/avatar/144x144.png)
       - [`192x192`, png](https://cdn.jsdelivr.net/npm/bsi/avatar/192x192.png)
       - [`512x512`, png](https://cdn.jsdelivr.net/npm/bsi/avatar/512x512.png)
       - 更多大小及格式请 [点此](https://cdn.jsdelivr.net/npm/bsi/avatar/) 查看，另有 [带边框版本](https://cdn.jsdelivr.net/npm/bsi/avatar-with-border/)。
     - [Banner](https://cdn.jsdelivr.net/npm/bsi/banner/)
     - 如果你的友链页面没有放 Logo 的地方就可以不用放了哦~
   - Slogan
     - 中文：`学习，就是发现自己越来越菜的过程。`
     - English: `Learning is a process of discovering your own shortcomings.`
2. 准备一个自己站点的 Logo。
   - Logo 的外形应为正方形或圆形
   - 长度与宽度应小于 **`512px`** ，以 `128px` 为佳
   - 使用常见文件格式，如 **`png`（推荐）**、`jpg`、`svg` 等（不包括 `tiff`、`icns`）。
   - 文件大小应小于 **512 KiB** ，以 128 KiB 以内为佳
   - Logo 应符合 Gravater **G 分级** 要求（即适合在任何网站上展示给任何年龄段的任何人）
3. 准备需要展示的站点名称，长度应小于 16 个半角字符或 8 个全角字符，否则在展示时可能会被截断。
   - 站点名称应适合在任何网站上展示给任何年龄段的任何人
4. （可选）准备一条 Slogan，长度建议小于 35 个半角字符或 20 个全角字符，否则在展示时可能会被截断。
   - Slogan 应适合在任何网站上展示给任何年龄段的任何人
5. 在 GitHub 上 Fork 这个仓库。
6. 在 `src/img` 下提交 Logo 文件。
   - 文件名格式为 `[domain].[format]`，如 `example.com.png`，`blog.example.com.jpg`
   - Commit 的标题应为 `Add: [filename] ( [url] )`，如 `Add: example.com.png ( https://example.com )`
7. 修改 `src/links.yml` 文件。
   - 按照如下格式将你的网站信息添加到 `links.yml` 文件的末尾：
     ```yml
     - name: 'Site Name' # 网站名称，请使用双引号包裹
       link: https://example.com # 网站链接
       logo: example.com.png # Logo 的文件名
       slogan: 'Slogan' # Slogan，请使用双引号包裹
     ```
   - Commit 的标题应为 `Add: [sitename] ( [url] )`，如 `Add: example blog ( https://example.com )`
8. 完成上述步骤后，请新建一个 Pull Request。
   - Pull Request 标题应为 `Add: [sitename] ( [url] )`，如 `Add: example blog ( https://example.com )`
9. 当你发起的 Pull Request 被 Review 并被通过、合并后，你的网站将会在 12 个小时内显示在 [友链页面](https://blog.baoshuo.ren/friends/)。

---

<sub>本仓库灵感来源于 <a href="https://github.com/SukkaW/Friends">SukkaW/Friends</a> ，在此表示感谢。</sub><br>
<sub>&copy; 2022 Baoshuo. All rights reserved.</sub>
