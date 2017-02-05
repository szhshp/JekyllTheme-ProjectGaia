---
layout: post
title: Jekyll Theme - Project Gaia
category : Intro
tags : [intro, tag1, tag2]
stickie: true
---

## Desc

This is a personal blog source code.

The theme name is 'Project Gaia', cuz I have another under building project named 'Project Uranus' o(*￣▽￣*)o 

repo link: [szhielelp/JekyllTheme-ProjectGaia](https://github.com/szhielelp/JekyllTheme-ProjectGaia)

## Post Example

Here is a post example

## Plugins

### SyntaxHighlighter

Realized with this repo: [    syntaxhighlighter/syntaxhighlighter](https://github.com/syntaxhighlighter/syntaxhighlighter)

Usage(include necessary CSS and JS and run **SyntaxHighlighter.all()**):

<pre class="brush: html">
      SyntaxHighlighter.all();
</pre>

Here is code snippet example:

<pre class="brush: html">
    <ul>
      <li class="headerlink">
        <a class="content active">List</a>
        <a class="link inactived">Link</a>
      </li>
    </ul>
</pre>

### awesome-toc

Realized with this repo: [     letiantian/awesome-toc  ](https://github.com/letiantian/awesome-toc)

Auto-run when page loaded.

### md-post-header-collapse

Realized with this repo: [    szhielelp/md-post-header-collapse  ](https://github.com/szhielelp/md-post-header-collapse)

Run **$.headerCollapseRobot()** after post loaded.

<pre class="brush: js">
    /*header collapsible*/
    $.headerCollapseRobot(
      arr_Id_CollapseEnds =  new Array("end"),                       
      arr_Collapsible_Tag = new Array("H1","H2","H3"),                       
      arr_ExcludeElemPrefix_InCollapsible  = new Array("comment-"),      
      arr_ExcludeElemPrefix_InCollapsing = new Array("sidebar-toc-Ik4D-")
    )
</pre>

You can try clicking on the icons near titles.

### Stickie Post

Just put a attribute in header of the specific post:

 <pre class="brush: html; highlight: [5]">
layout: post
title: lalalalala
category : Comic
tags : [Comic, 10101]
stickie: true
</pre>

Then current post will show ahead of other posts.