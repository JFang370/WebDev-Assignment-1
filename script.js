const template = document.createElement('template');

template.innerHTML = `
<header class="header">
<div class="header_content">
  <nav class="nav">
	<li class="nav_item"><a class="logo"></a></li>
	<ul class="nav_list">
	  <li class="nav_item">
		<a class="nav_link" href="../index.html">
		  <span aria-hidden="false"></span>
		  Home
		</a>
	  </li>
	  <li class="nav_item">
		<a class="nav_link" href="jimmy.html">
		  <span aria-hidden="false"></span>
		  Jimmy's Zoo
		</a>
	  </li>
	  <li class="nav_item">
		<a class="nav_link" href="vinson.html">
		  <span aria-hidden="false"></span>
		  Vinson's Zoo
		</a>
	  </li>
	</ul>
  </nav>
</div>
</header>
`;

document.body.appendChild(template.content);