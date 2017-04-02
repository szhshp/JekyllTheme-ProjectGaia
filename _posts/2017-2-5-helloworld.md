---
layout: post
title: Jekyll Theme - Project Gaia
category : Intro
tags : [intro, tag1, tag2]
stickie: true
---
## Updated History

- April 3nd, 2017
Added new font

- Mar 5th, 2017
Updated style

- Mar 1st, 2017
Updated TOC plugin

- Feb 28th, 2017
Rebuild to include **Bootstrap 4-Alpha** and **JQuery 3**

## Desc

This is a personal blog source code.

The theme name is 'Project Gaia', cuz I have another under building project named 'Project Uranus' o(*￣▽￣*)o 

repo link: [szhielelp/JekyllTheme-ProjectGaia](https://github.com/szhielelp/JekyllTheme-ProjectGaia)

## Post Example

Here is a post example

[Please check the code in Markdown]

## Plugins

### SyntaxHighlighter

Realized with this repo: [    syntaxhighlighter/syntaxhighlighter](https://github.com/syntaxhighlighter/syntaxhighlighter)

Usage(include necessary CSS and JS and run **SyntaxHighlighter.all()**):

<pre class="brush: html">
      SyntaxHighlighter.all();
</pre>

Here is code snippet example:

<pre class="brush: html">
    [please check the post markdown here]
    <ul>
      <li class="headerlink">
        <a class="content active">List</a>
        <a class="link inactived">Link</a>
      </li>
    </ul>
</pre>

### Table of Content

Realized with this repo: [    jgallen23/toc  ](https://github.com/jgallen23/toc)

![](   https://szhielelp.github.io/JekyllTheme-ProjectGaia/demo/X2.png   )

Auto-run when page loaded.

### md-post-header-collapse

Realized with this repo: [    szhielelp/md-post-header-collapse  ](https://github.com/szhielelp/md-post-header-collapse)

Run **$.headerCollapseRobot()** after post loaded.

<pre class="brush: js">
    /*header collapsible example*/
    $.headerCollapseRobot(
      arr_Id_CollapseEnds =  new Array("end"),                       
      arr_Collapsible_Tag = new Array("H1","H2","H3"),                       
      arr_ExcludeElemPrefix_InCollapsible  = new Array("comment-"),      
      arr_ExcludeElemPrefix_InCollapsing = new Array("sidebar-toc-Ik4D-")
    )
</pre>

![](   https://szhielelp.github.io/JekyllTheme-ProjectGaia/demo/X1.png   )

You can try clicking on the icons near titles.

### Stickie Post

Just put a attribute in header of the specific post:

 <pre class="brush: html; highlight: [5]">
layout: post
title: blablablalala
category : Comic
tags : [Comic, 10101]
stickie: true
</pre>

Then current post will show ahead of other posts.