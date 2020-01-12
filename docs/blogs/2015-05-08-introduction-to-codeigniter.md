---

title: Introduction to CodeIgniter
---
Why Should I Use CodeIgniter?

<ul>
  <li> Small footprint</li>
  <li> Very little configuation needed</li>
  <li> No command line</li>
  <li> Simple file structure and syntax(句法)</li>
  <li> Very clear and useful documentation</li>
  <li> Uses the MVC design pattern</li>
</ul>

CodeIgniter URLs

<ul>
  <li> URLs are segment based URIs</li>
  <li> Uniform Resource Identifier</li>
  <li> Index.php/controller/function/extra_params</li>
</ul>

Models

<ul>
  <li> Models are files that get data</li>
  <li> Databases calls, external API calls and RSS Feeds are data sources that models would use</li>
</ul>

Views

<ul>
  <li> Views are HTML template files</li>
  <li> They can either be whole templates or template "partials"</li>
  <li> The user will only see your view files</li>
</ul>

Controllers

<ul>
  <li> Controllers have the business logic of your application</li>
  <li> URLs are mapped to controllers functions</li>
  index.php/hello/world -> applictation/controllers/hello.php (using the world () function)
  <li> Controllers send off requests to models for data, and use it to populate view files</li>
</ul>

Libraries

<ul>
  <li> Libraries are CodeIgniter's way of abstracting classes</li>
  <li> There are many default libraries and many 3rd party libraries</li>
  <li> You are able to create and extend Core CodeIgniter Libraries easily</li>
</ul>

Helpers

<ul>
  <li> Helpers are small files with a set of grouped functions</li>
  <li> They help you with small tasks</li>
  <li> E.g. URL helper - anchor() base_url() et al</li>
  <li> They are seen as part of the core</li>
</ul>

Plugins

<ul>
  <li> Plugins are just like helpers, but they should only really have one function</li>
  <li> They are intended to be created by the CodeIgniter community</li>
</ul>

Autoloading

<ul>
  <li> CodeIgniter provides an easy to use autoloading function</li>
  <li> You can auto load models, libraries, helpers, plugins, config files and language files</li>
  <li> This is NOT PHP5 autoloading</li>
</ul>

Getting involved

<ul>
  <li> Download CodeIgniter</li>
  <li> Extract the files</li>
  <li> Edit our main config file</li>
  <li> Create a controller</li>
  <li> Create a function</li>
  <li> Use view files</li>
</ul>
