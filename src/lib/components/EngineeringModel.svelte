<script>
  let assembled = $state(false);
</script>
<div class="hero-art" class:is-assembled={assembled} role="group" aria-label="Interactive website engineering illustration">
<div class="art-topline"><span>THE WEB GUY</span><span class="art-marker" aria-hidden="true">⌖</span></div>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 760" fill="none" aria-hidden="true" class="engineering-model">
  <defs>
    <linearGradient id="paper" x1="20" y1="0" x2="470" y2="330" gradientUnits="userSpaceOnUse">
      <stop stop-color="#ffffff"></stop><stop offset="1" stop-color="#f6f2e9"></stop>
    </linearGradient>
    <linearGradient id="underlay" x1="0" y1="0" x2="470" y2="330" gradientUnits="userSpaceOnUse">
      <stop stop-color="#172230" stop-opacity=".65"></stop><stop offset="1" stop-color="#101722" stop-opacity=".16"></stop>
    </linearGradient>
    <linearGradient id="mint" x1="0" y1="0" x2="1" y2="1">
      <stop stop-color="#19E6C8"></stop><stop offset="1" stop-color="#30c795"></stop>
    </linearGradient>
    <linearGradient id="edge" x1="250" y1="100" x2="550" y2="690" gradientUnits="userSpaceOnUse">
      <stop stop-color="#30c795" stop-opacity=".7"></stop><stop offset="1" stop-color="#30c795" stop-opacity="0"></stop>
    </linearGradient>
    <pattern id="fine-grid" width="26" height="26" patternUnits="userSpaceOnUse">
      <path d="M26 0H0V26" stroke="#4f7cff" stroke-opacity=".11" stroke-width=".8"></path>
    </pattern>
    <pattern id="dots" width="28" height="28" patternUnits="userSpaceOnUse">
      <circle cx="1" cy="1" r=".8" fill="#1EBEFF" fill-opacity=".26"></circle>
    </pattern>
    <filter id="shadow" x="-40%" y="-40%" width="180%" height="200%">
      <feGaussianBlur stdDeviation="16"></feGaussianBlur>
    </filter>
    <filter id="small-shadow" x="-30%" y="-30%" width="160%" height="180%">
      <feGaussianBlur stdDeviation="5"></feGaussianBlur>
    </filter>
  </defs>

  <!-- A quiet drafting field around three exploded planes. -->
  <path d="M116 124V669H698" stroke="#30c795" stroke-opacity=".10"></path>
  <path d="M91 257H742M91 497H742M324 84V699M612 84V699" stroke="#30c795" stroke-opacity=".055"></path>
  <path d="M107 124h18m-9-9v18M689 669h18m-9-9v18M603 84h18m-9-9v18" stroke="#30c795" stroke-opacity=".32"></path>
  <circle cx="116" cy="669" r="3" fill="#30c795" fill-opacity=".4"></circle>
  <path d="M186 635 594 730 737 629 310 516Z" fill="#101722" fill-opacity=".24" filter="url(#shadow)"></path>

  <!-- Fine alignment lines deliberately extend beyond the visible planes. -->
  <g stroke="url(#edge)" stroke-width="1" stroke-dasharray="3 7">
    <path d="M250 84V354"></path><path d="M696.5 225V495"></path>
    <path d="M108.1 315V585"></path><path d="M554.6 456V726"></path>
  </g>

  <!-- Lower plane: a complete, inspectable structure. -->
  <g class="model-layer model-layer-wireframe"><g id="layer-wireframe" transform="matrix(.95 .30 -.43 .70 250 328)">
    <rect y="7" width="470" height="330" rx="7" fill="#101722" stroke="#087052" stroke-opacity=".3"></rect>
    <rect width="470" height="330" rx="7" fill="#172230" fill-opacity=".8" stroke="#19E6C8" stroke-opacity=".48"></rect>
    <rect width="470" height="330" rx="7" fill="url(#fine-grid)"></rect>
    <path d="M0 36H470" stroke="#30c795" stroke-opacity=".27"></path>
    <circle cx="18" cy="18" r="3" fill="#30c795" fill-opacity=".7"></circle>
    <circle cx="30" cy="18" r="3" stroke="#30c795" stroke-opacity=".4"></circle>
    <circle cx="42" cy="18" r="3" stroke="#30c795" stroke-opacity=".4"></circle>
    <path d="M26 64H229V207H26ZM251 64H444V207H251ZM26 230H155V299H26ZM171 230H300V299H171ZM316 230H444V299H316Z" stroke="#30c795" stroke-opacity=".38"></path>
    <path d="M26 64 229 207M229 64 26 207M251 64 444 207M444 64 251 207" stroke="#30c795" stroke-opacity=".18"></path>
    <path d="M38 244H113M38 256H137M38 281H81M183 244H270M183 256H282M183 281H226M328 244H414M328 256H427M328 281H371" stroke="#30c795" stroke-opacity=".38" stroke-width="3"></path>
    <path d="M26 64h9m-9 0v9M444 64h-9m9 0v9M26 299h9m-9 0v-9M444 299h-9m9 0v-9" stroke="#f0b84b" stroke-width="2"></path>
  </g>

  </g><!-- Middle plane: the connection between visible interface and implementation. -->
  <g class="model-layer model-layer-code"><g id="layer-code" transform="matrix(.95 .30 -.43 .70 250 218)">
    <rect y="8" width="470" height="330" rx="7" fill="#101722" fill-opacity=".75"></rect>
    <rect width="470" height="330" rx="7" fill="url(#underlay)" stroke="#30c795" stroke-opacity=".7"></rect>
    <rect width="470" height="330" rx="7" fill="url(#dots)"></rect>
    <path d="M0 36H470M54 36V330" stroke="#30c795" stroke-opacity=".2"></path>
    <g fill="#30c795" fill-opacity=".22">
      <rect x="22" y="66" width="13" height="4" rx="2"></rect><rect x="22" y="87" width="13" height="4" rx="2"></rect>
      <rect x="22" y="108" width="13" height="4" rx="2"></rect><rect x="22" y="129" width="13" height="4" rx="2"></rect>
      <rect x="22" y="150" width="13" height="4" rx="2"></rect><rect x="22" y="171" width="13" height="4" rx="2"></rect>
      <rect x="22" y="192" width="13" height="4" rx="2"></rect><rect x="22" y="213" width="13" height="4" rx="2"></rect>
    </g>
    <g stroke-linecap="round" stroke-width="5">
      <path d="M78 68H105M117 68H169" stroke="#f0b84b"></path>
      <path d="M96 89H159M171 89H245M112 110H141M153 110H215M112 131H190" stroke="#30c795" stroke-opacity=".75"></path>
      <path d="M202 131H258M112 152H143" stroke="#f0b84b" stroke-opacity=".85"></path>
      <path d="M155 152H222M96 173H181M78 194H113" stroke="#30c795" stroke-opacity=".75"></path>
      <path d="M78 215H152M164 215H238" stroke="#30c795" stroke-opacity=".28"></path>
    </g>
    <path d="M291 71H415V202H291Z" stroke="#30c795" stroke-opacity=".35"></path>
    <path d="M314 95h78v35h-78zM314 147h78v31h-78z" stroke="#30c795" stroke-opacity=".55"></path>
    <path d="M354 130V147M353 202V268H227M170 268H100V238" stroke="#1EBEFF" stroke-opacity=".65"></path>
    <rect x="170" y="251" width="57" height="34" rx="2" fill="#30c795" fill-opacity=".14" stroke="#30c795" stroke-opacity=".65"></rect>
    <circle cx="100" cy="238" r="4" fill="#f0b84b"></circle>
    <circle cx="353" cy="268" r="4" fill="#30c795"></circle>
    <path d="m188 268 7 7 14-15" stroke="#30c795" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"></path>
    <path d="M24 18H88" stroke="#30c795" stroke-opacity=".6" stroke-width="3"></path>
    <path d="M424 14h20m-20 6h20" stroke="#30c795" stroke-opacity=".5"></path>
  </g>

  </g><!-- Upper plane: the same structure resolved into a finished interface. -->
  <g class="model-layer model-layer-interface"><g id="layer-interface" transform="matrix(.95 .30 -.43 .70 250 100)">
    <rect x="7" y="21" width="470" height="330" rx="7" fill="#101722" fill-opacity=".4" filter="url(#small-shadow)"></rect>
    <path d="M0 9H470V330q0 7-7 7H7q-7 0-7-7Z" fill="#172230"></path>
    <rect width="470" height="330" rx="7" fill="url(#paper)" stroke="#f6f2e9"></rect>
    <path d="M0 37H470" stroke="#111827" stroke-opacity=".14"></path>
    <circle cx="20" cy="19" r="3.5" fill="#111827"></circle>
    <circle cx="33" cy="19" r="3.5" fill="#111827" fill-opacity=".28"></circle>
    <circle cx="46" cy="19" r="3.5" fill="#111827" fill-opacity=".14"></circle>
    <rect x="166" y="12" width="137" height="14" rx="3" fill="#111827" fill-opacity=".06"></rect>
    <path d="M215 19H254" stroke="#111827" stroke-opacity=".3" stroke-width="2"></path>
    <path d="M430 16h12m-12 5h12" stroke="#111827" stroke-opacity=".6"></path>
    <path d="M26 67h18v18H26z" fill="#111827"></path>
    <path d="m30 73 5 7 5-10" stroke="#30c795" stroke-width="2.5"></path>
    <path d="M54 76H111M257 76H282M296 76H321M335 76H360" stroke="#111827" stroke-opacity=".65" stroke-width="4"></path>
    <rect x="385" y="64" width="59" height="24" rx="2" fill="#111827"></rect>
    <path d="M397 76H431" stroke="#30c795" stroke-width="3"></path>

    <g fill="#111827">
      <rect x="27" y="119" width="160" height="12" rx="1"></rect>
      <rect x="27" y="142" width="189" height="12" rx="1"></rect>
      <rect x="27" y="165" width="122" height="12" rx="1"></rect>
    </g>
    <path d="M27 198H195M27 209H185M27 220H152" stroke="#111827" stroke-opacity=".34" stroke-width="3"></path>
    <rect x="27" y="242" width="103" height="29" rx="2" fill="#111827"></rect>
    <path d="M41 257H99m8-3 4 3-4 3" stroke="#30c795" stroke-width="2.5"></path>
    <path d="M146 257H204" stroke="#111827" stroke-opacity=".6" stroke-width="3"></path>

    <!-- A simple sculptural mark; no fictional dashboard or performance data. -->
    <path d="M278 120 421 120 421 263 278 263Z" fill="#f6f2e9"></path>
    <path d="M278 120 421 263M421 120 278 263" stroke="#111827" stroke-opacity=".08"></path>
    <circle cx="349.5" cy="191.5" r="52" fill="#111827"></circle>
    <path d="M350 139.5a52 52 0 0 1 52 52h-52z" fill="#30c795"></path>
    <path d="M350 191.5h-52a52 52 0 0 0 52 52z" fill="#f0b84b"></path>
    <circle cx="350" cy="191.5" r="15" fill="#f6f2e9"></circle>
    <path d="M264 118h-8v8M428 118h8v8M264 265h-8v-8M428 265h8v-8" stroke="#111827" stroke-opacity=".35"></path>
    <path d="M27 300H444" stroke="#111827" stroke-opacity=".14"></path>
    <path d="M27 313H76M122 313H171M217 313H266M312 313H361M407 313H444" stroke="#111827" stroke-opacity=".22" stroke-width="3"></path>
  </g>

  </g><!-- Exterior registration marks make depth and alignment legible. -->
  <g stroke="#19E6C8" stroke-width="1.2">
    <path d="M250 88v24m-12-12h24M696.5 229v24m-12-12h24" stroke-opacity=".8"></path>
    <path d="M108 319v24m-12-12h24M554.5 460v24m-12-12h24" stroke-opacity=".45"></path>
    <path d="M696 494h40v-64" stroke-opacity=".45"></path>
    <path d="M107 580H73v-43" stroke-opacity=".45"></path>
  </g>
  <circle cx="736" cy="420" r="8" fill="#111827" stroke="#30c795" stroke-opacity=".65"></circle>
  <circle cx="736" cy="420" r="2.5" fill="#30c795"></circle>
  <circle cx="73" cy="529" r="8" fill="#111827" stroke="#f0b84b" stroke-opacity=".7"></circle>
  <circle cx="73" cy="529" r="2.5" fill="#f0b84b"></circle>
  <g font-family="ui-monospace, SFMono-Regular, Consolas, monospace" font-size="10" letter-spacing="2" fill="#30c795">
    <text x="244" y="66" fill-opacity=".75">SHIP</text>
    <text x="718" y="399" text-anchor="end" fill-opacity=".6">REVIEW</text>
    <text x="81" y="511" fill-opacity=".65">CODE</text>
    <text x="155" y="702" fill-opacity=".45">SCOPE</text>
  </g>
</svg>
<div class="model-controls"><span class="model-readout">Scope · Code · Review · Ship<br /><b>{assembled ? 'ASSEMBLED VIEW' : 'LAYER VIEW'}</b></span><button type="button" class="model-toggle" aria-pressed={assembled} onclick={() => assembled = !assembled}>{assembled ? 'Explore layers' : 'Assemble view'} <span aria-hidden="true">↗</span></button></div>
</div>
