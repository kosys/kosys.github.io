---
layout: page
category: info
---

<h2>記事一覧</h2>

<ul class="post-list">
  {% assign pages = site.pages | where: 'category', 'info' %}
  {% for p in pages %}
    {% if page.url != p.url %}
    <li>
      <a class="post-link" href="{{ p.url | prepend: site.baseurl }}">{{ p.title }}</a>
    </li>
    {% endif %}
  {% endfor %}
</ul>
