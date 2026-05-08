/* BGP BI — gerado por build-data.cjs em 2026-05-08T05:26:14.960Z */
/* Empresa: Grupo DEX | Ano ref: 2026 */
const MONTHS = ["jan","fev","mar","abr","mai","jun","jul","ago","set","out","nov","dez"];
const MONTHS_FULL = ["janeiro","fevereiro","março","abril","maio","junho","julho","agosto","setembro","outubro","novembro","dezembro"];

function fmt(n, opts = {}) {
  const { dec = 2, prefix = "R$", showSign = false } = opts;
  const sign = n < 0 ? "-" : (showSign ? "+" : "");
  const abs = Math.abs(n);
  const parts = abs.toFixed(dec).split(".");
  parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  return `${sign}${prefix}${parts.join(",")}`;
}
function fmtK(n) {
  const abs = Math.abs(n);
  const sign = n < 0 ? "-" : "";
  if (abs >= 1e6) return `${sign}R$${(abs / 1e6).toFixed(2).replace(".", ",")} M`;
  if (abs >= 1e3) return `${sign}R$${(abs / 1e3).toFixed(2).replace(".", ",")} K`;
  return `${sign}R$${abs.toFixed(0)}`;
}
function fmtPct(n, dec = 2) {
  const sign = n > 0 ? "+" : (n < 0 ? "-" : "");
  return `${sign}${Math.abs(n).toFixed(dec).replace(".", ",")}%`;
}

const META = {
  "empresa": {
    "nome_fantasia": "Grupo DEX",
    "razao_social": "Grupo DEX (consolidado de 24 contas)",
    "cnpj": "",
    "cidade": "Multi"
  },
  "fetched_at": "2026-05-08T05:26:14.383Z",
  "ref_year": 2026,
  "counts": {
    "contas_pagar": 0,
    "contas_receber": 0,
    "categorias": 172,
    "departamentos": 0,
    "clientes": 28600
  }
};
const POSICAO_CAIXA = [
  {
    "name": "Saldo realizado YTD",
    "value": -1896539.000000001
  },
  {
    "name": "A receber (futuro)",
    "value": 0
  },
  {
    "name": "A pagar (futuro)",
    "value": 1930122.6699999995
  }
];
const COMPOSICAO_DESPESA = [
  {
    "name": "Dividendos",
    "value": 285332.01,
    "color": "#2dd4bf"
  },
  {
    "name": "Aluguel fixo",
    "value": 183142.84,
    "color": "#22c55e"
  },
  {
    "name": "Empréstimos capital de giro",
    "value": 166228.40000000002,
    "color": "#a78bfa"
  },
  {
    "name": "Compras de Mercadorias",
    "value": 156349.74999999997,
    "color": "#f59e0b"
  },
  {
    "name": "Custo com Serviços de Entrega",
    "value": 145250.16,
    "color": "#ef4444"
  },
  {
    "name": "Vale Refeição",
    "value": 82685.19,
    "color": "#6b7686"
  }
];
const CONTAS = [
  {
    "slug": "boali-shopping-praia-da-costa",
    "label": "BOALI SHOPPING PRAIA DA COSTA",
    "cliente_grupo": "Dex Invest",
    "receita": 0,
    "despesa": 90284.34999999999,
    "count": 74,
    "liquido": -90284.34999999999,
    "margem": 0
  },
  {
    "slug": "bolo-de-rolo-aeroporto-vix",
    "label": "BOLO DE ROLO AEROPORTO VIX",
    "cliente_grupo": "Dex Invest",
    "receita": 0,
    "despesa": 10809.800000000003,
    "count": 9,
    "liquido": -10809.800000000003,
    "margem": 0
  },
  {
    "slug": "bolo-de-rolo-fair-trade-sdu",
    "label": "BOLO DE ROLO FAIR TRADE SDU",
    "cliente_grupo": "Dex Invest",
    "receita": 1208.04,
    "despesa": 313666.01,
    "count": 96,
    "liquido": -312457.97000000003,
    "margem": -25864.86954074369
  },
  {
    "slug": "casa-bauducco-aeroporto-vix",
    "label": "CASA BAUDUCCO AEROPORTO VIX",
    "cliente_grupo": "Dex Invest",
    "receita": 9000,
    "despesa": 88033.81999999999,
    "count": 43,
    "liquido": -79033.81999999999,
    "margem": -878.1535555555555
  },
  {
    "slug": "dominos-aclimacao",
    "label": "DOMINOS ACLIMAÇÃO",
    "cliente_grupo": "Dex Invest",
    "receita": 0,
    "despesa": 38948.39,
    "count": 30,
    "liquido": -38948.39,
    "margem": 0
  },
  {
    "slug": "dominos-aeroporto-guarulhos",
    "label": "DOMINOS AEROPORTO GUARULHOS",
    "cliente_grupo": "Dex Invest",
    "receita": 0,
    "despesa": 126217.83000000002,
    "count": 50,
    "liquido": -126217.83000000002,
    "margem": 0
  },
  {
    "slug": "dominos-campo-belo",
    "label": "DOMINOS CAMPO BELO",
    "cliente_grupo": "Dex Invest",
    "receita": 0,
    "despesa": 48593.7,
    "count": 49,
    "liquido": -48593.7,
    "margem": 0
  },
  {
    "slug": "dominos-gopouva",
    "label": "DOMINOS GOPOUVA",
    "cliente_grupo": "Dex Invest",
    "receita": 0,
    "despesa": 60859.36,
    "count": 41,
    "liquido": -60859.36,
    "margem": 0
  },
  {
    "slug": "dominos-jabaquara",
    "label": "DOMINOS JABAQUARA",
    "cliente_grupo": "Dex Invest",
    "receita": 0,
    "despesa": 65914.80999999998,
    "count": 51,
    "liquido": -65914.80999999998,
    "margem": 0
  },
  {
    "slug": "dominos-jardim-camburi",
    "label": "DOMINOS JARDIM CAMBURI",
    "cliente_grupo": "Dex Invest",
    "receita": 0,
    "despesa": 68342.16,
    "count": 69,
    "liquido": -68342.16,
    "margem": 0
  },
  {
    "slug": "dominos-mandaqui",
    "label": "DOMINOS MANDAQUI",
    "cliente_grupo": "Dex Invest",
    "receita": 0,
    "despesa": 44209.63,
    "count": 36,
    "liquido": -44209.63,
    "margem": 0
  },
  {
    "slug": "dominos-pinheiros",
    "label": "DOMINOS PINHEIROS",
    "cliente_grupo": "Dex Invest",
    "receita": 0,
    "despesa": 67213.98,
    "count": 63,
    "liquido": -67213.98,
    "margem": 0
  },
  {
    "slug": "dominos-praia-do-canto",
    "label": "DOMINOS PRAIA DO CANTO",
    "cliente_grupo": "Dex Invest",
    "receita": 0,
    "despesa": 74345.73,
    "count": 79,
    "liquido": -74345.73,
    "margem": 0
  },
  {
    "slug": "dominos-serra",
    "label": "DOMINOS SERRA",
    "cliente_grupo": "Dex Invest",
    "receita": 0,
    "despesa": 54418.72000000001,
    "count": 58,
    "liquido": -54418.72000000001,
    "margem": 0
  },
  {
    "slug": "dominos-vila-clementino",
    "label": "DOMINOS VILA CLEMENTINO",
    "cliente_grupo": "Dex Invest",
    "receita": 0,
    "despesa": 127426.91999999997,
    "count": 79,
    "liquido": -127426.91999999997,
    "margem": 0
  },
  {
    "slug": "luigi-alegre",
    "label": "LUIGI ALEGRE",
    "cliente_grupo": "Dex Invest",
    "receita": 0,
    "despesa": 9058.41,
    "count": 8,
    "liquido": -9058.41,
    "margem": 0
  },
  {
    "slug": "natuzon-aeroporto-vix",
    "label": "NATUZON AEROPORTO VIX",
    "cliente_grupo": "Dex Invest",
    "receita": 1260.52,
    "despesa": 49887.28999999999,
    "count": 37,
    "liquido": -48626.77,
    "margem": -3857.6754038016056
  },
  {
    "slug": "nobel-zastras-aeroporto-vix",
    "label": "NOBEL & ZASTRAS AEROPORTO VIX",
    "cliente_grupo": "Dex Invest",
    "receita": 0,
    "despesa": 21976.190000000002,
    "count": 14,
    "liquido": -21976.190000000002,
    "margem": 0
  },
  {
    "slug": "oculum-shopping-vila-velha",
    "label": "OCULUM SHOPPING VILA VELHA",
    "cliente_grupo": "Dex Invest",
    "receita": 0,
    "despesa": 223114.07000000004,
    "count": 81,
    "liquido": -223114.07000000004,
    "margem": 0
  },
  {
    "slug": "oculum-shopping-vitoria",
    "label": "OCULUM SHOPPING VITÓRIA",
    "cliente_grupo": "Dex Invest",
    "receita": 0,
    "despesa": 108897.41000000002,
    "count": 76,
    "liquido": -108897.41000000002,
    "margem": 0
  },
  {
    "slug": "optcalia-niteroi",
    "label": "OPTCÁLIA NITERÓI",
    "cliente_grupo": "Dex Invest",
    "receita": 0,
    "despesa": 34487.63,
    "count": 41,
    "liquido": -34487.63,
    "margem": 0
  },
  {
    "slug": "optcalia-shopping-praia-da-costa",
    "label": "OPTCÁLIA SHOPPING PRAIA DA COSTA",
    "cliente_grupo": "Dex Invest",
    "receita": 0,
    "despesa": 60989.31,
    "count": 83,
    "liquido": -60989.31,
    "margem": 0
  },
  {
    "slug": "optcalia-shopping-vitoria",
    "label": "OPTCÁLIA SHOPPING VITÓRIA",
    "cliente_grupo": "Dex Invest",
    "receita": 0,
    "despesa": 29066.07,
    "count": 55,
    "liquido": -29066.07,
    "margem": 0
  },
  {
    "slug": "spoleto-jabaquara",
    "label": "SPOLETO JABAQUARA",
    "cliente_grupo": "Dex Invest",
    "receita": 0,
    "despesa": 91245.97,
    "count": 79,
    "liquido": -91245.97,
    "margem": 0
  }
];
const MONTH_DRE = [
  {
    "m": "janeiro",
    "receita": 0,
    "custo": 0,
    "despesa": 4657.8,
    "imposto": 0,
    "outros": 0,
    "liquido": -4657.8,
    "count": 1
  },
  {
    "m": "fevereiro",
    "receita": 0,
    "custo": 0,
    "despesa": 0,
    "imposto": 0,
    "outros": 0,
    "liquido": 0,
    "count": 0
  },
  {
    "m": "março",
    "receita": 0,
    "custo": 805.5,
    "despesa": 525,
    "imposto": 0,
    "outros": 1000,
    "liquido": -1330.5,
    "count": 3
  },
  {
    "m": "abril",
    "receita": 11468.560000000001,
    "custo": 345155.33,
    "despesa": 759270.0499999995,
    "imposto": 59546.15999999998,
    "outros": 80846.04,
    "liquido": -1152502.9799999995,
    "count": 1011
  },
  {
    "m": "maio",
    "receita": 0,
    "custo": 73941.51000000001,
    "despesa": 410194.23,
    "imposto": 998.26,
    "outros": 171067.68000000002,
    "liquido": -485134,
    "count": 286
  },
  {
    "m": "junho",
    "receita": 0,
    "custo": 0,
    "despesa": 0,
    "imposto": 0,
    "outros": 0,
    "liquido": 0,
    "count": 0
  },
  {
    "m": "julho",
    "receita": 0,
    "custo": 0,
    "despesa": 0,
    "imposto": 0,
    "outros": 0,
    "liquido": 0,
    "count": 0
  },
  {
    "m": "agosto",
    "receita": 0,
    "custo": 0,
    "despesa": 0,
    "imposto": 0,
    "outros": 0,
    "liquido": 0,
    "count": 0
  },
  {
    "m": "setembro",
    "receita": 0,
    "custo": 0,
    "despesa": 0,
    "imposto": 0,
    "outros": 0,
    "liquido": 0,
    "count": 0
  },
  {
    "m": "outubro",
    "receita": 0,
    "custo": 0,
    "despesa": 0,
    "imposto": 0,
    "outros": 0,
    "liquido": 0,
    "count": 0
  },
  {
    "m": "novembro",
    "receita": 0,
    "custo": 0,
    "despesa": 0,
    "imposto": 0,
    "outros": 0,
    "liquido": 0,
    "count": 0
  },
  {
    "m": "dezembro",
    "receita": 0,
    "custo": 0,
    "despesa": 0,
    "imposto": 0,
    "outros": 0,
    "liquido": 0,
    "count": 0
  }
];
const ORCAMENTO = {
  "receita_mes": 11468.560000000001,
  "custo_mes": 104975.585,
  "despesa_mes": 293661.7699999999,
  "imposto_mes": 15136.104999999996,
  "meses_ativos": 4,
  "melhor_mes_idx": 3,
  "liquido_mes": -402304.8999999999,
  "receita_ano": 137622.72000000003,
  "custo_ano": 1259707.02,
  "despesa_ano": 3523941.239999999,
  "imposto_ano": 181633.25999999995,
  "liquido_ano": -4827658.799999999
};
const DRE_BY_CONTA = {"natuzon-aeroporto-vix":{"label":"NATUZON AEROPORTO VIX","MONTH_DRE":[{"m":"janeiro","receita":0,"custo":0,"despesa":0,"imposto":0,"outros":0,"liquido":0,"count":0},{"m":"fevereiro","receita":0,"custo":0,"despesa":0,"imposto":0,"outros":0,"liquido":0,"count":0},{"m":"março","receita":0,"custo":0,"despesa":0,"imposto":0,"outros":0,"liquido":0,"count":0},{"m":"abril","receita":1260.52,"custo":20091.390000000003,"despesa":21742.06,"imposto":8053.84,"outros":0,"liquido":-48626.770000000004,"count":37},{"m":"maio","receita":0,"custo":0,"despesa":0,"imposto":0,"outros":0,"liquido":0,"count":0},{"m":"junho","receita":0,"custo":0,"despesa":0,"imposto":0,"outros":0,"liquido":0,"count":0},{"m":"julho","receita":0,"custo":0,"despesa":0,"imposto":0,"outros":0,"liquido":0,"count":0},{"m":"agosto","receita":0,"custo":0,"despesa":0,"imposto":0,"outros":0,"liquido":0,"count":0},{"m":"setembro","receita":0,"custo":0,"despesa":0,"imposto":0,"outros":0,"liquido":0,"count":0},{"m":"outubro","receita":0,"custo":0,"despesa":0,"imposto":0,"outros":0,"liquido":0,"count":0},{"m":"novembro","receita":0,"custo":0,"despesa":0,"imposto":0,"outros":0,"liquido":0,"count":0},{"m":"dezembro","receita":0,"custo":0,"despesa":0,"imposto":0,"outros":0,"liquido":0,"count":0}],"ORCAMENTO":{"receita_mes":1260.52,"custo_mes":20091.390000000003,"despesa_mes":21742.06,"imposto_mes":8053.84,"meses_ativos":1,"melhor_mes_idx":3,"liquido_mes":-48626.770000000004,"receita_ano":15126.24,"custo_ano":241096.68000000005,"despesa_ano":260904.72000000003,"imposto_ano":96646.08,"liquido_ano":-583521.24}},"casa-bauducco-aeroporto-vix":{"label":"CASA BAUDUCCO AEROPORTO VIX","MONTH_DRE":[{"m":"janeiro","receita":0,"custo":0,"despesa":0,"imposto":0,"outros":0,"liquido":0,"count":0},{"m":"fevereiro","receita":0,"custo":0,"despesa":0,"imposto":0,"outros":0,"liquido":0,"count":0},{"m":"março","receita":0,"custo":0,"despesa":0,"imposto":0,"outros":0,"liquido":0,"count":0},{"m":"abril","receita":9000,"custo":39059.740000000005,"despesa":30898.21,"imposto":18075.870000000003,"outros":0,"liquido":-79033.82,"count":43},{"m":"maio","receita":0,"custo":0,"despesa":0,"imposto":0,"outros":0,"liquido":0,"count":0},{"m":"junho","receita":0,"custo":0,"despesa":0,"imposto":0,"outros":0,"liquido":0,"count":0},{"m":"julho","receita":0,"custo":0,"despesa":0,"imposto":0,"outros":0,"liquido":0,"count":0},{"m":"agosto","receita":0,"custo":0,"despesa":0,"imposto":0,"outros":0,"liquido":0,"count":0},{"m":"setembro","receita":0,"custo":0,"despesa":0,"imposto":0,"outros":0,"liquido":0,"count":0},{"m":"outubro","receita":0,"custo":0,"despesa":0,"imposto":0,"outros":0,"liquido":0,"count":0},{"m":"novembro","receita":0,"custo":0,"despesa":0,"imposto":0,"outros":0,"liquido":0,"count":0},{"m":"dezembro","receita":0,"custo":0,"despesa":0,"imposto":0,"outros":0,"liquido":0,"count":0}],"ORCAMENTO":{"receita_mes":9000,"custo_mes":39059.740000000005,"despesa_mes":30898.21,"imposto_mes":18075.870000000003,"meses_ativos":1,"melhor_mes_idx":3,"liquido_mes":-79033.82,"receita_ano":108000,"custo_ano":468716.88000000006,"despesa_ano":370778.52,"imposto_ano":216910.44000000003,"liquido_ano":-948405.8400000001}},"bolo-de-rolo-fair-trade-sdu":{"label":"BOLO DE ROLO FAIR TRADE SDU","MONTH_DRE":[{"m":"janeiro","receita":0,"custo":0,"despesa":0,"imposto":0,"outros":0,"liquido":0,"count":0},{"m":"fevereiro","receita":0,"custo":0,"despesa":0,"imposto":0,"outros":0,"liquido":0,"count":0},{"m":"março","receita":0,"custo":0,"despesa":0,"imposto":0,"outros":0,"liquido":0,"count":0},{"m":"abril","receita":1208.04,"custo":27630.199999999997,"despesa":24014.31,"imposto":7914.85,"outros":40188.700000000004,"liquido":-58351.31999999999,"count":67},{"m":"maio","receita":0,"custo":8817.489999999998,"despesa":54322.78,"imposto":102.52,"outros":150675.16,"liquido":-63242.78999999999,"count":29},{"m":"junho","receita":0,"custo":0,"despesa":0,"imposto":0,"outros":0,"liquido":0,"count":0},{"m":"julho","receita":0,"custo":0,"despesa":0,"imposto":0,"outros":0,"liquido":0,"count":0},{"m":"agosto","receita":0,"custo":0,"despesa":0,"imposto":0,"outros":0,"liquido":0,"count":0},{"m":"setembro","receita":0,"custo":0,"despesa":0,"imposto":0,"outros":0,"liquido":0,"count":0},{"m":"outubro","receita":0,"custo":0,"despesa":0,"imposto":0,"outros":0,"liquido":0,"count":0},{"m":"novembro","receita":0,"custo":0,"despesa":0,"imposto":0,"outros":0,"liquido":0,"count":0},{"m":"dezembro","receita":0,"custo":0,"despesa":0,"imposto":0,"outros":0,"liquido":0,"count":0}],"ORCAMENTO":{"receita_mes":1208.04,"custo_mes":18223.844999999998,"despesa_mes":39168.545,"imposto_mes":4008.6850000000004,"meses_ativos":2,"melhor_mes_idx":3,"liquido_mes":-60193.034999999996,"receita_ano":14496.48,"custo_ano":218686.13999999996,"despesa_ano":470022.54,"imposto_ano":48104.22,"liquido_ano":-722316.4199999999}},"dominos-aclimacao":{"label":"DOMINOS ACLIMAÇÃO","MONTH_DRE":[{"m":"janeiro","receita":0,"custo":0,"despesa":0,"imposto":0,"outros":0,"liquido":0,"count":0},{"m":"fevereiro","receita":0,"custo":0,"despesa":0,"imposto":0,"outros":0,"liquido":0,"count":0},{"m":"março","receita":0,"custo":0,"despesa":0,"imposto":0,"outros":0,"liquido":0,"count":0},{"m":"abril","receita":0,"custo":14596.18,"despesa":15182.4,"imposto":0,"outros":1000,"liquido":-29778.58,"count":25},{"m":"maio","receita":0,"custo":0,"despesa":8169.8099999999995,"imposto":0,"outros":0,"liquido":-8169.8099999999995,"count":5},{"m":"junho","receita":0,"custo":0,"despesa":0,"imposto":0,"outros":0,"liquido":0,"count":0},{"m":"julho","receita":0,"custo":0,"despesa":0,"imposto":0,"outros":0,"liquido":0,"count":0},{"m":"agosto","receita":0,"custo":0,"despesa":0,"imposto":0,"outros":0,"liquido":0,"count":0},{"m":"setembro","receita":0,"custo":0,"despesa":0,"imposto":0,"outros":0,"liquido":0,"count":0},{"m":"outubro","receita":0,"custo":0,"despesa":0,"imposto":0,"outros":0,"liquido":0,"count":0},{"m":"novembro","receita":0,"custo":0,"despesa":0,"imposto":0,"outros":0,"liquido":0,"count":0},{"m":"dezembro","receita":0,"custo":0,"despesa":0,"imposto":0,"outros":0,"liquido":0,"count":0}],"ORCAMENTO":{"receita_mes":0,"custo_mes":7298.09,"despesa_mes":11676.105,"imposto_mes":0,"meses_ativos":2,"melhor_mes_idx":0,"liquido_mes":-18974.195,"receita_ano":0,"custo_ano":87577.08,"despesa_ano":140113.26,"imposto_ano":0,"liquido_ano":-227690.34}},"bolo-de-rolo-aeroporto-vix":{"label":"BOLO DE ROLO AEROPORTO VIX","MONTH_DRE":[{"m":"janeiro","receita":0,"custo":0,"despesa":0,"imposto":0,"outros":0,"liquido":0,"count":0},{"m":"fevereiro","receita":0,"custo":0,"despesa":0,"imposto":0,"outros":0,"liquido":0,"count":0},{"m":"março","receita":0,"custo":805.5,"despesa":0,"imposto":0,"outros":0,"liquido":-805.5,"count":1},{"m":"abril","receita":0,"custo":10004.300000000003,"despesa":0,"imposto":0,"outros":0,"liquido":-10004.300000000003,"count":8},{"m":"maio","receita":0,"custo":0,"despesa":0,"imposto":0,"outros":0,"liquido":0,"count":0},{"m":"junho","receita":0,"custo":0,"despesa":0,"imposto":0,"outros":0,"liquido":0,"count":0},{"m":"julho","receita":0,"custo":0,"despesa":0,"imposto":0,"outros":0,"liquido":0,"count":0},{"m":"agosto","receita":0,"custo":0,"despesa":0,"imposto":0,"outros":0,"liquido":0,"count":0},{"m":"setembro","receita":0,"custo":0,"despesa":0,"imposto":0,"outros":0,"liquido":0,"count":0},{"m":"outubro","receita":0,"custo":0,"despesa":0,"imposto":0,"outros":0,"liquido":0,"count":0},{"m":"novembro","receita":0,"custo":0,"despesa":0,"imposto":0,"outros":0,"liquido":0,"count":0},{"m":"dezembro","receita":0,"custo":0,"despesa":0,"imposto":0,"outros":0,"liquido":0,"count":0}],"ORCAMENTO":{"receita_mes":0,"custo_mes":5404.9000000000015,"despesa_mes":0,"imposto_mes":0,"meses_ativos":2,"melhor_mes_idx":0,"liquido_mes":-5404.9000000000015,"receita_ano":0,"custo_ano":64858.80000000002,"despesa_ano":0,"imposto_ano":0,"liquido_ano":-64858.80000000002}},"dominos-campo-belo":{"label":"DOMINOS CAMPO BELO","MONTH_DRE":[{"m":"janeiro","receita":0,"custo":0,"despesa":0,"imposto":0,"outros":0,"liquido":0,"count":0},{"m":"fevereiro","receita":0,"custo":0,"despesa":0,"imposto":0,"outros":0,"liquido":0,"count":0},{"m":"março","receita":0,"custo":0,"despesa":0,"imposto":0,"outros":0,"liquido":0,"count":0},{"m":"abril","receita":0,"custo":18650.76,"despesa":17111.770000000004,"imposto":42.59,"outros":3000,"liquido":-35805.12,"count":40},{"m":"maio","receita":0,"custo":1118.82,"despesa":8669.76,"imposto":0,"outros":0,"liquido":-9788.58,"count":9},{"m":"junho","receita":0,"custo":0,"despesa":0,"imposto":0,"outros":0,"liquido":0,"count":0},{"m":"julho","receita":0,"custo":0,"despesa":0,"imposto":0,"outros":0,"liquido":0,"count":0},{"m":"agosto","receita":0,"custo":0,"despesa":0,"imposto":0,"outros":0,"liquido":0,"count":0},{"m":"setembro","receita":0,"custo":0,"despesa":0,"imposto":0,"outros":0,"liquido":0,"count":0},{"m":"outubro","receita":0,"custo":0,"despesa":0,"imposto":0,"outros":0,"liquido":0,"count":0},{"m":"novembro","receita":0,"custo":0,"despesa":0,"imposto":0,"outros":0,"liquido":0,"count":0},{"m":"dezembro","receita":0,"custo":0,"despesa":0,"imposto":0,"outros":0,"liquido":0,"count":0}],"ORCAMENTO":{"receita_mes":0,"custo_mes":9884.789999999999,"despesa_mes":12890.765000000003,"imposto_mes":21.295,"meses_ativos":2,"melhor_mes_idx":0,"liquido_mes":-22796.850000000002,"receita_ano":0,"custo_ano":118617.47999999998,"despesa_ano":154689.18000000005,"imposto_ano":255.54000000000002,"liquido_ano":-273562.2}},"dominos-aeroporto-guarulhos":{"label":"DOMINOS AEROPORTO GUARULHOS","MONTH_DRE":[{"m":"janeiro","receita":0,"custo":0,"despesa":0,"imposto":0,"outros":0,"liquido":0,"count":0},{"m":"fevereiro","receita":0,"custo":0,"despesa":0,"imposto":0,"outros":0,"liquido":0,"count":0},{"m":"março","receita":0,"custo":0,"despesa":0,"imposto":0,"outros":1000,"liquido":0,"count":1},{"m":"abril","receita":0,"custo":2151.48,"despesa":23458.560000000005,"imposto":0,"outros":1000,"liquido":-25610.040000000005,"count":37},{"m":"maio","receita":0,"custo":3205.1499999999996,"despesa":95402.64000000001,"imposto":0,"outros":0,"liquido":-98607.79000000001,"count":12},{"m":"junho","receita":0,"custo":0,"despesa":0,"imposto":0,"outros":0,"liquido":0,"count":0},{"m":"julho","receita":0,"custo":0,"despesa":0,"imposto":0,"outros":0,"liquido":0,"count":0},{"m":"agosto","receita":0,"custo":0,"despesa":0,"imposto":0,"outros":0,"liquido":0,"count":0},{"m":"setembro","receita":0,"custo":0,"despesa":0,"imposto":0,"outros":0,"liquido":0,"count":0},{"m":"outubro","receita":0,"custo":0,"despesa":0,"imposto":0,"outros":0,"liquido":0,"count":0},{"m":"novembro","receita":0,"custo":0,"despesa":0,"imposto":0,"outros":0,"liquido":0,"count":0},{"m":"dezembro","receita":0,"custo":0,"despesa":0,"imposto":0,"outros":0,"liquido":0,"count":0}],"ORCAMENTO":{"receita_mes":0,"custo_mes":1785.543333333333,"despesa_mes":39620.4,"imposto_mes":0,"meses_ativos":3,"melhor_mes_idx":0,"liquido_mes":-41405.943333333336,"receita_ano":0,"custo_ano":21426.519999999997,"despesa_ano":475444.80000000005,"imposto_ano":0,"liquido_ano":-496871.32000000007}},"dominos-mandaqui":{"label":"DOMINOS MANDAQUI","MONTH_DRE":[{"m":"janeiro","receita":0,"custo":0,"despesa":0,"imposto":0,"outros":0,"liquido":0,"count":0},{"m":"fevereiro","receita":0,"custo":0,"despesa":0,"imposto":0,"outros":0,"liquido":0,"count":0},{"m":"março","receita":0,"custo":0,"despesa":0,"imposto":0,"outros":0,"liquido":0,"count":0},{"m":"abril","receita":0,"custo":15988.71,"despesa":17230.28,"imposto":0,"outros":3000,"liquido":-33218.99,"count":28},{"m":"maio","receita":0,"custo":0,"despesa":7990.64,"imposto":0,"outros":0,"liquido":-7990.64,"count":8},{"m":"junho","receita":0,"custo":0,"despesa":0,"imposto":0,"outros":0,"liquido":0,"count":0},{"m":"julho","receita":0,"custo":0,"despesa":0,"imposto":0,"outros":0,"liquido":0,"count":0},{"m":"agosto","receita":0,"custo":0,"despesa":0,"imposto":0,"outros":0,"liquido":0,"count":0},{"m":"setembro","receita":0,"custo":0,"despesa":0,"imposto":0,"outros":0,"liquido":0,"count":0},{"m":"outubro","receita":0,"custo":0,"despesa":0,"imposto":0,"outros":0,"liquido":0,"count":0},{"m":"novembro","receita":0,"custo":0,"despesa":0,"imposto":0,"outros":0,"liquido":0,"count":0},{"m":"dezembro","receita":0,"custo":0,"despesa":0,"imposto":0,"outros":0,"liquido":0,"count":0}],"ORCAMENTO":{"receita_mes":0,"custo_mes":7994.355,"despesa_mes":12610.46,"imposto_mes":0,"meses_ativos":2,"melhor_mes_idx":0,"liquido_mes":-20604.815,"receita_ano":0,"custo_ano":95932.26,"despesa_ano":151325.52,"imposto_ano":0,"liquido_ano":-247257.77999999997}},"optcalia-shopping-praia-da-costa":{"label":"OPTCÁLIA SHOPPING PRAIA DA COSTA","MONTH_DRE":[{"m":"janeiro","receita":0,"custo":0,"despesa":0,"imposto":0,"outros":0,"liquido":0,"count":0},{"m":"fevereiro","receita":0,"custo":0,"despesa":0,"imposto":0,"outros":0,"liquido":0,"count":0},{"m":"março","receita":0,"custo":0,"despesa":0,"imposto":0,"outros":0,"liquido":0,"count":0},{"m":"abril","receita":0,"custo":1731.7600000000002,"despesa":41991.240000000005,"imposto":0,"outros":3395.6099999999997,"liquido":-43723.00000000001,"count":59},{"m":"maio","receita":0,"custo":938.7,"despesa":11837.22,"imposto":0,"outros":1094.78,"liquido":-12775.92,"count":24},{"m":"junho","receita":0,"custo":0,"despesa":0,"imposto":0,"outros":0,"liquido":0,"count":0},{"m":"julho","receita":0,"custo":0,"despesa":0,"imposto":0,"outros":0,"liquido":0,"count":0},{"m":"agosto","receita":0,"custo":0,"despesa":0,"imposto":0,"outros":0,"liquido":0,"count":0},{"m":"setembro","receita":0,"custo":0,"despesa":0,"imposto":0,"outros":0,"liquido":0,"count":0},{"m":"outubro","receita":0,"custo":0,"despesa":0,"imposto":0,"outros":0,"liquido":0,"count":0},{"m":"novembro","receita":0,"custo":0,"despesa":0,"imposto":0,"outros":0,"liquido":0,"count":0},{"m":"dezembro","receita":0,"custo":0,"despesa":0,"imposto":0,"outros":0,"liquido":0,"count":0}],"ORCAMENTO":{"receita_mes":0,"custo_mes":1335.23,"despesa_mes":26914.230000000003,"imposto_mes":0,"meses_ativos":2,"melhor_mes_idx":0,"liquido_mes":-28249.460000000003,"receita_ano":0,"custo_ano":16022.76,"despesa_ano":322970.76,"imposto_ano":0,"liquido_ano":-338993.52}},"dominos-pinheiros":{"label":"DOMINOS PINHEIROS","MONTH_DRE":[{"m":"janeiro","receita":0,"custo":0,"despesa":0,"imposto":0,"outros":0,"liquido":0,"count":0},{"m":"fevereiro","receita":0,"custo":0,"despesa":0,"imposto":0,"outros":0,"liquido":0,"count":0},{"m":"março","receita":0,"custo":0,"despesa":0,"imposto":0,"outros":0,"liquido":0,"count":0},{"m":"abril","receita":0,"custo":17802.84,"despesa":23667.700000000004,"imposto":0,"outros":1000,"liquido":-41470.54000000001,"count":49},{"m":"maio","receita":0,"custo":0,"despesa":24743.44,"imposto":0,"outros":0,"liquido":-24743.44,"count":14},{"m":"junho","receita":0,"custo":0,"despesa":0,"imposto":0,"outros":0,"liquido":0,"count":0},{"m":"julho","receita":0,"custo":0,"despesa":0,"imposto":0,"outros":0,"liquido":0,"count":0},{"m":"agosto","receita":0,"custo":0,"despesa":0,"imposto":0,"outros":0,"liquido":0,"count":0},{"m":"setembro","receita":0,"custo":0,"despesa":0,"imposto":0,"outros":0,"liquido":0,"count":0},{"m":"outubro","receita":0,"custo":0,"despesa":0,"imposto":0,"outros":0,"liquido":0,"count":0},{"m":"novembro","receita":0,"custo":0,"despesa":0,"imposto":0,"outros":0,"liquido":0,"count":0},{"m":"dezembro","receita":0,"custo":0,"despesa":0,"imposto":0,"outros":0,"liquido":0,"count":0}],"ORCAMENTO":{"receita_mes":0,"custo_mes":8901.42,"despesa_mes":24205.57,"imposto_mes":0,"meses_ativos":2,"melhor_mes_idx":0,"liquido_mes":-33106.99,"receita_ano":0,"custo_ano":106817.04000000001,"despesa_ano":290466.83999999997,"imposto_ano":0,"liquido_ano":-397283.88}},"boali-shopping-praia-da-costa":{"label":"BOALI SHOPPING PRAIA DA COSTA","MONTH_DRE":[{"m":"janeiro","receita":0,"custo":0,"despesa":4657.8,"imposto":0,"outros":0,"liquido":-4657.8,"count":1},{"m":"fevereiro","receita":0,"custo":0,"despesa":0,"imposto":0,"outros":0,"liquido":0,"count":0},{"m":"março","receita":0,"custo":0,"despesa":0,"imposto":0,"outros":0,"liquido":0,"count":0},{"m":"abril","receita":0,"custo":13277.86,"despesa":26258.980000000003,"imposto":11853.52,"outros":3683.7800000000007,"liquido":-51390.36,"count":51},{"m":"maio","receita":0,"custo":6837.86,"despesa":22230.25,"imposto":142.41,"outros":1341.89,"liquido":-29210.52,"count":22},{"m":"junho","receita":0,"custo":0,"despesa":0,"imposto":0,"outros":0,"liquido":0,"count":0},{"m":"julho","receita":0,"custo":0,"despesa":0,"imposto":0,"outros":0,"liquido":0,"count":0},{"m":"agosto","receita":0,"custo":0,"despesa":0,"imposto":0,"outros":0,"liquido":0,"count":0},{"m":"setembro","receita":0,"custo":0,"despesa":0,"imposto":0,"outros":0,"liquido":0,"count":0},{"m":"outubro","receita":0,"custo":0,"despesa":0,"imposto":0,"outros":0,"liquido":0,"count":0},{"m":"novembro","receita":0,"custo":0,"despesa":0,"imposto":0,"outros":0,"liquido":0,"count":0},{"m":"dezembro","receita":0,"custo":0,"despesa":0,"imposto":0,"outros":0,"liquido":0,"count":0}],"ORCAMENTO":{"receita_mes":0,"custo_mes":6705.240000000001,"despesa_mes":17715.676666666666,"imposto_mes":3998.6433333333334,"meses_ativos":3,"melhor_mes_idx":0,"liquido_mes":-28419.56,"receita_ano":0,"custo_ano":80462.88,"despesa_ano":212588.12,"imposto_ano":47983.72,"liquido_ano":-341034.72000000003}},"dominos-jabaquara":{"label":"DOMINOS JABAQUARA","MONTH_DRE":[{"m":"janeiro","receita":0,"custo":0,"despesa":0,"imposto":0,"outros":0,"liquido":0,"count":0},{"m":"fevereiro","receita":0,"custo":0,"despesa":0,"imposto":0,"outros":0,"liquido":0,"count":0},{"m":"março","receita":0,"custo":0,"despesa":0,"imposto":0,"outros":0,"liquido":0,"count":0},{"m":"abril","receita":0,"custo":14745.439999999999,"despesa":32013.249999999996,"imposto":0,"outros":3000,"liquido":-46758.689999999995,"count":38},{"m":"maio","receita":0,"custo":0,"despesa":16156.12,"imposto":0,"outros":0,"liquido":-16156.12,"count":13},{"m":"junho","receita":0,"custo":0,"despesa":0,"imposto":0,"outros":0,"liquido":0,"count":0},{"m":"julho","receita":0,"custo":0,"despesa":0,"imposto":0,"outros":0,"liquido":0,"count":0},{"m":"agosto","receita":0,"custo":0,"despesa":0,"imposto":0,"outros":0,"liquido":0,"count":0},{"m":"setembro","receita":0,"custo":0,"despesa":0,"imposto":0,"outros":0,"liquido":0,"count":0},{"m":"outubro","receita":0,"custo":0,"despesa":0,"imposto":0,"outros":0,"liquido":0,"count":0},{"m":"novembro","receita":0,"custo":0,"despesa":0,"imposto":0,"outros":0,"liquido":0,"count":0},{"m":"dezembro","receita":0,"custo":0,"despesa":0,"imposto":0,"outros":0,"liquido":0,"count":0}],"ORCAMENTO":{"receita_mes":0,"custo_mes":7372.719999999999,"despesa_mes":24084.684999999998,"imposto_mes":0,"meses_ativos":2,"melhor_mes_idx":0,"liquido_mes":-31457.405,"receita_ano":0,"custo_ano":88472.63999999998,"despesa_ano":289016.22,"imposto_ano":0,"liquido_ano":-377488.86}},"dominos-serra":{"label":"DOMINOS SERRA","MONTH_DRE":[{"m":"janeiro","receita":0,"custo":0,"despesa":0,"imposto":0,"outros":0,"liquido":0,"count":0},{"m":"fevereiro","receita":0,"custo":0,"despesa":0,"imposto":0,"outros":0,"liquido":0,"count":0},{"m":"março","receita":0,"custo":0,"despesa":0,"imposto":0,"outros":0,"liquido":0,"count":0},{"m":"abril","receita":0,"custo":5218.610000000001,"despesa":30100.799999999996,"imposto":1701.56,"outros":1000,"liquido":-37020.969999999994,"count":48},{"m":"maio","receita":0,"custo":2618.26,"despesa":13779.49,"imposto":0,"outros":0,"liquido":-16397.75,"count":10},{"m":"junho","receita":0,"custo":0,"despesa":0,"imposto":0,"outros":0,"liquido":0,"count":0},{"m":"julho","receita":0,"custo":0,"despesa":0,"imposto":0,"outros":0,"liquido":0,"count":0},{"m":"agosto","receita":0,"custo":0,"despesa":0,"imposto":0,"outros":0,"liquido":0,"count":0},{"m":"setembro","receita":0,"custo":0,"despesa":0,"imposto":0,"outros":0,"liquido":0,"count":0},{"m":"outubro","receita":0,"custo":0,"despesa":0,"imposto":0,"outros":0,"liquido":0,"count":0},{"m":"novembro","receita":0,"custo":0,"despesa":0,"imposto":0,"outros":0,"liquido":0,"count":0},{"m":"dezembro","receita":0,"custo":0,"despesa":0,"imposto":0,"outros":0,"liquido":0,"count":0}],"ORCAMENTO":{"receita_mes":0,"custo_mes":3918.4350000000004,"despesa_mes":21940.144999999997,"imposto_mes":850.78,"meses_ativos":2,"melhor_mes_idx":0,"liquido_mes":-26709.359999999997,"receita_ano":0,"custo_ano":47021.22,"despesa_ano":263281.74,"imposto_ano":10209.36,"liquido_ano":-320512.31999999995}},"dominos-vila-clementino":{"label":"DOMINOS VILA CLEMENTINO","MONTH_DRE":[{"m":"janeiro","receita":0,"custo":0,"despesa":0,"imposto":0,"outros":0,"liquido":0,"count":0},{"m":"fevereiro","receita":0,"custo":0,"despesa":0,"imposto":0,"outros":0,"liquido":0,"count":0},{"m":"março","receita":0,"custo":0,"despesa":0,"imposto":0,"outros":0,"liquido":0,"count":0},{"m":"abril","receita":0,"custo":28081.199999999993,"despesa":60770.89,"imposto":1391.79,"outros":1000,"liquido":-90243.87999999999,"count":60},{"m":"maio","receita":0,"custo":2106.04,"despesa":34077,"imposto":0,"outros":0,"liquido":-36183.04,"count":19},{"m":"junho","receita":0,"custo":0,"despesa":0,"imposto":0,"outros":0,"liquido":0,"count":0},{"m":"julho","receita":0,"custo":0,"despesa":0,"imposto":0,"outros":0,"liquido":0,"count":0},{"m":"agosto","receita":0,"custo":0,"despesa":0,"imposto":0,"outros":0,"liquido":0,"count":0},{"m":"setembro","receita":0,"custo":0,"despesa":0,"imposto":0,"outros":0,"liquido":0,"count":0},{"m":"outubro","receita":0,"custo":0,"despesa":0,"imposto":0,"outros":0,"liquido":0,"count":0},{"m":"novembro","receita":0,"custo":0,"despesa":0,"imposto":0,"outros":0,"liquido":0,"count":0},{"m":"dezembro","receita":0,"custo":0,"despesa":0,"imposto":0,"outros":0,"liquido":0,"count":0}],"ORCAMENTO":{"receita_mes":0,"custo_mes":15093.619999999997,"despesa_mes":47423.945,"imposto_mes":695.895,"meses_ativos":2,"melhor_mes_idx":0,"liquido_mes":-63213.46,"receita_ano":0,"custo_ano":181123.43999999997,"despesa_ano":569087.34,"imposto_ano":8350.74,"liquido_ano":-758561.52}},"spoleto-jabaquara":{"label":"SPOLETO JABAQUARA","MONTH_DRE":[{"m":"janeiro","receita":0,"custo":0,"despesa":0,"imposto":0,"outros":0,"liquido":0,"count":0},{"m":"fevereiro","receita":0,"custo":0,"despesa":0,"imposto":0,"outros":0,"liquido":0,"count":0},{"m":"março","receita":0,"custo":0,"despesa":0,"imposto":0,"outros":0,"liquido":0,"count":0},{"m":"abril","receita":0,"custo":12754.04,"despesa":27966.870000000003,"imposto":0,"outros":1000,"liquido":-40720.91,"count":53},{"m":"maio","receita":0,"custo":6343.259999999999,"despesa":36928.71,"imposto":223.27,"outros":6029.82,"liquido":-43495.24,"count":26},{"m":"junho","receita":0,"custo":0,"despesa":0,"imposto":0,"outros":0,"liquido":0,"count":0},{"m":"julho","receita":0,"custo":0,"despesa":0,"imposto":0,"outros":0,"liquido":0,"count":0},{"m":"agosto","receita":0,"custo":0,"despesa":0,"imposto":0,"outros":0,"liquido":0,"count":0},{"m":"setembro","receita":0,"custo":0,"despesa":0,"imposto":0,"outros":0,"liquido":0,"count":0},{"m":"outubro","receita":0,"custo":0,"despesa":0,"imposto":0,"outros":0,"liquido":0,"count":0},{"m":"novembro","receita":0,"custo":0,"despesa":0,"imposto":0,"outros":0,"liquido":0,"count":0},{"m":"dezembro","receita":0,"custo":0,"despesa":0,"imposto":0,"outros":0,"liquido":0,"count":0}],"ORCAMENTO":{"receita_mes":0,"custo_mes":9548.65,"despesa_mes":32447.79,"imposto_mes":111.635,"meses_ativos":2,"melhor_mes_idx":0,"liquido_mes":-42108.075,"receita_ano":0,"custo_ano":114583.79999999999,"despesa_ano":389373.48,"imposto_ano":1339.6200000000001,"liquido_ano":-505296.89999999997}},"dominos-gopouva":{"label":"DOMINOS GOPOUVA","MONTH_DRE":[{"m":"janeiro","receita":0,"custo":0,"despesa":0,"imposto":0,"outros":0,"liquido":0,"count":0},{"m":"fevereiro","receita":0,"custo":0,"despesa":0,"imposto":0,"outros":0,"liquido":0,"count":0},{"m":"março","receita":0,"custo":0,"despesa":0,"imposto":0,"outros":0,"liquido":0,"count":0},{"m":"abril","receita":0,"custo":18105.71,"despesa":32330.760000000002,"imposto":0,"outros":3000,"liquido":-50436.47,"count":35},{"m":"maio","receita":0,"custo":549.42,"despesa":6873.469999999999,"imposto":0,"outros":0,"liquido":-7422.889999999999,"count":6},{"m":"junho","receita":0,"custo":0,"despesa":0,"imposto":0,"outros":0,"liquido":0,"count":0},{"m":"julho","receita":0,"custo":0,"despesa":0,"imposto":0,"outros":0,"liquido":0,"count":0},{"m":"agosto","receita":0,"custo":0,"despesa":0,"imposto":0,"outros":0,"liquido":0,"count":0},{"m":"setembro","receita":0,"custo":0,"despesa":0,"imposto":0,"outros":0,"liquido":0,"count":0},{"m":"outubro","receita":0,"custo":0,"despesa":0,"imposto":0,"outros":0,"liquido":0,"count":0},{"m":"novembro","receita":0,"custo":0,"despesa":0,"imposto":0,"outros":0,"liquido":0,"count":0},{"m":"dezembro","receita":0,"custo":0,"despesa":0,"imposto":0,"outros":0,"liquido":0,"count":0}],"ORCAMENTO":{"receita_mes":0,"custo_mes":9327.564999999999,"despesa_mes":19602.115,"imposto_mes":0,"meses_ativos":2,"melhor_mes_idx":0,"liquido_mes":-28929.68,"receita_ano":0,"custo_ano":111930.77999999998,"despesa_ano":235225.38,"imposto_ano":0,"liquido_ano":-347156.16000000003}},"luigi-alegre":{"label":"LUIGI ALEGRE","MONTH_DRE":[{"m":"janeiro","receita":0,"custo":0,"despesa":0,"imposto":0,"outros":0,"liquido":0,"count":0},{"m":"fevereiro","receita":0,"custo":0,"despesa":0,"imposto":0,"outros":0,"liquido":0,"count":0},{"m":"março","receita":0,"custo":0,"despesa":0,"imposto":0,"outros":0,"liquido":0,"count":0},{"m":"abril","receita":0,"custo":0,"despesa":383.22,"imposto":2342.49,"outros":0,"liquido":-2725.71,"count":3},{"m":"maio","receita":0,"custo":4560.67,"despesa":1772.03,"imposto":0,"outros":0,"liquido":-6332.7,"count":5},{"m":"junho","receita":0,"custo":0,"despesa":0,"imposto":0,"outros":0,"liquido":0,"count":0},{"m":"julho","receita":0,"custo":0,"despesa":0,"imposto":0,"outros":0,"liquido":0,"count":0},{"m":"agosto","receita":0,"custo":0,"despesa":0,"imposto":0,"outros":0,"liquido":0,"count":0},{"m":"setembro","receita":0,"custo":0,"despesa":0,"imposto":0,"outros":0,"liquido":0,"count":0},{"m":"outubro","receita":0,"custo":0,"despesa":0,"imposto":0,"outros":0,"liquido":0,"count":0},{"m":"novembro","receita":0,"custo":0,"despesa":0,"imposto":0,"outros":0,"liquido":0,"count":0},{"m":"dezembro","receita":0,"custo":0,"despesa":0,"imposto":0,"outros":0,"liquido":0,"count":0}],"ORCAMENTO":{"receita_mes":0,"custo_mes":2280.335,"despesa_mes":1077.625,"imposto_mes":1171.245,"meses_ativos":2,"melhor_mes_idx":0,"liquido_mes":-4529.205,"receita_ano":0,"custo_ano":27364.02,"despesa_ano":12931.5,"imposto_ano":14054.939999999999,"liquido_ano":-54350.46}},"optcalia-niteroi":{"label":"OPTCÁLIA NITERÓI","MONTH_DRE":[{"m":"janeiro","receita":0,"custo":0,"despesa":0,"imposto":0,"outros":0,"liquido":0,"count":0},{"m":"fevereiro","receita":0,"custo":0,"despesa":0,"imposto":0,"outros":0,"liquido":0,"count":0},{"m":"março","receita":0,"custo":0,"despesa":0,"imposto":0,"outros":0,"liquido":0,"count":0},{"m":"abril","receita":0,"custo":5264.05,"despesa":22365.449999999997,"imposto":1489.06,"outros":0,"liquido":-29118.559999999998,"count":32},{"m":"maio","receita":0,"custo":295.43,"despesa":5073.64,"imposto":0,"outros":0,"liquido":-5369.070000000001,"count":9},{"m":"junho","receita":0,"custo":0,"despesa":0,"imposto":0,"outros":0,"liquido":0,"count":0},{"m":"julho","receita":0,"custo":0,"despesa":0,"imposto":0,"outros":0,"liquido":0,"count":0},{"m":"agosto","receita":0,"custo":0,"despesa":0,"imposto":0,"outros":0,"liquido":0,"count":0},{"m":"setembro","receita":0,"custo":0,"despesa":0,"imposto":0,"outros":0,"liquido":0,"count":0},{"m":"outubro","receita":0,"custo":0,"despesa":0,"imposto":0,"outros":0,"liquido":0,"count":0},{"m":"novembro","receita":0,"custo":0,"despesa":0,"imposto":0,"outros":0,"liquido":0,"count":0},{"m":"dezembro","receita":0,"custo":0,"despesa":0,"imposto":0,"outros":0,"liquido":0,"count":0}],"ORCAMENTO":{"receita_mes":0,"custo_mes":2779.7400000000002,"despesa_mes":13719.544999999998,"imposto_mes":744.53,"meses_ativos":2,"melhor_mes_idx":0,"liquido_mes":-17243.815,"receita_ano":0,"custo_ano":33356.880000000005,"despesa_ano":164634.53999999998,"imposto_ano":8934.36,"liquido_ano":-206925.77999999997}},"oculum-shopping-vitoria":{"label":"OCULUM SHOPPING VITÓRIA","MONTH_DRE":[{"m":"janeiro","receita":0,"custo":0,"despesa":0,"imposto":0,"outros":0,"liquido":0,"count":0},{"m":"fevereiro","receita":0,"custo":0,"despesa":0,"imposto":0,"outros":0,"liquido":0,"count":0},{"m":"março","receita":0,"custo":0,"despesa":0,"imposto":0,"outros":0,"liquido":0,"count":0},{"m":"abril","receita":0,"custo":2159.7599999999998,"despesa":52914.61999999999,"imposto":0,"outros":9377,"liquido":-55074.37999999999,"count":52},{"m":"maio","receita":0,"custo":2657.8999999999996,"despesa":41661.79000000001,"imposto":126.34,"outros":0,"liquido":-44446.030000000006,"count":24},{"m":"junho","receita":0,"custo":0,"despesa":0,"imposto":0,"outros":0,"liquido":0,"count":0},{"m":"julho","receita":0,"custo":0,"despesa":0,"imposto":0,"outros":0,"liquido":0,"count":0},{"m":"agosto","receita":0,"custo":0,"despesa":0,"imposto":0,"outros":0,"liquido":0,"count":0},{"m":"setembro","receita":0,"custo":0,"despesa":0,"imposto":0,"outros":0,"liquido":0,"count":0},{"m":"outubro","receita":0,"custo":0,"despesa":0,"imposto":0,"outros":0,"liquido":0,"count":0},{"m":"novembro","receita":0,"custo":0,"despesa":0,"imposto":0,"outros":0,"liquido":0,"count":0},{"m":"dezembro","receita":0,"custo":0,"despesa":0,"imposto":0,"outros":0,"liquido":0,"count":0}],"ORCAMENTO":{"receita_mes":0,"custo_mes":2408.83,"despesa_mes":47288.205,"imposto_mes":63.17,"meses_ativos":2,"melhor_mes_idx":0,"liquido_mes":-49760.205,"receita_ano":0,"custo_ano":28905.96,"despesa_ano":567458.46,"imposto_ano":758.04,"liquido_ano":-597122.46}},"nobel-zastras-aeroporto-vix":{"label":"NOBEL & ZASTRAS AEROPORTO VIX","MONTH_DRE":[{"m":"janeiro","receita":0,"custo":0,"despesa":0,"imposto":0,"outros":0,"liquido":0,"count":0},{"m":"fevereiro","receita":0,"custo":0,"despesa":0,"imposto":0,"outros":0,"liquido":0,"count":0},{"m":"março","receita":0,"custo":0,"despesa":0,"imposto":0,"outros":0,"liquido":0,"count":0},{"m":"abril","receita":0,"custo":4064.5999999999995,"despesa":14689.710000000001,"imposto":3221.8799999999997,"outros":0,"liquido":-21976.190000000002,"count":14},{"m":"maio","receita":0,"custo":0,"despesa":0,"imposto":0,"outros":0,"liquido":0,"count":0},{"m":"junho","receita":0,"custo":0,"despesa":0,"imposto":0,"outros":0,"liquido":0,"count":0},{"m":"julho","receita":0,"custo":0,"despesa":0,"imposto":0,"outros":0,"liquido":0,"count":0},{"m":"agosto","receita":0,"custo":0,"despesa":0,"imposto":0,"outros":0,"liquido":0,"count":0},{"m":"setembro","receita":0,"custo":0,"despesa":0,"imposto":0,"outros":0,"liquido":0,"count":0},{"m":"outubro","receita":0,"custo":0,"despesa":0,"imposto":0,"outros":0,"liquido":0,"count":0},{"m":"novembro","receita":0,"custo":0,"despesa":0,"imposto":0,"outros":0,"liquido":0,"count":0},{"m":"dezembro","receita":0,"custo":0,"despesa":0,"imposto":0,"outros":0,"liquido":0,"count":0}],"ORCAMENTO":{"receita_mes":0,"custo_mes":4064.5999999999995,"despesa_mes":14689.710000000001,"imposto_mes":3221.8799999999997,"meses_ativos":1,"melhor_mes_idx":0,"liquido_mes":-21976.190000000002,"receita_ano":0,"custo_ano":48775.2,"despesa_ano":176276.52000000002,"imposto_ano":38662.56,"liquido_ano":-263714.28}},"oculum-shopping-vila-velha":{"label":"OCULUM SHOPPING VILA VELHA","MONTH_DRE":[{"m":"janeiro","receita":0,"custo":0,"despesa":0,"imposto":0,"outros":0,"liquido":0,"count":0},{"m":"fevereiro","receita":0,"custo":0,"despesa":0,"imposto":0,"outros":0,"liquido":0,"count":0},{"m":"março","receita":0,"custo":0,"despesa":0,"imposto":0,"outros":0,"liquido":0,"count":0},{"m":"abril","receita":0,"custo":53861.94,"despesa":148849.57,"imposto":0,"outros":4200.95,"liquido":-202711.51,"count":66},{"m":"maio","receita":0,"custo":1230.4,"despesa":2641.46,"imposto":403.72,"outros":11926.029999999999,"liquido":-4275.58,"count":15},{"m":"junho","receita":0,"custo":0,"despesa":0,"imposto":0,"outros":0,"liquido":0,"count":0},{"m":"julho","receita":0,"custo":0,"despesa":0,"imposto":0,"outros":0,"liquido":0,"count":0},{"m":"agosto","receita":0,"custo":0,"despesa":0,"imposto":0,"outros":0,"liquido":0,"count":0},{"m":"setembro","receita":0,"custo":0,"despesa":0,"imposto":0,"outros":0,"liquido":0,"count":0},{"m":"outubro","receita":0,"custo":0,"despesa":0,"imposto":0,"outros":0,"liquido":0,"count":0},{"m":"novembro","receita":0,"custo":0,"despesa":0,"imposto":0,"outros":0,"liquido":0,"count":0},{"m":"dezembro","receita":0,"custo":0,"despesa":0,"imposto":0,"outros":0,"liquido":0,"count":0}],"ORCAMENTO":{"receita_mes":0,"custo_mes":27546.170000000002,"despesa_mes":75745.515,"imposto_mes":201.86,"meses_ativos":2,"melhor_mes_idx":0,"liquido_mes":-103493.545,"receita_ano":0,"custo_ano":330554.04000000004,"despesa_ano":908946.1799999999,"imposto_ano":2422.32,"liquido_ano":-1241922.54}},"dominos-jardim-camburi":{"label":"DOMINOS JARDIM CAMBURI","MONTH_DRE":[{"m":"janeiro","receita":0,"custo":0,"despesa":0,"imposto":0,"outros":0,"liquido":0,"count":0},{"m":"fevereiro","receita":0,"custo":0,"despesa":0,"imposto":0,"outros":0,"liquido":0,"count":0},{"m":"março","receita":0,"custo":0,"despesa":0,"imposto":0,"outros":0,"liquido":0,"count":0},{"m":"abril","receita":0,"custo":6443.54,"despesa":37782.54,"imposto":1646.39,"outros":1000,"liquido":-45872.47,"count":60},{"m":"maio","receita":0,"custo":15135.84,"despesa":6333.85,"imposto":0,"outros":0,"liquido":-21469.690000000002,"count":9},{"m":"junho","receita":0,"custo":0,"despesa":0,"imposto":0,"outros":0,"liquido":0,"count":0},{"m":"julho","receita":0,"custo":0,"despesa":0,"imposto":0,"outros":0,"liquido":0,"count":0},{"m":"agosto","receita":0,"custo":0,"despesa":0,"imposto":0,"outros":0,"liquido":0,"count":0},{"m":"setembro","receita":0,"custo":0,"despesa":0,"imposto":0,"outros":0,"liquido":0,"count":0},{"m":"outubro","receita":0,"custo":0,"despesa":0,"imposto":0,"outros":0,"liquido":0,"count":0},{"m":"novembro","receita":0,"custo":0,"despesa":0,"imposto":0,"outros":0,"liquido":0,"count":0},{"m":"dezembro","receita":0,"custo":0,"despesa":0,"imposto":0,"outros":0,"liquido":0,"count":0}],"ORCAMENTO":{"receita_mes":0,"custo_mes":10789.69,"despesa_mes":22058.195,"imposto_mes":823.195,"meses_ativos":2,"melhor_mes_idx":0,"liquido_mes":-33671.08,"receita_ano":0,"custo_ano":129476.28,"despesa_ano":264698.33999999997,"imposto_ano":9878.34,"liquido_ano":-404052.96}},"dominos-praia-do-canto":{"label":"DOMINOS PRAIA DO CANTO","MONTH_DRE":[{"m":"janeiro","receita":0,"custo":0,"despesa":0,"imposto":0,"outros":0,"liquido":0,"count":0},{"m":"fevereiro","receita":0,"custo":0,"despesa":0,"imposto":0,"outros":0,"liquido":0,"count":0},{"m":"março","receita":0,"custo":0,"despesa":525,"imposto":0,"outros":0,"liquido":-525,"count":1},{"m":"abril","receita":0,"custo":8791.220000000001,"despesa":37182.81999999999,"imposto":1812.32,"outros":1000,"liquido":-47786.35999999999,"count":68},{"m":"maio","receita":0,"custo":17020.06,"despesa":8014.3099999999995,"imposto":0,"outros":0,"liquido":-25034.370000000003,"count":10},{"m":"junho","receita":0,"custo":0,"despesa":0,"imposto":0,"outros":0,"liquido":0,"count":0},{"m":"julho","receita":0,"custo":0,"despesa":0,"imposto":0,"outros":0,"liquido":0,"count":0},{"m":"agosto","receita":0,"custo":0,"despesa":0,"imposto":0,"outros":0,"liquido":0,"count":0},{"m":"setembro","receita":0,"custo":0,"despesa":0,"imposto":0,"outros":0,"liquido":0,"count":0},{"m":"outubro","receita":0,"custo":0,"despesa":0,"imposto":0,"outros":0,"liquido":0,"count":0},{"m":"novembro","receita":0,"custo":0,"despesa":0,"imposto":0,"outros":0,"liquido":0,"count":0},{"m":"dezembro","receita":0,"custo":0,"despesa":0,"imposto":0,"outros":0,"liquido":0,"count":0}],"ORCAMENTO":{"receita_mes":0,"custo_mes":8603.76,"despesa_mes":15240.709999999997,"imposto_mes":604.1066666666667,"meses_ativos":3,"melhor_mes_idx":0,"liquido_mes":-24448.576666666664,"receita_ano":0,"custo_ano":103245.12,"despesa_ano":182888.51999999996,"imposto_ano":7249.280000000001,"liquido_ano":-293382.92}},"optcalia-shopping-vitoria":{"label":"OPTCÁLIA SHOPPING VITÓRIA","MONTH_DRE":[{"m":"janeiro","receita":0,"custo":0,"despesa":0,"imposto":0,"outros":0,"liquido":0,"count":0},{"m":"fevereiro","receita":0,"custo":0,"despesa":0,"imposto":0,"outros":0,"liquido":0,"count":0},{"m":"março","receita":0,"custo":0,"despesa":0,"imposto":0,"outros":0,"liquido":0,"count":0},{"m":"abril","receita":0,"custo":4680,"despesa":20364.039999999997,"imposto":0,"outros":0,"liquido":-25044.039999999997,"count":38},{"m":"maio","receita":0,"custo":506.2099999999999,"despesa":3515.8199999999997,"imposto":0,"outros":0,"liquido":-4022.0299999999997,"count":17},{"m":"junho","receita":0,"custo":0,"despesa":0,"imposto":0,"outros":0,"liquido":0,"count":0},{"m":"julho","receita":0,"custo":0,"despesa":0,"imposto":0,"outros":0,"liquido":0,"count":0},{"m":"agosto","receita":0,"custo":0,"despesa":0,"imposto":0,"outros":0,"liquido":0,"count":0},{"m":"setembro","receita":0,"custo":0,"despesa":0,"imposto":0,"outros":0,"liquido":0,"count":0},{"m":"outubro","receita":0,"custo":0,"despesa":0,"imposto":0,"outros":0,"liquido":0,"count":0},{"m":"novembro","receita":0,"custo":0,"despesa":0,"imposto":0,"outros":0,"liquido":0,"count":0},{"m":"dezembro","receita":0,"custo":0,"despesa":0,"imposto":0,"outros":0,"liquido":0,"count":0}],"ORCAMENTO":{"receita_mes":0,"custo_mes":2593.105,"despesa_mes":11939.929999999998,"imposto_mes":0,"meses_ativos":2,"melhor_mes_idx":0,"liquido_mes":-14533.034999999998,"receita_ano":0,"custo_ano":31117.260000000002,"despesa_ano":143279.15999999997,"imposto_ano":0,"liquido_ano":-174396.41999999998}}};

const SEGMENTS = {
  "realizado": {
    "MONTH_DATA": [
      {
        "m": "janeiro",
        "receita": 0,
        "despesa": 4657.8
      },
      {
        "m": "fevereiro",
        "receita": 0,
        "despesa": 0
      },
      {
        "m": "março",
        "receita": 0,
        "despesa": 2330.5
      },
      {
        "m": "abril",
        "receita": 11468.560000000001,
        "despesa": 1244817.580000001
      },
      {
        "m": "maio",
        "receita": 0,
        "despesa": 656201.6799999999
      },
      {
        "m": "junho",
        "receita": 0,
        "despesa": 0
      },
      {
        "m": "julho",
        "receita": 0,
        "despesa": 0
      },
      {
        "m": "agosto",
        "receita": 0,
        "despesa": 0
      },
      {
        "m": "setembro",
        "receita": 0,
        "despesa": 0
      },
      {
        "m": "outubro",
        "receita": 0,
        "despesa": 0
      },
      {
        "m": "novembro",
        "receita": 0,
        "despesa": 0
      },
      {
        "m": "dezembro",
        "receita": 0,
        "despesa": 0
      }
    ],
    "RECEITA_CATEGORIAS": [
      {
        "name": "Receita de Vendas",
        "value": 10994.52,
        "clientes": 2
      },
      {
        "name": "Receitas de Serviços",
        "value": 474,
        "clientes": 1
      },
      {
        "name": "Rendimentos de Aplicações",
        "value": 0.04,
        "clientes": 1
      }
    ],
    "DESPESA_CATEGORIAS": [
      {
        "name": "Dividendos",
        "value": 285332.01,
        "fornecedores": 15
      },
      {
        "name": "Aluguel fixo",
        "value": 183142.84,
        "fornecedores": 10
      },
      {
        "name": "Empréstimos capital de giro",
        "value": 166228.40000000002,
        "fornecedores": 2
      },
      {
        "name": "Compras de Mercadorias",
        "value": 156349.74999999997,
        "fornecedores": 66
      },
      {
        "name": "Custo com Serviços de Entrega",
        "value": 145250.16,
        "fornecedores": 7
      },
      {
        "name": "Vale Refeição",
        "value": 82685.19,
        "fornecedores": 14
      },
      {
        "name": "Adiantamento",
        "value": 75137.76,
        "fornecedores": 93
      },
      {
        "name": "Freelancers",
        "value": 70917.04000000002,
        "fornecedores": 15
      },
      {
        "name": "Salários",
        "value": 66687.97000000002,
        "fornecedores": 45
      },
      {
        "name": "&lt;Disponível&gt;",
        "value": 65379.81,
        "fornecedores": 4
      },
      {
        "name": "Repasses",
        "value": 52926.240000000005,
        "fornecedores": 3
      },
      {
        "name": "Energia Elétrica",
        "value": 40699.75000000001,
        "fornecedores": 4
      }
    ],
    "RECEITA_CLIENTES": [
      {
        "name": "DEPÓSITO EM DINHEIRO",
        "value": 9000
      },
      {
        "name": "REDECARD",
        "value": 2468.56
      }
    ],
    "DESPESA_FORNECEDORES": [
      {
        "name": "REDECARD",
        "value": 171228.25
      },
      {
        "name": "STAR GOLD DELIVERY LTDA",
        "value": 120456.00000000001
      },
      {
        "name": "CAJU",
        "value": 80095.37000000001
      },
      {
        "name": "CONCESSIONARIA DO AEROPORTO INTERNACIONAL DE GUARULHOS S.A.",
        "value": 79905.94
      },
      {
        "name": "AEROPORTOS DO SUDESTE DO BRASIL S.A",
        "value": 69739.03
      },
      {
        "name": "SALÁRIOS À PAGAR",
        "value": 67631.90000000001
      },
      {
        "name": "RECEITA FEDERAL",
        "value": 66476.87000000001
      },
      {
        "name": "OPTICÁLIA PRAIA DA COSTA",
        "value": 59150
      },
      {
        "name": "DEX LUMEN VIX LTDA",
        "value": 53410
      },
      {
        "name": "DANIEL SILVA DE SOUSA",
        "value": 49333.280000000006
      },
      {
        "name": "OPTICAL VIX",
        "value": 49145
      },
      {
        "name": "DOMINOS PRAIA DO CANTO",
        "value": 45000
      }
    ],
    "EXTRATO": [
      [
        "07/05/2026",
        "Operações",
        "Serviços Softwares",
        "GCOM",
        -634.75,
        "PAGO"
      ],
      [
        "07/05/2026",
        "Operações",
        "Serviços Softwares",
        "NEOCOMPANY",
        -106.87,
        "PAGO"
      ],
      [
        "07/05/2026",
        "Operações",
        "Serviços Softwares",
        "GCOM",
        -634.75,
        "PAGO"
      ],
      [
        "07/05/2026",
        "Operações",
        "Segurança",
        "VERISURE BRASIL MONITORAMENTO DE ALARMES S.A",
        -169.92,
        "PAGO"
      ],
      [
        "07/05/2026",
        "Operações",
        "Serviços Softwares",
        "GCOM",
        -822.85,
        "PAGO"
      ],
      [
        "07/05/2026",
        "Operações",
        "Outros Custos com Pessoal",
        "GIRASSOL ESTACIONAMENTO",
        -162.7,
        "PAGO"
      ],
      [
        "07/05/2026",
        "Operações",
        "Serviços Softwares",
        "GCOM",
        -634.75,
        "PAGO"
      ],
      [
        "07/05/2026",
        "Operações",
        "Segurança",
        "VERISURE BRASIL MONITORAMENTO DE ALARMES S.A",
        -269.09,
        "PAGO"
      ],
      [
        "07/05/2026",
        "Operações",
        "Serviços Softwares",
        "GCOM",
        -780.15,
        "PAGO"
      ],
      [
        "07/05/2026",
        "Operações",
        "Serviços Softwares",
        "NEOCOMPANY",
        -239.04,
        "PAGO"
      ],
      [
        "07/05/2026",
        "Operações",
        "Serviços Softwares",
        "GCOM",
        -634.75,
        "PAGO"
      ],
      [
        "07/05/2026",
        "Operações",
        "Segurança",
        "VERISURE BRASIL MONITORAMENTO DE ALARMES S.A",
        -169.04,
        "PAGO"
      ],
      [
        "07/05/2026",
        "Operações",
        "Serviços Softwares",
        "GCOM",
        -634.75,
        "PAGO"
      ],
      [
        "07/05/2026",
        "Operações",
        "Outros Custos com Pessoal",
        "GIRASSOL ESTACIONAMENTO",
        -162.7,
        "PAGO"
      ],
      [
        "07/05/2026",
        "Operações",
        "Serviços Softwares",
        "NEOCOMPANY",
        -106.87,
        "PAGO"
      ],
      [
        "07/05/2026",
        "Operações",
        "Serviços Softwares",
        "GCOM",
        -634.75,
        "PAGO"
      ],
      [
        "07/05/2026",
        "Operações",
        "Segurança",
        "VERISURE BRASIL MONITORAMENTO DE ALARMES S.A",
        -259.91,
        "PAGO"
      ],
      [
        "07/05/2026",
        "Operações",
        "Condomínio",
        "CONDOMINIO DO ED NORTE SUL TOWER",
        -3041.46,
        "PAGO"
      ],
      [
        "07/05/2026",
        "Operações",
        "Serviços Softwares",
        "GCOM",
        -634.75,
        "PAGO"
      ],
      [
        "07/05/2026",
        "Operações",
        "Serviços Softwares",
        "GCOM",
        -634.75,
        "PAGO"
      ],
      [
        "06/05/2026",
        "Operações",
        "Energia Elétrica",
        "ENEL DISTRIBUICAO SAO PAULO",
        -68.4,
        "PAGO"
      ],
      [
        "06/05/2026",
        "Operações",
        "Compras de Mercadorias",
        "27.165.292 ALOISA CORDEIRO DA SILVA",
        -459.9,
        "PAGO"
      ],
      [
        "06/05/2026",
        "Operações",
        "Compras de Mercadorias",
        "Spal Ind. Bras.Bebidas SA",
        -658.92,
        "PAGO"
      ],
      [
        "06/05/2026",
        "Operações",
        "Custo com Serviços de Entrega",
        "WAGNER DA SILVA CORREA",
        -25,
        "PAGO"
      ],
      [
        "06/05/2026",
        "Operações",
        "Tarifas Bancárias",
        "REDECARD",
        -76.42,
        "PAGO"
      ],
      [
        "06/05/2026",
        "Operações",
        "Internet/Telefone",
        "TELEFONICA BRASIL S.A.",
        -102.91,
        "PAGO"
      ],
      [
        "06/05/2026",
        "Operações",
        "Material de escritório",
        "INVESTIMENTOS",
        -310,
        "PAGO"
      ],
      [
        "06/05/2026",
        "Operações",
        "Salários",
        "DANIEL BARROS DURANTE",
        -500,
        "PAGO"
      ],
      [
        "06/05/2026",
        "Operações",
        "Vale Transporte",
        "IFOOD.COM AGENCIA DE RESTAURANTES ONLINE S.A.",
        -428.4,
        "PAGO"
      ],
      [
        "06/05/2026",
        "Operações",
        "Compras de Mercadorias",
        "Fabrica Vitoria",
        -1007.38,
        "PAGO"
      ],
      [
        "06/05/2026",
        "Operações",
        "Energia Elétrica",
        "ENEL DISTRIBUICAO SAO PAULO",
        -4508.59,
        "PAGO"
      ],
      [
        "06/05/2026",
        "Operações",
        "Compras de Mercadorias",
        "SPAL INDUSTRIA BRASILEIRA DE BEBIDAS S/A",
        -1372.03,
        "PAGO"
      ],
      [
        "06/05/2026",
        "Operações",
        "Compras de Mercadorias",
        "SPAL INDUSTRIA BRASILEIRA DE BEBIDAS S/A",
        -68.73,
        "PAGO"
      ],
      [
        "06/05/2026",
        "Operações",
        "Compras de Mercadorias",
        "Spal Ind. Bras.Bebidas SA",
        -960.87,
        "PAGO"
      ],
      [
        "06/05/2026",
        "Operações",
        "Tarifas Bancárias",
        "REDECARD",
        -14.64,
        "PAGO"
      ],
      [
        "06/05/2026",
        "Operações",
        "Instalações",
        "TERCEIRIZADOS À PAGAR",
        -61.6,
        "PAGO"
      ],
      [
        "06/05/2026",
        "Operações",
        "Dividendos",
        "OPTICAL VIX",
        -500,
        "PAGO"
      ],
      [
        "06/05/2026",
        "Operações",
        "Dividendos",
        "OPTICAL VIX",
        -3500,
        "PAGO"
      ],
      [
        "06/05/2026",
        "Operações",
        "Compras de Mercadorias",
        "CD SUMARE (SP)",
        -295.43,
        "PAGO"
      ],
      [
        "06/05/2026",
        "Operações",
        "Custo Serviços Terceirizados",
        "TERCEIRIZADOS À PAGAR",
        -250,
        "PAGO"
      ],
      [
        "06/05/2026",
        "Operações",
        "Compras de Mercadorias",
        "CONGELADOS DELICIA",
        -583.44,
        "PAGO"
      ],
      [
        "06/05/2026",
        "Operações",
        "Compras de Mercadorias",
        "COMERCIAL CASA DOS FRIOS LTDA",
        -2095.73,
        "PAGO"
      ],
      [
        "06/05/2026",
        "Operações",
        "Compras de Mercadorias",
        "RIO DE JANEIRO REFRESCOS LTDA",
        -656.35,
        "PAGO"
      ],
      [
        "06/05/2026",
        "Operações",
        "Compras de Mercadorias",
        "CRESCENTE COMERCIO E GASTRONOMIA LTDA",
        -421.55,
        "PAGO"
      ],
      [
        "06/05/2026",
        "Operações",
        "Juros",
        "REDECARD",
        -200.88,
        "PAGO"
      ],
      [
        "06/05/2026",
        "Operações",
        "Serviços Softwares",
        "VR BENEFICIOS E SERVICOS DE PROCESSAMENTO S.A",
        -121.26,
        "PAGO"
      ],
      [
        "06/05/2026",
        "Operações",
        "Compras de Mercadorias",
        "RFG COMERCIO TRANSPORTES E SERVICOS LTDA",
        -12663.29,
        "PAGO"
      ],
      [
        "06/05/2026",
        "Operações",
        "Compras de Mercadorias",
        "Fabrica Vitoria",
        -1380.1,
        "PAGO"
      ],
      [
        "06/05/2026",
        "Operações",
        "Compras de Mercadorias",
        "RFG COMERCIO TRANSPORTES E SERVICOS LTDA",
        -12800.2,
        "PAGO"
      ],
      [
        "06/05/2026",
        "Operações",
        "Tarifas Bancárias",
        "REDECARD",
        -77.81,
        "PAGO"
      ],
      [
        "06/05/2026",
        "Operações",
        "Vale Refeição",
        "DENISE SILVA SANTOS",
        -430,
        "PAGO"
      ],
      [
        "06/05/2026",
        "Operações",
        "Vale Refeição",
        "SALÁRIOS À PAGAR",
        -459.46,
        "PAGO"
      ],
      [
        "05/05/2026",
        "Operações",
        "Vale Refeição",
        "CAJU",
        -4226.04,
        "PAGO"
      ],
      [
        "05/05/2026",
        "Operações",
        "Vale Refeição",
        "CAJU",
        -5250.32,
        "PAGO"
      ],
      [
        "05/05/2026",
        "Operações",
        "Compras de Mercadorias",
        "Spal Ind. Bras.Bebidas SA",
        -1607.59,
        "PAGO"
      ],
      [
        "05/05/2026",
        "Operações",
        "Internet/Telefone",
        "SITE TELECOM SERVICOS DE INFORMATICA LTDA",
        -585,
        "PAGO"
      ],
      [
        "05/05/2026",
        "Operações",
        "Vale Refeição",
        "CAJU",
        -5007.12,
        "PAGO"
      ],
      [
        "05/05/2026",
        "Operações",
        "Vale Refeição",
        "CAJU",
        -3580.56,
        "PAGO"
      ],
      [
        "05/05/2026",
        "Operações",
        "Segurança",
        "VERISURE BRASIL MONITORAMENTO DE ALARMES S.A",
        -265.33,
        "PAGO"
      ],
      [
        "05/05/2026",
        "Operações",
        "Serviços Softwares",
        "GCOM",
        -622.1,
        "PAGO"
      ],
      [
        "05/05/2026",
        "Operações",
        "Freelancers",
        "SALÁRIOS À PAGAR",
        -770,
        "PAGO"
      ],
      [
        "05/05/2026",
        "Operações",
        "Comissões",
        "BEATRIZ ARAUJO DA SILVA",
        -130.12,
        "PAGO"
      ],
      [
        "05/05/2026",
        "Operações",
        "Vale Refeição",
        "VA E VT À PAGAR",
        -141.4,
        "PAGO"
      ],
      [
        "05/05/2026",
        "Operações",
        "Vale Refeição",
        "BEATRIZ ARAUJO DA SILVA",
        -141.4,
        "PAGO"
      ],
      [
        "05/05/2026",
        "Operações",
        "Freelancers",
        "BEATRIZ ARAUJO DA SILVA",
        -770,
        "PAGO"
      ],
      [
        "05/05/2026",
        "Operações",
        "Vale Refeição",
        "THAMIRYS CORREA PINTO",
        -121.2,
        "PAGO"
      ],
      [
        "05/05/2026",
        "Operações",
        "Vale Refeição",
        "Diego Neri dos Santos",
        -20.2,
        "PAGO"
      ],
      [
        "05/05/2026",
        "Operações",
        "Vale Refeição",
        "LETICIA SILVA E SILVA",
        -181.8,
        "PAGO"
      ],
      [
        "05/05/2026",
        "Operações",
        "Comissões",
        "THAMIRYS CORREA PINTO",
        -324.63,
        "PAGO"
      ],
      [
        "05/05/2026",
        "Operações",
        "Freelancers",
        "THAMIRYS CORREA PINTO",
        -660,
        "PAGO"
      ],
      [
        "05/05/2026",
        "Operações",
        "Freelancers",
        "Diego Neri dos Santos",
        -110,
        "PAGO"
      ],
      [
        "05/05/2026",
        "Operações",
        "Freelancers",
        "LETICIA SILVA E SILVA",
        -990,
        "PAGO"
      ],
      [
        "05/05/2026",
        "Operações",
        "Comissões",
        "LETICIA SILVA E SILVA",
        -458.95,
        "PAGO"
      ],
      [
        "05/05/2026",
        "Operações",
        "Tarifas Bancárias",
        "REDECARD",
        -63.64,
        "PAGO"
      ],
      [
        "05/05/2026",
        "Operações",
        "Vale Refeição",
        "CAJU",
        -5479.26,
        "PAGO"
      ],
      [
        "05/05/2026",
        "Operações",
        "Vale Refeição",
        "IFOOD.COM AGENCIA DE RESTAURANTES ONLINE S.A.",
        -1244.4,
        "PAGO"
      ],
      [
        "05/05/2026",
        "Operações",
        "Vale Refeição",
        "IFOOD.COM AGENCIA DE RESTAURANTES ONLINE S.A.",
        -3145.16,
        "PAGO"
      ],
      [
        "05/05/2026",
        "Operações",
        "Vale Refeição",
        "IFOOD.COM AGENCIA DE RESTAURANTES ONLINE S.A.",
        -670.28,
        "PAGO"
      ],
      [
        "05/05/2026",
        "Operações",
        "Custo com Serviços de Entrega",
        "IFOOD.COM AGENCIA DE RESTAURANTES ONLINE S.A.",
        -70,
        "PAGO"
      ],
      [
        "05/05/2026",
        "Operações",
        "Serviços Softwares",
        "B2 MIDIA DIGITAL LTDA",
        -149,
        "PAGO"
      ],
      [
        "05/05/2026",
        "Operações",
        "Compras de Mercadorias",
        "NFS FOOD SERVICE LTDA",
        -5107.36,
        "PAGO"
      ],
      [
        "05/05/2026",
        "Operações",
        "Dividendos",
        "DOMINOS AEROPORTO GUARULHOS",
        -9400,
        "PAGO"
      ],
      [
        "05/05/2026",
        "Operações",
        "IOF",
        "REDECARD",
        -142.41,
        "PAGO"
      ],
      [
        "05/05/2026",
        "Operações",
        "Tarifas Bancárias",
        "REDECARD",
        -106.53,
        "PAGO"
      ],
      [
        "05/05/2026",
        "Operações",
        "Freelancers",
        "SALÁRIOS À PAGAR",
        -100,
        "PAGO"
      ],
      [
        "05/05/2026",
        "Operações",
        "Freelancers",
        "55.504.962 GELSON VIANA MONTALVAO",
        -100,
        "PAGO"
      ],
      [
        "05/05/2026",
        "Operações",
        "Vale Refeição",
        "CAJU",
        -4120.68,
        "PAGO"
      ],
      [
        "05/05/2026",
        "Operações",
        "Custo Locomoção e Moradia",
        "DANIEL BARROS DURANTE",
        -95.09,
        "PAGO"
      ],
      [
        "05/05/2026",
        "Operações",
        "Vale Refeição",
        "CAJU",
        -2687.18,
        "PAGO"
      ],
      [
        "05/05/2026",
        "Operações",
        "Custo com Serviços de Entrega",
        "IFOOD.COM AGENCIA DE RESTAURANTES ONLINE S.A.",
        -1572.48,
        "PAGO"
      ],
      [
        "05/05/2026",
        "Operações",
        "Custo com Serviços de Entrega",
        "IFOOD.COM AGENCIA DE RESTAURANTES ONLINE S.A.",
        -38.4,
        "PAGO"
      ],
      [
        "05/05/2026",
        "Operações",
        "Vale Refeição",
        "CAJU",
        -9074.52,
        "PAGO"
      ],
      [
        "05/05/2026",
        "Operações",
        "Aluguel fixo",
        "CENTURY 21 PARCERIA IMOVEIS",
        -6584.94,
        "PAGO"
      ],
      [
        "05/05/2026",
        "Operações",
        "Custo Serviços Terceirizados",
        "SANDRA FERREIRA MOREIRA",
        -1500,
        "PAGO"
      ],
      [
        "05/05/2026",
        "Operações",
        "Bonificações",
        "CAJU",
        -1000,
        "PAGO"
      ],
      [
        "05/05/2026",
        "Operações",
        "Freelancers",
        "SALÁRIO À PAGAR",
        -1215,
        "PAGO"
      ],
      [
        "05/05/2026",
        "Operações",
        "Freelancers",
        "SALÁRIO À PAGAR",
        -600,
        "PAGO"
      ],
      [
        "05/05/2026",
        "Operações",
        "Freelancers",
        "SALÁRIO À PAGAR",
        -240,
        "PAGO"
      ],
      [
        "05/05/2026",
        "Operações",
        "Freelancers",
        "SALÁRIO À PAGAR",
        -600,
        "PAGO"
      ],
      [
        "05/05/2026",
        "Operações",
        "Freelancers",
        "SALÁRIOS À PAGAR",
        -100,
        "PAGO"
      ],
      [
        "05/05/2026",
        "Operações",
        "Freelancers",
        "SALÁRIOS À PAGAR",
        -540,
        "PAGO"
      ],
      [
        "05/05/2026",
        "Operações",
        "Freelancers",
        "SALÁRIOS À PAGAR",
        -540,
        "PAGO"
      ],
      [
        "05/05/2026",
        "Operações",
        "Freelancers",
        "SALÁRIOS À PAGAR",
        -120,
        "PAGO"
      ],
      [
        "05/05/2026",
        "Operações",
        "Compras de Mercadorias",
        "PAO ITALIANO FRANCIULLI EIRELI",
        -200,
        "PAGO"
      ],
      [
        "05/05/2026",
        "Operações",
        "Serviços Softwares",
        "NEOCOMPANY",
        -104.75,
        "PAGO"
      ],
      [
        "05/05/2026",
        "Operações",
        "Compras de Mercadorias",
        "MAGAZZINO DISTRIBUIDORA DE ALIMENTOS LTDA",
        -2854.94,
        "PAGO"
      ],
      [
        "05/05/2026",
        "Operações",
        "Compras de Mercadorias",
        "MAGAZZINO DISTRIBUIDORA DE ALIMENTOS LTDA",
        -1377.9,
        "PAGO"
      ],
      [
        "05/05/2026",
        "Operações",
        "Dividendos",
        "DOMINOS SERRA",
        -2300,
        "PAGO"
      ],
      [
        "05/05/2026",
        "Operações",
        "Dividendos",
        "DOMINOS PINHEIROS",
        -500,
        "PAGO"
      ],
      [
        "05/05/2026",
        "Operações",
        "Dividendos",
        "JC REFEICOES LTDA",
        -2000,
        "PAGO"
      ],
      [
        "05/05/2026",
        "Operações",
        "Dividendos",
        "DOMINOS PRAIA DO CANTO",
        -5000,
        "PAGO"
      ],
      [
        "05/05/2026",
        "Operações",
        "Dividendos",
        "DOMINOS VILA CLEMENTINO",
        -500,
        "PAGO"
      ],
      [
        "05/05/2026",
        "Operações",
        "Dividendos",
        "DOMINOS CAMPO BELO",
        -5000,
        "PAGO"
      ],
      [
        "05/05/2026",
        "Operações",
        "Vale Refeição",
        "CAJU",
        -5429.32,
        "PAGO"
      ],
      [
        "05/05/2026",
        "Operações",
        "Dividendos",
        "DOMINOS AEROPORTO GUARULHOS",
        -2600,
        "PAGO"
      ],
      [
        "05/05/2026",
        "Operações",
        "Dividendos",
        "DEX INVEST COMERCIO E VAREJO LTDA",
        -9880,
        "PAGO"
      ],
      [
        "05/05/2026",
        "Operações",
        "IOF",
        "REDECARD",
        -223.27,
        "PAGO"
      ],
      [
        "05/05/2026",
        "Operações",
        "Vale Refeição",
        "CAJU",
        -4806.16,
        "PAGO"
      ],
      [
        "05/05/2026",
        "Operações",
        "Compras de Mercadorias",
        "Spal Ind. Bras.Bebidas SA",
        -549.42,
        "PAGO"
      ],
      [
        "05/05/2026",
        "Operações",
        "Softwares gestão",
        "Yooga - Sistema de Gestão e Delivery",
        -258,
        "PAGO"
      ],
      [
        "05/05/2026",
        "Operações",
        "Custo Serviços Terceirizados",
        "RUAN TONOLLI GESTAO EMPRESARIAL",
        -700,
        "PAGO"
      ],
      [
        "05/05/2026",
        "Operações",
        "Tarifas Bancárias",
        "REDECARD",
        -66.5,
        "PAGO"
      ],
      [
        "05/05/2026",
        "Operações",
        "Tarifas Bancárias",
        "REDECARD",
        -4.56,
        "PAGO"
      ],
      [
        "05/05/2026",
        "Operações",
        "Tarifas Bancárias",
        "REDECARD",
        -34.86,
        "PAGO"
      ],
      [
        "05/05/2026",
        "Operações",
        "Serviços Softwares",
        "WLSINFO",
        -350,
        "PAGO"
      ],
      [
        "05/05/2026",
        "Operações",
        "Salários",
        "SALÁRIOS À PAGAR",
        -8500,
        "PAGO"
      ],
      [
        "05/05/2026",
        "Operações",
        "Dividendos",
        "OPTICAL VIX",
        -1000,
        "PAGO"
      ],
      [
        "05/05/2026",
        "Operações",
        "Dividendos",
        "OPTICAL VIX",
        -1000,
        "PAGO"
      ],
      [
        "05/05/2026",
        "Operações",
        "Dividendos",
        "OPTICÁLIA PRAIA DA COSTA",
        -2800,
        "PAGO"
      ],
      [
        "05/05/2026",
        "Operações",
        "Demais Despesas",
        "REDECARD",
        -246,
        "PAGO"
      ],
      [
        "05/05/2026",
        "Operações",
        "IOF",
        "REDECARD",
        -126.34,
        "PAGO"
      ],
      [
        "05/05/2026",
        "Operações",
        "Demais Despesas",
        "REDECARD",
        -4.28,
        "PAGO"
      ],
      [
        "05/05/2026",
        "Operações",
        "Demais Despesas",
        "REDECARD",
        -49.55,
        "PAGO"
      ],
      [
        "05/05/2026",
        "Operações",
        "Assistência Médica",
        "BENEVIX",
        -649.11,
        "PAGO"
      ],
      [
        "05/05/2026",
        "Operações",
        "Custo Consultorias",
        "B.C.C QUALIDADE DE VIDA",
        -550,
        "PAGO"
      ],
      [
        "05/05/2026",
        "Operações",
        "Assistência Médica",
        "ASSIM SAUDE",
        -1329.99,
        "PAGO"
      ],
      [
        "05/05/2026",
        "Operações",
        "Internet/Telefone",
        "SITE TELECOM SERVICOS DE INFORMATICA LTDA",
        -416.78,
        "PAGO"
      ],
      [
        "05/05/2026",
        "Operações",
        "Serviços Softwares",
        "NEW CHOICE - LOCACAO E REPAROS LTDA",
        -190,
        "PAGO"
      ],
      [
        "05/05/2026",
        "Operações",
        "Custo Serviços Terceirizados",
        "TERCEIRIZADOS À PAGAR",
        -150,
        "PAGO"
      ],
      [
        "05/05/2026",
        "Operações",
        "Custo Serviços Terceirizados",
        "TERCEIRIZADOS À PAGAR",
        -300,
        "PAGO"
      ],
      [
        "05/05/2026",
        "Operações",
        "IOF",
        "REDECARD",
        -102.52,
        "PAGO"
      ],
      [
        "05/05/2026",
        "Operações",
        "Tarifas Bancárias",
        "REDECARD",
        -20,
        "PAGO"
      ],
      [
        "05/05/2026",
        "Operações",
        "Tarifas Bancárias",
        "REDECARD",
        -98.11,
        "PAGO"
      ],
      [
        "05/05/2026",
        "Operações",
        "Assistência Médica",
        "SAO BERNARDO SAMP",
        -21.85,
        "PAGO"
      ],
      [
        "05/05/2026",
        "Operações",
        "Assistência Médica",
        "BENEVIX",
        -1337.85,
        "PAGO"
      ],
      [
        "05/05/2026",
        "Operações",
        "Juros",
        "REDECARD",
        -163.75,
        "PAGO"
      ],
      [
        "05/05/2026",
        "Operações",
        "IOF",
        "REDECARD",
        -248.75,
        "PAGO"
      ],
      [
        "05/05/2026",
        "Operações",
        "IOF",
        "REDECARD",
        -154.97,
        "PAGO"
      ],
      [
        "05/05/2026",
        "Operações",
        "Serviços Softwares",
        "WLSINFO",
        -350,
        "PAGO"
      ],
      [
        "05/05/2026",
        "Operações",
        "Custo com Serviços de Entrega",
        "IFOOD.COM AGENCIA DE RESTAURANTES ONLINE S.A.",
        -211.2,
        "PAGO"
      ],
      [
        "05/05/2026",
        "Operações",
        "Vale Refeição",
        "CAJU",
        -2185.14,
        "PAGO"
      ],
      [
        "05/05/2026",
        "Operações",
        "Custo com Serviços de Entrega",
        "IFOOD.COM AGENCIA DE RESTAURANTES ONLINE S.A.",
        -728,
        "PAGO"
      ],
      [
        "05/05/2026",
        "Operações",
        "Vale Refeição",
        "CAJU",
        -3346.14,
        "PAGO"
      ],
      [
        "05/05/2026",
        "Operações",
        "Custo com Serviços de Entrega",
        "IFOOD.COM AGENCIA DE RESTAURANTES ONLINE S.A.",
        -182.4,
        "PAGO"
      ],
      [
        "05/05/2026",
        "Operações",
        "Custo com Serviços de Entrega",
        "IFOOD.COM AGENCIA DE RESTAURANTES ONLINE S.A.",
        -1907.36,
        "PAGO"
      ],
      [
        "05/05/2026",
        "Operações",
        "Vale Refeição",
        "OTAVIO MIRANDA COSTA",
        -20,
        "PAGO"
      ],
      [
        "05/05/2026",
        "Operações",
        "Freelancers",
        "OTAVIO MIRANDA COSTA",
        -220,
        "PAGO"
      ],
      [
        "05/05/2026",
        "Operações",
        "Tarifas Bancárias",
        "REDECARD",
        -72.44,
        "PAGO"
      ],
      [
        "05/05/2026",
        "Operações",
        "Comissões",
        "Diego Neri dos Santos",
        -242.54,
        "PAGO"
      ],
      [
        "05/05/2026",
        "Operações",
        "Vale Refeição",
        "LUDMILA TEIXEIRA BARATA",
        -60.6,
        "PAGO"
      ],
      [
        "05/05/2026",
        "Operações",
        "Comissões",
        "LUDMILA TEIXEIRA BARATA",
        -28.5,
        "PAGO"
      ],
      [
        "05/05/2026",
        "Operações",
        "Freelancers",
        "LUDMILA TEIXEIRA BARATA",
        -330,
        "PAGO"
      ],
      [
        "05/05/2026",
        "Operações",
        "Freelancers",
        "Diego Neri dos Santos",
        -550,
        "PAGO"
      ],
      [
        "05/05/2026",
        "Operações",
        "Vale Refeição",
        "Diego Neri dos Santos",
        -101,
        "PAGO"
      ],
      [
        "05/05/2026",
        "Operações",
        "Compras de Mercadorias",
        "CD SUMARE (SP)",
        -235.17,
        "PAGO"
      ],
      [
        "04/05/2026",
        "Operações",
        "Contabilidade",
        "OFFICE ASSESSORIA CONTABIL LTDA",
        -1067.9,
        "PAGO"
      ],
      [
        "04/05/2026",
        "Operações",
        "Gás",
        "COMPANHIA DE GAS DE SAO PAULO COMGAS",
        -2172.72,
        "PAGO"
      ],
      [
        "04/05/2026",
        "Operações",
        "Contabilidade",
        "OFFICE ASSESSORIA CONTABIL LTDA",
        -1067.9,
        "PAGO"
      ],
      [
        "04/05/2026",
        "Operações",
        "Freelancers",
        "SALÁRIOS À PAGAR",
        -720,
        "PAGO"
      ],
      [
        "04/05/2026",
        "Operações",
        "Freelancers",
        "SALÁRIOS À PAGAR",
        -720,
        "PAGO"
      ],
      [
        "04/05/2026",
        "Operações",
        "Custo Locomoção e Moradia",
        "DANIEL BARROS DURANTE",
        -166.68,
        "PAGO"
      ],
      [
        "04/05/2026",
        "Operações",
        "Serviços Softwares",
        "NEOCOMPANY",
        -104.75,
        "PAGO"
      ],
      [
        "04/05/2026",
        "Operações",
        "Compras de Mercadorias",
        "Spal Ind. Bras.Bebidas SA",
        -1597.56,
        "PAGO"
      ],
      [
        "04/05/2026",
        "Operações",
        "Contabilidade",
        "OFFICE ASSESSORIA CONTABIL LTDA",
        -1067.9,
        "PAGO"
      ],
      [
        "04/05/2026",
        "Operações",
        "Máquinas e Equipamentos",
        "DANIEL SILVA DE SOUSA",
        -8000,
        "PAGO"
      ],
      [
        "04/05/2026",
        "Operações",
        "Aluguel fixo",
        "CONCESSIONARIA DO AEROPORTO INTERNACIONAL DE GUARULHOS S.A.",
        -76112.99,
        "PAGO"
      ],
      [
        "04/05/2026",
        "Operações",
        "Aluguel fixo",
        "CONCESSIONARIA DO AEROPORTO INTERNACIONAL DE GUARULHOS S.A.",
        -3500,
        "PAGO"
      ],
      [
        "04/05/2026",
        "Operações",
        "Rescisões",
        "LYRIANI FERREIRA RIBEIRO NOVAES",
        -35.35,
        "PAGO"
      ],
      [
        "04/05/2026",
        "Operações",
        "Contabilidade",
        "OFFICE ASSESSORIA CONTABIL LTDA",
        -1067.9,
        "PAGO"
      ],
      [
        "04/05/2026",
        "Operações",
        "Serviços Softwares",
        "NEOCOMPANY",
        -104.75,
        "PAGO"
      ],
      [
        "04/05/2026",
        "Operações",
        "Freelancers",
        "SALÁRIOS À PAGAR",
        -1200,
        "PAGO"
      ],
      [
        "04/05/2026",
        "Operações",
        "Freelancers",
        "SALÁRIOS À PAGAR",
        -600,
        "PAGO"
      ],
      [
        "04/05/2026",
        "Operações",
        "Freelancers",
        "SALÁRIOS À PAGAR",
        -550,
        "PAGO"
      ],
      [
        "04/05/2026",
        "Operações",
        "Vale Refeição",
        "CAJU",
        -485,
        "PAGO"
      ],
      [
        "04/05/2026",
        "Operações",
        "Móveis e Utensílios",
        "EVALDO DE ALMEIDA HEIDERICH",
        -27.83,
        "PAGO"
      ],
      [
        "04/05/2026",
        "Operações",
        "Novas Operações",
        "CONSORCIO SHOPPING PRAIA DA COSTA",
        -1094.78,
        "PAGO"
      ],
      [
        "04/05/2026",
        "Operações",
        "Móveis e Utensílios",
        "EVALDO DE ALMEIDA HEIDERICH",
        -21.62,
        "PAGO"
      ],
      [
        "04/05/2026",
        "Operações",
        "Máquinas e Equipamentos",
        "EVALDO DE ALMEIDA HEIDERICH",
        -31.32,
        "PAGO"
      ],
      [
        "04/05/2026",
        "Operações",
        "Móveis e Utensílios",
        "EVALDO DE ALMEIDA HEIDERICH",
        -5929.89,
        "PAGO"
      ],
      [
        "04/05/2026",
        "Operações",
        "Contabilidade",
        "OFFICE ASSESSORIA CONTABIL LTDA",
        -810.5,
        "PAGO"
      ],
      [
        "04/05/2026",
        "Operações",
        "Vale Refeição",
        "CAJU",
        -485,
        "PAGO"
      ],
      [
        "04/05/2026",
        "Operações",
        "Freelancers",
        "SALÁRIOS À PAGAR",
        -200,
        "PAGO"
      ],
      [
        "04/05/2026",
        "Operações",
        "Freelancers",
        "SALÁRIOS À PAGAR",
        -480,
        "PAGO"
      ],
      [
        "04/05/2026",
        "Operações",
        "Freelancers",
        "SALÁRIOS À PAGAR",
        -120,
        "PAGO"
      ],
      [
        "04/05/2026",
        "Operações",
        "Aluguel fixo",
        "MARIO LADNER",
        -12030.37,
        "PAGO"
      ],
      [
        "04/05/2026",
        "Operações",
        "Energia Elétrica",
        "ENEL DISTRIBUICAO SAO PAULO",
        -3046.46,
        "PAGO"
      ],
      [
        "04/05/2026",
        "Operações",
        "Freelancers",
        "SALÁRIOS À PAGAR",
        -480,
        "PAGO"
      ],
      [
        "04/05/2026",
        "Operações",
        "Freelancers",
        "SALÁRIOS À PAGAR",
        -360,
        "PAGO"
      ],
      [
        "04/05/2026",
        "Operações",
        "Freelancers",
        "SALÁRIOS À PAGAR",
        -450,
        "PAGO"
      ],
      [
        "04/05/2026",
        "Operações",
        "Equipamentos de Informática",
        "DANIEL BARROS DURANTE",
        -175.8,
        "PAGO"
      ]
    ],
    "EXTRATO_RECEITAS": [
      [
        "27/04/2026",
        "Operações",
        "Receita de Vendas",
        "REDECARD",
        1260.52,
        "RECEBIDO"
      ],
      [
        "24/04/2026",
        "Operações",
        "Receita de Vendas",
        "DEPÓSITO EM DINHEIRO",
        1000,
        "RECEBIDO"
      ],
      [
        "24/04/2026",
        "Operações",
        "Receita de Vendas",
        "DEPÓSITO EM DINHEIRO",
        1000,
        "RECEBIDO"
      ],
      [
        "24/04/2026",
        "Operações",
        "Receita de Vendas",
        "DEPÓSITO EM DINHEIRO",
        2000,
        "RECEBIDO"
      ],
      [
        "24/04/2026",
        "Operações",
        "Receita de Vendas",
        "DEPÓSITO EM DINHEIRO",
        2000,
        "RECEBIDO"
      ],
      [
        "24/04/2026",
        "Operações",
        "Receita de Vendas",
        "DEPÓSITO EM DINHEIRO",
        2000,
        "RECEBIDO"
      ],
      [
        "24/04/2026",
        "Operações",
        "Receita de Vendas",
        "DEPÓSITO EM DINHEIRO",
        1000,
        "RECEBIDO"
      ],
      [
        "24/04/2026",
        "Operações",
        "Rendimentos de Aplicações",
        "REDECARD",
        0.04,
        "RECEBIDO"
      ],
      [
        "24/04/2026",
        "Operações",
        "Receitas de Serviços",
        "REDECARD",
        474,
        "RECEBIDO"
      ],
      [
        "22/04/2026",
        "Operações",
        "Receita de Vendas",
        "REDECARD",
        734,
        "RECEBIDO"
      ]
    ],
    "EXTRATO_DESPESAS": [
      [
        "07/05/2026",
        "Operações",
        "Serviços Softwares",
        "GCOM",
        -634.75,
        "PAGO"
      ],
      [
        "07/05/2026",
        "Operações",
        "Serviços Softwares",
        "NEOCOMPANY",
        -106.87,
        "PAGO"
      ],
      [
        "07/05/2026",
        "Operações",
        "Serviços Softwares",
        "GCOM",
        -634.75,
        "PAGO"
      ],
      [
        "07/05/2026",
        "Operações",
        "Segurança",
        "VERISURE BRASIL MONITORAMENTO DE ALARMES S.A",
        -169.92,
        "PAGO"
      ],
      [
        "07/05/2026",
        "Operações",
        "Serviços Softwares",
        "GCOM",
        -822.85,
        "PAGO"
      ],
      [
        "07/05/2026",
        "Operações",
        "Outros Custos com Pessoal",
        "GIRASSOL ESTACIONAMENTO",
        -162.7,
        "PAGO"
      ],
      [
        "07/05/2026",
        "Operações",
        "Serviços Softwares",
        "GCOM",
        -634.75,
        "PAGO"
      ],
      [
        "07/05/2026",
        "Operações",
        "Segurança",
        "VERISURE BRASIL MONITORAMENTO DE ALARMES S.A",
        -269.09,
        "PAGO"
      ],
      [
        "07/05/2026",
        "Operações",
        "Serviços Softwares",
        "GCOM",
        -780.15,
        "PAGO"
      ],
      [
        "07/05/2026",
        "Operações",
        "Serviços Softwares",
        "NEOCOMPANY",
        -239.04,
        "PAGO"
      ],
      [
        "07/05/2026",
        "Operações",
        "Serviços Softwares",
        "GCOM",
        -634.75,
        "PAGO"
      ],
      [
        "07/05/2026",
        "Operações",
        "Segurança",
        "VERISURE BRASIL MONITORAMENTO DE ALARMES S.A",
        -169.04,
        "PAGO"
      ],
      [
        "07/05/2026",
        "Operações",
        "Serviços Softwares",
        "GCOM",
        -634.75,
        "PAGO"
      ],
      [
        "07/05/2026",
        "Operações",
        "Outros Custos com Pessoal",
        "GIRASSOL ESTACIONAMENTO",
        -162.7,
        "PAGO"
      ],
      [
        "07/05/2026",
        "Operações",
        "Serviços Softwares",
        "NEOCOMPANY",
        -106.87,
        "PAGO"
      ],
      [
        "07/05/2026",
        "Operações",
        "Serviços Softwares",
        "GCOM",
        -634.75,
        "PAGO"
      ],
      [
        "07/05/2026",
        "Operações",
        "Segurança",
        "VERISURE BRASIL MONITORAMENTO DE ALARMES S.A",
        -259.91,
        "PAGO"
      ],
      [
        "07/05/2026",
        "Operações",
        "Condomínio",
        "CONDOMINIO DO ED NORTE SUL TOWER",
        -3041.46,
        "PAGO"
      ],
      [
        "07/05/2026",
        "Operações",
        "Serviços Softwares",
        "GCOM",
        -634.75,
        "PAGO"
      ],
      [
        "07/05/2026",
        "Operações",
        "Serviços Softwares",
        "GCOM",
        -634.75,
        "PAGO"
      ],
      [
        "06/05/2026",
        "Operações",
        "Energia Elétrica",
        "ENEL DISTRIBUICAO SAO PAULO",
        -68.4,
        "PAGO"
      ],
      [
        "06/05/2026",
        "Operações",
        "Compras de Mercadorias",
        "27.165.292 ALOISA CORDEIRO DA SILVA",
        -459.9,
        "PAGO"
      ],
      [
        "06/05/2026",
        "Operações",
        "Compras de Mercadorias",
        "Spal Ind. Bras.Bebidas SA",
        -658.92,
        "PAGO"
      ],
      [
        "06/05/2026",
        "Operações",
        "Custo com Serviços de Entrega",
        "WAGNER DA SILVA CORREA",
        -25,
        "PAGO"
      ],
      [
        "06/05/2026",
        "Operações",
        "Tarifas Bancárias",
        "REDECARD",
        -76.42,
        "PAGO"
      ],
      [
        "06/05/2026",
        "Operações",
        "Internet/Telefone",
        "TELEFONICA BRASIL S.A.",
        -102.91,
        "PAGO"
      ],
      [
        "06/05/2026",
        "Operações",
        "Material de escritório",
        "INVESTIMENTOS",
        -310,
        "PAGO"
      ],
      [
        "06/05/2026",
        "Operações",
        "Salários",
        "DANIEL BARROS DURANTE",
        -500,
        "PAGO"
      ],
      [
        "06/05/2026",
        "Operações",
        "Vale Transporte",
        "IFOOD.COM AGENCIA DE RESTAURANTES ONLINE S.A.",
        -428.4,
        "PAGO"
      ],
      [
        "06/05/2026",
        "Operações",
        "Compras de Mercadorias",
        "Fabrica Vitoria",
        -1007.38,
        "PAGO"
      ],
      [
        "06/05/2026",
        "Operações",
        "Energia Elétrica",
        "ENEL DISTRIBUICAO SAO PAULO",
        -4508.59,
        "PAGO"
      ],
      [
        "06/05/2026",
        "Operações",
        "Compras de Mercadorias",
        "SPAL INDUSTRIA BRASILEIRA DE BEBIDAS S/A",
        -1372.03,
        "PAGO"
      ],
      [
        "06/05/2026",
        "Operações",
        "Compras de Mercadorias",
        "SPAL INDUSTRIA BRASILEIRA DE BEBIDAS S/A",
        -68.73,
        "PAGO"
      ],
      [
        "06/05/2026",
        "Operações",
        "Compras de Mercadorias",
        "Spal Ind. Bras.Bebidas SA",
        -960.87,
        "PAGO"
      ],
      [
        "06/05/2026",
        "Operações",
        "Tarifas Bancárias",
        "REDECARD",
        -14.64,
        "PAGO"
      ],
      [
        "06/05/2026",
        "Operações",
        "Instalações",
        "TERCEIRIZADOS À PAGAR",
        -61.6,
        "PAGO"
      ],
      [
        "06/05/2026",
        "Operações",
        "Dividendos",
        "OPTICAL VIX",
        -500,
        "PAGO"
      ],
      [
        "06/05/2026",
        "Operações",
        "Dividendos",
        "OPTICAL VIX",
        -3500,
        "PAGO"
      ],
      [
        "06/05/2026",
        "Operações",
        "Compras de Mercadorias",
        "CD SUMARE (SP)",
        -295.43,
        "PAGO"
      ],
      [
        "06/05/2026",
        "Operações",
        "Custo Serviços Terceirizados",
        "TERCEIRIZADOS À PAGAR",
        -250,
        "PAGO"
      ],
      [
        "06/05/2026",
        "Operações",
        "Compras de Mercadorias",
        "CONGELADOS DELICIA",
        -583.44,
        "PAGO"
      ],
      [
        "06/05/2026",
        "Operações",
        "Compras de Mercadorias",
        "COMERCIAL CASA DOS FRIOS LTDA",
        -2095.73,
        "PAGO"
      ],
      [
        "06/05/2026",
        "Operações",
        "Compras de Mercadorias",
        "RIO DE JANEIRO REFRESCOS LTDA",
        -656.35,
        "PAGO"
      ],
      [
        "06/05/2026",
        "Operações",
        "Compras de Mercadorias",
        "CRESCENTE COMERCIO E GASTRONOMIA LTDA",
        -421.55,
        "PAGO"
      ],
      [
        "06/05/2026",
        "Operações",
        "Juros",
        "REDECARD",
        -200.88,
        "PAGO"
      ],
      [
        "06/05/2026",
        "Operações",
        "Serviços Softwares",
        "VR BENEFICIOS E SERVICOS DE PROCESSAMENTO S.A",
        -121.26,
        "PAGO"
      ],
      [
        "06/05/2026",
        "Operações",
        "Compras de Mercadorias",
        "RFG COMERCIO TRANSPORTES E SERVICOS LTDA",
        -12663.29,
        "PAGO"
      ],
      [
        "06/05/2026",
        "Operações",
        "Compras de Mercadorias",
        "Fabrica Vitoria",
        -1380.1,
        "PAGO"
      ],
      [
        "06/05/2026",
        "Operações",
        "Compras de Mercadorias",
        "RFG COMERCIO TRANSPORTES E SERVICOS LTDA",
        -12800.2,
        "PAGO"
      ],
      [
        "06/05/2026",
        "Operações",
        "Tarifas Bancárias",
        "REDECARD",
        -77.81,
        "PAGO"
      ],
      [
        "06/05/2026",
        "Operações",
        "Vale Refeição",
        "DENISE SILVA SANTOS",
        -430,
        "PAGO"
      ],
      [
        "06/05/2026",
        "Operações",
        "Vale Refeição",
        "SALÁRIOS À PAGAR",
        -459.46,
        "PAGO"
      ],
      [
        "05/05/2026",
        "Operações",
        "Vale Refeição",
        "CAJU",
        -4226.04,
        "PAGO"
      ],
      [
        "05/05/2026",
        "Operações",
        "Vale Refeição",
        "CAJU",
        -5250.32,
        "PAGO"
      ],
      [
        "05/05/2026",
        "Operações",
        "Compras de Mercadorias",
        "Spal Ind. Bras.Bebidas SA",
        -1607.59,
        "PAGO"
      ],
      [
        "05/05/2026",
        "Operações",
        "Internet/Telefone",
        "SITE TELECOM SERVICOS DE INFORMATICA LTDA",
        -585,
        "PAGO"
      ],
      [
        "05/05/2026",
        "Operações",
        "Vale Refeição",
        "CAJU",
        -5007.12,
        "PAGO"
      ],
      [
        "05/05/2026",
        "Operações",
        "Vale Refeição",
        "CAJU",
        -3580.56,
        "PAGO"
      ],
      [
        "05/05/2026",
        "Operações",
        "Segurança",
        "VERISURE BRASIL MONITORAMENTO DE ALARMES S.A",
        -265.33,
        "PAGO"
      ],
      [
        "05/05/2026",
        "Operações",
        "Serviços Softwares",
        "GCOM",
        -622.1,
        "PAGO"
      ],
      [
        "05/05/2026",
        "Operações",
        "Freelancers",
        "SALÁRIOS À PAGAR",
        -770,
        "PAGO"
      ],
      [
        "05/05/2026",
        "Operações",
        "Comissões",
        "BEATRIZ ARAUJO DA SILVA",
        -130.12,
        "PAGO"
      ],
      [
        "05/05/2026",
        "Operações",
        "Vale Refeição",
        "VA E VT À PAGAR",
        -141.4,
        "PAGO"
      ],
      [
        "05/05/2026",
        "Operações",
        "Vale Refeição",
        "BEATRIZ ARAUJO DA SILVA",
        -141.4,
        "PAGO"
      ],
      [
        "05/05/2026",
        "Operações",
        "Freelancers",
        "BEATRIZ ARAUJO DA SILVA",
        -770,
        "PAGO"
      ],
      [
        "05/05/2026",
        "Operações",
        "Vale Refeição",
        "THAMIRYS CORREA PINTO",
        -121.2,
        "PAGO"
      ],
      [
        "05/05/2026",
        "Operações",
        "Vale Refeição",
        "Diego Neri dos Santos",
        -20.2,
        "PAGO"
      ],
      [
        "05/05/2026",
        "Operações",
        "Vale Refeição",
        "LETICIA SILVA E SILVA",
        -181.8,
        "PAGO"
      ],
      [
        "05/05/2026",
        "Operações",
        "Comissões",
        "THAMIRYS CORREA PINTO",
        -324.63,
        "PAGO"
      ],
      [
        "05/05/2026",
        "Operações",
        "Freelancers",
        "THAMIRYS CORREA PINTO",
        -660,
        "PAGO"
      ],
      [
        "05/05/2026",
        "Operações",
        "Freelancers",
        "Diego Neri dos Santos",
        -110,
        "PAGO"
      ],
      [
        "05/05/2026",
        "Operações",
        "Freelancers",
        "LETICIA SILVA E SILVA",
        -990,
        "PAGO"
      ],
      [
        "05/05/2026",
        "Operações",
        "Comissões",
        "LETICIA SILVA E SILVA",
        -458.95,
        "PAGO"
      ],
      [
        "05/05/2026",
        "Operações",
        "Tarifas Bancárias",
        "REDECARD",
        -63.64,
        "PAGO"
      ],
      [
        "05/05/2026",
        "Operações",
        "Vale Refeição",
        "CAJU",
        -5479.26,
        "PAGO"
      ],
      [
        "05/05/2026",
        "Operações",
        "Vale Refeição",
        "IFOOD.COM AGENCIA DE RESTAURANTES ONLINE S.A.",
        -1244.4,
        "PAGO"
      ],
      [
        "05/05/2026",
        "Operações",
        "Vale Refeição",
        "IFOOD.COM AGENCIA DE RESTAURANTES ONLINE S.A.",
        -3145.16,
        "PAGO"
      ],
      [
        "05/05/2026",
        "Operações",
        "Vale Refeição",
        "IFOOD.COM AGENCIA DE RESTAURANTES ONLINE S.A.",
        -670.28,
        "PAGO"
      ],
      [
        "05/05/2026",
        "Operações",
        "Custo com Serviços de Entrega",
        "IFOOD.COM AGENCIA DE RESTAURANTES ONLINE S.A.",
        -70,
        "PAGO"
      ],
      [
        "05/05/2026",
        "Operações",
        "Serviços Softwares",
        "B2 MIDIA DIGITAL LTDA",
        -149,
        "PAGO"
      ],
      [
        "05/05/2026",
        "Operações",
        "Compras de Mercadorias",
        "NFS FOOD SERVICE LTDA",
        -5107.36,
        "PAGO"
      ],
      [
        "05/05/2026",
        "Operações",
        "Dividendos",
        "DOMINOS AEROPORTO GUARULHOS",
        -9400,
        "PAGO"
      ],
      [
        "05/05/2026",
        "Operações",
        "IOF",
        "REDECARD",
        -142.41,
        "PAGO"
      ],
      [
        "05/05/2026",
        "Operações",
        "Tarifas Bancárias",
        "REDECARD",
        -106.53,
        "PAGO"
      ],
      [
        "05/05/2026",
        "Operações",
        "Freelancers",
        "SALÁRIOS À PAGAR",
        -100,
        "PAGO"
      ],
      [
        "05/05/2026",
        "Operações",
        "Freelancers",
        "55.504.962 GELSON VIANA MONTALVAO",
        -100,
        "PAGO"
      ],
      [
        "05/05/2026",
        "Operações",
        "Vale Refeição",
        "CAJU",
        -4120.68,
        "PAGO"
      ],
      [
        "05/05/2026",
        "Operações",
        "Custo Locomoção e Moradia",
        "DANIEL BARROS DURANTE",
        -95.09,
        "PAGO"
      ],
      [
        "05/05/2026",
        "Operações",
        "Vale Refeição",
        "CAJU",
        -2687.18,
        "PAGO"
      ],
      [
        "05/05/2026",
        "Operações",
        "Custo com Serviços de Entrega",
        "IFOOD.COM AGENCIA DE RESTAURANTES ONLINE S.A.",
        -1572.48,
        "PAGO"
      ],
      [
        "05/05/2026",
        "Operações",
        "Custo com Serviços de Entrega",
        "IFOOD.COM AGENCIA DE RESTAURANTES ONLINE S.A.",
        -38.4,
        "PAGO"
      ],
      [
        "05/05/2026",
        "Operações",
        "Vale Refeição",
        "CAJU",
        -9074.52,
        "PAGO"
      ],
      [
        "05/05/2026",
        "Operações",
        "Aluguel fixo",
        "CENTURY 21 PARCERIA IMOVEIS",
        -6584.94,
        "PAGO"
      ],
      [
        "05/05/2026",
        "Operações",
        "Custo Serviços Terceirizados",
        "SANDRA FERREIRA MOREIRA",
        -1500,
        "PAGO"
      ],
      [
        "05/05/2026",
        "Operações",
        "Bonificações",
        "CAJU",
        -1000,
        "PAGO"
      ],
      [
        "05/05/2026",
        "Operações",
        "Freelancers",
        "SALÁRIO À PAGAR",
        -1215,
        "PAGO"
      ],
      [
        "05/05/2026",
        "Operações",
        "Freelancers",
        "SALÁRIO À PAGAR",
        -600,
        "PAGO"
      ],
      [
        "05/05/2026",
        "Operações",
        "Freelancers",
        "SALÁRIO À PAGAR",
        -240,
        "PAGO"
      ],
      [
        "05/05/2026",
        "Operações",
        "Freelancers",
        "SALÁRIO À PAGAR",
        -600,
        "PAGO"
      ],
      [
        "05/05/2026",
        "Operações",
        "Freelancers",
        "SALÁRIOS À PAGAR",
        -100,
        "PAGO"
      ],
      [
        "05/05/2026",
        "Operações",
        "Freelancers",
        "SALÁRIOS À PAGAR",
        -540,
        "PAGO"
      ],
      [
        "05/05/2026",
        "Operações",
        "Freelancers",
        "SALÁRIOS À PAGAR",
        -540,
        "PAGO"
      ],
      [
        "05/05/2026",
        "Operações",
        "Freelancers",
        "SALÁRIOS À PAGAR",
        -120,
        "PAGO"
      ],
      [
        "05/05/2026",
        "Operações",
        "Compras de Mercadorias",
        "PAO ITALIANO FRANCIULLI EIRELI",
        -200,
        "PAGO"
      ],
      [
        "05/05/2026",
        "Operações",
        "Serviços Softwares",
        "NEOCOMPANY",
        -104.75,
        "PAGO"
      ],
      [
        "05/05/2026",
        "Operações",
        "Compras de Mercadorias",
        "MAGAZZINO DISTRIBUIDORA DE ALIMENTOS LTDA",
        -2854.94,
        "PAGO"
      ],
      [
        "05/05/2026",
        "Operações",
        "Compras de Mercadorias",
        "MAGAZZINO DISTRIBUIDORA DE ALIMENTOS LTDA",
        -1377.9,
        "PAGO"
      ],
      [
        "05/05/2026",
        "Operações",
        "Dividendos",
        "DOMINOS SERRA",
        -2300,
        "PAGO"
      ],
      [
        "05/05/2026",
        "Operações",
        "Dividendos",
        "DOMINOS PINHEIROS",
        -500,
        "PAGO"
      ],
      [
        "05/05/2026",
        "Operações",
        "Dividendos",
        "JC REFEICOES LTDA",
        -2000,
        "PAGO"
      ],
      [
        "05/05/2026",
        "Operações",
        "Dividendos",
        "DOMINOS PRAIA DO CANTO",
        -5000,
        "PAGO"
      ],
      [
        "05/05/2026",
        "Operações",
        "Dividendos",
        "DOMINOS VILA CLEMENTINO",
        -500,
        "PAGO"
      ],
      [
        "05/05/2026",
        "Operações",
        "Dividendos",
        "DOMINOS CAMPO BELO",
        -5000,
        "PAGO"
      ],
      [
        "05/05/2026",
        "Operações",
        "Vale Refeição",
        "CAJU",
        -5429.32,
        "PAGO"
      ],
      [
        "05/05/2026",
        "Operações",
        "Dividendos",
        "DOMINOS AEROPORTO GUARULHOS",
        -2600,
        "PAGO"
      ],
      [
        "05/05/2026",
        "Operações",
        "Dividendos",
        "DEX INVEST COMERCIO E VAREJO LTDA",
        -9880,
        "PAGO"
      ],
      [
        "05/05/2026",
        "Operações",
        "IOF",
        "REDECARD",
        -223.27,
        "PAGO"
      ],
      [
        "05/05/2026",
        "Operações",
        "Vale Refeição",
        "CAJU",
        -4806.16,
        "PAGO"
      ],
      [
        "05/05/2026",
        "Operações",
        "Compras de Mercadorias",
        "Spal Ind. Bras.Bebidas SA",
        -549.42,
        "PAGO"
      ],
      [
        "05/05/2026",
        "Operações",
        "Softwares gestão",
        "Yooga - Sistema de Gestão e Delivery",
        -258,
        "PAGO"
      ],
      [
        "05/05/2026",
        "Operações",
        "Custo Serviços Terceirizados",
        "RUAN TONOLLI GESTAO EMPRESARIAL",
        -700,
        "PAGO"
      ],
      [
        "05/05/2026",
        "Operações",
        "Tarifas Bancárias",
        "REDECARD",
        -66.5,
        "PAGO"
      ],
      [
        "05/05/2026",
        "Operações",
        "Tarifas Bancárias",
        "REDECARD",
        -4.56,
        "PAGO"
      ],
      [
        "05/05/2026",
        "Operações",
        "Tarifas Bancárias",
        "REDECARD",
        -34.86,
        "PAGO"
      ],
      [
        "05/05/2026",
        "Operações",
        "Serviços Softwares",
        "WLSINFO",
        -350,
        "PAGO"
      ],
      [
        "05/05/2026",
        "Operações",
        "Salários",
        "SALÁRIOS À PAGAR",
        -8500,
        "PAGO"
      ],
      [
        "05/05/2026",
        "Operações",
        "Dividendos",
        "OPTICAL VIX",
        -1000,
        "PAGO"
      ],
      [
        "05/05/2026",
        "Operações",
        "Dividendos",
        "OPTICAL VIX",
        -1000,
        "PAGO"
      ],
      [
        "05/05/2026",
        "Operações",
        "Dividendos",
        "OPTICÁLIA PRAIA DA COSTA",
        -2800,
        "PAGO"
      ],
      [
        "05/05/2026",
        "Operações",
        "Demais Despesas",
        "REDECARD",
        -246,
        "PAGO"
      ],
      [
        "05/05/2026",
        "Operações",
        "IOF",
        "REDECARD",
        -126.34,
        "PAGO"
      ],
      [
        "05/05/2026",
        "Operações",
        "Demais Despesas",
        "REDECARD",
        -4.28,
        "PAGO"
      ],
      [
        "05/05/2026",
        "Operações",
        "Demais Despesas",
        "REDECARD",
        -49.55,
        "PAGO"
      ],
      [
        "05/05/2026",
        "Operações",
        "Assistência Médica",
        "BENEVIX",
        -649.11,
        "PAGO"
      ],
      [
        "05/05/2026",
        "Operações",
        "Custo Consultorias",
        "B.C.C QUALIDADE DE VIDA",
        -550,
        "PAGO"
      ],
      [
        "05/05/2026",
        "Operações",
        "Assistência Médica",
        "ASSIM SAUDE",
        -1329.99,
        "PAGO"
      ],
      [
        "05/05/2026",
        "Operações",
        "Internet/Telefone",
        "SITE TELECOM SERVICOS DE INFORMATICA LTDA",
        -416.78,
        "PAGO"
      ],
      [
        "05/05/2026",
        "Operações",
        "Serviços Softwares",
        "NEW CHOICE - LOCACAO E REPAROS LTDA",
        -190,
        "PAGO"
      ],
      [
        "05/05/2026",
        "Operações",
        "Custo Serviços Terceirizados",
        "TERCEIRIZADOS À PAGAR",
        -150,
        "PAGO"
      ],
      [
        "05/05/2026",
        "Operações",
        "Custo Serviços Terceirizados",
        "TERCEIRIZADOS À PAGAR",
        -300,
        "PAGO"
      ],
      [
        "05/05/2026",
        "Operações",
        "IOF",
        "REDECARD",
        -102.52,
        "PAGO"
      ],
      [
        "05/05/2026",
        "Operações",
        "Tarifas Bancárias",
        "REDECARD",
        -20,
        "PAGO"
      ],
      [
        "05/05/2026",
        "Operações",
        "Tarifas Bancárias",
        "REDECARD",
        -98.11,
        "PAGO"
      ],
      [
        "05/05/2026",
        "Operações",
        "Assistência Médica",
        "SAO BERNARDO SAMP",
        -21.85,
        "PAGO"
      ],
      [
        "05/05/2026",
        "Operações",
        "Assistência Médica",
        "BENEVIX",
        -1337.85,
        "PAGO"
      ],
      [
        "05/05/2026",
        "Operações",
        "Juros",
        "REDECARD",
        -163.75,
        "PAGO"
      ],
      [
        "05/05/2026",
        "Operações",
        "IOF",
        "REDECARD",
        -248.75,
        "PAGO"
      ],
      [
        "05/05/2026",
        "Operações",
        "IOF",
        "REDECARD",
        -154.97,
        "PAGO"
      ],
      [
        "05/05/2026",
        "Operações",
        "Serviços Softwares",
        "WLSINFO",
        -350,
        "PAGO"
      ],
      [
        "05/05/2026",
        "Operações",
        "Custo com Serviços de Entrega",
        "IFOOD.COM AGENCIA DE RESTAURANTES ONLINE S.A.",
        -211.2,
        "PAGO"
      ],
      [
        "05/05/2026",
        "Operações",
        "Vale Refeição",
        "CAJU",
        -2185.14,
        "PAGO"
      ],
      [
        "05/05/2026",
        "Operações",
        "Custo com Serviços de Entrega",
        "IFOOD.COM AGENCIA DE RESTAURANTES ONLINE S.A.",
        -728,
        "PAGO"
      ],
      [
        "05/05/2026",
        "Operações",
        "Vale Refeição",
        "CAJU",
        -3346.14,
        "PAGO"
      ],
      [
        "05/05/2026",
        "Operações",
        "Custo com Serviços de Entrega",
        "IFOOD.COM AGENCIA DE RESTAURANTES ONLINE S.A.",
        -182.4,
        "PAGO"
      ],
      [
        "05/05/2026",
        "Operações",
        "Custo com Serviços de Entrega",
        "IFOOD.COM AGENCIA DE RESTAURANTES ONLINE S.A.",
        -1907.36,
        "PAGO"
      ],
      [
        "05/05/2026",
        "Operações",
        "Vale Refeição",
        "OTAVIO MIRANDA COSTA",
        -20,
        "PAGO"
      ],
      [
        "05/05/2026",
        "Operações",
        "Freelancers",
        "OTAVIO MIRANDA COSTA",
        -220,
        "PAGO"
      ],
      [
        "05/05/2026",
        "Operações",
        "Tarifas Bancárias",
        "REDECARD",
        -72.44,
        "PAGO"
      ],
      [
        "05/05/2026",
        "Operações",
        "Comissões",
        "Diego Neri dos Santos",
        -242.54,
        "PAGO"
      ],
      [
        "05/05/2026",
        "Operações",
        "Vale Refeição",
        "LUDMILA TEIXEIRA BARATA",
        -60.6,
        "PAGO"
      ],
      [
        "05/05/2026",
        "Operações",
        "Comissões",
        "LUDMILA TEIXEIRA BARATA",
        -28.5,
        "PAGO"
      ],
      [
        "05/05/2026",
        "Operações",
        "Freelancers",
        "LUDMILA TEIXEIRA BARATA",
        -330,
        "PAGO"
      ],
      [
        "05/05/2026",
        "Operações",
        "Freelancers",
        "Diego Neri dos Santos",
        -550,
        "PAGO"
      ],
      [
        "05/05/2026",
        "Operações",
        "Vale Refeição",
        "Diego Neri dos Santos",
        -101,
        "PAGO"
      ],
      [
        "05/05/2026",
        "Operações",
        "Compras de Mercadorias",
        "CD SUMARE (SP)",
        -235.17,
        "PAGO"
      ],
      [
        "04/05/2026",
        "Operações",
        "Contabilidade",
        "OFFICE ASSESSORIA CONTABIL LTDA",
        -1067.9,
        "PAGO"
      ],
      [
        "04/05/2026",
        "Operações",
        "Gás",
        "COMPANHIA DE GAS DE SAO PAULO COMGAS",
        -2172.72,
        "PAGO"
      ],
      [
        "04/05/2026",
        "Operações",
        "Contabilidade",
        "OFFICE ASSESSORIA CONTABIL LTDA",
        -1067.9,
        "PAGO"
      ],
      [
        "04/05/2026",
        "Operações",
        "Freelancers",
        "SALÁRIOS À PAGAR",
        -720,
        "PAGO"
      ],
      [
        "04/05/2026",
        "Operações",
        "Freelancers",
        "SALÁRIOS À PAGAR",
        -720,
        "PAGO"
      ],
      [
        "04/05/2026",
        "Operações",
        "Custo Locomoção e Moradia",
        "DANIEL BARROS DURANTE",
        -166.68,
        "PAGO"
      ],
      [
        "04/05/2026",
        "Operações",
        "Serviços Softwares",
        "NEOCOMPANY",
        -104.75,
        "PAGO"
      ],
      [
        "04/05/2026",
        "Operações",
        "Compras de Mercadorias",
        "Spal Ind. Bras.Bebidas SA",
        -1597.56,
        "PAGO"
      ],
      [
        "04/05/2026",
        "Operações",
        "Contabilidade",
        "OFFICE ASSESSORIA CONTABIL LTDA",
        -1067.9,
        "PAGO"
      ],
      [
        "04/05/2026",
        "Operações",
        "Máquinas e Equipamentos",
        "DANIEL SILVA DE SOUSA",
        -8000,
        "PAGO"
      ],
      [
        "04/05/2026",
        "Operações",
        "Aluguel fixo",
        "CONCESSIONARIA DO AEROPORTO INTERNACIONAL DE GUARULHOS S.A.",
        -76112.99,
        "PAGO"
      ],
      [
        "04/05/2026",
        "Operações",
        "Aluguel fixo",
        "CONCESSIONARIA DO AEROPORTO INTERNACIONAL DE GUARULHOS S.A.",
        -3500,
        "PAGO"
      ],
      [
        "04/05/2026",
        "Operações",
        "Rescisões",
        "LYRIANI FERREIRA RIBEIRO NOVAES",
        -35.35,
        "PAGO"
      ],
      [
        "04/05/2026",
        "Operações",
        "Contabilidade",
        "OFFICE ASSESSORIA CONTABIL LTDA",
        -1067.9,
        "PAGO"
      ],
      [
        "04/05/2026",
        "Operações",
        "Serviços Softwares",
        "NEOCOMPANY",
        -104.75,
        "PAGO"
      ],
      [
        "04/05/2026",
        "Operações",
        "Freelancers",
        "SALÁRIOS À PAGAR",
        -1200,
        "PAGO"
      ],
      [
        "04/05/2026",
        "Operações",
        "Freelancers",
        "SALÁRIOS À PAGAR",
        -600,
        "PAGO"
      ],
      [
        "04/05/2026",
        "Operações",
        "Freelancers",
        "SALÁRIOS À PAGAR",
        -550,
        "PAGO"
      ],
      [
        "04/05/2026",
        "Operações",
        "Vale Refeição",
        "CAJU",
        -485,
        "PAGO"
      ],
      [
        "04/05/2026",
        "Operações",
        "Móveis e Utensílios",
        "EVALDO DE ALMEIDA HEIDERICH",
        -27.83,
        "PAGO"
      ],
      [
        "04/05/2026",
        "Operações",
        "Novas Operações",
        "CONSORCIO SHOPPING PRAIA DA COSTA",
        -1094.78,
        "PAGO"
      ],
      [
        "04/05/2026",
        "Operações",
        "Móveis e Utensílios",
        "EVALDO DE ALMEIDA HEIDERICH",
        -21.62,
        "PAGO"
      ],
      [
        "04/05/2026",
        "Operações",
        "Máquinas e Equipamentos",
        "EVALDO DE ALMEIDA HEIDERICH",
        -31.32,
        "PAGO"
      ],
      [
        "04/05/2026",
        "Operações",
        "Móveis e Utensílios",
        "EVALDO DE ALMEIDA HEIDERICH",
        -5929.89,
        "PAGO"
      ],
      [
        "04/05/2026",
        "Operações",
        "Contabilidade",
        "OFFICE ASSESSORIA CONTABIL LTDA",
        -810.5,
        "PAGO"
      ],
      [
        "04/05/2026",
        "Operações",
        "Vale Refeição",
        "CAJU",
        -485,
        "PAGO"
      ],
      [
        "04/05/2026",
        "Operações",
        "Freelancers",
        "SALÁRIOS À PAGAR",
        -200,
        "PAGO"
      ],
      [
        "04/05/2026",
        "Operações",
        "Freelancers",
        "SALÁRIOS À PAGAR",
        -480,
        "PAGO"
      ],
      [
        "04/05/2026",
        "Operações",
        "Freelancers",
        "SALÁRIOS À PAGAR",
        -120,
        "PAGO"
      ],
      [
        "04/05/2026",
        "Operações",
        "Aluguel fixo",
        "MARIO LADNER",
        -12030.37,
        "PAGO"
      ],
      [
        "04/05/2026",
        "Operações",
        "Energia Elétrica",
        "ENEL DISTRIBUICAO SAO PAULO",
        -3046.46,
        "PAGO"
      ],
      [
        "04/05/2026",
        "Operações",
        "Freelancers",
        "SALÁRIOS À PAGAR",
        -480,
        "PAGO"
      ],
      [
        "04/05/2026",
        "Operações",
        "Freelancers",
        "SALÁRIOS À PAGAR",
        -360,
        "PAGO"
      ],
      [
        "04/05/2026",
        "Operações",
        "Freelancers",
        "SALÁRIOS À PAGAR",
        -450,
        "PAGO"
      ],
      [
        "04/05/2026",
        "Operações",
        "Equipamentos de Informática",
        "DANIEL BARROS DURANTE",
        -175.8,
        "PAGO"
      ]
    ],
    "KPIS": {
      "TOTAL_RECEITA": 11468.560000000001,
      "TOTAL_DESPESA": 1908007.560000001,
      "VALOR_LIQUIDO": -1896539.000000001,
      "MARGEM_LIQUIDA": -16536.85379855885,
      "VALOR_LIQ_SERIES": [
        -4657.8,
        0,
        -2330.5,
        -1233349.020000001,
        -656201.6799999999,
        0,
        0,
        0,
        0,
        0,
        0,
        0
      ]
    },
    "RECEITA_DIA": [
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      734,
      0,
      9474.04,
      0,
      0,
      1260.52,
      0,
      0,
      0,
      0
    ],
    "DESPESA_DIA": [
      1212.57,
      0,
      7693.26,
      431672.5200000001,
      158540.11000000002,
      52059.29,
      11529.599999999999,
      14534.81,
      40416.71000000001,
      95048.92,
      0,
      0,
      14044.029999999999,
      46214.530000000006,
      129120.00000000003,
      67958.23,
      28541.630000000005,
      0,
      0,
      248435.90999999997,
      3000,
      54892.76,
      51925.00000000001,
      54431.530000000006,
      805.5,
      4657.8,
      80587.63000000002,
      39991.8,
      31098.5,
      239069.92000000007,
      525
    ],
    "SALDOS_MES": [
      -4657.8,
      -4657.8,
      -6988.3,
      -1240337.320000001,
      -1896539.000000001,
      -1896539.000000001,
      -1896539.000000001,
      -1896539.000000001,
      -1896539.000000001,
      -1896539.000000001,
      -1896539.000000001,
      -1896539.000000001
    ],
    "FLUXO_RECEITA": [
      {
        "cat": "Receita de Vendas",
        "values": [
          0,
          0,
          0,
          10994.52,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0
        ]
      },
      {
        "cat": "Receitas de Serviços",
        "values": [
          0,
          0,
          0,
          474,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0
        ]
      },
      {
        "cat": "Rendimentos de Aplicações",
        "values": [
          0,
          0,
          0,
          0.04,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0
        ]
      }
    ],
    "FLUXO_DESPESA": [
      {
        "cat": "Dividendos",
        "values": [
          0,
          0,
          0,
          -161852.01,
          -123480,
          0,
          0,
          0,
          0,
          0,
          0,
          0
        ]
      },
      {
        "cat": "Aluguel fixo",
        "values": [
          0,
          0,
          0,
          -66971.06000000001,
          -116171.78,
          0,
          0,
          0,
          0,
          0,
          0,
          0
        ]
      },
      {
        "cat": "Empréstimos capital de giro",
        "values": [
          0,
          0,
          0,
          -16406.579999999998,
          -149821.82,
          0,
          0,
          0,
          0,
          0,
          0,
          0
        ]
      },
      {
        "cat": "Compras de Mercadorias",
        "values": [
          0,
          0,
          -805.5,
          -89386.08000000003,
          -66158.17,
          0,
          0,
          0,
          0,
          0,
          0,
          0
        ]
      },
      {
        "cat": "Custo com Serviços de Entrega",
        "values": [
          0,
          0,
          0,
          -139190.32000000004,
          -6059.839999999999,
          0,
          0,
          0,
          0,
          0,
          0,
          0
        ]
      }
    ],
    "COMP_DATA": [
      {
        "tipo": "Receita",
        "isHeader": true,
        "d1": 0,
        "d2": 11468.560000000001
      },
      {
        "tipo": "Receita de Vendas",
        "parent": "Receita",
        "d1": 0,
        "d2": 10994.52
      },
      {
        "tipo": "Rendimentos de Aplicações",
        "parent": "Receita",
        "d1": 0,
        "d2": 0.04
      },
      {
        "tipo": "Receitas de Serviços",
        "parent": "Receita",
        "d1": 0,
        "d2": 474
      },
      {
        "tipo": "Despesa",
        "isHeader": true,
        "d1": -6988.3,
        "d2": -1901019.2600000016
      },
      {
        "tipo": "Compras de Mercadorias",
        "parent": "Despesa",
        "d1": -805.5,
        "d2": -155544.24999999997
      },
      {
        "tipo": "&lt;Disponível&gt;",
        "parent": "Despesa",
        "d1": -1000,
        "d2": -64379.81
      },
      {
        "tipo": "Máquinas e Equipamentos",
        "parent": "Despesa",
        "d1": -4657.8,
        "d2": -16146.22
      },
      {
        "tipo": "Custo Serviços Dedetização/coleta lixo/MICROAMB",
        "parent": "Despesa",
        "d1": -525,
        "d2": -7042.909999999999
      },
      {
        "tipo": "Aluguel fixo",
        "parent": "Despesa",
        "d1": 0,
        "d2": -183142.84
      },
      {
        "tipo": "Outros Custos com Pessoal",
        "parent": "Despesa",
        "d1": 0,
        "d2": -4748.680000000001
      },
      {
        "tipo": "Adiantamento",
        "parent": "Despesa",
        "d1": 0,
        "d2": -75137.76
      },
      {
        "tipo": "Custo Consultorias",
        "parent": "Despesa",
        "d1": 0,
        "d2": -17443.08
      },
      {
        "tipo": "Móveis e Utensílios",
        "parent": "Despesa",
        "d1": 0,
        "d2": -15697.06
      },
      {
        "tipo": "Rescisões",
        "parent": "Despesa",
        "d1": 0,
        "d2": -38981.23
      },
      {
        "tipo": "INSS",
        "parent": "Despesa",
        "d1": 0,
        "d2": -24710.329999999998
      },
      {
        "tipo": "FGTS",
        "parent": "Despesa",
        "d1": 0,
        "d2": -25761.529999999995
      },
      {
        "tipo": "ICMS",
        "parent": "Despesa",
        "d1": 0,
        "d2": -7481.06
      },
      {
        "tipo": "Simples Nacional (DAS)",
        "parent": "Despesa",
        "d1": 0,
        "d2": -36321.03999999999
      },
      {
        "tipo": "Condomínio",
        "parent": "Despesa",
        "d1": 0,
        "d2": -32159.020000000004
      },
      {
        "tipo": "Aluguel variável",
        "parent": "Despesa",
        "d1": 0,
        "d2": -22425.7
      },
      {
        "tipo": "Taxas e Licenças",
        "parent": "Despesa",
        "d1": 0,
        "d2": -2345.7799999999997
      },
      {
        "tipo": "Vale Refeição",
        "parent": "Despesa",
        "d1": 0,
        "d2": -82685.19
      },
      {
        "tipo": "Manutenção loja",
        "parent": "Despesa",
        "d1": 0,
        "d2": -2550.96
      },
      {
        "tipo": "Assistência Médica",
        "parent": "Despesa",
        "d1": 0,
        "d2": -8977.63
      },
      {
        "tipo": "Custo de Manutenção de Máquinas e Equipamentos",
        "parent": "Despesa",
        "d1": 0,
        "d2": -1053.33
      },
      {
        "tipo": "Royalties",
        "parent": "Despesa",
        "d1": 0,
        "d2": -24040.65
      },
      {
        "tipo": "Fundo de Promoção",
        "parent": "Despesa",
        "d1": 0,
        "d2": -6371.57
      },
      {
        "tipo": "Frete",
        "parent": "Despesa",
        "d1": 0,
        "d2": -7585.579999999999
      },
      {
        "tipo": "Custo com Serviços de Entrega",
        "parent": "Despesa",
        "d1": 0,
        "d2": -145250.16
      },
      {
        "tipo": "Custo Serviços Terceirizados",
        "parent": "Despesa",
        "d1": 0,
        "d2": -37162.899999999994
      },
      {
        "tipo": "Custo Agregadores e Cartões",
        "parent": "Despesa",
        "d1": 0,
        "d2": -840
      },
      {
        "tipo": "Instalações",
        "parent": "Despesa",
        "d1": 0,
        "d2": -1417.2399999999998
      },
      {
        "tipo": "Internet/Telefone",
        "parent": "Despesa",
        "d1": 0,
        "d2": -3772.4300000000007
      },
      {
        "tipo": "Salários",
        "parent": "Despesa",
        "d1": 0,
        "d2": -66687.97000000002
      },
      {
        "tipo": "Contabilidade",
        "parent": "Despesa",
        "d1": 0,
        "d2": -16546.93
      },
      {
        "tipo": "Gás",
        "parent": "Despesa",
        "d1": 0,
        "d2": -11899.21
      },
      {
        "tipo": "Serviços Softwares",
        "parent": "Despesa",
        "d1": 0,
        "d2": -12865.56
      },
      {
        "tipo": "Energia Elétrica",
        "parent": "Despesa",
        "d1": 0,
        "d2": -40699.75000000001
      },
      {
        "tipo": "ISS",
        "parent": "Despesa",
        "d1": 0,
        "d2": -85.18
      },
      {
        "tipo": "Freelancers",
        "parent": "Despesa",
        "d1": 0,
        "d2": -70917.04000000002
      },
      {
        "tipo": "Equipamentos de Informática",
        "parent": "Despesa",
        "d1": 0,
        "d2": -221.20000000000002
      },
      {
        "tipo": "Água e Esgoto",
        "parent": "Despesa",
        "d1": 0,
        "d2": -8897.74
      },
      {
        "tipo": "Férias",
        "parent": "Despesa",
        "d1": 0,
        "d2": -8282.37
      },
      {
        "tipo": "Segurança",
        "parent": "Despesa",
        "d1": 0,
        "d2": -1133.29
      },
      {
        "tipo": "Seguros",
        "parent": "Despesa",
        "d1": 0,
        "d2": -1285.98
      },
      {
        "tipo": "Custo Locomoção e Hospedagem Sócios em Viagens",
        "parent": "Despesa",
        "d1": 0,
        "d2": -13485.899999999994
      },
      {
        "tipo": "Custo Locomoção e Moradia",
        "parent": "Despesa",
        "d1": 0,
        "d2": -261.77
      },
      {
        "tipo": "Informática",
        "parent": "Despesa",
        "d1": 0,
        "d2": -540
      },
      {
        "tipo": "Dividendos",
        "parent": "Despesa",
        "d1": 0,
        "d2": -285332.01
      },
      {
        "tipo": "Novas Operações",
        "parent": "Despesa",
        "d1": 0,
        "d2": -8516.06
      },
      {
        "tipo": "Material de escritório",
        "parent": "Despesa",
        "d1": 0,
        "d2": -1805.65
      },
      {
        "tipo": "Marketing",
        "parent": "Despesa",
        "d1": 0,
        "d2": -5040.9
      },
      {
        "tipo": "Comissões",
        "parent": "Despesa",
        "d1": 0,
        "d2": -1820.4
      },
      {
        "tipo": "Tarifas Bancárias",
        "parent": "Despesa",
        "d1": 0,
        "d2": -6186.01
      },
      {
        "tipo": "Custos Processuais, Judiciais, Cartório e Sindicatos",
        "parent": "Despesa",
        "d1": 0,
        "d2": -7238
      },
      {
        "tipo": "PIS",
        "parent": "Despesa",
        "d1": 0,
        "d2": -15658.880000000001
      },
      {
        "tipo": "IOF",
        "parent": "Despesa",
        "d1": 0,
        "d2": -998.26
      },
      {
        "tipo": "Vale Transporte",
        "parent": "Despesa",
        "d1": 0,
        "d2": -499.12
      },
      {
        "tipo": "Softwares gestão",
        "parent": "Despesa",
        "d1": 0,
        "d2": -9647.84
      },
      {
        "tipo": "Bonificações",
        "parent": "Despesa",
        "d1": 0,
        "d2": -7253.93
      },
      {
        "tipo": "Juros",
        "parent": "Despesa",
        "d1": 0,
        "d2": -12789.449999999999
      },
      {
        "tipo": "CDU",
        "parent": "Despesa",
        "d1": 0,
        "d2": -3132.29
      },
      {
        "tipo": "Demais Despesas",
        "parent": "Despesa",
        "d1": 0,
        "d2": -10959.99
      },
      {
        "tipo": "Empréstimos capital de giro",
        "parent": "Despesa",
        "d1": 0,
        "d2": -166228.40000000002
      },
      {
        "tipo": "Repasses",
        "parent": "Despesa",
        "d1": 0,
        "d2": -52926.240000000005
      }
    ]
  },
  "a_pagar_receber": {
    "MONTH_DATA": [
      {
        "m": "janeiro",
        "receita": 0,
        "despesa": 0
      },
      {
        "m": "fevereiro",
        "receita": 0,
        "despesa": 0
      },
      {
        "m": "março",
        "receita": 0,
        "despesa": 0
      },
      {
        "m": "abril",
        "receita": 0,
        "despesa": 466774.2699999999
      },
      {
        "m": "maio",
        "receita": 0,
        "despesa": 1065685.7799999996
      },
      {
        "m": "junho",
        "receita": 0,
        "despesa": 145277.07
      },
      {
        "m": "julho",
        "receita": 0,
        "despesa": 68351.92000000003
      },
      {
        "m": "agosto",
        "receita": 0,
        "despesa": 30727.810000000005
      },
      {
        "m": "setembro",
        "receita": 0,
        "despesa": 77695.71999999997
      },
      {
        "m": "outubro",
        "receita": 0,
        "despesa": 37012.82
      },
      {
        "m": "novembro",
        "receita": 0,
        "despesa": 20837.75
      },
      {
        "m": "dezembro",
        "receita": 0,
        "despesa": 17759.529999999995
      }
    ],
    "RECEITA_CATEGORIAS": [],
    "DESPESA_CATEGORIAS": [
      {
        "name": "Compras de Mercadorias",
        "value": 733726.930000003,
        "fornecedores": 93
      },
      {
        "name": "Aluguel fixo",
        "value": 246357.41999999998,
        "fornecedores": 10
      },
      {
        "name": "Repasses",
        "value": 119770.09,
        "fornecedores": 4
      },
      {
        "name": "Salários",
        "value": 112642.18,
        "fornecedores": 47
      },
      {
        "name": "Royalties",
        "value": 104838.81999999999,
        "fornecedores": 3
      },
      {
        "name": "ICMS",
        "value": 104283.21,
        "fornecedores": 5
      },
      {
        "name": "Custo com Serviços de Entrega",
        "value": 64399.009999999995,
        "fornecedores": 3
      },
      {
        "name": "Fundo de Promoção",
        "value": 62458.04000000001,
        "fornecedores": 6
      },
      {
        "name": "INSS",
        "value": 46800.6,
        "fornecedores": 2
      },
      {
        "name": "Simples Nacional (DAS)",
        "value": 42318.59,
        "fornecedores": 2
      },
      {
        "name": "Condomínio",
        "value": 33797.8,
        "fornecedores": 4
      },
      {
        "name": "Aluguel variável",
        "value": 33356.25,
        "fornecedores": 1
      }
    ],
    "RECEITA_CLIENTES": [],
    "DESPESA_FORNECEDORES": [
      {
        "name": "RFG COMERCIO TRANSPORTES E SERVICOS LTDA",
        "value": 313058.22000000003
      },
      {
        "name": "DP1 RESTAURANTE LTDA",
        "value": 137017.44999999998
      },
      {
        "name": "OCLM FRANCHISING LTDA",
        "value": 115461.56
      },
      {
        "name": "CONSORCIO SHOPPING PRAIA DA COSTA",
        "value": 81039.68
      },
      {
        "name": "MARCHON BRASIL LTDA",
        "value": 61383.50000000003
      },
      {
        "name": "NOVA CIDADE SHOPPING CENTERS S/A",
        "value": 60195.47
      },
      {
        "name": "ICMS À PAGAR",
        "value": 46646.439999999995
      },
      {
        "name": "ASSOCIACAO DOMINO&apos;S",
        "value": 45716.030000000006
      },
      {
        "name": "INSS À PAGAR",
        "value": 43186.75
      },
      {
        "name": "CD SUMARE (SP)",
        "value": 43117.309999999954
      },
      {
        "name": "AJAX SERVICOS DE ENTREGA LTDA",
        "value": 41331.83
      },
      {
        "name": "SALÁRIOS À PAGAR",
        "value": 40896.68
      }
    ],
    "EXTRATO": [
      [
        "10/04/2027",
        "Operações",
        "Compras de Mercadorias",
        "MARCHON BRASIL LTDA",
        -34.16,
        "A VENCER"
      ],
      [
        "21/03/2027",
        "Operações",
        "Compras de Mercadorias",
        "MARCHON BRASIL LTDA",
        -22.26,
        "A VENCER"
      ],
      [
        "17/03/2027",
        "Operações",
        "Compras de Mercadorias",
        "MARCHON BRASIL LTDA",
        -27.19,
        "A VENCER"
      ],
      [
        "11/03/2027",
        "Operações",
        "Compras de Mercadorias",
        "MARCHON BRASIL LTDA",
        -34.2,
        "A VENCER"
      ],
      [
        "11/03/2027",
        "Operações",
        "Compras de Mercadorias",
        "MARCHON BRASIL LTDA",
        -232.7,
        "A VENCER"
      ],
      [
        "07/03/2027",
        "Operações",
        "Compras de Mercadorias",
        "MARCHON BRASIL LTDA",
        -2373.22,
        "A VENCER"
      ],
      [
        "28/02/2027",
        "Operações",
        "Repasses",
        "DP1 RESTAURANTE LTDA",
        -847.46,
        "A VENCER"
      ],
      [
        "28/02/2027",
        "Operações",
        "Repasses",
        "DP1 RESTAURANTE LTDA",
        -1869.5,
        "A VENCER"
      ],
      [
        "28/02/2027",
        "Operações",
        "Compras de Mercadorias",
        "CARL ZEISS VISION BRASIL IND. OPTICA LTDA",
        -58.16,
        "A VENCER"
      ],
      [
        "24/02/2027",
        "Operações",
        "Compras de Mercadorias",
        "CARL ZEISS VISION BRASIL IND. OPTICA LTDA",
        -18.35,
        "A VENCER"
      ],
      [
        "24/02/2027",
        "Operações",
        "Compras de Mercadorias",
        "CARL ZEISS VISION BRASIL IND. OPTICA LTDA",
        -31.08,
        "A VENCER"
      ],
      [
        "23/02/2027",
        "Operações",
        "Compras de Mercadorias",
        "CARL ZEISS VISION BRASIL IND. OPTICA LTDA",
        -79.25,
        "A VENCER"
      ],
      [
        "22/02/2027",
        "Operações",
        "Compras de Mercadorias",
        "CARL ZEISS VISION BRASIL IND. OPTICA LTDA",
        -18.36,
        "A VENCER"
      ],
      [
        "22/02/2027",
        "Operações",
        "Compras de Mercadorias",
        "CARL ZEISS VISION BRASIL IND. OPTICA LTDA",
        -31.8,
        "A VENCER"
      ],
      [
        "19/02/2027",
        "Operações",
        "Compras de Mercadorias",
        "MARCHON BRASIL LTDA",
        -22.22,
        "A VENCER"
      ],
      [
        "18/02/2027",
        "Operações",
        "Compras de Mercadorias",
        "CARL ZEISS VISION BRASIL IND. OPTICA LTDA",
        -16.18,
        "A VENCER"
      ],
      [
        "15/02/2027",
        "Operações",
        "Compras de Mercadorias",
        "MARCHON BRASIL LTDA",
        -27.16,
        "A VENCER"
      ],
      [
        "14/02/2027",
        "Operações",
        "Compras de Mercadorias",
        "CARL ZEISS VISION BRASIL IND. OPTICA LTDA",
        -11.07,
        "A VENCER"
      ],
      [
        "14/02/2027",
        "Operações",
        "Compras de Mercadorias",
        "CARL ZEISS VISION BRASIL IND. OPTICA LTDA",
        -20.64,
        "A VENCER"
      ],
      [
        "14/02/2027",
        "Operações",
        "Compras de Mercadorias",
        "CARL ZEISS VISION BRASIL IND. OPTICA LTDA",
        -66.97,
        "A VENCER"
      ],
      [
        "14/02/2027",
        "Operações",
        "Compras de Mercadorias",
        "CARL ZEISS VISION BRASIL IND. OPTICA LTDA",
        -53.43,
        "A VENCER"
      ],
      [
        "13/02/2027",
        "Operações",
        "Compras de Mercadorias",
        "CARL ZEISS VISION BRASIL IND. OPTICA LTDA",
        -76.35,
        "A VENCER"
      ],
      [
        "12/02/2027",
        "Operações",
        "Compras de Mercadorias",
        "CARL ZEISS VISION BRASIL IND. OPTICA LTDA",
        -19.8,
        "A VENCER"
      ],
      [
        "11/02/2027",
        "Operações",
        "Compras de Mercadorias",
        "CARL ZEISS VISION BRASIL IND. OPTICA LTDA",
        -40.54,
        "A VENCER"
      ],
      [
        "10/02/2027",
        "Operações",
        "Compras de Mercadorias",
        "CARL ZEISS VISION BRASIL IND. OPTICA LTDA",
        -9.43,
        "A VENCER"
      ],
      [
        "09/02/2027",
        "Operações",
        "Compras de Mercadorias",
        "MARCHON BRASIL LTDA",
        -34.2,
        "A VENCER"
      ],
      [
        "09/02/2027",
        "Operações",
        "Compras de Mercadorias",
        "MARCHON BRASIL LTDA",
        -232.7,
        "A VENCER"
      ],
      [
        "09/02/2027",
        "Operações",
        "Compras de Mercadorias",
        "CARL ZEISS VISION BRASIL IND. OPTICA LTDA",
        -19.82,
        "A VENCER"
      ],
      [
        "07/02/2027",
        "Operações",
        "Compras de Mercadorias",
        "CARL ZEISS VISION BRASIL IND. OPTICA LTDA",
        -8.89,
        "A VENCER"
      ],
      [
        "05/02/2027",
        "Operações",
        "Compras de Mercadorias",
        "MARCHON BRASIL LTDA",
        -2373.23,
        "A VENCER"
      ],
      [
        "04/02/2027",
        "Operações",
        "Compras de Mercadorias",
        "CARL ZEISS VISION BRASIL IND. OPTICA LTDA",
        -53.07,
        "A VENCER"
      ],
      [
        "04/02/2027",
        "Operações",
        "Compras de Mercadorias",
        "CARL ZEISS VISION BRASIL IND. OPTICA LTDA",
        -42.88,
        "A VENCER"
      ],
      [
        "03/02/2027",
        "Operações",
        "Compras de Mercadorias",
        "CARL ZEISS VISION BRASIL IND. OPTICA LTDA",
        -7.44,
        "A VENCER"
      ],
      [
        "29/01/2027",
        "Operações",
        "Compras de Mercadorias",
        "CARL ZEISS VISION BRASIL IND. OPTICA LTDA",
        -58.16,
        "A VENCER"
      ],
      [
        "25/01/2027",
        "Operações",
        "Compras de Mercadorias",
        "CARL ZEISS VISION BRASIL IND. OPTICA LTDA",
        -18.35,
        "A VENCER"
      ],
      [
        "25/01/2027",
        "Operações",
        "Compras de Mercadorias",
        "CARL ZEISS VISION BRASIL IND. OPTICA LTDA",
        -31.08,
        "A VENCER"
      ],
      [
        "24/01/2027",
        "Operações",
        "Compras de Mercadorias",
        "CARL ZEISS VISION BRASIL IND. OPTICA LTDA",
        -79.25,
        "A VENCER"
      ],
      [
        "23/01/2027",
        "Operações",
        "Compras de Mercadorias",
        "CARL ZEISS VISION BRASIL IND. OPTICA LTDA",
        -18.36,
        "A VENCER"
      ],
      [
        "23/01/2027",
        "Operações",
        "Compras de Mercadorias",
        "CARL ZEISS VISION BRASIL IND. OPTICA LTDA",
        -31.8,
        "A VENCER"
      ],
      [
        "20/01/2027",
        "Operações",
        "Compras de Mercadorias",
        "MARCHON BRASIL LTDA",
        -22.22,
        "A VENCER"
      ],
      [
        "19/01/2027",
        "Operações",
        "Compras de Mercadorias",
        "CARL ZEISS VISION BRASIL IND. OPTICA LTDA",
        -16.18,
        "A VENCER"
      ],
      [
        "16/01/2027",
        "Operações",
        "Compras de Mercadorias",
        "MARCHON BRASIL LTDA",
        -27.16,
        "A VENCER"
      ],
      [
        "15/01/2027",
        "Operações",
        "Compras de Mercadorias",
        "CARL ZEISS VISION BRASIL IND. OPTICA LTDA",
        -11.07,
        "A VENCER"
      ],
      [
        "15/01/2027",
        "Operações",
        "Compras de Mercadorias",
        "CARL ZEISS VISION BRASIL IND. OPTICA LTDA",
        -20.64,
        "A VENCER"
      ],
      [
        "15/01/2027",
        "Operações",
        "Compras de Mercadorias",
        "CARL ZEISS VISION BRASIL IND. OPTICA LTDA",
        -66.97,
        "A VENCER"
      ],
      [
        "15/01/2027",
        "Operações",
        "Compras de Mercadorias",
        "CARL ZEISS VISION BRASIL IND. OPTICA LTDA",
        -53.43,
        "A VENCER"
      ],
      [
        "14/01/2027",
        "Operações",
        "Compras de Mercadorias",
        "CARL ZEISS VISION BRASIL IND. OPTICA LTDA",
        -76.35,
        "A VENCER"
      ],
      [
        "13/01/2027",
        "Operações",
        "Compras de Mercadorias",
        "CARL ZEISS VISION BRASIL IND. OPTICA LTDA",
        -19.8,
        "A VENCER"
      ],
      [
        "12/01/2027",
        "Operações",
        "Compras de Mercadorias",
        "CARL ZEISS VISION BRASIL IND. OPTICA LTDA",
        -40.54,
        "A VENCER"
      ],
      [
        "11/01/2027",
        "Operações",
        "Compras de Mercadorias",
        "CARL ZEISS VISION BRASIL IND. OPTICA LTDA",
        -9.43,
        "A VENCER"
      ],
      [
        "10/01/2027",
        "Operações",
        "Compras de Mercadorias",
        "MARCHON BRASIL LTDA",
        -34.2,
        "A VENCER"
      ],
      [
        "10/01/2027",
        "Operações",
        "Compras de Mercadorias",
        "MARCHON BRASIL LTDA",
        -232.7,
        "A VENCER"
      ],
      [
        "10/01/2027",
        "Operações",
        "Compras de Mercadorias",
        "CARL ZEISS VISION BRASIL IND. OPTICA LTDA",
        -19.82,
        "A VENCER"
      ],
      [
        "08/01/2027",
        "Operações",
        "Compras de Mercadorias",
        "CARL ZEISS VISION BRASIL IND. OPTICA LTDA",
        -8.89,
        "A VENCER"
      ],
      [
        "06/01/2027",
        "Operações",
        "Compras de Mercadorias",
        "MARCHON BRASIL LTDA",
        -2373.23,
        "A VENCER"
      ],
      [
        "05/01/2027",
        "Operações",
        "Compras de Mercadorias",
        "CARL ZEISS VISION BRASIL IND. OPTICA LTDA",
        -53.07,
        "A VENCER"
      ],
      [
        "05/01/2027",
        "Operações",
        "Compras de Mercadorias",
        "CARL ZEISS VISION BRASIL IND. OPTICA LTDA",
        -42.88,
        "A VENCER"
      ],
      [
        "04/01/2027",
        "Operações",
        "Compras de Mercadorias",
        "CARL ZEISS VISION BRASIL IND. OPTICA LTDA",
        -7.44,
        "A VENCER"
      ],
      [
        "30/12/2026",
        "Operações",
        "Compras de Mercadorias",
        "CARL ZEISS VISION BRASIL IND. OPTICA LTDA",
        -58.13,
        "A VENCER"
      ],
      [
        "27/12/2026",
        "Operações",
        "Compras de Mercadorias",
        "MARCOLIN BRASIL",
        -420.44,
        "A VENCER"
      ],
      [
        "26/12/2026",
        "Operações",
        "Compras de Mercadorias",
        "CARL ZEISS VISION BRASIL IND. OPTICA LTDA",
        -18.33,
        "A VENCER"
      ],
      [
        "26/12/2026",
        "Operações",
        "Compras de Mercadorias",
        "CARL ZEISS VISION BRASIL IND. OPTICA LTDA",
        -31.08,
        "A VENCER"
      ],
      [
        "25/12/2026",
        "Operações",
        "Compras de Mercadorias",
        "JUB2",
        -702.73,
        "A VENCER"
      ],
      [
        "25/12/2026",
        "Operações",
        "Compras de Mercadorias",
        "JUB2",
        -702.73,
        "A VENCER"
      ],
      [
        "25/12/2026",
        "Operações",
        "Compras de Mercadorias",
        "JUB2",
        -702.73,
        "A VENCER"
      ],
      [
        "25/12/2026",
        "Operações",
        "Compras de Mercadorias",
        "CARL ZEISS VISION BRASIL IND. OPTICA LTDA",
        -79.26,
        "A VENCER"
      ],
      [
        "24/12/2026",
        "Operações",
        "Compras de Mercadorias",
        "CARL ZEISS VISION BRASIL IND. OPTICA LTDA",
        -18.32,
        "A VENCER"
      ],
      [
        "24/12/2026",
        "Operações",
        "Compras de Mercadorias",
        "CARL ZEISS VISION BRASIL IND. OPTICA LTDA",
        -31.78,
        "A VENCER"
      ],
      [
        "21/12/2026",
        "Operações",
        "Compras de Mercadorias",
        "MARCHON BRASIL LTDA",
        -83.8,
        "A VENCER"
      ],
      [
        "21/12/2026",
        "Operações",
        "Compras de Mercadorias",
        "MARCHON BRASIL LTDA",
        -22.22,
        "A VENCER"
      ],
      [
        "21/12/2026",
        "Operações",
        "Compras de Mercadorias",
        "CD SUMARE (SP)",
        -217.91,
        "A VENCER"
      ],
      [
        "20/12/2026",
        "Operações",
        "Compras de Mercadorias",
        "CARL ZEISS VISION BRASIL IND. OPTICA LTDA",
        -16.18,
        "A VENCER"
      ],
      [
        "18/12/2026",
        "Operações",
        "Compras de Mercadorias",
        "CD SUMARE (SP)",
        -323.22,
        "A VENCER"
      ],
      [
        "18/12/2026",
        "Operações",
        "Compras de Mercadorias",
        "CD SUMARE (SP)",
        -312.04,
        "A VENCER"
      ],
      [
        "17/12/2026",
        "Operações",
        "Compras de Mercadorias",
        "MARCHON BRASIL LTDA",
        -889.87,
        "A VENCER"
      ],
      [
        "17/12/2026",
        "Operações",
        "Compras de Mercadorias",
        "MARCHON BRASIL LTDA",
        -27.16,
        "A VENCER"
      ],
      [
        "16/12/2026",
        "Operações",
        "Compras de Mercadorias",
        "CARL ZEISS VISION BRASIL IND. OPTICA LTDA",
        -11.03,
        "A VENCER"
      ],
      [
        "16/12/2026",
        "Operações",
        "Compras de Mercadorias",
        "CARL ZEISS VISION BRASIL IND. OPTICA LTDA",
        -20.65,
        "A VENCER"
      ],
      [
        "16/12/2026",
        "Operações",
        "Compras de Mercadorias",
        "CARL ZEISS VISION BRASIL IND. OPTICA LTDA",
        -66.95,
        "A VENCER"
      ],
      [
        "16/12/2026",
        "Operações",
        "Compras de Mercadorias",
        "CARL ZEISS VISION BRASIL IND. OPTICA LTDA",
        -53.47,
        "A VENCER"
      ],
      [
        "15/12/2026",
        "Operações",
        "Compras de Mercadorias",
        "CARL ZEISS VISION BRASIL IND. OPTICA LTDA",
        -76.39,
        "A VENCER"
      ],
      [
        "14/12/2026",
        "Operações",
        "Compras de Mercadorias",
        "CARL ZEISS VISION BRASIL IND. OPTICA LTDA",
        -19.76,
        "A VENCER"
      ],
      [
        "14/12/2026",
        "Operações",
        "Compras de Mercadorias",
        "CD SUMARE (SP)",
        -986.22,
        "A VENCER"
      ],
      [
        "14/12/2026",
        "Operações",
        "Compras de Mercadorias",
        "CD SUMARE (SP)",
        -277.92,
        "A VENCER"
      ],
      [
        "13/12/2026",
        "Operações",
        "Compras de Mercadorias",
        "CARL ZEISS VISION BRASIL IND. OPTICA LTDA",
        -40.55,
        "A VENCER"
      ],
      [
        "13/12/2026",
        "Operações",
        "Compras de Mercadorias",
        "CD SUMARE (SP)",
        -386.3,
        "A VENCER"
      ],
      [
        "13/12/2026",
        "Operações",
        "Compras de Mercadorias",
        "CD SUMARE (SP)",
        -728.09,
        "A VENCER"
      ],
      [
        "13/12/2026",
        "Operações",
        "Compras de Mercadorias",
        "CD SUMARE (SP)",
        -123.42,
        "A VENCER"
      ],
      [
        "12/12/2026",
        "Operações",
        "Compras de Mercadorias",
        "CARL ZEISS VISION BRASIL IND. OPTICA LTDA",
        -9.43,
        "A VENCER"
      ],
      [
        "12/12/2026",
        "Operações",
        "Compras de Mercadorias",
        "MARCHON BRASIL LTDA",
        -755.67,
        "A VENCER"
      ],
      [
        "11/12/2026",
        "Operações",
        "Compras de Mercadorias",
        "MARCHON BRASIL LTDA",
        -34.2,
        "A VENCER"
      ],
      [
        "11/12/2026",
        "Operações",
        "Compras de Mercadorias",
        "MARCHON BRASIL LTDA",
        -142.49,
        "A VENCER"
      ],
      [
        "11/12/2026",
        "Operações",
        "Compras de Mercadorias",
        "MARCHON BRASIL LTDA",
        -232.7,
        "A VENCER"
      ],
      [
        "11/12/2026",
        "Operações",
        "Compras de Mercadorias",
        "CARL ZEISS VISION BRASIL IND. OPTICA LTDA",
        -19.78,
        "A VENCER"
      ],
      [
        "09/12/2026",
        "Operações",
        "Compras de Mercadorias",
        "CARL ZEISS VISION BRASIL IND. OPTICA LTDA",
        -8.89,
        "A VENCER"
      ],
      [
        "07/12/2026",
        "Operações",
        "Compras de Mercadorias",
        "MARCHON BRASIL LTDA",
        -2373.23,
        "A VENCER"
      ],
      [
        "07/12/2026",
        "Operações",
        "Compras de Mercadorias",
        "MARCHON BRASIL LTDA",
        -5226.7,
        "A VENCER"
      ],
      [
        "06/12/2026",
        "Operações",
        "Compras de Mercadorias",
        "CARL ZEISS VISION BRASIL IND. OPTICA LTDA",
        -53.07,
        "A VENCER"
      ],
      [
        "06/12/2026",
        "Operações",
        "Compras de Mercadorias",
        "CARL ZEISS VISION BRASIL IND. OPTICA LTDA",
        -42.9,
        "A VENCER"
      ],
      [
        "06/12/2026",
        "Operações",
        "Compras de Mercadorias",
        "CD SUMARE (SP)",
        -123.42,
        "A VENCER"
      ],
      [
        "06/12/2026",
        "Operações",
        "Compras de Mercadorias",
        "CD SUMARE (SP)",
        -542.72,
        "A VENCER"
      ],
      [
        "05/12/2026",
        "Operações",
        "Compras de Mercadorias",
        "CARL ZEISS VISION BRASIL IND. OPTICA LTDA",
        -7.47,
        "A VENCER"
      ],
      [
        "05/12/2026",
        "Operações",
        "Compras de Mercadorias",
        "CD SUMARE (SP)",
        -738.18,
        "A VENCER"
      ],
      [
        "30/11/2026",
        "Operações",
        "Compras de Mercadorias",
        "CARL ZEISS VISION BRASIL IND. OPTICA LTDA",
        -58.16,
        "A VENCER"
      ],
      [
        "28/11/2026",
        "Operações",
        "Compras de Mercadorias",
        "MARCOLIN BRASIL",
        -393.56,
        "A VENCER"
      ],
      [
        "27/11/2026",
        "Operações",
        "Compras de Mercadorias",
        "MARCOLIN BRASIL",
        -419.28,
        "A VENCER"
      ],
      [
        "26/11/2026",
        "Operações",
        "Compras de Mercadorias",
        "CARL ZEISS VISION BRASIL IND. OPTICA LTDA",
        -18.35,
        "A VENCER"
      ],
      [
        "26/11/2026",
        "Operações",
        "Compras de Mercadorias",
        "CARL ZEISS VISION BRASIL IND. OPTICA LTDA",
        -31.08,
        "A VENCER"
      ],
      [
        "26/11/2026",
        "Operações",
        "Compras de Mercadorias",
        "SAFILO DO BRASIL LTDA.",
        -391.52,
        "A VENCER"
      ],
      [
        "26/11/2026",
        "Operações",
        "Compras de Mercadorias",
        "SAFILO DO BRASIL LTDA.",
        -242.7,
        "A VENCER"
      ],
      [
        "25/11/2026",
        "Operações",
        "Compras de Mercadorias",
        "JUB2",
        -702.77,
        "A VENCER"
      ],
      [
        "25/11/2026",
        "Operações",
        "Compras de Mercadorias",
        "JUB2",
        -702.77,
        "A VENCER"
      ],
      [
        "25/11/2026",
        "Operações",
        "Compras de Mercadorias",
        "JUB2",
        -702.77,
        "A VENCER"
      ],
      [
        "25/11/2026",
        "Operações",
        "Compras de Mercadorias",
        "CARL ZEISS VISION BRASIL IND. OPTICA LTDA",
        -79.25,
        "A VENCER"
      ],
      [
        "24/11/2026",
        "Operações",
        "Compras de Mercadorias",
        "CARL ZEISS VISION BRASIL IND. OPTICA LTDA",
        -18.36,
        "A VENCER"
      ],
      [
        "24/11/2026",
        "Operações",
        "Compras de Mercadorias",
        "CARL ZEISS VISION BRASIL IND. OPTICA LTDA",
        -31.8,
        "A VENCER"
      ],
      [
        "21/11/2026",
        "Operações",
        "Compras de Mercadorias",
        "MARCHON BRASIL LTDA",
        -83.79,
        "A VENCER"
      ],
      [
        "21/11/2026",
        "Operações",
        "Compras de Mercadorias",
        "MARCHON BRASIL LTDA",
        -22.22,
        "A VENCER"
      ],
      [
        "21/11/2026",
        "Operações",
        "Compras de Mercadorias",
        "CD SUMARE (SP)",
        -217.89,
        "A VENCER"
      ],
      [
        "20/11/2026",
        "Operações",
        "Compras de Mercadorias",
        "MARCOLIN BRASIL",
        -716.91,
        "A VENCER"
      ],
      [
        "20/11/2026",
        "Operações",
        "Compras de Mercadorias",
        "MARCOLIN BRASIL",
        -363.98,
        "A VENCER"
      ],
      [
        "20/11/2026",
        "Operações",
        "Compras de Mercadorias",
        "CARL ZEISS VISION BRASIL IND. OPTICA LTDA",
        -16.18,
        "A VENCER"
      ],
      [
        "18/11/2026",
        "Operações",
        "Compras de Mercadorias",
        "CD SUMARE (SP)",
        -323.14,
        "A VENCER"
      ],
      [
        "18/11/2026",
        "Operações",
        "Compras de Mercadorias",
        "CD SUMARE (SP)",
        -311.99,
        "A VENCER"
      ],
      [
        "17/11/2026",
        "Operações",
        "Compras de Mercadorias",
        "MARCHON BRASIL LTDA",
        -889.86,
        "A VENCER"
      ],
      [
        "17/11/2026",
        "Operações",
        "Compras de Mercadorias",
        "MARCHON BRASIL LTDA",
        -27.16,
        "A VENCER"
      ],
      [
        "16/11/2026",
        "Operações",
        "Compras de Mercadorias",
        "CARL ZEISS VISION BRASIL IND. OPTICA LTDA",
        -11.07,
        "A VENCER"
      ],
      [
        "16/11/2026",
        "Operações",
        "Compras de Mercadorias",
        "CARL ZEISS VISION BRASIL IND. OPTICA LTDA",
        -20.64,
        "A VENCER"
      ],
      [
        "16/11/2026",
        "Operações",
        "Compras de Mercadorias",
        "CARL ZEISS VISION BRASIL IND. OPTICA LTDA",
        -66.97,
        "A VENCER"
      ],
      [
        "16/11/2026",
        "Operações",
        "Compras de Mercadorias",
        "CARL ZEISS VISION BRASIL IND. OPTICA LTDA",
        -53.43,
        "A VENCER"
      ],
      [
        "15/11/2026",
        "Operações",
        "Compras de Mercadorias",
        "CARL ZEISS VISION BRASIL IND. OPTICA LTDA",
        -76.35,
        "A VENCER"
      ],
      [
        "15/11/2026",
        "Operações",
        "Compras de Mercadorias",
        "MARCOLIN BRASIL",
        -583.24,
        "A VENCER"
      ],
      [
        "14/11/2026",
        "Operações",
        "Compras de Mercadorias",
        "CARL ZEISS VISION BRASIL IND. OPTICA LTDA",
        -19.8,
        "A VENCER"
      ],
      [
        "14/11/2026",
        "Operações",
        "Compras de Mercadorias",
        "CD SUMARE (SP)",
        -985.87,
        "A VENCER"
      ],
      [
        "14/11/2026",
        "Operações",
        "Compras de Mercadorias",
        "CD SUMARE (SP)",
        -277.78,
        "A VENCER"
      ],
      [
        "13/11/2026",
        "Operações",
        "Compras de Mercadorias",
        "CARL ZEISS VISION BRASIL IND. OPTICA LTDA",
        -40.54,
        "A VENCER"
      ],
      [
        "13/11/2026",
        "Operações",
        "Compras de Mercadorias",
        "CD SUMARE (SP)",
        -386.21,
        "A VENCER"
      ],
      [
        "13/11/2026",
        "Operações",
        "Compras de Mercadorias",
        "CD SUMARE (SP)",
        -727.79,
        "A VENCER"
      ],
      [
        "13/11/2026",
        "Operações",
        "Compras de Mercadorias",
        "CD SUMARE (SP)",
        -123.39,
        "A VENCER"
      ],
      [
        "12/11/2026",
        "Operações",
        "Compras de Mercadorias",
        "CARL ZEISS VISION BRASIL IND. OPTICA LTDA",
        -9.43,
        "A VENCER"
      ],
      [
        "12/11/2026",
        "Operações",
        "Compras de Mercadorias",
        "MARCHON BRASIL LTDA",
        -755.66,
        "A VENCER"
      ],
      [
        "11/11/2026",
        "Operações",
        "Compras de Mercadorias",
        "MARCHON BRASIL LTDA",
        -34.2,
        "A VENCER"
      ],
      [
        "11/11/2026",
        "Operações",
        "Compras de Mercadorias",
        "MARCHON BRASIL LTDA",
        -142.5,
        "A VENCER"
      ],
      [
        "11/11/2026",
        "Operações",
        "Compras de Mercadorias",
        "MARCHON BRASIL LTDA",
        -232.7,
        "A VENCER"
      ],
      [
        "11/11/2026",
        "Operações",
        "Compras de Mercadorias",
        "CARL ZEISS VISION BRASIL IND. OPTICA LTDA",
        -19.82,
        "A VENCER"
      ],
      [
        "09/11/2026",
        "Operações",
        "Compras de Mercadorias",
        "CARL ZEISS VISION BRASIL IND. OPTICA LTDA",
        -8.89,
        "A VENCER"
      ],
      [
        "08/11/2026",
        "Operações",
        "Compras de Mercadorias",
        "MARCOLIN BRASIL",
        -388.78,
        "A VENCER"
      ],
      [
        "07/11/2026",
        "Operações",
        "Compras de Mercadorias",
        "MARCHON BRASIL LTDA",
        -2373.23,
        "A VENCER"
      ],
      [
        "07/11/2026",
        "Operações",
        "Compras de Mercadorias",
        "MARCHON BRASIL LTDA",
        -5226.71,
        "A VENCER"
      ],
      [
        "06/11/2026",
        "Operações",
        "Compras de Mercadorias",
        "CARL ZEISS VISION BRASIL IND. OPTICA LTDA",
        -53.07,
        "A VENCER"
      ],
      [
        "06/11/2026",
        "Operações",
        "Compras de Mercadorias",
        "CARL ZEISS VISION BRASIL IND. OPTICA LTDA",
        -42.88,
        "A VENCER"
      ],
      [
        "06/11/2026",
        "Operações",
        "Compras de Mercadorias",
        "CD SUMARE (SP)",
        -123.39,
        "A VENCER"
      ],
      [
        "06/11/2026",
        "Operações",
        "Compras de Mercadorias",
        "CD SUMARE (SP)",
        -542.55,
        "A VENCER"
      ],
      [
        "05/11/2026",
        "Operações",
        "Compras de Mercadorias",
        "CARL ZEISS VISION BRASIL IND. OPTICA LTDA",
        -7.44,
        "A VENCER"
      ],
      [
        "05/11/2026",
        "Operações",
        "Compras de Mercadorias",
        "CD SUMARE (SP)",
        -737.93,
        "A VENCER"
      ],
      [
        "31/10/2026",
        "Operações",
        "Compras de Mercadorias",
        "CD SUMARE (SP)",
        -82.27,
        "A VENCER"
      ],
      [
        "31/10/2026",
        "Operações",
        "Compras de Mercadorias",
        "CARL ZEISS VISION BRASIL IND. OPTICA LTDA",
        -58.16,
        "A VENCER"
      ],
      [
        "28/10/2026",
        "Operações",
        "Compras de Mercadorias",
        "Optotal Hoya Ltda",
        -53.4,
        "A VENCER"
      ],
      [
        "28/10/2026",
        "Operações",
        "Compras de Mercadorias",
        "Optotal Hoya Ltda",
        -85.2,
        "A VENCER"
      ],
      [
        "28/10/2026",
        "Operações",
        "Compras de Mercadorias",
        "Optotal Hoya Ltda",
        -185.9,
        "A VENCER"
      ],
      [
        "28/10/2026",
        "Operações",
        "Compras de Mercadorias",
        "MARCOLIN BRASIL",
        -393.55,
        "A VENCER"
      ],
      [
        "27/10/2026",
        "Operações",
        "Compras de Mercadorias",
        "CARL ZEISS VISION BRASIL IND. OPTICA LTDA",
        -18.35,
        "A VENCER"
      ],
      [
        "27/10/2026",
        "Operações",
        "Compras de Mercadorias",
        "CARL ZEISS VISION BRASIL IND. OPTICA LTDA",
        -31.08,
        "A VENCER"
      ],
      [
        "27/10/2026",
        "Operações",
        "Compras de Mercadorias",
        "MARCOLIN BRASIL",
        -419.28,
        "A VENCER"
      ],
      [
        "27/10/2026",
        "Operações",
        "Compras de Mercadorias",
        "SAFILO DO BRASIL LTDA.",
        -391.51,
        "A VENCER"
      ],
      [
        "27/10/2026",
        "Operações",
        "Compras de Mercadorias",
        "SAFILO DO BRASIL LTDA.",
        -242.72,
        "A VENCER"
      ],
      [
        "26/10/2026",
        "Operações",
        "Compras de Mercadorias",
        "JUB2",
        -702.77,
        "A VENCER"
      ],
      [
        "26/10/2026",
        "Operações",
        "Compras de Mercadorias",
        "JUB2",
        -702.77,
        "A VENCER"
      ],
      [
        "26/10/2026",
        "Operações",
        "Compras de Mercadorias",
        "JUB2",
        -702.77,
        "A VENCER"
      ],
      [
        "26/10/2026",
        "Operações",
        "Compras de Mercadorias",
        "CARL ZEISS VISION BRASIL IND. OPTICA LTDA",
        -79.25,
        "A VENCER"
      ],
      [
        "25/10/2026",
        "Operações",
        "Compras de Mercadorias",
        "CARL ZEISS VISION BRASIL IND. OPTICA LTDA",
        -18.36,
        "A VENCER"
      ],
      [
        "25/10/2026",
        "Operações",
        "Compras de Mercadorias",
        "CARL ZEISS VISION BRASIL IND. OPTICA LTDA",
        -31.8,
        "A VENCER"
      ],
      [
        "22/10/2026",
        "Operações",
        "Compras de Mercadorias",
        "MARCHON BRASIL LTDA",
        -83.79,
        "A VENCER"
      ],
      [
        "22/10/2026",
        "Operações",
        "Compras de Mercadorias",
        "MARCHON BRASIL LTDA",
        -22.22,
        "A VENCER"
      ],
      [
        "22/10/2026",
        "Operações",
        "Compras de Mercadorias",
        "CD SUMARE (SP)",
        -217.89,
        "A VENCER"
      ],
      [
        "21/10/2026",
        "Operações",
        "Compras de Mercadorias",
        "CARL ZEISS VISION BRASIL IND. OPTICA LTDA",
        -16.18,
        "A VENCER"
      ],
      [
        "20/10/2026",
        "Operações",
        "Compras de Mercadorias",
        "MARCOLIN BRASIL",
        -716.89,
        "A VENCER"
      ],
      [
        "20/10/2026",
        "Operações",
        "Compras de Mercadorias",
        "PRESTIGE EYEWEAR DISTRIBUIDORA DE OPTICOS",
        -395.98,
        "A VENCER"
      ],
      [
        "20/10/2026",
        "Operações",
        "Compras de Mercadorias",
        "MARCOLIN BRASIL",
        -364,
        "A VENCER"
      ],
      [
        "19/10/2026",
        "Operações",
        "Compras de Mercadorias",
        "CD SUMARE (SP)",
        -203.89,
        "A VENCER"
      ],
      [
        "19/10/2026",
        "Operações",
        "Compras de Mercadorias",
        "CD SUMARE (SP)",
        -323.14,
        "A VENCER"
      ],
      [
        "19/10/2026",
        "Operações",
        "Compras de Mercadorias",
        "CD SUMARE (SP)",
        -311.99,
        "A VENCER"
      ],
      [
        "18/10/2026",
        "Operações",
        "Compras de Mercadorias",
        "CD SUMARE (SP)",
        -135.89,
        "A VENCER"
      ],
      [
        "18/10/2026",
        "Operações",
        "Compras de Mercadorias",
        "MARCHON BRASIL LTDA",
        -889.86,
        "A VENCER"
      ],
      [
        "18/10/2026",
        "Operações",
        "Compras de Mercadorias",
        "MARCHON BRASIL LTDA",
        -27.16,
        "A VENCER"
      ],
      [
        "17/10/2026",
        "Operações",
        "Compras de Mercadorias",
        "CARL ZEISS VISION BRASIL IND. OPTICA LTDA",
        -11.07,
        "A VENCER"
      ],
      [
        "17/10/2026",
        "Operações",
        "Compras de Mercadorias",
        "CARL ZEISS VISION BRASIL IND. OPTICA LTDA",
        -20.64,
        "A VENCER"
      ],
      [
        "17/10/2026",
        "Operações",
        "Compras de Mercadorias",
        "CARL ZEISS VISION BRASIL IND. OPTICA LTDA",
        -66.97,
        "A VENCER"
      ],
      [
        "17/10/2026",
        "Operações",
        "Compras de Mercadorias",
        "CARL ZEISS VISION BRASIL IND. OPTICA LTDA",
        -53.43,
        "A VENCER"
      ],
      [
        "16/10/2026",
        "Operações",
        "Compras de Mercadorias",
        "CARL ZEISS VISION BRASIL IND. OPTICA LTDA",
        -76.35,
        "A VENCER"
      ],
      [
        "15/10/2026",
        "Operações",
        "Compras de Mercadorias",
        "CARL ZEISS VISION BRASIL IND. OPTICA LTDA",
        -19.8,
        "A VENCER"
      ],
      [
        "15/10/2026",
        "Operações",
        "Compras de Mercadorias",
        "CD SUMARE (SP)",
        -355.31,
        "A VENCER"
      ],
      [
        "15/10/2026",
        "Operações",
        "Compras de Mercadorias",
        "MARCOLIN BRASIL",
        -583.23,
        "A VENCER"
      ],
      [
        "15/10/2026",
        "Operações",
        "Compras de Mercadorias",
        "CD SUMARE (SP)",
        -985.87,
        "A VENCER"
      ],
      [
        "15/10/2026",
        "Operações",
        "Compras de Mercadorias",
        "CD SUMARE (SP)",
        -277.78,
        "A VENCER"
      ],
      [
        "14/10/2026",
        "Operações",
        "Compras de Mercadorias",
        "CARL ZEISS VISION BRASIL IND. OPTICA LTDA",
        -40.54,
        "A VENCER"
      ],
      [
        "14/10/2026",
        "Operações",
        "Compras de Mercadorias",
        "CD SUMARE (SP)",
        -386.21,
        "A VENCER"
      ],
      [
        "14/10/2026",
        "Operações",
        "Compras de Mercadorias",
        "CD SUMARE (SP)",
        -727.79,
        "A VENCER"
      ],
      [
        "14/10/2026",
        "Operações",
        "Compras de Mercadorias",
        "CD SUMARE (SP)",
        -123.39,
        "A VENCER"
      ],
      [
        "13/10/2026",
        "Operações",
        "Compras de Mercadorias",
        "CARL ZEISS VISION BRASIL IND. OPTICA LTDA",
        -9.43,
        "A VENCER"
      ]
    ],
    "EXTRATO_RECEITAS": [],
    "EXTRATO_DESPESAS": [
      [
        "10/04/2027",
        "Operações",
        "Compras de Mercadorias",
        "MARCHON BRASIL LTDA",
        -34.16,
        "A VENCER"
      ],
      [
        "21/03/2027",
        "Operações",
        "Compras de Mercadorias",
        "MARCHON BRASIL LTDA",
        -22.26,
        "A VENCER"
      ],
      [
        "17/03/2027",
        "Operações",
        "Compras de Mercadorias",
        "MARCHON BRASIL LTDA",
        -27.19,
        "A VENCER"
      ],
      [
        "11/03/2027",
        "Operações",
        "Compras de Mercadorias",
        "MARCHON BRASIL LTDA",
        -34.2,
        "A VENCER"
      ],
      [
        "11/03/2027",
        "Operações",
        "Compras de Mercadorias",
        "MARCHON BRASIL LTDA",
        -232.7,
        "A VENCER"
      ],
      [
        "07/03/2027",
        "Operações",
        "Compras de Mercadorias",
        "MARCHON BRASIL LTDA",
        -2373.22,
        "A VENCER"
      ],
      [
        "28/02/2027",
        "Operações",
        "Repasses",
        "DP1 RESTAURANTE LTDA",
        -847.46,
        "A VENCER"
      ],
      [
        "28/02/2027",
        "Operações",
        "Repasses",
        "DP1 RESTAURANTE LTDA",
        -1869.5,
        "A VENCER"
      ],
      [
        "28/02/2027",
        "Operações",
        "Compras de Mercadorias",
        "CARL ZEISS VISION BRASIL IND. OPTICA LTDA",
        -58.16,
        "A VENCER"
      ],
      [
        "24/02/2027",
        "Operações",
        "Compras de Mercadorias",
        "CARL ZEISS VISION BRASIL IND. OPTICA LTDA",
        -18.35,
        "A VENCER"
      ],
      [
        "24/02/2027",
        "Operações",
        "Compras de Mercadorias",
        "CARL ZEISS VISION BRASIL IND. OPTICA LTDA",
        -31.08,
        "A VENCER"
      ],
      [
        "23/02/2027",
        "Operações",
        "Compras de Mercadorias",
        "CARL ZEISS VISION BRASIL IND. OPTICA LTDA",
        -79.25,
        "A VENCER"
      ],
      [
        "22/02/2027",
        "Operações",
        "Compras de Mercadorias",
        "CARL ZEISS VISION BRASIL IND. OPTICA LTDA",
        -18.36,
        "A VENCER"
      ],
      [
        "22/02/2027",
        "Operações",
        "Compras de Mercadorias",
        "CARL ZEISS VISION BRASIL IND. OPTICA LTDA",
        -31.8,
        "A VENCER"
      ],
      [
        "19/02/2027",
        "Operações",
        "Compras de Mercadorias",
        "MARCHON BRASIL LTDA",
        -22.22,
        "A VENCER"
      ],
      [
        "18/02/2027",
        "Operações",
        "Compras de Mercadorias",
        "CARL ZEISS VISION BRASIL IND. OPTICA LTDA",
        -16.18,
        "A VENCER"
      ],
      [
        "15/02/2027",
        "Operações",
        "Compras de Mercadorias",
        "MARCHON BRASIL LTDA",
        -27.16,
        "A VENCER"
      ],
      [
        "14/02/2027",
        "Operações",
        "Compras de Mercadorias",
        "CARL ZEISS VISION BRASIL IND. OPTICA LTDA",
        -11.07,
        "A VENCER"
      ],
      [
        "14/02/2027",
        "Operações",
        "Compras de Mercadorias",
        "CARL ZEISS VISION BRASIL IND. OPTICA LTDA",
        -20.64,
        "A VENCER"
      ],
      [
        "14/02/2027",
        "Operações",
        "Compras de Mercadorias",
        "CARL ZEISS VISION BRASIL IND. OPTICA LTDA",
        -66.97,
        "A VENCER"
      ],
      [
        "14/02/2027",
        "Operações",
        "Compras de Mercadorias",
        "CARL ZEISS VISION BRASIL IND. OPTICA LTDA",
        -53.43,
        "A VENCER"
      ],
      [
        "13/02/2027",
        "Operações",
        "Compras de Mercadorias",
        "CARL ZEISS VISION BRASIL IND. OPTICA LTDA",
        -76.35,
        "A VENCER"
      ],
      [
        "12/02/2027",
        "Operações",
        "Compras de Mercadorias",
        "CARL ZEISS VISION BRASIL IND. OPTICA LTDA",
        -19.8,
        "A VENCER"
      ],
      [
        "11/02/2027",
        "Operações",
        "Compras de Mercadorias",
        "CARL ZEISS VISION BRASIL IND. OPTICA LTDA",
        -40.54,
        "A VENCER"
      ],
      [
        "10/02/2027",
        "Operações",
        "Compras de Mercadorias",
        "CARL ZEISS VISION BRASIL IND. OPTICA LTDA",
        -9.43,
        "A VENCER"
      ],
      [
        "09/02/2027",
        "Operações",
        "Compras de Mercadorias",
        "MARCHON BRASIL LTDA",
        -34.2,
        "A VENCER"
      ],
      [
        "09/02/2027",
        "Operações",
        "Compras de Mercadorias",
        "MARCHON BRASIL LTDA",
        -232.7,
        "A VENCER"
      ],
      [
        "09/02/2027",
        "Operações",
        "Compras de Mercadorias",
        "CARL ZEISS VISION BRASIL IND. OPTICA LTDA",
        -19.82,
        "A VENCER"
      ],
      [
        "07/02/2027",
        "Operações",
        "Compras de Mercadorias",
        "CARL ZEISS VISION BRASIL IND. OPTICA LTDA",
        -8.89,
        "A VENCER"
      ],
      [
        "05/02/2027",
        "Operações",
        "Compras de Mercadorias",
        "MARCHON BRASIL LTDA",
        -2373.23,
        "A VENCER"
      ],
      [
        "04/02/2027",
        "Operações",
        "Compras de Mercadorias",
        "CARL ZEISS VISION BRASIL IND. OPTICA LTDA",
        -53.07,
        "A VENCER"
      ],
      [
        "04/02/2027",
        "Operações",
        "Compras de Mercadorias",
        "CARL ZEISS VISION BRASIL IND. OPTICA LTDA",
        -42.88,
        "A VENCER"
      ],
      [
        "03/02/2027",
        "Operações",
        "Compras de Mercadorias",
        "CARL ZEISS VISION BRASIL IND. OPTICA LTDA",
        -7.44,
        "A VENCER"
      ],
      [
        "29/01/2027",
        "Operações",
        "Compras de Mercadorias",
        "CARL ZEISS VISION BRASIL IND. OPTICA LTDA",
        -58.16,
        "A VENCER"
      ],
      [
        "25/01/2027",
        "Operações",
        "Compras de Mercadorias",
        "CARL ZEISS VISION BRASIL IND. OPTICA LTDA",
        -18.35,
        "A VENCER"
      ],
      [
        "25/01/2027",
        "Operações",
        "Compras de Mercadorias",
        "CARL ZEISS VISION BRASIL IND. OPTICA LTDA",
        -31.08,
        "A VENCER"
      ],
      [
        "24/01/2027",
        "Operações",
        "Compras de Mercadorias",
        "CARL ZEISS VISION BRASIL IND. OPTICA LTDA",
        -79.25,
        "A VENCER"
      ],
      [
        "23/01/2027",
        "Operações",
        "Compras de Mercadorias",
        "CARL ZEISS VISION BRASIL IND. OPTICA LTDA",
        -18.36,
        "A VENCER"
      ],
      [
        "23/01/2027",
        "Operações",
        "Compras de Mercadorias",
        "CARL ZEISS VISION BRASIL IND. OPTICA LTDA",
        -31.8,
        "A VENCER"
      ],
      [
        "20/01/2027",
        "Operações",
        "Compras de Mercadorias",
        "MARCHON BRASIL LTDA",
        -22.22,
        "A VENCER"
      ],
      [
        "19/01/2027",
        "Operações",
        "Compras de Mercadorias",
        "CARL ZEISS VISION BRASIL IND. OPTICA LTDA",
        -16.18,
        "A VENCER"
      ],
      [
        "16/01/2027",
        "Operações",
        "Compras de Mercadorias",
        "MARCHON BRASIL LTDA",
        -27.16,
        "A VENCER"
      ],
      [
        "15/01/2027",
        "Operações",
        "Compras de Mercadorias",
        "CARL ZEISS VISION BRASIL IND. OPTICA LTDA",
        -11.07,
        "A VENCER"
      ],
      [
        "15/01/2027",
        "Operações",
        "Compras de Mercadorias",
        "CARL ZEISS VISION BRASIL IND. OPTICA LTDA",
        -20.64,
        "A VENCER"
      ],
      [
        "15/01/2027",
        "Operações",
        "Compras de Mercadorias",
        "CARL ZEISS VISION BRASIL IND. OPTICA LTDA",
        -66.97,
        "A VENCER"
      ],
      [
        "15/01/2027",
        "Operações",
        "Compras de Mercadorias",
        "CARL ZEISS VISION BRASIL IND. OPTICA LTDA",
        -53.43,
        "A VENCER"
      ],
      [
        "14/01/2027",
        "Operações",
        "Compras de Mercadorias",
        "CARL ZEISS VISION BRASIL IND. OPTICA LTDA",
        -76.35,
        "A VENCER"
      ],
      [
        "13/01/2027",
        "Operações",
        "Compras de Mercadorias",
        "CARL ZEISS VISION BRASIL IND. OPTICA LTDA",
        -19.8,
        "A VENCER"
      ],
      [
        "12/01/2027",
        "Operações",
        "Compras de Mercadorias",
        "CARL ZEISS VISION BRASIL IND. OPTICA LTDA",
        -40.54,
        "A VENCER"
      ],
      [
        "11/01/2027",
        "Operações",
        "Compras de Mercadorias",
        "CARL ZEISS VISION BRASIL IND. OPTICA LTDA",
        -9.43,
        "A VENCER"
      ],
      [
        "10/01/2027",
        "Operações",
        "Compras de Mercadorias",
        "MARCHON BRASIL LTDA",
        -34.2,
        "A VENCER"
      ],
      [
        "10/01/2027",
        "Operações",
        "Compras de Mercadorias",
        "MARCHON BRASIL LTDA",
        -232.7,
        "A VENCER"
      ],
      [
        "10/01/2027",
        "Operações",
        "Compras de Mercadorias",
        "CARL ZEISS VISION BRASIL IND. OPTICA LTDA",
        -19.82,
        "A VENCER"
      ],
      [
        "08/01/2027",
        "Operações",
        "Compras de Mercadorias",
        "CARL ZEISS VISION BRASIL IND. OPTICA LTDA",
        -8.89,
        "A VENCER"
      ],
      [
        "06/01/2027",
        "Operações",
        "Compras de Mercadorias",
        "MARCHON BRASIL LTDA",
        -2373.23,
        "A VENCER"
      ],
      [
        "05/01/2027",
        "Operações",
        "Compras de Mercadorias",
        "CARL ZEISS VISION BRASIL IND. OPTICA LTDA",
        -53.07,
        "A VENCER"
      ],
      [
        "05/01/2027",
        "Operações",
        "Compras de Mercadorias",
        "CARL ZEISS VISION BRASIL IND. OPTICA LTDA",
        -42.88,
        "A VENCER"
      ],
      [
        "04/01/2027",
        "Operações",
        "Compras de Mercadorias",
        "CARL ZEISS VISION BRASIL IND. OPTICA LTDA",
        -7.44,
        "A VENCER"
      ],
      [
        "30/12/2026",
        "Operações",
        "Compras de Mercadorias",
        "CARL ZEISS VISION BRASIL IND. OPTICA LTDA",
        -58.13,
        "A VENCER"
      ],
      [
        "27/12/2026",
        "Operações",
        "Compras de Mercadorias",
        "MARCOLIN BRASIL",
        -420.44,
        "A VENCER"
      ],
      [
        "26/12/2026",
        "Operações",
        "Compras de Mercadorias",
        "CARL ZEISS VISION BRASIL IND. OPTICA LTDA",
        -18.33,
        "A VENCER"
      ],
      [
        "26/12/2026",
        "Operações",
        "Compras de Mercadorias",
        "CARL ZEISS VISION BRASIL IND. OPTICA LTDA",
        -31.08,
        "A VENCER"
      ],
      [
        "25/12/2026",
        "Operações",
        "Compras de Mercadorias",
        "JUB2",
        -702.73,
        "A VENCER"
      ],
      [
        "25/12/2026",
        "Operações",
        "Compras de Mercadorias",
        "JUB2",
        -702.73,
        "A VENCER"
      ],
      [
        "25/12/2026",
        "Operações",
        "Compras de Mercadorias",
        "JUB2",
        -702.73,
        "A VENCER"
      ],
      [
        "25/12/2026",
        "Operações",
        "Compras de Mercadorias",
        "CARL ZEISS VISION BRASIL IND. OPTICA LTDA",
        -79.26,
        "A VENCER"
      ],
      [
        "24/12/2026",
        "Operações",
        "Compras de Mercadorias",
        "CARL ZEISS VISION BRASIL IND. OPTICA LTDA",
        -18.32,
        "A VENCER"
      ],
      [
        "24/12/2026",
        "Operações",
        "Compras de Mercadorias",
        "CARL ZEISS VISION BRASIL IND. OPTICA LTDA",
        -31.78,
        "A VENCER"
      ],
      [
        "21/12/2026",
        "Operações",
        "Compras de Mercadorias",
        "MARCHON BRASIL LTDA",
        -83.8,
        "A VENCER"
      ],
      [
        "21/12/2026",
        "Operações",
        "Compras de Mercadorias",
        "MARCHON BRASIL LTDA",
        -22.22,
        "A VENCER"
      ],
      [
        "21/12/2026",
        "Operações",
        "Compras de Mercadorias",
        "CD SUMARE (SP)",
        -217.91,
        "A VENCER"
      ],
      [
        "20/12/2026",
        "Operações",
        "Compras de Mercadorias",
        "CARL ZEISS VISION BRASIL IND. OPTICA LTDA",
        -16.18,
        "A VENCER"
      ],
      [
        "18/12/2026",
        "Operações",
        "Compras de Mercadorias",
        "CD SUMARE (SP)",
        -323.22,
        "A VENCER"
      ],
      [
        "18/12/2026",
        "Operações",
        "Compras de Mercadorias",
        "CD SUMARE (SP)",
        -312.04,
        "A VENCER"
      ],
      [
        "17/12/2026",
        "Operações",
        "Compras de Mercadorias",
        "MARCHON BRASIL LTDA",
        -889.87,
        "A VENCER"
      ],
      [
        "17/12/2026",
        "Operações",
        "Compras de Mercadorias",
        "MARCHON BRASIL LTDA",
        -27.16,
        "A VENCER"
      ],
      [
        "16/12/2026",
        "Operações",
        "Compras de Mercadorias",
        "CARL ZEISS VISION BRASIL IND. OPTICA LTDA",
        -11.03,
        "A VENCER"
      ],
      [
        "16/12/2026",
        "Operações",
        "Compras de Mercadorias",
        "CARL ZEISS VISION BRASIL IND. OPTICA LTDA",
        -20.65,
        "A VENCER"
      ],
      [
        "16/12/2026",
        "Operações",
        "Compras de Mercadorias",
        "CARL ZEISS VISION BRASIL IND. OPTICA LTDA",
        -66.95,
        "A VENCER"
      ],
      [
        "16/12/2026",
        "Operações",
        "Compras de Mercadorias",
        "CARL ZEISS VISION BRASIL IND. OPTICA LTDA",
        -53.47,
        "A VENCER"
      ],
      [
        "15/12/2026",
        "Operações",
        "Compras de Mercadorias",
        "CARL ZEISS VISION BRASIL IND. OPTICA LTDA",
        -76.39,
        "A VENCER"
      ],
      [
        "14/12/2026",
        "Operações",
        "Compras de Mercadorias",
        "CARL ZEISS VISION BRASIL IND. OPTICA LTDA",
        -19.76,
        "A VENCER"
      ],
      [
        "14/12/2026",
        "Operações",
        "Compras de Mercadorias",
        "CD SUMARE (SP)",
        -986.22,
        "A VENCER"
      ],
      [
        "14/12/2026",
        "Operações",
        "Compras de Mercadorias",
        "CD SUMARE (SP)",
        -277.92,
        "A VENCER"
      ],
      [
        "13/12/2026",
        "Operações",
        "Compras de Mercadorias",
        "CARL ZEISS VISION BRASIL IND. OPTICA LTDA",
        -40.55,
        "A VENCER"
      ],
      [
        "13/12/2026",
        "Operações",
        "Compras de Mercadorias",
        "CD SUMARE (SP)",
        -386.3,
        "A VENCER"
      ],
      [
        "13/12/2026",
        "Operações",
        "Compras de Mercadorias",
        "CD SUMARE (SP)",
        -728.09,
        "A VENCER"
      ],
      [
        "13/12/2026",
        "Operações",
        "Compras de Mercadorias",
        "CD SUMARE (SP)",
        -123.42,
        "A VENCER"
      ],
      [
        "12/12/2026",
        "Operações",
        "Compras de Mercadorias",
        "CARL ZEISS VISION BRASIL IND. OPTICA LTDA",
        -9.43,
        "A VENCER"
      ],
      [
        "12/12/2026",
        "Operações",
        "Compras de Mercadorias",
        "MARCHON BRASIL LTDA",
        -755.67,
        "A VENCER"
      ],
      [
        "11/12/2026",
        "Operações",
        "Compras de Mercadorias",
        "MARCHON BRASIL LTDA",
        -34.2,
        "A VENCER"
      ],
      [
        "11/12/2026",
        "Operações",
        "Compras de Mercadorias",
        "MARCHON BRASIL LTDA",
        -142.49,
        "A VENCER"
      ],
      [
        "11/12/2026",
        "Operações",
        "Compras de Mercadorias",
        "MARCHON BRASIL LTDA",
        -232.7,
        "A VENCER"
      ],
      [
        "11/12/2026",
        "Operações",
        "Compras de Mercadorias",
        "CARL ZEISS VISION BRASIL IND. OPTICA LTDA",
        -19.78,
        "A VENCER"
      ],
      [
        "09/12/2026",
        "Operações",
        "Compras de Mercadorias",
        "CARL ZEISS VISION BRASIL IND. OPTICA LTDA",
        -8.89,
        "A VENCER"
      ],
      [
        "07/12/2026",
        "Operações",
        "Compras de Mercadorias",
        "MARCHON BRASIL LTDA",
        -2373.23,
        "A VENCER"
      ],
      [
        "07/12/2026",
        "Operações",
        "Compras de Mercadorias",
        "MARCHON BRASIL LTDA",
        -5226.7,
        "A VENCER"
      ],
      [
        "06/12/2026",
        "Operações",
        "Compras de Mercadorias",
        "CARL ZEISS VISION BRASIL IND. OPTICA LTDA",
        -53.07,
        "A VENCER"
      ],
      [
        "06/12/2026",
        "Operações",
        "Compras de Mercadorias",
        "CARL ZEISS VISION BRASIL IND. OPTICA LTDA",
        -42.9,
        "A VENCER"
      ],
      [
        "06/12/2026",
        "Operações",
        "Compras de Mercadorias",
        "CD SUMARE (SP)",
        -123.42,
        "A VENCER"
      ],
      [
        "06/12/2026",
        "Operações",
        "Compras de Mercadorias",
        "CD SUMARE (SP)",
        -542.72,
        "A VENCER"
      ],
      [
        "05/12/2026",
        "Operações",
        "Compras de Mercadorias",
        "CARL ZEISS VISION BRASIL IND. OPTICA LTDA",
        -7.47,
        "A VENCER"
      ],
      [
        "05/12/2026",
        "Operações",
        "Compras de Mercadorias",
        "CD SUMARE (SP)",
        -738.18,
        "A VENCER"
      ],
      [
        "30/11/2026",
        "Operações",
        "Compras de Mercadorias",
        "CARL ZEISS VISION BRASIL IND. OPTICA LTDA",
        -58.16,
        "A VENCER"
      ],
      [
        "28/11/2026",
        "Operações",
        "Compras de Mercadorias",
        "MARCOLIN BRASIL",
        -393.56,
        "A VENCER"
      ],
      [
        "27/11/2026",
        "Operações",
        "Compras de Mercadorias",
        "MARCOLIN BRASIL",
        -419.28,
        "A VENCER"
      ],
      [
        "26/11/2026",
        "Operações",
        "Compras de Mercadorias",
        "CARL ZEISS VISION BRASIL IND. OPTICA LTDA",
        -18.35,
        "A VENCER"
      ],
      [
        "26/11/2026",
        "Operações",
        "Compras de Mercadorias",
        "CARL ZEISS VISION BRASIL IND. OPTICA LTDA",
        -31.08,
        "A VENCER"
      ],
      [
        "26/11/2026",
        "Operações",
        "Compras de Mercadorias",
        "SAFILO DO BRASIL LTDA.",
        -391.52,
        "A VENCER"
      ],
      [
        "26/11/2026",
        "Operações",
        "Compras de Mercadorias",
        "SAFILO DO BRASIL LTDA.",
        -242.7,
        "A VENCER"
      ],
      [
        "25/11/2026",
        "Operações",
        "Compras de Mercadorias",
        "JUB2",
        -702.77,
        "A VENCER"
      ],
      [
        "25/11/2026",
        "Operações",
        "Compras de Mercadorias",
        "JUB2",
        -702.77,
        "A VENCER"
      ],
      [
        "25/11/2026",
        "Operações",
        "Compras de Mercadorias",
        "JUB2",
        -702.77,
        "A VENCER"
      ],
      [
        "25/11/2026",
        "Operações",
        "Compras de Mercadorias",
        "CARL ZEISS VISION BRASIL IND. OPTICA LTDA",
        -79.25,
        "A VENCER"
      ],
      [
        "24/11/2026",
        "Operações",
        "Compras de Mercadorias",
        "CARL ZEISS VISION BRASIL IND. OPTICA LTDA",
        -18.36,
        "A VENCER"
      ],
      [
        "24/11/2026",
        "Operações",
        "Compras de Mercadorias",
        "CARL ZEISS VISION BRASIL IND. OPTICA LTDA",
        -31.8,
        "A VENCER"
      ],
      [
        "21/11/2026",
        "Operações",
        "Compras de Mercadorias",
        "MARCHON BRASIL LTDA",
        -83.79,
        "A VENCER"
      ],
      [
        "21/11/2026",
        "Operações",
        "Compras de Mercadorias",
        "MARCHON BRASIL LTDA",
        -22.22,
        "A VENCER"
      ],
      [
        "21/11/2026",
        "Operações",
        "Compras de Mercadorias",
        "CD SUMARE (SP)",
        -217.89,
        "A VENCER"
      ],
      [
        "20/11/2026",
        "Operações",
        "Compras de Mercadorias",
        "MARCOLIN BRASIL",
        -716.91,
        "A VENCER"
      ],
      [
        "20/11/2026",
        "Operações",
        "Compras de Mercadorias",
        "MARCOLIN BRASIL",
        -363.98,
        "A VENCER"
      ],
      [
        "20/11/2026",
        "Operações",
        "Compras de Mercadorias",
        "CARL ZEISS VISION BRASIL IND. OPTICA LTDA",
        -16.18,
        "A VENCER"
      ],
      [
        "18/11/2026",
        "Operações",
        "Compras de Mercadorias",
        "CD SUMARE (SP)",
        -323.14,
        "A VENCER"
      ],
      [
        "18/11/2026",
        "Operações",
        "Compras de Mercadorias",
        "CD SUMARE (SP)",
        -311.99,
        "A VENCER"
      ],
      [
        "17/11/2026",
        "Operações",
        "Compras de Mercadorias",
        "MARCHON BRASIL LTDA",
        -889.86,
        "A VENCER"
      ],
      [
        "17/11/2026",
        "Operações",
        "Compras de Mercadorias",
        "MARCHON BRASIL LTDA",
        -27.16,
        "A VENCER"
      ],
      [
        "16/11/2026",
        "Operações",
        "Compras de Mercadorias",
        "CARL ZEISS VISION BRASIL IND. OPTICA LTDA",
        -11.07,
        "A VENCER"
      ],
      [
        "16/11/2026",
        "Operações",
        "Compras de Mercadorias",
        "CARL ZEISS VISION BRASIL IND. OPTICA LTDA",
        -20.64,
        "A VENCER"
      ],
      [
        "16/11/2026",
        "Operações",
        "Compras de Mercadorias",
        "CARL ZEISS VISION BRASIL IND. OPTICA LTDA",
        -66.97,
        "A VENCER"
      ],
      [
        "16/11/2026",
        "Operações",
        "Compras de Mercadorias",
        "CARL ZEISS VISION BRASIL IND. OPTICA LTDA",
        -53.43,
        "A VENCER"
      ],
      [
        "15/11/2026",
        "Operações",
        "Compras de Mercadorias",
        "CARL ZEISS VISION BRASIL IND. OPTICA LTDA",
        -76.35,
        "A VENCER"
      ],
      [
        "15/11/2026",
        "Operações",
        "Compras de Mercadorias",
        "MARCOLIN BRASIL",
        -583.24,
        "A VENCER"
      ],
      [
        "14/11/2026",
        "Operações",
        "Compras de Mercadorias",
        "CARL ZEISS VISION BRASIL IND. OPTICA LTDA",
        -19.8,
        "A VENCER"
      ],
      [
        "14/11/2026",
        "Operações",
        "Compras de Mercadorias",
        "CD SUMARE (SP)",
        -985.87,
        "A VENCER"
      ],
      [
        "14/11/2026",
        "Operações",
        "Compras de Mercadorias",
        "CD SUMARE (SP)",
        -277.78,
        "A VENCER"
      ],
      [
        "13/11/2026",
        "Operações",
        "Compras de Mercadorias",
        "CARL ZEISS VISION BRASIL IND. OPTICA LTDA",
        -40.54,
        "A VENCER"
      ],
      [
        "13/11/2026",
        "Operações",
        "Compras de Mercadorias",
        "CD SUMARE (SP)",
        -386.21,
        "A VENCER"
      ],
      [
        "13/11/2026",
        "Operações",
        "Compras de Mercadorias",
        "CD SUMARE (SP)",
        -727.79,
        "A VENCER"
      ],
      [
        "13/11/2026",
        "Operações",
        "Compras de Mercadorias",
        "CD SUMARE (SP)",
        -123.39,
        "A VENCER"
      ],
      [
        "12/11/2026",
        "Operações",
        "Compras de Mercadorias",
        "CARL ZEISS VISION BRASIL IND. OPTICA LTDA",
        -9.43,
        "A VENCER"
      ],
      [
        "12/11/2026",
        "Operações",
        "Compras de Mercadorias",
        "MARCHON BRASIL LTDA",
        -755.66,
        "A VENCER"
      ],
      [
        "11/11/2026",
        "Operações",
        "Compras de Mercadorias",
        "MARCHON BRASIL LTDA",
        -34.2,
        "A VENCER"
      ],
      [
        "11/11/2026",
        "Operações",
        "Compras de Mercadorias",
        "MARCHON BRASIL LTDA",
        -142.5,
        "A VENCER"
      ],
      [
        "11/11/2026",
        "Operações",
        "Compras de Mercadorias",
        "MARCHON BRASIL LTDA",
        -232.7,
        "A VENCER"
      ],
      [
        "11/11/2026",
        "Operações",
        "Compras de Mercadorias",
        "CARL ZEISS VISION BRASIL IND. OPTICA LTDA",
        -19.82,
        "A VENCER"
      ],
      [
        "09/11/2026",
        "Operações",
        "Compras de Mercadorias",
        "CARL ZEISS VISION BRASIL IND. OPTICA LTDA",
        -8.89,
        "A VENCER"
      ],
      [
        "08/11/2026",
        "Operações",
        "Compras de Mercadorias",
        "MARCOLIN BRASIL",
        -388.78,
        "A VENCER"
      ],
      [
        "07/11/2026",
        "Operações",
        "Compras de Mercadorias",
        "MARCHON BRASIL LTDA",
        -2373.23,
        "A VENCER"
      ],
      [
        "07/11/2026",
        "Operações",
        "Compras de Mercadorias",
        "MARCHON BRASIL LTDA",
        -5226.71,
        "A VENCER"
      ],
      [
        "06/11/2026",
        "Operações",
        "Compras de Mercadorias",
        "CARL ZEISS VISION BRASIL IND. OPTICA LTDA",
        -53.07,
        "A VENCER"
      ],
      [
        "06/11/2026",
        "Operações",
        "Compras de Mercadorias",
        "CARL ZEISS VISION BRASIL IND. OPTICA LTDA",
        -42.88,
        "A VENCER"
      ],
      [
        "06/11/2026",
        "Operações",
        "Compras de Mercadorias",
        "CD SUMARE (SP)",
        -123.39,
        "A VENCER"
      ],
      [
        "06/11/2026",
        "Operações",
        "Compras de Mercadorias",
        "CD SUMARE (SP)",
        -542.55,
        "A VENCER"
      ],
      [
        "05/11/2026",
        "Operações",
        "Compras de Mercadorias",
        "CARL ZEISS VISION BRASIL IND. OPTICA LTDA",
        -7.44,
        "A VENCER"
      ],
      [
        "05/11/2026",
        "Operações",
        "Compras de Mercadorias",
        "CD SUMARE (SP)",
        -737.93,
        "A VENCER"
      ],
      [
        "31/10/2026",
        "Operações",
        "Compras de Mercadorias",
        "CD SUMARE (SP)",
        -82.27,
        "A VENCER"
      ],
      [
        "31/10/2026",
        "Operações",
        "Compras de Mercadorias",
        "CARL ZEISS VISION BRASIL IND. OPTICA LTDA",
        -58.16,
        "A VENCER"
      ],
      [
        "28/10/2026",
        "Operações",
        "Compras de Mercadorias",
        "Optotal Hoya Ltda",
        -53.4,
        "A VENCER"
      ],
      [
        "28/10/2026",
        "Operações",
        "Compras de Mercadorias",
        "Optotal Hoya Ltda",
        -85.2,
        "A VENCER"
      ],
      [
        "28/10/2026",
        "Operações",
        "Compras de Mercadorias",
        "Optotal Hoya Ltda",
        -185.9,
        "A VENCER"
      ],
      [
        "28/10/2026",
        "Operações",
        "Compras de Mercadorias",
        "MARCOLIN BRASIL",
        -393.55,
        "A VENCER"
      ],
      [
        "27/10/2026",
        "Operações",
        "Compras de Mercadorias",
        "CARL ZEISS VISION BRASIL IND. OPTICA LTDA",
        -18.35,
        "A VENCER"
      ],
      [
        "27/10/2026",
        "Operações",
        "Compras de Mercadorias",
        "CARL ZEISS VISION BRASIL IND. OPTICA LTDA",
        -31.08,
        "A VENCER"
      ],
      [
        "27/10/2026",
        "Operações",
        "Compras de Mercadorias",
        "MARCOLIN BRASIL",
        -419.28,
        "A VENCER"
      ],
      [
        "27/10/2026",
        "Operações",
        "Compras de Mercadorias",
        "SAFILO DO BRASIL LTDA.",
        -391.51,
        "A VENCER"
      ],
      [
        "27/10/2026",
        "Operações",
        "Compras de Mercadorias",
        "SAFILO DO BRASIL LTDA.",
        -242.72,
        "A VENCER"
      ],
      [
        "26/10/2026",
        "Operações",
        "Compras de Mercadorias",
        "JUB2",
        -702.77,
        "A VENCER"
      ],
      [
        "26/10/2026",
        "Operações",
        "Compras de Mercadorias",
        "JUB2",
        -702.77,
        "A VENCER"
      ],
      [
        "26/10/2026",
        "Operações",
        "Compras de Mercadorias",
        "JUB2",
        -702.77,
        "A VENCER"
      ],
      [
        "26/10/2026",
        "Operações",
        "Compras de Mercadorias",
        "CARL ZEISS VISION BRASIL IND. OPTICA LTDA",
        -79.25,
        "A VENCER"
      ],
      [
        "25/10/2026",
        "Operações",
        "Compras de Mercadorias",
        "CARL ZEISS VISION BRASIL IND. OPTICA LTDA",
        -18.36,
        "A VENCER"
      ],
      [
        "25/10/2026",
        "Operações",
        "Compras de Mercadorias",
        "CARL ZEISS VISION BRASIL IND. OPTICA LTDA",
        -31.8,
        "A VENCER"
      ],
      [
        "22/10/2026",
        "Operações",
        "Compras de Mercadorias",
        "MARCHON BRASIL LTDA",
        -83.79,
        "A VENCER"
      ],
      [
        "22/10/2026",
        "Operações",
        "Compras de Mercadorias",
        "MARCHON BRASIL LTDA",
        -22.22,
        "A VENCER"
      ],
      [
        "22/10/2026",
        "Operações",
        "Compras de Mercadorias",
        "CD SUMARE (SP)",
        -217.89,
        "A VENCER"
      ],
      [
        "21/10/2026",
        "Operações",
        "Compras de Mercadorias",
        "CARL ZEISS VISION BRASIL IND. OPTICA LTDA",
        -16.18,
        "A VENCER"
      ],
      [
        "20/10/2026",
        "Operações",
        "Compras de Mercadorias",
        "MARCOLIN BRASIL",
        -716.89,
        "A VENCER"
      ],
      [
        "20/10/2026",
        "Operações",
        "Compras de Mercadorias",
        "PRESTIGE EYEWEAR DISTRIBUIDORA DE OPTICOS",
        -395.98,
        "A VENCER"
      ],
      [
        "20/10/2026",
        "Operações",
        "Compras de Mercadorias",
        "MARCOLIN BRASIL",
        -364,
        "A VENCER"
      ],
      [
        "19/10/2026",
        "Operações",
        "Compras de Mercadorias",
        "CD SUMARE (SP)",
        -203.89,
        "A VENCER"
      ],
      [
        "19/10/2026",
        "Operações",
        "Compras de Mercadorias",
        "CD SUMARE (SP)",
        -323.14,
        "A VENCER"
      ],
      [
        "19/10/2026",
        "Operações",
        "Compras de Mercadorias",
        "CD SUMARE (SP)",
        -311.99,
        "A VENCER"
      ],
      [
        "18/10/2026",
        "Operações",
        "Compras de Mercadorias",
        "CD SUMARE (SP)",
        -135.89,
        "A VENCER"
      ],
      [
        "18/10/2026",
        "Operações",
        "Compras de Mercadorias",
        "MARCHON BRASIL LTDA",
        -889.86,
        "A VENCER"
      ],
      [
        "18/10/2026",
        "Operações",
        "Compras de Mercadorias",
        "MARCHON BRASIL LTDA",
        -27.16,
        "A VENCER"
      ],
      [
        "17/10/2026",
        "Operações",
        "Compras de Mercadorias",
        "CARL ZEISS VISION BRASIL IND. OPTICA LTDA",
        -11.07,
        "A VENCER"
      ],
      [
        "17/10/2026",
        "Operações",
        "Compras de Mercadorias",
        "CARL ZEISS VISION BRASIL IND. OPTICA LTDA",
        -20.64,
        "A VENCER"
      ],
      [
        "17/10/2026",
        "Operações",
        "Compras de Mercadorias",
        "CARL ZEISS VISION BRASIL IND. OPTICA LTDA",
        -66.97,
        "A VENCER"
      ],
      [
        "17/10/2026",
        "Operações",
        "Compras de Mercadorias",
        "CARL ZEISS VISION BRASIL IND. OPTICA LTDA",
        -53.43,
        "A VENCER"
      ],
      [
        "16/10/2026",
        "Operações",
        "Compras de Mercadorias",
        "CARL ZEISS VISION BRASIL IND. OPTICA LTDA",
        -76.35,
        "A VENCER"
      ],
      [
        "15/10/2026",
        "Operações",
        "Compras de Mercadorias",
        "CARL ZEISS VISION BRASIL IND. OPTICA LTDA",
        -19.8,
        "A VENCER"
      ],
      [
        "15/10/2026",
        "Operações",
        "Compras de Mercadorias",
        "CD SUMARE (SP)",
        -355.31,
        "A VENCER"
      ],
      [
        "15/10/2026",
        "Operações",
        "Compras de Mercadorias",
        "MARCOLIN BRASIL",
        -583.23,
        "A VENCER"
      ],
      [
        "15/10/2026",
        "Operações",
        "Compras de Mercadorias",
        "CD SUMARE (SP)",
        -985.87,
        "A VENCER"
      ],
      [
        "15/10/2026",
        "Operações",
        "Compras de Mercadorias",
        "CD SUMARE (SP)",
        -277.78,
        "A VENCER"
      ],
      [
        "14/10/2026",
        "Operações",
        "Compras de Mercadorias",
        "CARL ZEISS VISION BRASIL IND. OPTICA LTDA",
        -40.54,
        "A VENCER"
      ],
      [
        "14/10/2026",
        "Operações",
        "Compras de Mercadorias",
        "CD SUMARE (SP)",
        -386.21,
        "A VENCER"
      ],
      [
        "14/10/2026",
        "Operações",
        "Compras de Mercadorias",
        "CD SUMARE (SP)",
        -727.79,
        "A VENCER"
      ],
      [
        "14/10/2026",
        "Operações",
        "Compras de Mercadorias",
        "CD SUMARE (SP)",
        -123.39,
        "A VENCER"
      ],
      [
        "13/10/2026",
        "Operações",
        "Compras de Mercadorias",
        "CARL ZEISS VISION BRASIL IND. OPTICA LTDA",
        -9.43,
        "A VENCER"
      ]
    ],
    "KPIS": {
      "TOTAL_RECEITA": 0,
      "TOTAL_DESPESA": 1930122.6699999995,
      "VALOR_LIQUIDO": -1930122.6699999995,
      "MARGEM_LIQUIDA": 0,
      "VALOR_LIQ_SERIES": [
        0,
        0,
        0,
        -466774.2699999999,
        -1065685.7799999996,
        -145277.07,
        -68351.92000000003,
        -30727.810000000005,
        -77695.71999999997,
        -37012.82,
        -20837.75,
        -17759.529999999995
      ]
    },
    "RECEITA_DIA": [
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0
    ],
    "DESPESA_DIA": [
      54989.54000000001,
      35059.95000000001,
      4659.37,
      9812.319999999998,
      104341.01999999999,
      37870.439999999995,
      188946.93000000017,
      50575.310000000005,
      24861.929999999993,
      191269.4300000001,
      26748.649999999998,
      53075.03999999999,
      52997.25,
      50044.45,
      164334.17999999996,
      10088.33,
      29744.059999999998,
      29691.63,
      56311.880000000005,
      353895.8600000001,
      25265.840000000004,
      18843.030000000002,
      2256.62,
      6646.7300000000005,
      79135.82,
      35320.740000000005,
      42003.77,
      29744.910000000018,
      66330.49000000002,
      94906.85999999997,
      350.28999999999996
    ],
    "SALDOS_MES": [
      0,
      0,
      0,
      -466774.2699999999,
      -1532460.0499999993,
      -1677737.1199999994,
      -1746089.0399999993,
      -1776816.8499999994,
      -1854512.5699999994,
      -1891525.3899999994,
      -1912363.1399999994,
      -1930122.6699999995
    ],
    "FLUXO_RECEITA": [],
    "FLUXO_DESPESA": [
      {
        "cat": "Compras de Mercadorias",
        "values": [
          0,
          0,
          0,
          -51418.790000000015,
          -450500.4800000002,
          -63583.23000000002,
          -42425.53000000002,
          -30727.810000000005,
          -29358.990000000005,
          -27114.819999999996,
          -20837.75,
          -17759.529999999995
        ]
      },
      {
        "cat": "Aluguel fixo",
        "values": [
          0,
          0,
          0,
          -29773.72,
          -179552.31999999998,
          -37031.38,
          0,
          0,
          0,
          0,
          0,
          0
        ]
      },
      {
        "cat": "Repasses",
        "values": [
          0,
          0,
          0,
          -29175.3,
          -42258.06,
          0,
          0,
          0,
          -48336.73,
          0,
          0,
          0
        ]
      },
      {
        "cat": "Salários",
        "values": [
          0,
          0,
          0,
          -2726.13,
          -96916.04999999999,
          -13000,
          0,
          0,
          0,
          0,
          0,
          0
        ]
      },
      {
        "cat": "Royalties",
        "values": [
          0,
          0,
          0,
          -85122.65,
          -1954.19,
          0,
          -17761.98,
          0,
          0,
          0,
          0,
          0
        ]
      }
    ],
    "COMP_DATA": [
      {
        "tipo": "Receita",
        "isHeader": true,
        "d1": 0,
        "d2": 0
      },
      {
        "tipo": "Despesa",
        "isHeader": true,
        "d1": 0,
        "d2": -1677737.1199999969
      },
      {
        "tipo": "Compras de Mercadorias",
        "parent": "Despesa",
        "d1": 0,
        "d2": -565502.5000000006
      },
      {
        "tipo": "Internet/Telefone",
        "parent": "Despesa",
        "d1": 0,
        "d2": -1632.8000000000002
      },
      {
        "tipo": "Aluguel fixo",
        "parent": "Despesa",
        "d1": 0,
        "d2": -246357.41999999998
      },
      {
        "tipo": "Taxas e Licenças",
        "parent": "Despesa",
        "d1": 0,
        "d2": -26143.769999999997
      },
      {
        "tipo": "Segurança",
        "parent": "Despesa",
        "d1": 0,
        "d2": -771.54
      },
      {
        "tipo": "Repasses",
        "parent": "Despesa",
        "d1": 0,
        "d2": -71433.36
      },
      {
        "tipo": "Custo Serviços Dedetização/coleta lixo/MICROAMB",
        "parent": "Despesa",
        "d1": 0,
        "d2": -2755.43
      },
      {
        "tipo": "Royalties",
        "parent": "Despesa",
        "d1": 0,
        "d2": -87076.84
      },
      {
        "tipo": "Serviços Softwares",
        "parent": "Despesa",
        "d1": 0,
        "d2": -16887.430000000004
      },
      {
        "tipo": "ICMS",
        "parent": "Despesa",
        "d1": 0,
        "d2": -104283.21
      },
      {
        "tipo": "Fundo de Promoção",
        "parent": "Despesa",
        "d1": 0,
        "d2": -55353.25000000001
      },
      {
        "tipo": "Água e Esgoto",
        "parent": "Despesa",
        "d1": 0,
        "d2": -2234.92
      },
      {
        "tipo": "Custo com Serviços de Entrega",
        "parent": "Despesa",
        "d1": 0,
        "d2": -64399.009999999995
      },
      {
        "tipo": "Contabilidade",
        "parent": "Despesa",
        "d1": 0,
        "d2": -5690.85
      },
      {
        "tipo": "Custo de Manutenção de Máquinas e Equipamentos",
        "parent": "Despesa",
        "d1": 0,
        "d2": -2926
      },
      {
        "tipo": "Salários",
        "parent": "Despesa",
        "d1": 0,
        "d2": -112642.18
      },
      {
        "tipo": "ISS",
        "parent": "Despesa",
        "d1": 0,
        "d2": -212.58
      },
      {
        "tipo": "Manutenção loja",
        "parent": "Despesa",
        "d1": 0,
        "d2": -6000
      },
      {
        "tipo": "Energia Elétrica",
        "parent": "Despesa",
        "d1": 0,
        "d2": -23266.350000000002
      },
      {
        "tipo": "Máquinas e Equipamentos",
        "parent": "Despesa",
        "d1": 0,
        "d2": -7000.03
      },
      {
        "tipo": "Seguros",
        "parent": "Despesa",
        "d1": 0,
        "d2": -1129.7199999999998
      },
      {
        "tipo": "Gás",
        "parent": "Despesa",
        "d1": 0,
        "d2": -5536.73
      },
      {
        "tipo": "Outros Custos com Pessoal",
        "parent": "Despesa",
        "d1": 0,
        "d2": -560.42
      },
      {
        "tipo": "Informática",
        "parent": "Despesa",
        "d1": 0,
        "d2": -475.88000000000005
      },
      {
        "tipo": "Rescisões",
        "parent": "Despesa",
        "d1": 0,
        "d2": -1287.24
      },
      {
        "tipo": "FGTS",
        "parent": "Despesa",
        "d1": 0,
        "d2": -4646.7
      },
      {
        "tipo": "Custo Serviços Terceirizados",
        "parent": "Despesa",
        "d1": 0,
        "d2": -18701.61
      },
      {
        "tipo": "Assistência Médica",
        "parent": "Despesa",
        "d1": 0,
        "d2": -6410.040000000001
      },
      {
        "tipo": "Instalações",
        "parent": "Despesa",
        "d1": 0,
        "d2": -6208.67
      },
      {
        "tipo": "Freelancers",
        "parent": "Despesa",
        "d1": 0,
        "d2": -2800.4
      },
      {
        "tipo": "Simples Nacional (DAS)",
        "parent": "Despesa",
        "d1": 0,
        "d2": -42318.59
      },
      {
        "tipo": "INSS",
        "parent": "Despesa",
        "d1": 0,
        "d2": -46800.6
      },
      {
        "tipo": "Condomínio",
        "parent": "Despesa",
        "d1": 0,
        "d2": -23915.8
      },
      {
        "tipo": "Móveis e Utensílios",
        "parent": "Despesa",
        "d1": 0,
        "d2": -5020.9
      },
      {
        "tipo": "Vale Refeição",
        "parent": "Despesa",
        "d1": 0,
        "d2": -1370.69
      },
      {
        "tipo": "Custo Agregadores e Cartões",
        "parent": "Despesa",
        "d1": 0,
        "d2": -231.05
      },
      {
        "tipo": "Material de escritório",
        "parent": "Despesa",
        "d1": 0,
        "d2": -13.9
      },
      {
        "tipo": "IPTU",
        "parent": "Despesa",
        "d1": 0,
        "d2": -1264.8799999999999
      },
      {
        "tipo": "&lt;Disponível&gt;",
        "parent": "Despesa",
        "d1": 0,
        "d2": -5000
      },
      {
        "tipo": "Custos Processuais, Judiciais, Cartório e Sindicatos",
        "parent": "Despesa",
        "d1": 0,
        "d2": -1567.62
      },
      {
        "tipo": "Custo Consultorias",
        "parent": "Despesa",
        "d1": 0,
        "d2": -2609.9
      },
      {
        "tipo": "Custo Locomoção e Moradia",
        "parent": "Despesa",
        "d1": 0,
        "d2": -3075.06
      },
      {
        "tipo": "Frete",
        "parent": "Despesa",
        "d1": 0,
        "d2": -176.38
      },
      {
        "tipo": "Equipamentos de Informática",
        "parent": "Despesa",
        "d1": 0,
        "d2": -153.7
      },
      {
        "tipo": "Adiantamento",
        "parent": "Despesa",
        "d1": 0,
        "d2": -10550
      },
      {
        "tipo": "Empréstimos capital de giro",
        "parent": "Despesa",
        "d1": 0,
        "d2": -32295.82
      },
      {
        "tipo": "Marketing",
        "parent": "Despesa",
        "d1": 0,
        "d2": -5400
      },
      {
        "tipo": "Aluguel variável",
        "parent": "Despesa",
        "d1": 0,
        "d2": -33356.25
      },
      {
        "tipo": "Custo Locomoção e Hospedagem Sócios em Viagens",
        "parent": "Despesa",
        "d1": 0,
        "d2": -707.01
      },
      {
        "tipo": "CDU",
        "parent": "Despesa",
        "d1": 0,
        "d2": -11582.09
      }
    ]
  },
  "tudo": {
    "MONTH_DATA": [
      {
        "m": "janeiro",
        "receita": 0,
        "despesa": 4657.8
      },
      {
        "m": "fevereiro",
        "receita": 0,
        "despesa": 0
      },
      {
        "m": "março",
        "receita": 0,
        "despesa": 2330.5
      },
      {
        "m": "abril",
        "receita": 11468.560000000001,
        "despesa": 1711591.8500000003
      },
      {
        "m": "maio",
        "receita": 0,
        "despesa": 1721887.46
      },
      {
        "m": "junho",
        "receita": 0,
        "despesa": 145277.07
      },
      {
        "m": "julho",
        "receita": 0,
        "despesa": 68351.92000000003
      },
      {
        "m": "agosto",
        "receita": 0,
        "despesa": 30727.810000000005
      },
      {
        "m": "setembro",
        "receita": 0,
        "despesa": 77695.71999999997
      },
      {
        "m": "outubro",
        "receita": 0,
        "despesa": 37012.82
      },
      {
        "m": "novembro",
        "receita": 0,
        "despesa": 20837.75
      },
      {
        "m": "dezembro",
        "receita": 0,
        "despesa": 17759.529999999995
      }
    ],
    "RECEITA_CATEGORIAS": [
      {
        "name": "Receita de Vendas",
        "value": 10994.52,
        "clientes": 2
      },
      {
        "name": "Receitas de Serviços",
        "value": 474,
        "clientes": 1
      },
      {
        "name": "Rendimentos de Aplicações",
        "value": 0.04,
        "clientes": 1
      }
    ],
    "DESPESA_CATEGORIAS": [
      {
        "name": "Compras de Mercadorias",
        "value": 890076.6800000032,
        "fornecedores": 115
      },
      {
        "name": "Aluguel fixo",
        "value": 429500.26000000007,
        "fornecedores": 17
      },
      {
        "name": "Dividendos",
        "value": 285332.01,
        "fornecedores": 15
      },
      {
        "name": "Custo com Serviços de Entrega",
        "value": 209649.17,
        "fornecedores": 7
      },
      {
        "name": "Empréstimos capital de giro",
        "value": 198524.22000000003,
        "fornecedores": 3
      },
      {
        "name": "Salários",
        "value": 179330.15000000005,
        "fornecedores": 89
      },
      {
        "name": "Repasses",
        "value": 172696.33000000005,
        "fornecedores": 7
      },
      {
        "name": "Royalties",
        "value": 128879.46999999999,
        "fornecedores": 6
      },
      {
        "name": "ICMS",
        "value": 111764.27,
        "fornecedores": 7
      },
      {
        "name": "Adiantamento",
        "value": 85687.76000000001,
        "fornecedores": 93
      },
      {
        "name": "Vale Refeição",
        "value": 84055.88000000002,
        "fornecedores": 15
      },
      {
        "name": "Simples Nacional (DAS)",
        "value": 78639.63,
        "fornecedores": 4
      }
    ],
    "RECEITA_CLIENTES": [
      {
        "name": "DEPÓSITO EM DINHEIRO",
        "value": 9000
      },
      {
        "name": "REDECARD",
        "value": 2468.56
      }
    ],
    "DESPESA_FORNECEDORES": [
      {
        "name": "RFG COMERCIO TRANSPORTES E SERVICOS LTDA",
        "value": 338521.71
      },
      {
        "name": "REDECARD",
        "value": 171228.25
      },
      {
        "name": "STAR GOLD DELIVERY LTDA",
        "value": 148188.00000000003
      },
      {
        "name": "DP1 RESTAURANTE LTDA",
        "value": 137017.44999999998
      },
      {
        "name": "OCLM FRANCHISING LTDA",
        "value": 115461.56
      },
      {
        "name": "SALÁRIOS À PAGAR",
        "value": 108528.58
      },
      {
        "name": "CONSORCIO SHOPPING PRAIA DA COSTA",
        "value": 106097.08999999998
      },
      {
        "name": "AEROPORTOS DO SUDESTE DO BRASIL S.A",
        "value": 103095.28
      },
      {
        "name": "CONCESSIONARIA DO AEROPORTO INTERNACIONAL DE GUARULHOS S.A.",
        "value": 82712.05
      },
      {
        "name": "CAJU",
        "value": 80095.37000000001
      },
      {
        "name": "AJAX SERVICOS DE ENTREGA LTDA",
        "value": 75161.06000000001
      },
      {
        "name": "NOVA CIDADE SHOPPING CENTERS S/A",
        "value": 71438.39
      }
    ],
    "EXTRATO": [
      [
        "10/04/2027",
        "Operações",
        "Compras de Mercadorias",
        "MARCHON BRASIL LTDA",
        -34.16,
        "A VENCER"
      ],
      [
        "21/03/2027",
        "Operações",
        "Compras de Mercadorias",
        "MARCHON BRASIL LTDA",
        -22.26,
        "A VENCER"
      ],
      [
        "17/03/2027",
        "Operações",
        "Compras de Mercadorias",
        "MARCHON BRASIL LTDA",
        -27.19,
        "A VENCER"
      ],
      [
        "11/03/2027",
        "Operações",
        "Compras de Mercadorias",
        "MARCHON BRASIL LTDA",
        -34.2,
        "A VENCER"
      ],
      [
        "11/03/2027",
        "Operações",
        "Compras de Mercadorias",
        "MARCHON BRASIL LTDA",
        -232.7,
        "A VENCER"
      ],
      [
        "07/03/2027",
        "Operações",
        "Compras de Mercadorias",
        "MARCHON BRASIL LTDA",
        -2373.22,
        "A VENCER"
      ],
      [
        "28/02/2027",
        "Operações",
        "Repasses",
        "DP1 RESTAURANTE LTDA",
        -847.46,
        "A VENCER"
      ],
      [
        "28/02/2027",
        "Operações",
        "Repasses",
        "DP1 RESTAURANTE LTDA",
        -1869.5,
        "A VENCER"
      ],
      [
        "28/02/2027",
        "Operações",
        "Compras de Mercadorias",
        "CARL ZEISS VISION BRASIL IND. OPTICA LTDA",
        -58.16,
        "A VENCER"
      ],
      [
        "24/02/2027",
        "Operações",
        "Compras de Mercadorias",
        "CARL ZEISS VISION BRASIL IND. OPTICA LTDA",
        -18.35,
        "A VENCER"
      ],
      [
        "24/02/2027",
        "Operações",
        "Compras de Mercadorias",
        "CARL ZEISS VISION BRASIL IND. OPTICA LTDA",
        -31.08,
        "A VENCER"
      ],
      [
        "23/02/2027",
        "Operações",
        "Compras de Mercadorias",
        "CARL ZEISS VISION BRASIL IND. OPTICA LTDA",
        -79.25,
        "A VENCER"
      ],
      [
        "22/02/2027",
        "Operações",
        "Compras de Mercadorias",
        "CARL ZEISS VISION BRASIL IND. OPTICA LTDA",
        -18.36,
        "A VENCER"
      ],
      [
        "22/02/2027",
        "Operações",
        "Compras de Mercadorias",
        "CARL ZEISS VISION BRASIL IND. OPTICA LTDA",
        -31.8,
        "A VENCER"
      ],
      [
        "19/02/2027",
        "Operações",
        "Compras de Mercadorias",
        "MARCHON BRASIL LTDA",
        -22.22,
        "A VENCER"
      ],
      [
        "18/02/2027",
        "Operações",
        "Compras de Mercadorias",
        "CARL ZEISS VISION BRASIL IND. OPTICA LTDA",
        -16.18,
        "A VENCER"
      ],
      [
        "15/02/2027",
        "Operações",
        "Compras de Mercadorias",
        "MARCHON BRASIL LTDA",
        -27.16,
        "A VENCER"
      ],
      [
        "14/02/2027",
        "Operações",
        "Compras de Mercadorias",
        "CARL ZEISS VISION BRASIL IND. OPTICA LTDA",
        -11.07,
        "A VENCER"
      ],
      [
        "14/02/2027",
        "Operações",
        "Compras de Mercadorias",
        "CARL ZEISS VISION BRASIL IND. OPTICA LTDA",
        -20.64,
        "A VENCER"
      ],
      [
        "14/02/2027",
        "Operações",
        "Compras de Mercadorias",
        "CARL ZEISS VISION BRASIL IND. OPTICA LTDA",
        -66.97,
        "A VENCER"
      ],
      [
        "14/02/2027",
        "Operações",
        "Compras de Mercadorias",
        "CARL ZEISS VISION BRASIL IND. OPTICA LTDA",
        -53.43,
        "A VENCER"
      ],
      [
        "13/02/2027",
        "Operações",
        "Compras de Mercadorias",
        "CARL ZEISS VISION BRASIL IND. OPTICA LTDA",
        -76.35,
        "A VENCER"
      ],
      [
        "12/02/2027",
        "Operações",
        "Compras de Mercadorias",
        "CARL ZEISS VISION BRASIL IND. OPTICA LTDA",
        -19.8,
        "A VENCER"
      ],
      [
        "11/02/2027",
        "Operações",
        "Compras de Mercadorias",
        "CARL ZEISS VISION BRASIL IND. OPTICA LTDA",
        -40.54,
        "A VENCER"
      ],
      [
        "10/02/2027",
        "Operações",
        "Compras de Mercadorias",
        "CARL ZEISS VISION BRASIL IND. OPTICA LTDA",
        -9.43,
        "A VENCER"
      ],
      [
        "09/02/2027",
        "Operações",
        "Compras de Mercadorias",
        "MARCHON BRASIL LTDA",
        -34.2,
        "A VENCER"
      ],
      [
        "09/02/2027",
        "Operações",
        "Compras de Mercadorias",
        "MARCHON BRASIL LTDA",
        -232.7,
        "A VENCER"
      ],
      [
        "09/02/2027",
        "Operações",
        "Compras de Mercadorias",
        "CARL ZEISS VISION BRASIL IND. OPTICA LTDA",
        -19.82,
        "A VENCER"
      ],
      [
        "07/02/2027",
        "Operações",
        "Compras de Mercadorias",
        "CARL ZEISS VISION BRASIL IND. OPTICA LTDA",
        -8.89,
        "A VENCER"
      ],
      [
        "05/02/2027",
        "Operações",
        "Compras de Mercadorias",
        "MARCHON BRASIL LTDA",
        -2373.23,
        "A VENCER"
      ],
      [
        "04/02/2027",
        "Operações",
        "Compras de Mercadorias",
        "CARL ZEISS VISION BRASIL IND. OPTICA LTDA",
        -53.07,
        "A VENCER"
      ],
      [
        "04/02/2027",
        "Operações",
        "Compras de Mercadorias",
        "CARL ZEISS VISION BRASIL IND. OPTICA LTDA",
        -42.88,
        "A VENCER"
      ],
      [
        "03/02/2027",
        "Operações",
        "Compras de Mercadorias",
        "CARL ZEISS VISION BRASIL IND. OPTICA LTDA",
        -7.44,
        "A VENCER"
      ],
      [
        "29/01/2027",
        "Operações",
        "Compras de Mercadorias",
        "CARL ZEISS VISION BRASIL IND. OPTICA LTDA",
        -58.16,
        "A VENCER"
      ],
      [
        "25/01/2027",
        "Operações",
        "Compras de Mercadorias",
        "CARL ZEISS VISION BRASIL IND. OPTICA LTDA",
        -18.35,
        "A VENCER"
      ],
      [
        "25/01/2027",
        "Operações",
        "Compras de Mercadorias",
        "CARL ZEISS VISION BRASIL IND. OPTICA LTDA",
        -31.08,
        "A VENCER"
      ],
      [
        "24/01/2027",
        "Operações",
        "Compras de Mercadorias",
        "CARL ZEISS VISION BRASIL IND. OPTICA LTDA",
        -79.25,
        "A VENCER"
      ],
      [
        "23/01/2027",
        "Operações",
        "Compras de Mercadorias",
        "CARL ZEISS VISION BRASIL IND. OPTICA LTDA",
        -18.36,
        "A VENCER"
      ],
      [
        "23/01/2027",
        "Operações",
        "Compras de Mercadorias",
        "CARL ZEISS VISION BRASIL IND. OPTICA LTDA",
        -31.8,
        "A VENCER"
      ],
      [
        "20/01/2027",
        "Operações",
        "Compras de Mercadorias",
        "MARCHON BRASIL LTDA",
        -22.22,
        "A VENCER"
      ],
      [
        "19/01/2027",
        "Operações",
        "Compras de Mercadorias",
        "CARL ZEISS VISION BRASIL IND. OPTICA LTDA",
        -16.18,
        "A VENCER"
      ],
      [
        "16/01/2027",
        "Operações",
        "Compras de Mercadorias",
        "MARCHON BRASIL LTDA",
        -27.16,
        "A VENCER"
      ],
      [
        "15/01/2027",
        "Operações",
        "Compras de Mercadorias",
        "CARL ZEISS VISION BRASIL IND. OPTICA LTDA",
        -11.07,
        "A VENCER"
      ],
      [
        "15/01/2027",
        "Operações",
        "Compras de Mercadorias",
        "CARL ZEISS VISION BRASIL IND. OPTICA LTDA",
        -20.64,
        "A VENCER"
      ],
      [
        "15/01/2027",
        "Operações",
        "Compras de Mercadorias",
        "CARL ZEISS VISION BRASIL IND. OPTICA LTDA",
        -66.97,
        "A VENCER"
      ],
      [
        "15/01/2027",
        "Operações",
        "Compras de Mercadorias",
        "CARL ZEISS VISION BRASIL IND. OPTICA LTDA",
        -53.43,
        "A VENCER"
      ],
      [
        "14/01/2027",
        "Operações",
        "Compras de Mercadorias",
        "CARL ZEISS VISION BRASIL IND. OPTICA LTDA",
        -76.35,
        "A VENCER"
      ],
      [
        "13/01/2027",
        "Operações",
        "Compras de Mercadorias",
        "CARL ZEISS VISION BRASIL IND. OPTICA LTDA",
        -19.8,
        "A VENCER"
      ],
      [
        "12/01/2027",
        "Operações",
        "Compras de Mercadorias",
        "CARL ZEISS VISION BRASIL IND. OPTICA LTDA",
        -40.54,
        "A VENCER"
      ],
      [
        "11/01/2027",
        "Operações",
        "Compras de Mercadorias",
        "CARL ZEISS VISION BRASIL IND. OPTICA LTDA",
        -9.43,
        "A VENCER"
      ],
      [
        "10/01/2027",
        "Operações",
        "Compras de Mercadorias",
        "MARCHON BRASIL LTDA",
        -34.2,
        "A VENCER"
      ],
      [
        "10/01/2027",
        "Operações",
        "Compras de Mercadorias",
        "MARCHON BRASIL LTDA",
        -232.7,
        "A VENCER"
      ],
      [
        "10/01/2027",
        "Operações",
        "Compras de Mercadorias",
        "CARL ZEISS VISION BRASIL IND. OPTICA LTDA",
        -19.82,
        "A VENCER"
      ],
      [
        "08/01/2027",
        "Operações",
        "Compras de Mercadorias",
        "CARL ZEISS VISION BRASIL IND. OPTICA LTDA",
        -8.89,
        "A VENCER"
      ],
      [
        "06/01/2027",
        "Operações",
        "Compras de Mercadorias",
        "MARCHON BRASIL LTDA",
        -2373.23,
        "A VENCER"
      ],
      [
        "05/01/2027",
        "Operações",
        "Compras de Mercadorias",
        "CARL ZEISS VISION BRASIL IND. OPTICA LTDA",
        -53.07,
        "A VENCER"
      ],
      [
        "05/01/2027",
        "Operações",
        "Compras de Mercadorias",
        "CARL ZEISS VISION BRASIL IND. OPTICA LTDA",
        -42.88,
        "A VENCER"
      ],
      [
        "04/01/2027",
        "Operações",
        "Compras de Mercadorias",
        "CARL ZEISS VISION BRASIL IND. OPTICA LTDA",
        -7.44,
        "A VENCER"
      ],
      [
        "30/12/2026",
        "Operações",
        "Compras de Mercadorias",
        "CARL ZEISS VISION BRASIL IND. OPTICA LTDA",
        -58.13,
        "A VENCER"
      ],
      [
        "27/12/2026",
        "Operações",
        "Compras de Mercadorias",
        "MARCOLIN BRASIL",
        -420.44,
        "A VENCER"
      ],
      [
        "26/12/2026",
        "Operações",
        "Compras de Mercadorias",
        "CARL ZEISS VISION BRASIL IND. OPTICA LTDA",
        -18.33,
        "A VENCER"
      ],
      [
        "26/12/2026",
        "Operações",
        "Compras de Mercadorias",
        "CARL ZEISS VISION BRASIL IND. OPTICA LTDA",
        -31.08,
        "A VENCER"
      ],
      [
        "25/12/2026",
        "Operações",
        "Compras de Mercadorias",
        "JUB2",
        -702.73,
        "A VENCER"
      ],
      [
        "25/12/2026",
        "Operações",
        "Compras de Mercadorias",
        "JUB2",
        -702.73,
        "A VENCER"
      ],
      [
        "25/12/2026",
        "Operações",
        "Compras de Mercadorias",
        "JUB2",
        -702.73,
        "A VENCER"
      ],
      [
        "25/12/2026",
        "Operações",
        "Compras de Mercadorias",
        "CARL ZEISS VISION BRASIL IND. OPTICA LTDA",
        -79.26,
        "A VENCER"
      ],
      [
        "24/12/2026",
        "Operações",
        "Compras de Mercadorias",
        "CARL ZEISS VISION BRASIL IND. OPTICA LTDA",
        -18.32,
        "A VENCER"
      ],
      [
        "24/12/2026",
        "Operações",
        "Compras de Mercadorias",
        "CARL ZEISS VISION BRASIL IND. OPTICA LTDA",
        -31.78,
        "A VENCER"
      ],
      [
        "21/12/2026",
        "Operações",
        "Compras de Mercadorias",
        "MARCHON BRASIL LTDA",
        -83.8,
        "A VENCER"
      ],
      [
        "21/12/2026",
        "Operações",
        "Compras de Mercadorias",
        "MARCHON BRASIL LTDA",
        -22.22,
        "A VENCER"
      ],
      [
        "21/12/2026",
        "Operações",
        "Compras de Mercadorias",
        "CD SUMARE (SP)",
        -217.91,
        "A VENCER"
      ],
      [
        "20/12/2026",
        "Operações",
        "Compras de Mercadorias",
        "CARL ZEISS VISION BRASIL IND. OPTICA LTDA",
        -16.18,
        "A VENCER"
      ],
      [
        "18/12/2026",
        "Operações",
        "Compras de Mercadorias",
        "CD SUMARE (SP)",
        -323.22,
        "A VENCER"
      ],
      [
        "18/12/2026",
        "Operações",
        "Compras de Mercadorias",
        "CD SUMARE (SP)",
        -312.04,
        "A VENCER"
      ],
      [
        "17/12/2026",
        "Operações",
        "Compras de Mercadorias",
        "MARCHON BRASIL LTDA",
        -889.87,
        "A VENCER"
      ],
      [
        "17/12/2026",
        "Operações",
        "Compras de Mercadorias",
        "MARCHON BRASIL LTDA",
        -27.16,
        "A VENCER"
      ],
      [
        "16/12/2026",
        "Operações",
        "Compras de Mercadorias",
        "CARL ZEISS VISION BRASIL IND. OPTICA LTDA",
        -11.03,
        "A VENCER"
      ],
      [
        "16/12/2026",
        "Operações",
        "Compras de Mercadorias",
        "CARL ZEISS VISION BRASIL IND. OPTICA LTDA",
        -20.65,
        "A VENCER"
      ],
      [
        "16/12/2026",
        "Operações",
        "Compras de Mercadorias",
        "CARL ZEISS VISION BRASIL IND. OPTICA LTDA",
        -66.95,
        "A VENCER"
      ],
      [
        "16/12/2026",
        "Operações",
        "Compras de Mercadorias",
        "CARL ZEISS VISION BRASIL IND. OPTICA LTDA",
        -53.47,
        "A VENCER"
      ],
      [
        "15/12/2026",
        "Operações",
        "Compras de Mercadorias",
        "CARL ZEISS VISION BRASIL IND. OPTICA LTDA",
        -76.39,
        "A VENCER"
      ],
      [
        "14/12/2026",
        "Operações",
        "Compras de Mercadorias",
        "CARL ZEISS VISION BRASIL IND. OPTICA LTDA",
        -19.76,
        "A VENCER"
      ],
      [
        "14/12/2026",
        "Operações",
        "Compras de Mercadorias",
        "CD SUMARE (SP)",
        -986.22,
        "A VENCER"
      ],
      [
        "14/12/2026",
        "Operações",
        "Compras de Mercadorias",
        "CD SUMARE (SP)",
        -277.92,
        "A VENCER"
      ],
      [
        "13/12/2026",
        "Operações",
        "Compras de Mercadorias",
        "CARL ZEISS VISION BRASIL IND. OPTICA LTDA",
        -40.55,
        "A VENCER"
      ],
      [
        "13/12/2026",
        "Operações",
        "Compras de Mercadorias",
        "CD SUMARE (SP)",
        -386.3,
        "A VENCER"
      ],
      [
        "13/12/2026",
        "Operações",
        "Compras de Mercadorias",
        "CD SUMARE (SP)",
        -728.09,
        "A VENCER"
      ],
      [
        "13/12/2026",
        "Operações",
        "Compras de Mercadorias",
        "CD SUMARE (SP)",
        -123.42,
        "A VENCER"
      ],
      [
        "12/12/2026",
        "Operações",
        "Compras de Mercadorias",
        "CARL ZEISS VISION BRASIL IND. OPTICA LTDA",
        -9.43,
        "A VENCER"
      ],
      [
        "12/12/2026",
        "Operações",
        "Compras de Mercadorias",
        "MARCHON BRASIL LTDA",
        -755.67,
        "A VENCER"
      ],
      [
        "11/12/2026",
        "Operações",
        "Compras de Mercadorias",
        "MARCHON BRASIL LTDA",
        -34.2,
        "A VENCER"
      ],
      [
        "11/12/2026",
        "Operações",
        "Compras de Mercadorias",
        "MARCHON BRASIL LTDA",
        -142.49,
        "A VENCER"
      ],
      [
        "11/12/2026",
        "Operações",
        "Compras de Mercadorias",
        "MARCHON BRASIL LTDA",
        -232.7,
        "A VENCER"
      ],
      [
        "11/12/2026",
        "Operações",
        "Compras de Mercadorias",
        "CARL ZEISS VISION BRASIL IND. OPTICA LTDA",
        -19.78,
        "A VENCER"
      ],
      [
        "09/12/2026",
        "Operações",
        "Compras de Mercadorias",
        "CARL ZEISS VISION BRASIL IND. OPTICA LTDA",
        -8.89,
        "A VENCER"
      ],
      [
        "07/12/2026",
        "Operações",
        "Compras de Mercadorias",
        "MARCHON BRASIL LTDA",
        -2373.23,
        "A VENCER"
      ],
      [
        "07/12/2026",
        "Operações",
        "Compras de Mercadorias",
        "MARCHON BRASIL LTDA",
        -5226.7,
        "A VENCER"
      ],
      [
        "06/12/2026",
        "Operações",
        "Compras de Mercadorias",
        "CARL ZEISS VISION BRASIL IND. OPTICA LTDA",
        -53.07,
        "A VENCER"
      ],
      [
        "06/12/2026",
        "Operações",
        "Compras de Mercadorias",
        "CARL ZEISS VISION BRASIL IND. OPTICA LTDA",
        -42.9,
        "A VENCER"
      ],
      [
        "06/12/2026",
        "Operações",
        "Compras de Mercadorias",
        "CD SUMARE (SP)",
        -123.42,
        "A VENCER"
      ],
      [
        "06/12/2026",
        "Operações",
        "Compras de Mercadorias",
        "CD SUMARE (SP)",
        -542.72,
        "A VENCER"
      ],
      [
        "05/12/2026",
        "Operações",
        "Compras de Mercadorias",
        "CARL ZEISS VISION BRASIL IND. OPTICA LTDA",
        -7.47,
        "A VENCER"
      ],
      [
        "05/12/2026",
        "Operações",
        "Compras de Mercadorias",
        "CD SUMARE (SP)",
        -738.18,
        "A VENCER"
      ],
      [
        "30/11/2026",
        "Operações",
        "Compras de Mercadorias",
        "CARL ZEISS VISION BRASIL IND. OPTICA LTDA",
        -58.16,
        "A VENCER"
      ],
      [
        "28/11/2026",
        "Operações",
        "Compras de Mercadorias",
        "MARCOLIN BRASIL",
        -393.56,
        "A VENCER"
      ],
      [
        "27/11/2026",
        "Operações",
        "Compras de Mercadorias",
        "MARCOLIN BRASIL",
        -419.28,
        "A VENCER"
      ],
      [
        "26/11/2026",
        "Operações",
        "Compras de Mercadorias",
        "CARL ZEISS VISION BRASIL IND. OPTICA LTDA",
        -18.35,
        "A VENCER"
      ],
      [
        "26/11/2026",
        "Operações",
        "Compras de Mercadorias",
        "CARL ZEISS VISION BRASIL IND. OPTICA LTDA",
        -31.08,
        "A VENCER"
      ],
      [
        "26/11/2026",
        "Operações",
        "Compras de Mercadorias",
        "SAFILO DO BRASIL LTDA.",
        -391.52,
        "A VENCER"
      ],
      [
        "26/11/2026",
        "Operações",
        "Compras de Mercadorias",
        "SAFILO DO BRASIL LTDA.",
        -242.7,
        "A VENCER"
      ],
      [
        "25/11/2026",
        "Operações",
        "Compras de Mercadorias",
        "JUB2",
        -702.77,
        "A VENCER"
      ],
      [
        "25/11/2026",
        "Operações",
        "Compras de Mercadorias",
        "JUB2",
        -702.77,
        "A VENCER"
      ],
      [
        "25/11/2026",
        "Operações",
        "Compras de Mercadorias",
        "JUB2",
        -702.77,
        "A VENCER"
      ],
      [
        "25/11/2026",
        "Operações",
        "Compras de Mercadorias",
        "CARL ZEISS VISION BRASIL IND. OPTICA LTDA",
        -79.25,
        "A VENCER"
      ],
      [
        "24/11/2026",
        "Operações",
        "Compras de Mercadorias",
        "CARL ZEISS VISION BRASIL IND. OPTICA LTDA",
        -18.36,
        "A VENCER"
      ],
      [
        "24/11/2026",
        "Operações",
        "Compras de Mercadorias",
        "CARL ZEISS VISION BRASIL IND. OPTICA LTDA",
        -31.8,
        "A VENCER"
      ],
      [
        "21/11/2026",
        "Operações",
        "Compras de Mercadorias",
        "MARCHON BRASIL LTDA",
        -83.79,
        "A VENCER"
      ],
      [
        "21/11/2026",
        "Operações",
        "Compras de Mercadorias",
        "MARCHON BRASIL LTDA",
        -22.22,
        "A VENCER"
      ],
      [
        "21/11/2026",
        "Operações",
        "Compras de Mercadorias",
        "CD SUMARE (SP)",
        -217.89,
        "A VENCER"
      ],
      [
        "20/11/2026",
        "Operações",
        "Compras de Mercadorias",
        "MARCOLIN BRASIL",
        -716.91,
        "A VENCER"
      ],
      [
        "20/11/2026",
        "Operações",
        "Compras de Mercadorias",
        "MARCOLIN BRASIL",
        -363.98,
        "A VENCER"
      ],
      [
        "20/11/2026",
        "Operações",
        "Compras de Mercadorias",
        "CARL ZEISS VISION BRASIL IND. OPTICA LTDA",
        -16.18,
        "A VENCER"
      ],
      [
        "18/11/2026",
        "Operações",
        "Compras de Mercadorias",
        "CD SUMARE (SP)",
        -323.14,
        "A VENCER"
      ],
      [
        "18/11/2026",
        "Operações",
        "Compras de Mercadorias",
        "CD SUMARE (SP)",
        -311.99,
        "A VENCER"
      ],
      [
        "17/11/2026",
        "Operações",
        "Compras de Mercadorias",
        "MARCHON BRASIL LTDA",
        -889.86,
        "A VENCER"
      ],
      [
        "17/11/2026",
        "Operações",
        "Compras de Mercadorias",
        "MARCHON BRASIL LTDA",
        -27.16,
        "A VENCER"
      ],
      [
        "16/11/2026",
        "Operações",
        "Compras de Mercadorias",
        "CARL ZEISS VISION BRASIL IND. OPTICA LTDA",
        -11.07,
        "A VENCER"
      ],
      [
        "16/11/2026",
        "Operações",
        "Compras de Mercadorias",
        "CARL ZEISS VISION BRASIL IND. OPTICA LTDA",
        -20.64,
        "A VENCER"
      ],
      [
        "16/11/2026",
        "Operações",
        "Compras de Mercadorias",
        "CARL ZEISS VISION BRASIL IND. OPTICA LTDA",
        -66.97,
        "A VENCER"
      ],
      [
        "16/11/2026",
        "Operações",
        "Compras de Mercadorias",
        "CARL ZEISS VISION BRASIL IND. OPTICA LTDA",
        -53.43,
        "A VENCER"
      ],
      [
        "15/11/2026",
        "Operações",
        "Compras de Mercadorias",
        "CARL ZEISS VISION BRASIL IND. OPTICA LTDA",
        -76.35,
        "A VENCER"
      ],
      [
        "15/11/2026",
        "Operações",
        "Compras de Mercadorias",
        "MARCOLIN BRASIL",
        -583.24,
        "A VENCER"
      ],
      [
        "14/11/2026",
        "Operações",
        "Compras de Mercadorias",
        "CARL ZEISS VISION BRASIL IND. OPTICA LTDA",
        -19.8,
        "A VENCER"
      ],
      [
        "14/11/2026",
        "Operações",
        "Compras de Mercadorias",
        "CD SUMARE (SP)",
        -985.87,
        "A VENCER"
      ],
      [
        "14/11/2026",
        "Operações",
        "Compras de Mercadorias",
        "CD SUMARE (SP)",
        -277.78,
        "A VENCER"
      ],
      [
        "13/11/2026",
        "Operações",
        "Compras de Mercadorias",
        "CARL ZEISS VISION BRASIL IND. OPTICA LTDA",
        -40.54,
        "A VENCER"
      ],
      [
        "13/11/2026",
        "Operações",
        "Compras de Mercadorias",
        "CD SUMARE (SP)",
        -386.21,
        "A VENCER"
      ],
      [
        "13/11/2026",
        "Operações",
        "Compras de Mercadorias",
        "CD SUMARE (SP)",
        -727.79,
        "A VENCER"
      ],
      [
        "13/11/2026",
        "Operações",
        "Compras de Mercadorias",
        "CD SUMARE (SP)",
        -123.39,
        "A VENCER"
      ],
      [
        "12/11/2026",
        "Operações",
        "Compras de Mercadorias",
        "CARL ZEISS VISION BRASIL IND. OPTICA LTDA",
        -9.43,
        "A VENCER"
      ],
      [
        "12/11/2026",
        "Operações",
        "Compras de Mercadorias",
        "MARCHON BRASIL LTDA",
        -755.66,
        "A VENCER"
      ],
      [
        "11/11/2026",
        "Operações",
        "Compras de Mercadorias",
        "MARCHON BRASIL LTDA",
        -34.2,
        "A VENCER"
      ],
      [
        "11/11/2026",
        "Operações",
        "Compras de Mercadorias",
        "MARCHON BRASIL LTDA",
        -142.5,
        "A VENCER"
      ],
      [
        "11/11/2026",
        "Operações",
        "Compras de Mercadorias",
        "MARCHON BRASIL LTDA",
        -232.7,
        "A VENCER"
      ],
      [
        "11/11/2026",
        "Operações",
        "Compras de Mercadorias",
        "CARL ZEISS VISION BRASIL IND. OPTICA LTDA",
        -19.82,
        "A VENCER"
      ],
      [
        "09/11/2026",
        "Operações",
        "Compras de Mercadorias",
        "CARL ZEISS VISION BRASIL IND. OPTICA LTDA",
        -8.89,
        "A VENCER"
      ],
      [
        "08/11/2026",
        "Operações",
        "Compras de Mercadorias",
        "MARCOLIN BRASIL",
        -388.78,
        "A VENCER"
      ],
      [
        "07/11/2026",
        "Operações",
        "Compras de Mercadorias",
        "MARCHON BRASIL LTDA",
        -2373.23,
        "A VENCER"
      ],
      [
        "07/11/2026",
        "Operações",
        "Compras de Mercadorias",
        "MARCHON BRASIL LTDA",
        -5226.71,
        "A VENCER"
      ],
      [
        "06/11/2026",
        "Operações",
        "Compras de Mercadorias",
        "CARL ZEISS VISION BRASIL IND. OPTICA LTDA",
        -53.07,
        "A VENCER"
      ],
      [
        "06/11/2026",
        "Operações",
        "Compras de Mercadorias",
        "CARL ZEISS VISION BRASIL IND. OPTICA LTDA",
        -42.88,
        "A VENCER"
      ],
      [
        "06/11/2026",
        "Operações",
        "Compras de Mercadorias",
        "CD SUMARE (SP)",
        -123.39,
        "A VENCER"
      ],
      [
        "06/11/2026",
        "Operações",
        "Compras de Mercadorias",
        "CD SUMARE (SP)",
        -542.55,
        "A VENCER"
      ],
      [
        "05/11/2026",
        "Operações",
        "Compras de Mercadorias",
        "CARL ZEISS VISION BRASIL IND. OPTICA LTDA",
        -7.44,
        "A VENCER"
      ],
      [
        "05/11/2026",
        "Operações",
        "Compras de Mercadorias",
        "CD SUMARE (SP)",
        -737.93,
        "A VENCER"
      ],
      [
        "31/10/2026",
        "Operações",
        "Compras de Mercadorias",
        "CD SUMARE (SP)",
        -82.27,
        "A VENCER"
      ],
      [
        "31/10/2026",
        "Operações",
        "Compras de Mercadorias",
        "CARL ZEISS VISION BRASIL IND. OPTICA LTDA",
        -58.16,
        "A VENCER"
      ],
      [
        "28/10/2026",
        "Operações",
        "Compras de Mercadorias",
        "Optotal Hoya Ltda",
        -53.4,
        "A VENCER"
      ],
      [
        "28/10/2026",
        "Operações",
        "Compras de Mercadorias",
        "Optotal Hoya Ltda",
        -85.2,
        "A VENCER"
      ],
      [
        "28/10/2026",
        "Operações",
        "Compras de Mercadorias",
        "Optotal Hoya Ltda",
        -185.9,
        "A VENCER"
      ],
      [
        "28/10/2026",
        "Operações",
        "Compras de Mercadorias",
        "MARCOLIN BRASIL",
        -393.55,
        "A VENCER"
      ],
      [
        "27/10/2026",
        "Operações",
        "Compras de Mercadorias",
        "CARL ZEISS VISION BRASIL IND. OPTICA LTDA",
        -18.35,
        "A VENCER"
      ],
      [
        "27/10/2026",
        "Operações",
        "Compras de Mercadorias",
        "CARL ZEISS VISION BRASIL IND. OPTICA LTDA",
        -31.08,
        "A VENCER"
      ],
      [
        "27/10/2026",
        "Operações",
        "Compras de Mercadorias",
        "MARCOLIN BRASIL",
        -419.28,
        "A VENCER"
      ],
      [
        "27/10/2026",
        "Operações",
        "Compras de Mercadorias",
        "SAFILO DO BRASIL LTDA.",
        -391.51,
        "A VENCER"
      ],
      [
        "27/10/2026",
        "Operações",
        "Compras de Mercadorias",
        "SAFILO DO BRASIL LTDA.",
        -242.72,
        "A VENCER"
      ],
      [
        "26/10/2026",
        "Operações",
        "Compras de Mercadorias",
        "JUB2",
        -702.77,
        "A VENCER"
      ],
      [
        "26/10/2026",
        "Operações",
        "Compras de Mercadorias",
        "JUB2",
        -702.77,
        "A VENCER"
      ],
      [
        "26/10/2026",
        "Operações",
        "Compras de Mercadorias",
        "JUB2",
        -702.77,
        "A VENCER"
      ],
      [
        "26/10/2026",
        "Operações",
        "Compras de Mercadorias",
        "CARL ZEISS VISION BRASIL IND. OPTICA LTDA",
        -79.25,
        "A VENCER"
      ],
      [
        "25/10/2026",
        "Operações",
        "Compras de Mercadorias",
        "CARL ZEISS VISION BRASIL IND. OPTICA LTDA",
        -18.36,
        "A VENCER"
      ],
      [
        "25/10/2026",
        "Operações",
        "Compras de Mercadorias",
        "CARL ZEISS VISION BRASIL IND. OPTICA LTDA",
        -31.8,
        "A VENCER"
      ],
      [
        "22/10/2026",
        "Operações",
        "Compras de Mercadorias",
        "MARCHON BRASIL LTDA",
        -83.79,
        "A VENCER"
      ],
      [
        "22/10/2026",
        "Operações",
        "Compras de Mercadorias",
        "MARCHON BRASIL LTDA",
        -22.22,
        "A VENCER"
      ],
      [
        "22/10/2026",
        "Operações",
        "Compras de Mercadorias",
        "CD SUMARE (SP)",
        -217.89,
        "A VENCER"
      ],
      [
        "21/10/2026",
        "Operações",
        "Compras de Mercadorias",
        "CARL ZEISS VISION BRASIL IND. OPTICA LTDA",
        -16.18,
        "A VENCER"
      ],
      [
        "20/10/2026",
        "Operações",
        "Compras de Mercadorias",
        "MARCOLIN BRASIL",
        -716.89,
        "A VENCER"
      ],
      [
        "20/10/2026",
        "Operações",
        "Compras de Mercadorias",
        "PRESTIGE EYEWEAR DISTRIBUIDORA DE OPTICOS",
        -395.98,
        "A VENCER"
      ],
      [
        "20/10/2026",
        "Operações",
        "Compras de Mercadorias",
        "MARCOLIN BRASIL",
        -364,
        "A VENCER"
      ],
      [
        "19/10/2026",
        "Operações",
        "Compras de Mercadorias",
        "CD SUMARE (SP)",
        -203.89,
        "A VENCER"
      ],
      [
        "19/10/2026",
        "Operações",
        "Compras de Mercadorias",
        "CD SUMARE (SP)",
        -323.14,
        "A VENCER"
      ],
      [
        "19/10/2026",
        "Operações",
        "Compras de Mercadorias",
        "CD SUMARE (SP)",
        -311.99,
        "A VENCER"
      ],
      [
        "18/10/2026",
        "Operações",
        "Compras de Mercadorias",
        "CD SUMARE (SP)",
        -135.89,
        "A VENCER"
      ],
      [
        "18/10/2026",
        "Operações",
        "Compras de Mercadorias",
        "MARCHON BRASIL LTDA",
        -889.86,
        "A VENCER"
      ],
      [
        "18/10/2026",
        "Operações",
        "Compras de Mercadorias",
        "MARCHON BRASIL LTDA",
        -27.16,
        "A VENCER"
      ],
      [
        "17/10/2026",
        "Operações",
        "Compras de Mercadorias",
        "CARL ZEISS VISION BRASIL IND. OPTICA LTDA",
        -11.07,
        "A VENCER"
      ],
      [
        "17/10/2026",
        "Operações",
        "Compras de Mercadorias",
        "CARL ZEISS VISION BRASIL IND. OPTICA LTDA",
        -20.64,
        "A VENCER"
      ],
      [
        "17/10/2026",
        "Operações",
        "Compras de Mercadorias",
        "CARL ZEISS VISION BRASIL IND. OPTICA LTDA",
        -66.97,
        "A VENCER"
      ],
      [
        "17/10/2026",
        "Operações",
        "Compras de Mercadorias",
        "CARL ZEISS VISION BRASIL IND. OPTICA LTDA",
        -53.43,
        "A VENCER"
      ],
      [
        "16/10/2026",
        "Operações",
        "Compras de Mercadorias",
        "CARL ZEISS VISION BRASIL IND. OPTICA LTDA",
        -76.35,
        "A VENCER"
      ],
      [
        "15/10/2026",
        "Operações",
        "Compras de Mercadorias",
        "CARL ZEISS VISION BRASIL IND. OPTICA LTDA",
        -19.8,
        "A VENCER"
      ],
      [
        "15/10/2026",
        "Operações",
        "Compras de Mercadorias",
        "CD SUMARE (SP)",
        -355.31,
        "A VENCER"
      ],
      [
        "15/10/2026",
        "Operações",
        "Compras de Mercadorias",
        "MARCOLIN BRASIL",
        -583.23,
        "A VENCER"
      ],
      [
        "15/10/2026",
        "Operações",
        "Compras de Mercadorias",
        "CD SUMARE (SP)",
        -985.87,
        "A VENCER"
      ],
      [
        "15/10/2026",
        "Operações",
        "Compras de Mercadorias",
        "CD SUMARE (SP)",
        -277.78,
        "A VENCER"
      ],
      [
        "14/10/2026",
        "Operações",
        "Compras de Mercadorias",
        "CARL ZEISS VISION BRASIL IND. OPTICA LTDA",
        -40.54,
        "A VENCER"
      ],
      [
        "14/10/2026",
        "Operações",
        "Compras de Mercadorias",
        "CD SUMARE (SP)",
        -386.21,
        "A VENCER"
      ],
      [
        "14/10/2026",
        "Operações",
        "Compras de Mercadorias",
        "CD SUMARE (SP)",
        -727.79,
        "A VENCER"
      ],
      [
        "14/10/2026",
        "Operações",
        "Compras de Mercadorias",
        "CD SUMARE (SP)",
        -123.39,
        "A VENCER"
      ],
      [
        "13/10/2026",
        "Operações",
        "Compras de Mercadorias",
        "CARL ZEISS VISION BRASIL IND. OPTICA LTDA",
        -9.43,
        "A VENCER"
      ]
    ],
    "EXTRATO_RECEITAS": [
      [
        "27/04/2026",
        "Operações",
        "Receita de Vendas",
        "REDECARD",
        1260.52,
        "RECEBIDO"
      ],
      [
        "24/04/2026",
        "Operações",
        "Receita de Vendas",
        "DEPÓSITO EM DINHEIRO",
        1000,
        "RECEBIDO"
      ],
      [
        "24/04/2026",
        "Operações",
        "Receita de Vendas",
        "DEPÓSITO EM DINHEIRO",
        1000,
        "RECEBIDO"
      ],
      [
        "24/04/2026",
        "Operações",
        "Receita de Vendas",
        "DEPÓSITO EM DINHEIRO",
        2000,
        "RECEBIDO"
      ],
      [
        "24/04/2026",
        "Operações",
        "Receita de Vendas",
        "DEPÓSITO EM DINHEIRO",
        2000,
        "RECEBIDO"
      ],
      [
        "24/04/2026",
        "Operações",
        "Receita de Vendas",
        "DEPÓSITO EM DINHEIRO",
        2000,
        "RECEBIDO"
      ],
      [
        "24/04/2026",
        "Operações",
        "Receita de Vendas",
        "DEPÓSITO EM DINHEIRO",
        1000,
        "RECEBIDO"
      ],
      [
        "24/04/2026",
        "Operações",
        "Rendimentos de Aplicações",
        "REDECARD",
        0.04,
        "RECEBIDO"
      ],
      [
        "24/04/2026",
        "Operações",
        "Receitas de Serviços",
        "REDECARD",
        474,
        "RECEBIDO"
      ],
      [
        "22/04/2026",
        "Operações",
        "Receita de Vendas",
        "REDECARD",
        734,
        "RECEBIDO"
      ]
    ],
    "EXTRATO_DESPESAS": [
      [
        "10/04/2027",
        "Operações",
        "Compras de Mercadorias",
        "MARCHON BRASIL LTDA",
        -34.16,
        "A VENCER"
      ],
      [
        "21/03/2027",
        "Operações",
        "Compras de Mercadorias",
        "MARCHON BRASIL LTDA",
        -22.26,
        "A VENCER"
      ],
      [
        "17/03/2027",
        "Operações",
        "Compras de Mercadorias",
        "MARCHON BRASIL LTDA",
        -27.19,
        "A VENCER"
      ],
      [
        "11/03/2027",
        "Operações",
        "Compras de Mercadorias",
        "MARCHON BRASIL LTDA",
        -34.2,
        "A VENCER"
      ],
      [
        "11/03/2027",
        "Operações",
        "Compras de Mercadorias",
        "MARCHON BRASIL LTDA",
        -232.7,
        "A VENCER"
      ],
      [
        "07/03/2027",
        "Operações",
        "Compras de Mercadorias",
        "MARCHON BRASIL LTDA",
        -2373.22,
        "A VENCER"
      ],
      [
        "28/02/2027",
        "Operações",
        "Repasses",
        "DP1 RESTAURANTE LTDA",
        -847.46,
        "A VENCER"
      ],
      [
        "28/02/2027",
        "Operações",
        "Repasses",
        "DP1 RESTAURANTE LTDA",
        -1869.5,
        "A VENCER"
      ],
      [
        "28/02/2027",
        "Operações",
        "Compras de Mercadorias",
        "CARL ZEISS VISION BRASIL IND. OPTICA LTDA",
        -58.16,
        "A VENCER"
      ],
      [
        "24/02/2027",
        "Operações",
        "Compras de Mercadorias",
        "CARL ZEISS VISION BRASIL IND. OPTICA LTDA",
        -18.35,
        "A VENCER"
      ],
      [
        "24/02/2027",
        "Operações",
        "Compras de Mercadorias",
        "CARL ZEISS VISION BRASIL IND. OPTICA LTDA",
        -31.08,
        "A VENCER"
      ],
      [
        "23/02/2027",
        "Operações",
        "Compras de Mercadorias",
        "CARL ZEISS VISION BRASIL IND. OPTICA LTDA",
        -79.25,
        "A VENCER"
      ],
      [
        "22/02/2027",
        "Operações",
        "Compras de Mercadorias",
        "CARL ZEISS VISION BRASIL IND. OPTICA LTDA",
        -18.36,
        "A VENCER"
      ],
      [
        "22/02/2027",
        "Operações",
        "Compras de Mercadorias",
        "CARL ZEISS VISION BRASIL IND. OPTICA LTDA",
        -31.8,
        "A VENCER"
      ],
      [
        "19/02/2027",
        "Operações",
        "Compras de Mercadorias",
        "MARCHON BRASIL LTDA",
        -22.22,
        "A VENCER"
      ],
      [
        "18/02/2027",
        "Operações",
        "Compras de Mercadorias",
        "CARL ZEISS VISION BRASIL IND. OPTICA LTDA",
        -16.18,
        "A VENCER"
      ],
      [
        "15/02/2027",
        "Operações",
        "Compras de Mercadorias",
        "MARCHON BRASIL LTDA",
        -27.16,
        "A VENCER"
      ],
      [
        "14/02/2027",
        "Operações",
        "Compras de Mercadorias",
        "CARL ZEISS VISION BRASIL IND. OPTICA LTDA",
        -11.07,
        "A VENCER"
      ],
      [
        "14/02/2027",
        "Operações",
        "Compras de Mercadorias",
        "CARL ZEISS VISION BRASIL IND. OPTICA LTDA",
        -20.64,
        "A VENCER"
      ],
      [
        "14/02/2027",
        "Operações",
        "Compras de Mercadorias",
        "CARL ZEISS VISION BRASIL IND. OPTICA LTDA",
        -66.97,
        "A VENCER"
      ],
      [
        "14/02/2027",
        "Operações",
        "Compras de Mercadorias",
        "CARL ZEISS VISION BRASIL IND. OPTICA LTDA",
        -53.43,
        "A VENCER"
      ],
      [
        "13/02/2027",
        "Operações",
        "Compras de Mercadorias",
        "CARL ZEISS VISION BRASIL IND. OPTICA LTDA",
        -76.35,
        "A VENCER"
      ],
      [
        "12/02/2027",
        "Operações",
        "Compras de Mercadorias",
        "CARL ZEISS VISION BRASIL IND. OPTICA LTDA",
        -19.8,
        "A VENCER"
      ],
      [
        "11/02/2027",
        "Operações",
        "Compras de Mercadorias",
        "CARL ZEISS VISION BRASIL IND. OPTICA LTDA",
        -40.54,
        "A VENCER"
      ],
      [
        "10/02/2027",
        "Operações",
        "Compras de Mercadorias",
        "CARL ZEISS VISION BRASIL IND. OPTICA LTDA",
        -9.43,
        "A VENCER"
      ],
      [
        "09/02/2027",
        "Operações",
        "Compras de Mercadorias",
        "MARCHON BRASIL LTDA",
        -34.2,
        "A VENCER"
      ],
      [
        "09/02/2027",
        "Operações",
        "Compras de Mercadorias",
        "MARCHON BRASIL LTDA",
        -232.7,
        "A VENCER"
      ],
      [
        "09/02/2027",
        "Operações",
        "Compras de Mercadorias",
        "CARL ZEISS VISION BRASIL IND. OPTICA LTDA",
        -19.82,
        "A VENCER"
      ],
      [
        "07/02/2027",
        "Operações",
        "Compras de Mercadorias",
        "CARL ZEISS VISION BRASIL IND. OPTICA LTDA",
        -8.89,
        "A VENCER"
      ],
      [
        "05/02/2027",
        "Operações",
        "Compras de Mercadorias",
        "MARCHON BRASIL LTDA",
        -2373.23,
        "A VENCER"
      ],
      [
        "04/02/2027",
        "Operações",
        "Compras de Mercadorias",
        "CARL ZEISS VISION BRASIL IND. OPTICA LTDA",
        -53.07,
        "A VENCER"
      ],
      [
        "04/02/2027",
        "Operações",
        "Compras de Mercadorias",
        "CARL ZEISS VISION BRASIL IND. OPTICA LTDA",
        -42.88,
        "A VENCER"
      ],
      [
        "03/02/2027",
        "Operações",
        "Compras de Mercadorias",
        "CARL ZEISS VISION BRASIL IND. OPTICA LTDA",
        -7.44,
        "A VENCER"
      ],
      [
        "29/01/2027",
        "Operações",
        "Compras de Mercadorias",
        "CARL ZEISS VISION BRASIL IND. OPTICA LTDA",
        -58.16,
        "A VENCER"
      ],
      [
        "25/01/2027",
        "Operações",
        "Compras de Mercadorias",
        "CARL ZEISS VISION BRASIL IND. OPTICA LTDA",
        -18.35,
        "A VENCER"
      ],
      [
        "25/01/2027",
        "Operações",
        "Compras de Mercadorias",
        "CARL ZEISS VISION BRASIL IND. OPTICA LTDA",
        -31.08,
        "A VENCER"
      ],
      [
        "24/01/2027",
        "Operações",
        "Compras de Mercadorias",
        "CARL ZEISS VISION BRASIL IND. OPTICA LTDA",
        -79.25,
        "A VENCER"
      ],
      [
        "23/01/2027",
        "Operações",
        "Compras de Mercadorias",
        "CARL ZEISS VISION BRASIL IND. OPTICA LTDA",
        -18.36,
        "A VENCER"
      ],
      [
        "23/01/2027",
        "Operações",
        "Compras de Mercadorias",
        "CARL ZEISS VISION BRASIL IND. OPTICA LTDA",
        -31.8,
        "A VENCER"
      ],
      [
        "20/01/2027",
        "Operações",
        "Compras de Mercadorias",
        "MARCHON BRASIL LTDA",
        -22.22,
        "A VENCER"
      ],
      [
        "19/01/2027",
        "Operações",
        "Compras de Mercadorias",
        "CARL ZEISS VISION BRASIL IND. OPTICA LTDA",
        -16.18,
        "A VENCER"
      ],
      [
        "16/01/2027",
        "Operações",
        "Compras de Mercadorias",
        "MARCHON BRASIL LTDA",
        -27.16,
        "A VENCER"
      ],
      [
        "15/01/2027",
        "Operações",
        "Compras de Mercadorias",
        "CARL ZEISS VISION BRASIL IND. OPTICA LTDA",
        -11.07,
        "A VENCER"
      ],
      [
        "15/01/2027",
        "Operações",
        "Compras de Mercadorias",
        "CARL ZEISS VISION BRASIL IND. OPTICA LTDA",
        -20.64,
        "A VENCER"
      ],
      [
        "15/01/2027",
        "Operações",
        "Compras de Mercadorias",
        "CARL ZEISS VISION BRASIL IND. OPTICA LTDA",
        -66.97,
        "A VENCER"
      ],
      [
        "15/01/2027",
        "Operações",
        "Compras de Mercadorias",
        "CARL ZEISS VISION BRASIL IND. OPTICA LTDA",
        -53.43,
        "A VENCER"
      ],
      [
        "14/01/2027",
        "Operações",
        "Compras de Mercadorias",
        "CARL ZEISS VISION BRASIL IND. OPTICA LTDA",
        -76.35,
        "A VENCER"
      ],
      [
        "13/01/2027",
        "Operações",
        "Compras de Mercadorias",
        "CARL ZEISS VISION BRASIL IND. OPTICA LTDA",
        -19.8,
        "A VENCER"
      ],
      [
        "12/01/2027",
        "Operações",
        "Compras de Mercadorias",
        "CARL ZEISS VISION BRASIL IND. OPTICA LTDA",
        -40.54,
        "A VENCER"
      ],
      [
        "11/01/2027",
        "Operações",
        "Compras de Mercadorias",
        "CARL ZEISS VISION BRASIL IND. OPTICA LTDA",
        -9.43,
        "A VENCER"
      ],
      [
        "10/01/2027",
        "Operações",
        "Compras de Mercadorias",
        "MARCHON BRASIL LTDA",
        -34.2,
        "A VENCER"
      ],
      [
        "10/01/2027",
        "Operações",
        "Compras de Mercadorias",
        "MARCHON BRASIL LTDA",
        -232.7,
        "A VENCER"
      ],
      [
        "10/01/2027",
        "Operações",
        "Compras de Mercadorias",
        "CARL ZEISS VISION BRASIL IND. OPTICA LTDA",
        -19.82,
        "A VENCER"
      ],
      [
        "08/01/2027",
        "Operações",
        "Compras de Mercadorias",
        "CARL ZEISS VISION BRASIL IND. OPTICA LTDA",
        -8.89,
        "A VENCER"
      ],
      [
        "06/01/2027",
        "Operações",
        "Compras de Mercadorias",
        "MARCHON BRASIL LTDA",
        -2373.23,
        "A VENCER"
      ],
      [
        "05/01/2027",
        "Operações",
        "Compras de Mercadorias",
        "CARL ZEISS VISION BRASIL IND. OPTICA LTDA",
        -53.07,
        "A VENCER"
      ],
      [
        "05/01/2027",
        "Operações",
        "Compras de Mercadorias",
        "CARL ZEISS VISION BRASIL IND. OPTICA LTDA",
        -42.88,
        "A VENCER"
      ],
      [
        "04/01/2027",
        "Operações",
        "Compras de Mercadorias",
        "CARL ZEISS VISION BRASIL IND. OPTICA LTDA",
        -7.44,
        "A VENCER"
      ],
      [
        "30/12/2026",
        "Operações",
        "Compras de Mercadorias",
        "CARL ZEISS VISION BRASIL IND. OPTICA LTDA",
        -58.13,
        "A VENCER"
      ],
      [
        "27/12/2026",
        "Operações",
        "Compras de Mercadorias",
        "MARCOLIN BRASIL",
        -420.44,
        "A VENCER"
      ],
      [
        "26/12/2026",
        "Operações",
        "Compras de Mercadorias",
        "CARL ZEISS VISION BRASIL IND. OPTICA LTDA",
        -18.33,
        "A VENCER"
      ],
      [
        "26/12/2026",
        "Operações",
        "Compras de Mercadorias",
        "CARL ZEISS VISION BRASIL IND. OPTICA LTDA",
        -31.08,
        "A VENCER"
      ],
      [
        "25/12/2026",
        "Operações",
        "Compras de Mercadorias",
        "JUB2",
        -702.73,
        "A VENCER"
      ],
      [
        "25/12/2026",
        "Operações",
        "Compras de Mercadorias",
        "JUB2",
        -702.73,
        "A VENCER"
      ],
      [
        "25/12/2026",
        "Operações",
        "Compras de Mercadorias",
        "JUB2",
        -702.73,
        "A VENCER"
      ],
      [
        "25/12/2026",
        "Operações",
        "Compras de Mercadorias",
        "CARL ZEISS VISION BRASIL IND. OPTICA LTDA",
        -79.26,
        "A VENCER"
      ],
      [
        "24/12/2026",
        "Operações",
        "Compras de Mercadorias",
        "CARL ZEISS VISION BRASIL IND. OPTICA LTDA",
        -18.32,
        "A VENCER"
      ],
      [
        "24/12/2026",
        "Operações",
        "Compras de Mercadorias",
        "CARL ZEISS VISION BRASIL IND. OPTICA LTDA",
        -31.78,
        "A VENCER"
      ],
      [
        "21/12/2026",
        "Operações",
        "Compras de Mercadorias",
        "MARCHON BRASIL LTDA",
        -83.8,
        "A VENCER"
      ],
      [
        "21/12/2026",
        "Operações",
        "Compras de Mercadorias",
        "MARCHON BRASIL LTDA",
        -22.22,
        "A VENCER"
      ],
      [
        "21/12/2026",
        "Operações",
        "Compras de Mercadorias",
        "CD SUMARE (SP)",
        -217.91,
        "A VENCER"
      ],
      [
        "20/12/2026",
        "Operações",
        "Compras de Mercadorias",
        "CARL ZEISS VISION BRASIL IND. OPTICA LTDA",
        -16.18,
        "A VENCER"
      ],
      [
        "18/12/2026",
        "Operações",
        "Compras de Mercadorias",
        "CD SUMARE (SP)",
        -323.22,
        "A VENCER"
      ],
      [
        "18/12/2026",
        "Operações",
        "Compras de Mercadorias",
        "CD SUMARE (SP)",
        -312.04,
        "A VENCER"
      ],
      [
        "17/12/2026",
        "Operações",
        "Compras de Mercadorias",
        "MARCHON BRASIL LTDA",
        -889.87,
        "A VENCER"
      ],
      [
        "17/12/2026",
        "Operações",
        "Compras de Mercadorias",
        "MARCHON BRASIL LTDA",
        -27.16,
        "A VENCER"
      ],
      [
        "16/12/2026",
        "Operações",
        "Compras de Mercadorias",
        "CARL ZEISS VISION BRASIL IND. OPTICA LTDA",
        -11.03,
        "A VENCER"
      ],
      [
        "16/12/2026",
        "Operações",
        "Compras de Mercadorias",
        "CARL ZEISS VISION BRASIL IND. OPTICA LTDA",
        -20.65,
        "A VENCER"
      ],
      [
        "16/12/2026",
        "Operações",
        "Compras de Mercadorias",
        "CARL ZEISS VISION BRASIL IND. OPTICA LTDA",
        -66.95,
        "A VENCER"
      ],
      [
        "16/12/2026",
        "Operações",
        "Compras de Mercadorias",
        "CARL ZEISS VISION BRASIL IND. OPTICA LTDA",
        -53.47,
        "A VENCER"
      ],
      [
        "15/12/2026",
        "Operações",
        "Compras de Mercadorias",
        "CARL ZEISS VISION BRASIL IND. OPTICA LTDA",
        -76.39,
        "A VENCER"
      ],
      [
        "14/12/2026",
        "Operações",
        "Compras de Mercadorias",
        "CARL ZEISS VISION BRASIL IND. OPTICA LTDA",
        -19.76,
        "A VENCER"
      ],
      [
        "14/12/2026",
        "Operações",
        "Compras de Mercadorias",
        "CD SUMARE (SP)",
        -986.22,
        "A VENCER"
      ],
      [
        "14/12/2026",
        "Operações",
        "Compras de Mercadorias",
        "CD SUMARE (SP)",
        -277.92,
        "A VENCER"
      ],
      [
        "13/12/2026",
        "Operações",
        "Compras de Mercadorias",
        "CARL ZEISS VISION BRASIL IND. OPTICA LTDA",
        -40.55,
        "A VENCER"
      ],
      [
        "13/12/2026",
        "Operações",
        "Compras de Mercadorias",
        "CD SUMARE (SP)",
        -386.3,
        "A VENCER"
      ],
      [
        "13/12/2026",
        "Operações",
        "Compras de Mercadorias",
        "CD SUMARE (SP)",
        -728.09,
        "A VENCER"
      ],
      [
        "13/12/2026",
        "Operações",
        "Compras de Mercadorias",
        "CD SUMARE (SP)",
        -123.42,
        "A VENCER"
      ],
      [
        "12/12/2026",
        "Operações",
        "Compras de Mercadorias",
        "CARL ZEISS VISION BRASIL IND. OPTICA LTDA",
        -9.43,
        "A VENCER"
      ],
      [
        "12/12/2026",
        "Operações",
        "Compras de Mercadorias",
        "MARCHON BRASIL LTDA",
        -755.67,
        "A VENCER"
      ],
      [
        "11/12/2026",
        "Operações",
        "Compras de Mercadorias",
        "MARCHON BRASIL LTDA",
        -34.2,
        "A VENCER"
      ],
      [
        "11/12/2026",
        "Operações",
        "Compras de Mercadorias",
        "MARCHON BRASIL LTDA",
        -142.49,
        "A VENCER"
      ],
      [
        "11/12/2026",
        "Operações",
        "Compras de Mercadorias",
        "MARCHON BRASIL LTDA",
        -232.7,
        "A VENCER"
      ],
      [
        "11/12/2026",
        "Operações",
        "Compras de Mercadorias",
        "CARL ZEISS VISION BRASIL IND. OPTICA LTDA",
        -19.78,
        "A VENCER"
      ],
      [
        "09/12/2026",
        "Operações",
        "Compras de Mercadorias",
        "CARL ZEISS VISION BRASIL IND. OPTICA LTDA",
        -8.89,
        "A VENCER"
      ],
      [
        "07/12/2026",
        "Operações",
        "Compras de Mercadorias",
        "MARCHON BRASIL LTDA",
        -2373.23,
        "A VENCER"
      ],
      [
        "07/12/2026",
        "Operações",
        "Compras de Mercadorias",
        "MARCHON BRASIL LTDA",
        -5226.7,
        "A VENCER"
      ],
      [
        "06/12/2026",
        "Operações",
        "Compras de Mercadorias",
        "CARL ZEISS VISION BRASIL IND. OPTICA LTDA",
        -53.07,
        "A VENCER"
      ],
      [
        "06/12/2026",
        "Operações",
        "Compras de Mercadorias",
        "CARL ZEISS VISION BRASIL IND. OPTICA LTDA",
        -42.9,
        "A VENCER"
      ],
      [
        "06/12/2026",
        "Operações",
        "Compras de Mercadorias",
        "CD SUMARE (SP)",
        -123.42,
        "A VENCER"
      ],
      [
        "06/12/2026",
        "Operações",
        "Compras de Mercadorias",
        "CD SUMARE (SP)",
        -542.72,
        "A VENCER"
      ],
      [
        "05/12/2026",
        "Operações",
        "Compras de Mercadorias",
        "CARL ZEISS VISION BRASIL IND. OPTICA LTDA",
        -7.47,
        "A VENCER"
      ],
      [
        "05/12/2026",
        "Operações",
        "Compras de Mercadorias",
        "CD SUMARE (SP)",
        -738.18,
        "A VENCER"
      ],
      [
        "30/11/2026",
        "Operações",
        "Compras de Mercadorias",
        "CARL ZEISS VISION BRASIL IND. OPTICA LTDA",
        -58.16,
        "A VENCER"
      ],
      [
        "28/11/2026",
        "Operações",
        "Compras de Mercadorias",
        "MARCOLIN BRASIL",
        -393.56,
        "A VENCER"
      ],
      [
        "27/11/2026",
        "Operações",
        "Compras de Mercadorias",
        "MARCOLIN BRASIL",
        -419.28,
        "A VENCER"
      ],
      [
        "26/11/2026",
        "Operações",
        "Compras de Mercadorias",
        "CARL ZEISS VISION BRASIL IND. OPTICA LTDA",
        -18.35,
        "A VENCER"
      ],
      [
        "26/11/2026",
        "Operações",
        "Compras de Mercadorias",
        "CARL ZEISS VISION BRASIL IND. OPTICA LTDA",
        -31.08,
        "A VENCER"
      ],
      [
        "26/11/2026",
        "Operações",
        "Compras de Mercadorias",
        "SAFILO DO BRASIL LTDA.",
        -391.52,
        "A VENCER"
      ],
      [
        "26/11/2026",
        "Operações",
        "Compras de Mercadorias",
        "SAFILO DO BRASIL LTDA.",
        -242.7,
        "A VENCER"
      ],
      [
        "25/11/2026",
        "Operações",
        "Compras de Mercadorias",
        "JUB2",
        -702.77,
        "A VENCER"
      ],
      [
        "25/11/2026",
        "Operações",
        "Compras de Mercadorias",
        "JUB2",
        -702.77,
        "A VENCER"
      ],
      [
        "25/11/2026",
        "Operações",
        "Compras de Mercadorias",
        "JUB2",
        -702.77,
        "A VENCER"
      ],
      [
        "25/11/2026",
        "Operações",
        "Compras de Mercadorias",
        "CARL ZEISS VISION BRASIL IND. OPTICA LTDA",
        -79.25,
        "A VENCER"
      ],
      [
        "24/11/2026",
        "Operações",
        "Compras de Mercadorias",
        "CARL ZEISS VISION BRASIL IND. OPTICA LTDA",
        -18.36,
        "A VENCER"
      ],
      [
        "24/11/2026",
        "Operações",
        "Compras de Mercadorias",
        "CARL ZEISS VISION BRASIL IND. OPTICA LTDA",
        -31.8,
        "A VENCER"
      ],
      [
        "21/11/2026",
        "Operações",
        "Compras de Mercadorias",
        "MARCHON BRASIL LTDA",
        -83.79,
        "A VENCER"
      ],
      [
        "21/11/2026",
        "Operações",
        "Compras de Mercadorias",
        "MARCHON BRASIL LTDA",
        -22.22,
        "A VENCER"
      ],
      [
        "21/11/2026",
        "Operações",
        "Compras de Mercadorias",
        "CD SUMARE (SP)",
        -217.89,
        "A VENCER"
      ],
      [
        "20/11/2026",
        "Operações",
        "Compras de Mercadorias",
        "MARCOLIN BRASIL",
        -716.91,
        "A VENCER"
      ],
      [
        "20/11/2026",
        "Operações",
        "Compras de Mercadorias",
        "MARCOLIN BRASIL",
        -363.98,
        "A VENCER"
      ],
      [
        "20/11/2026",
        "Operações",
        "Compras de Mercadorias",
        "CARL ZEISS VISION BRASIL IND. OPTICA LTDA",
        -16.18,
        "A VENCER"
      ],
      [
        "18/11/2026",
        "Operações",
        "Compras de Mercadorias",
        "CD SUMARE (SP)",
        -323.14,
        "A VENCER"
      ],
      [
        "18/11/2026",
        "Operações",
        "Compras de Mercadorias",
        "CD SUMARE (SP)",
        -311.99,
        "A VENCER"
      ],
      [
        "17/11/2026",
        "Operações",
        "Compras de Mercadorias",
        "MARCHON BRASIL LTDA",
        -889.86,
        "A VENCER"
      ],
      [
        "17/11/2026",
        "Operações",
        "Compras de Mercadorias",
        "MARCHON BRASIL LTDA",
        -27.16,
        "A VENCER"
      ],
      [
        "16/11/2026",
        "Operações",
        "Compras de Mercadorias",
        "CARL ZEISS VISION BRASIL IND. OPTICA LTDA",
        -11.07,
        "A VENCER"
      ],
      [
        "16/11/2026",
        "Operações",
        "Compras de Mercadorias",
        "CARL ZEISS VISION BRASIL IND. OPTICA LTDA",
        -20.64,
        "A VENCER"
      ],
      [
        "16/11/2026",
        "Operações",
        "Compras de Mercadorias",
        "CARL ZEISS VISION BRASIL IND. OPTICA LTDA",
        -66.97,
        "A VENCER"
      ],
      [
        "16/11/2026",
        "Operações",
        "Compras de Mercadorias",
        "CARL ZEISS VISION BRASIL IND. OPTICA LTDA",
        -53.43,
        "A VENCER"
      ],
      [
        "15/11/2026",
        "Operações",
        "Compras de Mercadorias",
        "CARL ZEISS VISION BRASIL IND. OPTICA LTDA",
        -76.35,
        "A VENCER"
      ],
      [
        "15/11/2026",
        "Operações",
        "Compras de Mercadorias",
        "MARCOLIN BRASIL",
        -583.24,
        "A VENCER"
      ],
      [
        "14/11/2026",
        "Operações",
        "Compras de Mercadorias",
        "CARL ZEISS VISION BRASIL IND. OPTICA LTDA",
        -19.8,
        "A VENCER"
      ],
      [
        "14/11/2026",
        "Operações",
        "Compras de Mercadorias",
        "CD SUMARE (SP)",
        -985.87,
        "A VENCER"
      ],
      [
        "14/11/2026",
        "Operações",
        "Compras de Mercadorias",
        "CD SUMARE (SP)",
        -277.78,
        "A VENCER"
      ],
      [
        "13/11/2026",
        "Operações",
        "Compras de Mercadorias",
        "CARL ZEISS VISION BRASIL IND. OPTICA LTDA",
        -40.54,
        "A VENCER"
      ],
      [
        "13/11/2026",
        "Operações",
        "Compras de Mercadorias",
        "CD SUMARE (SP)",
        -386.21,
        "A VENCER"
      ],
      [
        "13/11/2026",
        "Operações",
        "Compras de Mercadorias",
        "CD SUMARE (SP)",
        -727.79,
        "A VENCER"
      ],
      [
        "13/11/2026",
        "Operações",
        "Compras de Mercadorias",
        "CD SUMARE (SP)",
        -123.39,
        "A VENCER"
      ],
      [
        "12/11/2026",
        "Operações",
        "Compras de Mercadorias",
        "CARL ZEISS VISION BRASIL IND. OPTICA LTDA",
        -9.43,
        "A VENCER"
      ],
      [
        "12/11/2026",
        "Operações",
        "Compras de Mercadorias",
        "MARCHON BRASIL LTDA",
        -755.66,
        "A VENCER"
      ],
      [
        "11/11/2026",
        "Operações",
        "Compras de Mercadorias",
        "MARCHON BRASIL LTDA",
        -34.2,
        "A VENCER"
      ],
      [
        "11/11/2026",
        "Operações",
        "Compras de Mercadorias",
        "MARCHON BRASIL LTDA",
        -142.5,
        "A VENCER"
      ],
      [
        "11/11/2026",
        "Operações",
        "Compras de Mercadorias",
        "MARCHON BRASIL LTDA",
        -232.7,
        "A VENCER"
      ],
      [
        "11/11/2026",
        "Operações",
        "Compras de Mercadorias",
        "CARL ZEISS VISION BRASIL IND. OPTICA LTDA",
        -19.82,
        "A VENCER"
      ],
      [
        "09/11/2026",
        "Operações",
        "Compras de Mercadorias",
        "CARL ZEISS VISION BRASIL IND. OPTICA LTDA",
        -8.89,
        "A VENCER"
      ],
      [
        "08/11/2026",
        "Operações",
        "Compras de Mercadorias",
        "MARCOLIN BRASIL",
        -388.78,
        "A VENCER"
      ],
      [
        "07/11/2026",
        "Operações",
        "Compras de Mercadorias",
        "MARCHON BRASIL LTDA",
        -2373.23,
        "A VENCER"
      ],
      [
        "07/11/2026",
        "Operações",
        "Compras de Mercadorias",
        "MARCHON BRASIL LTDA",
        -5226.71,
        "A VENCER"
      ],
      [
        "06/11/2026",
        "Operações",
        "Compras de Mercadorias",
        "CARL ZEISS VISION BRASIL IND. OPTICA LTDA",
        -53.07,
        "A VENCER"
      ],
      [
        "06/11/2026",
        "Operações",
        "Compras de Mercadorias",
        "CARL ZEISS VISION BRASIL IND. OPTICA LTDA",
        -42.88,
        "A VENCER"
      ],
      [
        "06/11/2026",
        "Operações",
        "Compras de Mercadorias",
        "CD SUMARE (SP)",
        -123.39,
        "A VENCER"
      ],
      [
        "06/11/2026",
        "Operações",
        "Compras de Mercadorias",
        "CD SUMARE (SP)",
        -542.55,
        "A VENCER"
      ],
      [
        "05/11/2026",
        "Operações",
        "Compras de Mercadorias",
        "CARL ZEISS VISION BRASIL IND. OPTICA LTDA",
        -7.44,
        "A VENCER"
      ],
      [
        "05/11/2026",
        "Operações",
        "Compras de Mercadorias",
        "CD SUMARE (SP)",
        -737.93,
        "A VENCER"
      ],
      [
        "31/10/2026",
        "Operações",
        "Compras de Mercadorias",
        "CD SUMARE (SP)",
        -82.27,
        "A VENCER"
      ],
      [
        "31/10/2026",
        "Operações",
        "Compras de Mercadorias",
        "CARL ZEISS VISION BRASIL IND. OPTICA LTDA",
        -58.16,
        "A VENCER"
      ],
      [
        "28/10/2026",
        "Operações",
        "Compras de Mercadorias",
        "Optotal Hoya Ltda",
        -53.4,
        "A VENCER"
      ],
      [
        "28/10/2026",
        "Operações",
        "Compras de Mercadorias",
        "Optotal Hoya Ltda",
        -85.2,
        "A VENCER"
      ],
      [
        "28/10/2026",
        "Operações",
        "Compras de Mercadorias",
        "Optotal Hoya Ltda",
        -185.9,
        "A VENCER"
      ],
      [
        "28/10/2026",
        "Operações",
        "Compras de Mercadorias",
        "MARCOLIN BRASIL",
        -393.55,
        "A VENCER"
      ],
      [
        "27/10/2026",
        "Operações",
        "Compras de Mercadorias",
        "CARL ZEISS VISION BRASIL IND. OPTICA LTDA",
        -18.35,
        "A VENCER"
      ],
      [
        "27/10/2026",
        "Operações",
        "Compras de Mercadorias",
        "CARL ZEISS VISION BRASIL IND. OPTICA LTDA",
        -31.08,
        "A VENCER"
      ],
      [
        "27/10/2026",
        "Operações",
        "Compras de Mercadorias",
        "MARCOLIN BRASIL",
        -419.28,
        "A VENCER"
      ],
      [
        "27/10/2026",
        "Operações",
        "Compras de Mercadorias",
        "SAFILO DO BRASIL LTDA.",
        -391.51,
        "A VENCER"
      ],
      [
        "27/10/2026",
        "Operações",
        "Compras de Mercadorias",
        "SAFILO DO BRASIL LTDA.",
        -242.72,
        "A VENCER"
      ],
      [
        "26/10/2026",
        "Operações",
        "Compras de Mercadorias",
        "JUB2",
        -702.77,
        "A VENCER"
      ],
      [
        "26/10/2026",
        "Operações",
        "Compras de Mercadorias",
        "JUB2",
        -702.77,
        "A VENCER"
      ],
      [
        "26/10/2026",
        "Operações",
        "Compras de Mercadorias",
        "JUB2",
        -702.77,
        "A VENCER"
      ],
      [
        "26/10/2026",
        "Operações",
        "Compras de Mercadorias",
        "CARL ZEISS VISION BRASIL IND. OPTICA LTDA",
        -79.25,
        "A VENCER"
      ],
      [
        "25/10/2026",
        "Operações",
        "Compras de Mercadorias",
        "CARL ZEISS VISION BRASIL IND. OPTICA LTDA",
        -18.36,
        "A VENCER"
      ],
      [
        "25/10/2026",
        "Operações",
        "Compras de Mercadorias",
        "CARL ZEISS VISION BRASIL IND. OPTICA LTDA",
        -31.8,
        "A VENCER"
      ],
      [
        "22/10/2026",
        "Operações",
        "Compras de Mercadorias",
        "MARCHON BRASIL LTDA",
        -83.79,
        "A VENCER"
      ],
      [
        "22/10/2026",
        "Operações",
        "Compras de Mercadorias",
        "MARCHON BRASIL LTDA",
        -22.22,
        "A VENCER"
      ],
      [
        "22/10/2026",
        "Operações",
        "Compras de Mercadorias",
        "CD SUMARE (SP)",
        -217.89,
        "A VENCER"
      ],
      [
        "21/10/2026",
        "Operações",
        "Compras de Mercadorias",
        "CARL ZEISS VISION BRASIL IND. OPTICA LTDA",
        -16.18,
        "A VENCER"
      ],
      [
        "20/10/2026",
        "Operações",
        "Compras de Mercadorias",
        "MARCOLIN BRASIL",
        -716.89,
        "A VENCER"
      ],
      [
        "20/10/2026",
        "Operações",
        "Compras de Mercadorias",
        "PRESTIGE EYEWEAR DISTRIBUIDORA DE OPTICOS",
        -395.98,
        "A VENCER"
      ],
      [
        "20/10/2026",
        "Operações",
        "Compras de Mercadorias",
        "MARCOLIN BRASIL",
        -364,
        "A VENCER"
      ],
      [
        "19/10/2026",
        "Operações",
        "Compras de Mercadorias",
        "CD SUMARE (SP)",
        -203.89,
        "A VENCER"
      ],
      [
        "19/10/2026",
        "Operações",
        "Compras de Mercadorias",
        "CD SUMARE (SP)",
        -323.14,
        "A VENCER"
      ],
      [
        "19/10/2026",
        "Operações",
        "Compras de Mercadorias",
        "CD SUMARE (SP)",
        -311.99,
        "A VENCER"
      ],
      [
        "18/10/2026",
        "Operações",
        "Compras de Mercadorias",
        "CD SUMARE (SP)",
        -135.89,
        "A VENCER"
      ],
      [
        "18/10/2026",
        "Operações",
        "Compras de Mercadorias",
        "MARCHON BRASIL LTDA",
        -889.86,
        "A VENCER"
      ],
      [
        "18/10/2026",
        "Operações",
        "Compras de Mercadorias",
        "MARCHON BRASIL LTDA",
        -27.16,
        "A VENCER"
      ],
      [
        "17/10/2026",
        "Operações",
        "Compras de Mercadorias",
        "CARL ZEISS VISION BRASIL IND. OPTICA LTDA",
        -11.07,
        "A VENCER"
      ],
      [
        "17/10/2026",
        "Operações",
        "Compras de Mercadorias",
        "CARL ZEISS VISION BRASIL IND. OPTICA LTDA",
        -20.64,
        "A VENCER"
      ],
      [
        "17/10/2026",
        "Operações",
        "Compras de Mercadorias",
        "CARL ZEISS VISION BRASIL IND. OPTICA LTDA",
        -66.97,
        "A VENCER"
      ],
      [
        "17/10/2026",
        "Operações",
        "Compras de Mercadorias",
        "CARL ZEISS VISION BRASIL IND. OPTICA LTDA",
        -53.43,
        "A VENCER"
      ],
      [
        "16/10/2026",
        "Operações",
        "Compras de Mercadorias",
        "CARL ZEISS VISION BRASIL IND. OPTICA LTDA",
        -76.35,
        "A VENCER"
      ],
      [
        "15/10/2026",
        "Operações",
        "Compras de Mercadorias",
        "CARL ZEISS VISION BRASIL IND. OPTICA LTDA",
        -19.8,
        "A VENCER"
      ],
      [
        "15/10/2026",
        "Operações",
        "Compras de Mercadorias",
        "CD SUMARE (SP)",
        -355.31,
        "A VENCER"
      ],
      [
        "15/10/2026",
        "Operações",
        "Compras de Mercadorias",
        "MARCOLIN BRASIL",
        -583.23,
        "A VENCER"
      ],
      [
        "15/10/2026",
        "Operações",
        "Compras de Mercadorias",
        "CD SUMARE (SP)",
        -985.87,
        "A VENCER"
      ],
      [
        "15/10/2026",
        "Operações",
        "Compras de Mercadorias",
        "CD SUMARE (SP)",
        -277.78,
        "A VENCER"
      ],
      [
        "14/10/2026",
        "Operações",
        "Compras de Mercadorias",
        "CARL ZEISS VISION BRASIL IND. OPTICA LTDA",
        -40.54,
        "A VENCER"
      ],
      [
        "14/10/2026",
        "Operações",
        "Compras de Mercadorias",
        "CD SUMARE (SP)",
        -386.21,
        "A VENCER"
      ],
      [
        "14/10/2026",
        "Operações",
        "Compras de Mercadorias",
        "CD SUMARE (SP)",
        -727.79,
        "A VENCER"
      ],
      [
        "14/10/2026",
        "Operações",
        "Compras de Mercadorias",
        "CD SUMARE (SP)",
        -123.39,
        "A VENCER"
      ],
      [
        "13/10/2026",
        "Operações",
        "Compras de Mercadorias",
        "CARL ZEISS VISION BRASIL IND. OPTICA LTDA",
        -9.43,
        "A VENCER"
      ]
    ],
    "KPIS": {
      "TOTAL_RECEITA": 11468.560000000001,
      "TOTAL_DESPESA": 3838130.2299999995,
      "VALOR_LIQUIDO": -3826661.6699999995,
      "MARGEM_LIQUIDA": -33366.540088729525,
      "VALOR_LIQ_SERIES": [
        -4657.8,
        0,
        -2330.5,
        -1700123.2900000003,
        -1721887.46,
        -145277.07,
        -68351.92000000003,
        -30727.810000000005,
        -77695.71999999997,
        -37012.82,
        -20837.75,
        -17759.529999999995
      ]
    },
    "RECEITA_DIA": [
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      734,
      0,
      9474.04,
      0,
      0,
      1260.52,
      0,
      0,
      0,
      0
    ],
    "DESPESA_DIA": [
      56202.110000000015,
      35059.95000000001,
      12352.630000000001,
      441484.84,
      262881.12999999995,
      89929.73000000001,
      200476.53000000017,
      65110.12,
      65278.640000000014,
      286318.35000000003,
      26748.649999999998,
      53075.03999999999,
      67041.28,
      96258.98000000003,
      293454.1800000001,
      78046.55999999997,
      58285.69000000002,
      29691.63,
      56311.880000000005,
      602331.7699999998,
      28265.840000000004,
      73735.79000000001,
      54181.62,
      61078.26,
      79941.32,
      39978.539999999986,
      122591.40000000001,
      69736.71,
      97428.98999999992,
      333976.77999999985,
      875.29
    ],
    "SALDOS_MES": [
      -4657.8,
      -4657.8,
      -6988.3,
      -1707111.5900000003,
      -3428999.0500000003,
      -3574276.12,
      -3642628.04,
      -3673355.85,
      -3751051.5700000003,
      -3788064.39,
      -3808902.14,
      -3826661.67
    ],
    "FLUXO_RECEITA": [
      {
        "cat": "Receita de Vendas",
        "values": [
          0,
          0,
          0,
          10994.52,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0
        ]
      },
      {
        "cat": "Receitas de Serviços",
        "values": [
          0,
          0,
          0,
          474,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0
        ]
      },
      {
        "cat": "Rendimentos de Aplicações",
        "values": [
          0,
          0,
          0,
          0.04,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0
        ]
      }
    ],
    "FLUXO_DESPESA": [
      {
        "cat": "Compras de Mercadorias",
        "values": [
          0,
          0,
          -805.5,
          -140804.86999999994,
          -516658.6500000001,
          -63583.23000000002,
          -42425.53000000002,
          -30727.810000000005,
          -29358.990000000005,
          -27114.819999999996,
          -20837.75,
          -17759.529999999995
        ]
      },
      {
        "cat": "Aluguel fixo",
        "values": [
          0,
          0,
          0,
          -96744.78,
          -295724.10000000003,
          -37031.38,
          0,
          0,
          0,
          0,
          0,
          0
        ]
      },
      {
        "cat": "Dividendos",
        "values": [
          0,
          0,
          0,
          -161852.01,
          -123480,
          0,
          0,
          0,
          0,
          0,
          0,
          0
        ]
      },
      {
        "cat": "Custo com Serviços de Entrega",
        "values": [
          0,
          0,
          0,
          -139190.32000000004,
          -70458.84999999999,
          0,
          0,
          0,
          0,
          0,
          0,
          0
        ]
      },
      {
        "cat": "Empréstimos capital de giro",
        "values": [
          0,
          0,
          0,
          -16406.579999999998,
          -182117.64,
          0,
          0,
          0,
          0,
          0,
          0,
          0
        ]
      }
    ],
    "COMP_DATA": [
      {
        "tipo": "Receita",
        "isHeader": true,
        "d1": 0,
        "d2": 11468.560000000001
      },
      {
        "tipo": "Receita de Vendas",
        "parent": "Receita",
        "d1": 0,
        "d2": 10994.52
      },
      {
        "tipo": "Rendimentos de Aplicações",
        "parent": "Receita",
        "d1": 0,
        "d2": 0.04
      },
      {
        "tipo": "Receitas de Serviços",
        "parent": "Receita",
        "d1": 0,
        "d2": 474
      },
      {
        "tipo": "Despesa",
        "isHeader": true,
        "d1": -6988.3,
        "d2": -3578756.3799999948
      },
      {
        "tipo": "Compras de Mercadorias",
        "parent": "Despesa",
        "d1": -805.5,
        "d2": -721046.750000001
      },
      {
        "tipo": "&lt;Disponível&gt;",
        "parent": "Despesa",
        "d1": -1000,
        "d2": -69379.81
      },
      {
        "tipo": "Máquinas e Equipamentos",
        "parent": "Despesa",
        "d1": -4657.8,
        "d2": -23146.249999999996
      },
      {
        "tipo": "Custo Serviços Dedetização/coleta lixo/MICROAMB",
        "parent": "Despesa",
        "d1": -525,
        "d2": -9798.339999999998
      },
      {
        "tipo": "Aluguel fixo",
        "parent": "Despesa",
        "d1": 0,
        "d2": -429500.26000000007
      },
      {
        "tipo": "Outros Custos com Pessoal",
        "parent": "Despesa",
        "d1": 0,
        "d2": -5309.1
      },
      {
        "tipo": "Adiantamento",
        "parent": "Despesa",
        "d1": 0,
        "d2": -85687.76000000001
      },
      {
        "tipo": "Custo Consultorias",
        "parent": "Despesa",
        "d1": 0,
        "d2": -20052.98
      },
      {
        "tipo": "Móveis e Utensílios",
        "parent": "Despesa",
        "d1": 0,
        "d2": -20717.960000000006
      },
      {
        "tipo": "Rescisões",
        "parent": "Despesa",
        "d1": 0,
        "d2": -40268.47
      },
      {
        "tipo": "INSS",
        "parent": "Despesa",
        "d1": 0,
        "d2": -71510.93000000001
      },
      {
        "tipo": "FGTS",
        "parent": "Despesa",
        "d1": 0,
        "d2": -30408.229999999996
      },
      {
        "tipo": "ICMS",
        "parent": "Despesa",
        "d1": 0,
        "d2": -111764.27
      },
      {
        "tipo": "Simples Nacional (DAS)",
        "parent": "Despesa",
        "d1": 0,
        "d2": -78639.63
      },
      {
        "tipo": "Condomínio",
        "parent": "Despesa",
        "d1": 0,
        "d2": -56074.82
      },
      {
        "tipo": "Aluguel variável",
        "parent": "Despesa",
        "d1": 0,
        "d2": -55781.95
      },
      {
        "tipo": "Taxas e Licenças",
        "parent": "Despesa",
        "d1": 0,
        "d2": -28489.55
      },
      {
        "tipo": "Vale Refeição",
        "parent": "Despesa",
        "d1": 0,
        "d2": -84055.88000000002
      },
      {
        "tipo": "Manutenção loja",
        "parent": "Despesa",
        "d1": 0,
        "d2": -8550.96
      },
      {
        "tipo": "Assistência Médica",
        "parent": "Despesa",
        "d1": 0,
        "d2": -15387.670000000004
      },
      {
        "tipo": "Custo de Manutenção de Máquinas e Equipamentos",
        "parent": "Despesa",
        "d1": 0,
        "d2": -3979.33
      },
      {
        "tipo": "Royalties",
        "parent": "Despesa",
        "d1": 0,
        "d2": -111117.48999999999
      },
      {
        "tipo": "Fundo de Promoção",
        "parent": "Despesa",
        "d1": 0,
        "d2": -61724.82
      },
      {
        "tipo": "Frete",
        "parent": "Despesa",
        "d1": 0,
        "d2": -7761.96
      },
      {
        "tipo": "Internet/Telefone",
        "parent": "Despesa",
        "d1": 0,
        "d2": -5405.23
      },
      {
        "tipo": "Segurança",
        "parent": "Despesa",
        "d1": 0,
        "d2": -1904.83
      },
      {
        "tipo": "Repasses",
        "parent": "Despesa",
        "d1": 0,
        "d2": -124359.59999999999
      },
      {
        "tipo": "Serviços Softwares",
        "parent": "Despesa",
        "d1": 0,
        "d2": -29752.989999999994
      },
      {
        "tipo": "Água e Esgoto",
        "parent": "Despesa",
        "d1": 0,
        "d2": -11132.659999999998
      },
      {
        "tipo": "Custo com Serviços de Entrega",
        "parent": "Despesa",
        "d1": 0,
        "d2": -209649.17
      },
      {
        "tipo": "Custo Serviços Terceirizados",
        "parent": "Despesa",
        "d1": 0,
        "d2": -55864.509999999995
      },
      {
        "tipo": "Custo Agregadores e Cartões",
        "parent": "Despesa",
        "d1": 0,
        "d2": -1071.05
      },
      {
        "tipo": "Instalações",
        "parent": "Despesa",
        "d1": 0,
        "d2": -7625.910000000001
      },
      {
        "tipo": "Salários",
        "parent": "Despesa",
        "d1": 0,
        "d2": -179330.15000000005
      },
      {
        "tipo": "Contabilidade",
        "parent": "Despesa",
        "d1": 0,
        "d2": -22237.780000000002
      },
      {
        "tipo": "Gás",
        "parent": "Despesa",
        "d1": 0,
        "d2": -17435.94
      },
      {
        "tipo": "Energia Elétrica",
        "parent": "Despesa",
        "d1": 0,
        "d2": -63966.1
      },
      {
        "tipo": "ISS",
        "parent": "Despesa",
        "d1": 0,
        "d2": -297.76
      },
      {
        "tipo": "Seguros",
        "parent": "Despesa",
        "d1": 0,
        "d2": -2415.7
      },
      {
        "tipo": "Informática",
        "parent": "Despesa",
        "d1": 0,
        "d2": -1015.88
      },
      {
        "tipo": "Freelancers",
        "parent": "Despesa",
        "d1": 0,
        "d2": -73717.44000000002
      },
      {
        "tipo": "Equipamentos de Informática",
        "parent": "Despesa",
        "d1": 0,
        "d2": -374.9
      },
      {
        "tipo": "Férias",
        "parent": "Despesa",
        "d1": 0,
        "d2": -8282.37
      },
      {
        "tipo": "Custo Locomoção e Hospedagem Sócios em Viagens",
        "parent": "Despesa",
        "d1": 0,
        "d2": -14192.909999999994
      },
      {
        "tipo": "Custo Locomoção e Moradia",
        "parent": "Despesa",
        "d1": 0,
        "d2": -3336.83
      },
      {
        "tipo": "Dividendos",
        "parent": "Despesa",
        "d1": 0,
        "d2": -285332.01
      },
      {
        "tipo": "Novas Operações",
        "parent": "Despesa",
        "d1": 0,
        "d2": -8516.06
      },
      {
        "tipo": "Material de escritório",
        "parent": "Despesa",
        "d1": 0,
        "d2": -1819.5500000000002
      },
      {
        "tipo": "Marketing",
        "parent": "Despesa",
        "d1": 0,
        "d2": -10440.900000000001
      },
      {
        "tipo": "Comissões",
        "parent": "Despesa",
        "d1": 0,
        "d2": -1820.4
      },
      {
        "tipo": "Tarifas Bancárias",
        "parent": "Despesa",
        "d1": 0,
        "d2": -6186.01
      },
      {
        "tipo": "Custos Processuais, Judiciais, Cartório e Sindicatos",
        "parent": "Despesa",
        "d1": 0,
        "d2": -8805.619999999999
      },
      {
        "tipo": "PIS",
        "parent": "Despesa",
        "d1": 0,
        "d2": -15658.880000000001
      },
      {
        "tipo": "IOF",
        "parent": "Despesa",
        "d1": 0,
        "d2": -998.26
      },
      {
        "tipo": "Vale Transporte",
        "parent": "Despesa",
        "d1": 0,
        "d2": -499.12
      },
      {
        "tipo": "IPTU",
        "parent": "Despesa",
        "d1": 0,
        "d2": -1264.8799999999999
      },
      {
        "tipo": "Softwares gestão",
        "parent": "Despesa",
        "d1": 0,
        "d2": -9647.84
      },
      {
        "tipo": "Bonificações",
        "parent": "Despesa",
        "d1": 0,
        "d2": -7253.93
      },
      {
        "tipo": "Juros",
        "parent": "Despesa",
        "d1": 0,
        "d2": -12789.449999999999
      },
      {
        "tipo": "CDU",
        "parent": "Despesa",
        "d1": 0,
        "d2": -14714.380000000001
      },
      {
        "tipo": "Empréstimos capital de giro",
        "parent": "Despesa",
        "d1": 0,
        "d2": -198524.22000000003
      },
      {
        "tipo": "Demais Despesas",
        "parent": "Despesa",
        "d1": 0,
        "d2": -10959.99
      }
    ]
  }
};

// ALL_TX: lista flat de TODAS as transacoes normalizadas (despesa + receita,
// realizadas + a pagar + canceladas excluidas). Usada pra cross-filter real
// — pagina recalcula KPIs/charts/tabelas em runtime via aggregateTx().
// Cada row eh tupla compacta pra reduzir tamanho do bundle:
// [kind, mes, dia, categoria, cliente, valor, realizado, fornecedor, centroCusto, conta_slug]
const ALL_TX = [["r","2026-04",27,"Receita de Vendas","REDECARD",1260.52,1,"","","natuzon-aeroporto-vix"],["r","2026-04",24,"Receita de Vendas","DEPÓSITO EM DINHEIRO",1000,1,"","","casa-bauducco-aeroporto-vix"],["r","2026-04",24,"Receita de Vendas","DEPÓSITO EM DINHEIRO",1000,1,"","","casa-bauducco-aeroporto-vix"],["r","2026-04",24,"Receita de Vendas","DEPÓSITO EM DINHEIRO",2000,1,"","","casa-bauducco-aeroporto-vix"],["r","2026-04",24,"Receita de Vendas","DEPÓSITO EM DINHEIRO",2000,1,"","","casa-bauducco-aeroporto-vix"],["r","2026-04",24,"Receita de Vendas","DEPÓSITO EM DINHEIRO",2000,1,"","","casa-bauducco-aeroporto-vix"],["r","2026-04",24,"Receita de Vendas","DEPÓSITO EM DINHEIRO",1000,1,"","","casa-bauducco-aeroporto-vix"],["r","2026-04",22,"Receita de Vendas","REDECARD",734,1,"","","bolo-de-rolo-fair-trade-sdu"],["r","2026-04",24,"Rendimentos de Aplicações","REDECARD",0.04,1,"","","bolo-de-rolo-fair-trade-sdu"],["r","2026-04",24,"Receitas de Serviços","REDECARD",474,1,"","","bolo-de-rolo-fair-trade-sdu"],["d","2026-05",7,"Compras de Mercadorias","",468,0,"CAFE MERIDIANO IND. E COM. LTDA - FILIAL 03","","natuzon-aeroporto-vix"],["d","2026-04",24,"Compras de Mercadorias","",2401.72,0,"REAL GELATO E CACAU","","natuzon-aeroporto-vix"],["d","2026-04",24,"Compras de Mercadorias","",1586.97,0,"REAL GELATO E CACAU","","natuzon-aeroporto-vix"],["d","2026-04",22,"Compras de Mercadorias","",181,0,"PDV DISTRIBUIDORA","","natuzon-aeroporto-vix"],["d","2026-05",10,"Compras de Mercadorias","",708.85,0,"Fabrica Vitoria","","natuzon-aeroporto-vix"],["d","2026-05",6,"Compras de Mercadorias","",945.06,0,"COMERCIAL DISKPAN LTDA","","natuzon-aeroporto-vix"],["d","2026-05",5,"Compras de Mercadorias","",465.2,0,"BENDITO FRUTHO","","natuzon-aeroporto-vix"],["d","2026-05",6,"Compras de Mercadorias","",708.85,0,"Fabrica Vitoria","","natuzon-aeroporto-vix"],["d","2026-05",13,"Compras de Mercadorias","",1579.2,0,"LAS PALETITAS","","natuzon-aeroporto-vix"],["d","2026-04",29,"Compras de Mercadorias","",240,0,"52422818 HELOISA MARTINS GOVEIA","","natuzon-aeroporto-vix"],["d","2026-04",30,"Compras de Mercadorias","",1553.46,0,"MAIS LEVE ALIMENTOS LTDA","","natuzon-aeroporto-vix"],["d","2026-04",14,"Custo Serviços Dedetização/coleta lixo/MICROAMB","",113.22,1,"ASTRAL GRANDE VITORIA","","natuzon-aeroporto-vix"],["d","2026-04",14,"Aluguel fixo","",8772.93,1,"AEROPORTOS DO SUDESTE DO BRASIL S.A","","natuzon-aeroporto-vix"],["d","2026-04",14,"Aluguel fixo","",1219.69,1,"AEROPORTOS DO SUDESTE DO BRASIL S.A","","natuzon-aeroporto-vix"],["d","2026-04",14,"Outros Custos com Pessoal","",824,1,"AEROPORTOS DO SUDESTE DO BRASIL S.A","","natuzon-aeroporto-vix"],["d","2026-04",14,"Outros Custos com Pessoal","",155,1,"LIDER MAIS SAUDE","","natuzon-aeroporto-vix"],["d","2026-04",15,"Adiantamento","",500,1,"KEYLANE OLIVEIRA DE JESUS","","natuzon-aeroporto-vix"],["d","2026-04",15,"Adiantamento","",500,1,"KEZIA MORAES LOPES","","natuzon-aeroporto-vix"],["d","2026-04",15,"Adiantamento","",500,1,"GIOVANNA COSWOSK BAIA","","natuzon-aeroporto-vix"],["d","2026-04",15,"Adiantamento","",500,1,"RITA DE CASSIA PAIVA SALES","","natuzon-aeroporto-vix"],["d","2026-04",15,"Adiantamento","",500,1,"ANA CLAUDIA GONCALO DA SILVA","","natuzon-aeroporto-vix"],["d","2026-04",15,"Adiantamento","",500,1,"CAMILA DA COSTA","","natuzon-aeroporto-vix"],["d","2026-04",15,"Adiantamento","",500,1,"JULIA DOS SANTOS RODRIGUES","","natuzon-aeroporto-vix"],["d","2026-04",16,"Compras de Mercadorias","",867.55,1,"COMERCIAL DISKPAN LTDA","","natuzon-aeroporto-vix"],["d","2026-04",16,"Compras de Mercadorias","",2694.82,1,"REAL GELATO E CACAU","","natuzon-aeroporto-vix"],["d","2026-04",16,"Compras de Mercadorias","",2133.46,1,"REAL GELATO E CACAU","","natuzon-aeroporto-vix"],["d","2026-04",16,"Compras de Mercadorias","",2505.35,1,"REAL GELATO E CACAU","","natuzon-aeroporto-vix"],["d","2026-04",16,"Compras de Mercadorias","",349.1,1,"BENDITO FRUTHO","","natuzon-aeroporto-vix"],["d","2026-04",16,"Custo Consultorias","",447,1,"NUTRI CONSULT TREINAMENTOS E CAPACITACAO","","natuzon-aeroporto-vix"],["d","2026-04",16,"Compras de Mercadorias","",240,1,"52422818 HELOISA MARTINS GOVEIA","","natuzon-aeroporto-vix"],["d","2026-04",16,"Móveis e Utensílios","",122.7,1,"MERCADO PAGO INSTITUICAO DE PAGAMENTO LTDA","","natuzon-aeroporto-vix"],["d","2026-04",16,"Rescisões","",127.76,1,"KAYKY TEODORO FELICIO","","natuzon-aeroporto-vix"],["d","2026-04",20,"INSS","",1398.76,1,"RECEITA FEDERAL","","natuzon-aeroporto-vix"],["d","2026-04",20,"FGTS","",1403.41,1,"CEF MATRIZ","","natuzon-aeroporto-vix"],["d","2026-04",20,"ICMS","",121.7,1,"ES SEFAZ","","natuzon-aeroporto-vix"],["d","2026-04",20,"Simples Nacional (DAS)","",7932.14,1,"RECEITA FEDERAL","","natuzon-aeroporto-vix"],["d","2026-04",20,"Condomínio","",1514.19,1,"AEROPORTOS DO SUDESTE DO BRASIL S.A","","natuzon-aeroporto-vix"],["d","2026-04",20,"Aluguel variável","",6262.17,1,"AEROPORTOS DO SUDESTE DO BRASIL S.A","","natuzon-aeroporto-vix"],["d","2026-04",20,"Condomínio","",1773.4,1,"AEROPORTOS DO SUDESTE DO BRASIL S.A","","natuzon-aeroporto-vix"],["d","2026-04",20,"Compras de Mercadorias","",210,1,"RITA DE CASSIA RACANELLI DE FIGUEIREDO","","natuzon-aeroporto-vix"],["d","2026-04",22,"Compras de Mercadorias","",1090.59,1,"PDV DISTRIBUIDORA","","natuzon-aeroporto-vix"],["d","2026-04",22,"Compras de Mercadorias","",1928.7,1,"MAIS LEVE ALIMENTOS LTDA","","natuzon-aeroporto-vix"],["d","2026-04",22,"Compras de Mercadorias","",432.5,1,"COMERCIAL DISKPAN LTDA","","natuzon-aeroporto-vix"],["d","2026-04",22,"Compras de Mercadorias","",849.15,1,"LIDER REPRESENTACAO E DISTRIBUICAO LTDA","","natuzon-aeroporto-vix"],["d","2026-04",22,"Taxas e Licenças","",170,1,"ABRASEL-SP","","natuzon-aeroporto-vix"],["d","2026-04",24,"Compras de Mercadorias","",528,1,"LEVEI UM BOLO MATRIZ","","natuzon-aeroporto-vix"],["d","2026-04",27,"Vale Refeição","",200,1,"JULIA DOS SANTOS RODRIGUES","","natuzon-aeroporto-vix"],["d","2026-05",14,"Compras de Mercadorias","",3618.6,0,"FORNERIA BIGLIA PANIFICADORA E CONFEITARIA LTDA","","casa-bauducco-aeroporto-vix"],["d","2026-05",11,"Compras de Mercadorias","",576,0,"TUDO TORTAS","","casa-bauducco-aeroporto-vix"],["d","2026-05",12,"Compras de Mercadorias","",3389.45,0,"PANDURATA ALIMENTOS LTDA","","casa-bauducco-aeroporto-vix"],["d","2026-05",16,"Compras de Mercadorias","",368.29,0,"PREMIUM DESCARTAVEIS","","casa-bauducco-aeroporto-vix"],["d","2026-05",14,"Compras de Mercadorias","",948.24,0,"FABBRI BRASIL LTDA","","casa-bauducco-aeroporto-vix"],["d","2026-05",4,"Compras de Mercadorias","",288.05,0,"DROP HIGIENIZACAO PROFISSIONAL","","casa-bauducco-aeroporto-vix"],["d","2026-05",19,"Compras de Mercadorias","",2566.94,0,"PANDURATA ALIMENTOS LTDA","","casa-bauducco-aeroporto-vix"],["d","2026-05",18,"Compras de Mercadorias","",725.47,0,"TUDO TORTAS","","casa-bauducco-aeroporto-vix"],["d","2026-05",21,"Compras de Mercadorias","",1977.3,0,"FORNERIA BIGLIA PANIFICADORA E CONFEITARIA LTDA","","casa-bauducco-aeroporto-vix"],["d","2026-05",9,"Compras de Mercadorias","",368.29,0,"PREMIUM DESCARTAVEIS","","casa-bauducco-aeroporto-vix"],["d","2026-04",17,"Compras de Mercadorias","",425.33,0,"PANDURATA ALIMENTOS LTDA","","casa-bauducco-aeroporto-vix"],["d","2026-04",22,"Compras de Mercadorias","",574.39,0,"VILA VITORIA MERCANTIL DO BRASIL LTDA","","casa-bauducco-aeroporto-vix"],["d","2026-05",2,"Compras de Mercadorias","",1285.92,0,"COMERCIAL DISKPAN LTDA","","casa-bauducco-aeroporto-vix"],["d","2026-05",5,"Compras de Mercadorias","",590.92,0,"COMERCIAL DISKPAN LTDA","","casa-bauducco-aeroporto-vix"],["d","2026-04",28,"Compras de Mercadorias","",178.94,0,"GRAFTEC GRAFICA E EDITORA LTDA","","casa-bauducco-aeroporto-vix"],["d","2026-05",12,"Compras de Mercadorias","",878.03,0,"CDD VIANA","","casa-bauducco-aeroporto-vix"],["d","2026-04",29,"Compras de Mercadorias","",378.49,0,"VILA VITORIA MERCANTIL DO BRASIL LTDA","","casa-bauducco-aeroporto-vix"],["d","2026-05",6,"Compras de Mercadorias","",669.71,0,"Fabrica Vitoria","","casa-bauducco-aeroporto-vix"],["d","2026-04",14,"Manutenção loja","",150.96,1,"ASTRAL GRANDE VITORIA","","casa-bauducco-aeroporto-vix"],["d","2026-04",14,"Assistência Médica","",150,1,"SPRING","","casa-bauducco-aeroporto-vix"],["d","2026-04",15,"Assistência Médica","",217.5,1,"LIDER MAIS SAUDE","","casa-bauducco-aeroporto-vix"],["d","2026-04",15,"Aluguel fixo","",672.69,1,"AEROPORTOS DO SUDESTE DO BRASIL S.A","","casa-bauducco-aeroporto-vix"],["d","2026-04",15,"Aluguel fixo","",962.81,1,"AEROPORTOS DO SUDESTE DO BRASIL S.A","","casa-bauducco-aeroporto-vix"],["d","2026-04",15,"Aluguel fixo","",15783.78,1,"AEROPORTOS DO SUDESTE DO BRASIL S.A","","casa-bauducco-aeroporto-vix"],["d","2026-04",16,"Compras de Mercadorias","",1601.37,1,"COMERCIAL DISKPAN LTDA","","casa-bauducco-aeroporto-vix"],["d","2026-04",16,"Rescisões","",197.19,1,"SHEILA SANTOS ALVES","","casa-bauducco-aeroporto-vix"],["d","2026-04",17,"Compras de Mercadorias","",321.9,1,"MERCADO PAGO INSTITUICAO DE PAGAMENTO LTDA","","casa-bauducco-aeroporto-vix"],["d","2026-04",20,"Outros Custos com Pessoal","",380,1,"BENEFICIO SOCIAL FAMILIAR","","casa-bauducco-aeroporto-vix"],["d","2026-04",20,"Simples Nacional (DAS)","",17824.13,1,"RECEITA FEDERAL","","casa-bauducco-aeroporto-vix"],["d","2026-04",20,"ICMS","",53.68,1,"RECEITA FEDERAL","","casa-bauducco-aeroporto-vix"],["d","2026-04",20,"ICMS","",198.06,1,"RECEITA FEDERAL","","casa-bauducco-aeroporto-vix"],["d","2026-04",20,"INSS","",1568.8,1,"RECEITA FEDERAL","","casa-bauducco-aeroporto-vix"],["d","2026-04",20,"FGTS","",1699.91,1,"CEF MATRIZ","","casa-bauducco-aeroporto-vix"],["d","2026-04",20,"Custo de Manutenção de Máquinas e Equipamentos","",650,1,"GABRIEL ROCHA AMORIM 13608205748","","casa-bauducco-aeroporto-vix"],["d","2026-04",20,"Adiantamento","",500,1,"ANGELA MARIA MAIA BENTO","","casa-bauducco-aeroporto-vix"],["d","2026-04",20,"Adiantamento","",500,1,"FERNANDA MAIA SILVA","","casa-bauducco-aeroporto-vix"],["d","2026-04",20,"Adiantamento","",500,1,"GABRIEL SIMAS BARBOSA","","casa-bauducco-aeroporto-vix"],["d","2026-04",20,"Adiantamento","",500,1,"JACIELLY FELIX DE SOUZA","","casa-bauducco-aeroporto-vix"],["d","2026-04",20,"Adiantamento","",650,1,"LAIANE GOMES SANTOS","","casa-bauducco-aeroporto-vix"],["d","2026-04",20,"Adiantamento","",500,1,"LUCIANA CARIAS DA SILVA SOUZA","","casa-bauducco-aeroporto-vix"],["d","2026-04",20,"Adiantamento","",500,1,"SIDRIELY HELENA TEODORO LUCIDATO","","casa-bauducco-aeroporto-vix"],["d","2026-04",20,"Adiantamento","",500,1,"SUELLEN LIMA BONIFACIO","","casa-bauducco-aeroporto-vix"],["d","2026-04",20,"Adiantamento","",500,1,"VITORIA SCHROEDER DE JESUS RIBEIRO","","casa-bauducco-aeroporto-vix"],["d","2026-04",20,"Aluguel variável","",16163.53,1,"AEROPORTOS DO SUDESTE DO BRASIL S.A","","casa-bauducco-aeroporto-vix"],["d","2026-04",20,"Royalties","",11275.52,1,"ELLECE VAREJO DE ALIMENTOS LTDA","","casa-bauducco-aeroporto-vix"],["d","2026-04",20,"Condomínio","",3644.57,1,"AEROPORTOS DO SUDESTE DO BRASIL S.A","","casa-bauducco-aeroporto-vix"],["d","2026-04",20,"Fundo de Promoção","",3758.51,1,"ELLECE VAREJO DE ALIMENTOS LTDA","","casa-bauducco-aeroporto-vix"],["d","2026-04",20,"Compras de Mercadorias","",1222.63,1,"COMERCIAL DISKPAN LTDA","","casa-bauducco-aeroporto-vix"],["d","2026-04",20,"Compras de Mercadorias","",717.65,1,"Fabrica Vitoria","","casa-bauducco-aeroporto-vix"],["d","2026-04",23,"Frete","",555.12,1,"LOGW SERVICOS DE TRANSPORTES LTDA","","casa-bauducco-aeroporto-vix"],["d","2026-04",23,"Compras de Mercadorias","",727.5,1,"T.G.COMERCIO","","casa-bauducco-aeroporto-vix"],["d","2026-04",23,"Taxas e Licenças","",170,1,"SINDICATO DOS RESTAURANTES, BARES E SIMILARES NO ESTADO DO ESPIRITO SANTO","","casa-bauducco-aeroporto-vix"],["d","2026-04",23,"Compras de Mercadorias","",566.93,1,"LIPPAUS DISTRIBUIDORA","","casa-bauducco-aeroporto-vix"],["d","2026-04",27,"Compras de Mercadorias","",863.16,1,"MERCADO PAGO INSTITUICAO DE PAGAMENTO LTDA","","casa-bauducco-aeroporto-vix"],["d","2026-04",27,"Compras de Mercadorias","",1285.92,1,"COMERCIAL DISKPAN LTDA","","casa-bauducco-aeroporto-vix"],["d","2026-05",8,"Internet/Telefone","",221.84,0,"TELEFONICA BRASIL S.A.","","dominos-aclimacao"],["d","2026-05",10,"Aluguel fixo","",10108.42,0,"JOSUE CHEN","","dominos-aclimacao"],["d","2026-05",20,"Taxas e Licenças","",156,0,"ABRASEL-SP","","dominos-aclimacao"],["d","2026-04",27,"Segurança","",285.59,0,"VERISURE BRASIL MONITORAMENTO DE ALARMES S.A","","dominos-aclimacao"],["d","2026-04",30,"Repasses","",847.46,0,"DP1 RESTAURANTE LTDA","","dominos-aclimacao"],["d","2026-07",10,"Seguros","",218.99,0,"MITSUI SUMITOMO SEGUROS S.A.","","dominos-aclimacao"],["d","2027-02",28,"Repasses","",847.46,0,"DP1 RESTAURANTE LTDA","","dominos-aclimacao"],["d","2026-05",9,"Custo Serviços Dedetização/coleta lixo/MICROAMB","",350,0,"MUNDO DAS PRAGAS","","dominos-aclimacao"],["d","2026-04",15,"Royalties","",6958.29,0,"DP1 RESTAURANTE LTDA","","dominos-aclimacao"],["d","2026-04",15,"Serviços Softwares","",945.45,0,"DP1 RESTAURANTE LTDA","","dominos-aclimacao"],["d","2026-04",20,"ICMS","",4594.65,0,"ICMS À PAGAR","","dominos-aclimacao"],["d","2026-04",20,"Fundo de Promoção","",4385.53,0,"ASSOCIACAO DOMINO&apos;S","","dominos-aclimacao"],["d","2026-05",19,"Compras de Mercadorias","",6686.7,0,"RFG COMERCIO TRANSPORTES E SERVICOS LTDA","","dominos-aclimacao"],["d","2026-05",12,"Compras de Mercadorias","",23.87,0,"RFG COMERCIO TRANSPORTES E SERVICOS LTDA","","dominos-aclimacao"],["d","2026-05",12,"Compras de Mercadorias","",8023.07,0,"RFG COMERCIO TRANSPORTES E SERVICOS LTDA","","dominos-aclimacao"],["d","2026-04",17,"Compras de Mercadorias","",2125,0,"BAL-Jaguare-SP","","dominos-aclimacao"],["d","2026-05",13,"Compras de Mercadorias","",661.32,0,"SPAL INDUSTRIA BRASILEIRA DE BEBIDAS S/A","","dominos-aclimacao"],["d","2026-05",7,"Água e Esgoto","",180.36,0,"SABESP","","dominos-aclimacao"],["d","2026-05",26,"Compras de Mercadorias","",9123.65,0,"RFG COMERCIO TRANSPORTES E SERVICOS LTDA","","dominos-aclimacao"],["d","2026-04",29,"Compras de Mercadorias","",486,0,"VINHAIS","","dominos-aclimacao"],["d","2026-05",20,"Compras de Mercadorias","",879.63,0,"SPAL INDUSTRIA BRASILEIRA DE BEBIDAS S/A","","dominos-aclimacao"],["d","2026-05",7,"Custo com Serviços de Entrega","",2946,0,"STAR GOLD DELIVERY LTDA","","dominos-aclimacao"],["d","2026-04",9,"Custo Serviços Dedetização/coleta lixo/MICROAMB","",350,1,"MUNDO DAS PRAGAS","","dominos-aclimacao"],["d","2026-04",9,"Custo com Serviços de Entrega","",3449,1,"STAR GOLD DELIVERY LTDA","","dominos-aclimacao"],["d","2026-04",10,"Custo Serviços Terceirizados","",1000,1,"RUAN TONOLLI GESTAO EMPRESARIAL","","dominos-aclimacao"],["d","2026-04",10,"Custo Serviços Terceirizados","",1062.5,1,"55.504.962 GELSON VIANA MONTALVAO","","dominos-aclimacao"],["d","2026-04",13,"Custo Agregadores e Cartões","",280,1,"STONE INSTITUICAO DE PAGAMENTO S.A","","dominos-aclimacao"],["d","2026-04",15,"Frete","",134.25,1,"55.504.962 GELSON VIANA MONTALVAO","","dominos-aclimacao"],["d","2026-04",15,"&lt;Disponível&gt;","",1000,1,"DANIEL SILVA DE SOUSA","","dominos-aclimacao"],["d","2026-04",15,"Adiantamento","",675.41,1,"ANDRE NICOLAS MEY","","dominos-aclimacao"],["d","2026-04",15,"Adiantamento","",895.02,1,"THALES OWAN LIMA DO NASCIMENTO","","dominos-aclimacao"],["d","2026-04",15,"Adiantamento","",1140,1,"TACIANO LIMA DE ARAUJO","","dominos-aclimacao"],["d","2026-04",15,"Adiantamento","",675.41,1,"DAIVID JOSE ROQUE DA SILVA","","dominos-aclimacao"],["d","2026-04",15,"Adiantamento","",675.41,1,"LUCIANO BRUNO FERREIRA DE LIMA","","dominos-aclimacao"],["d","2026-04",16,"Custo com Serviços de Entrega","",3130,1,"STAR GOLD DELIVERY LTDA","","dominos-aclimacao"],["d","2026-04",17,"Custo de Manutenção de Máquinas e Equipamentos","",403.33,1,"LEROY MERLIN COMPANHIA BRASILEIRA DE BRICOLAGEM","","dominos-aclimacao"],["d","2026-04",17,"Instalações","",213.73,1,"NICOM COMERCIO DE MATERIAIS PARA CONSTRUCOES LTDA","","dominos-aclimacao"],["d","2026-04",20,"Taxas e Licenças","",156,1,"ABRASEL-SP","","dominos-aclimacao"],["d","2026-04",22,"Internet/Telefone","",106.81,1,"TELEFONICA BRASIL S.A.","","dominos-aclimacao"],["d","2026-04",23,"Custo com Serviços de Entrega","",3073,1,"STAR GOLD DELIVERY LTDA","","dominos-aclimacao"],["d","2026-04",29,"Compras de Mercadorias","",899.19,1,"SPAL INDUSTRIA BRASILEIRA DE BEBIDAS S/A","","dominos-aclimacao"],["d","2026-04",30,"Custo com Serviços de Entrega","",3910.74,1,"STAR GOLD DELIVERY LTDA","","dominos-aclimacao"],["d","2026-04",30,"Salários","",998.57,1,"DAIVID JOSE ROQUE DA SILVA","","dominos-aclimacao"],["d","2026-04",30,"Salários","",3067.9,1,"THALES OWAN LIMA DO NASCIMENTO","","dominos-aclimacao"],["d","2026-04",30,"Salários","",1243.27,1,"TACIANO LIMA DE ARAUJO","","dominos-aclimacao"],["d","2026-04",30,"Salários","",1123.8,1,"LUCIANO BRUNO FERREIRA DE LIMA","","dominos-aclimacao"],["d","2026-04",30,"Salários","",1115.24,1,"ANDRE NICOLAS MEY","","dominos-aclimacao"],["d","2026-05",4,"Contabilidade","",1067.9,1,"OFFICE ASSESSORIA CONTABIL LTDA","","dominos-aclimacao"],["d","2026-05",4,"Gás","",2172.72,1,"COMPANHIA DE GAS DE SAO PAULO COMGAS","","dominos-aclimacao"],["d","2026-05",7,"Serviços Softwares","",634.75,1,"GCOM","","dominos-aclimacao"],["d","2026-05",5,"Vale Refeição","",4226.04,1,"CAJU","","dominos-aclimacao"],["d","2026-05",6,"Energia Elétrica","",68.4,1,"ENEL DISTRIBUICAO SAO PAULO","","dominos-aclimacao"],["d","2026-04",30,"Compras de Mercadorias","",4535.97,0,"COMERCIAL CASA DOS FRIOS LTDA","","bolo-de-rolo-aeroporto-vix"],["d","2026-05",4,"Compras de Mercadorias","",1234.49,0,"CDD VIANA","","bolo-de-rolo-aeroporto-vix"],["d","2026-05",12,"Compras de Mercadorias","",550.14,0,"CD VIANA 3C ALIMENTOS","","bolo-de-rolo-aeroporto-vix"],["d","2026-04",29,"Compras de Mercadorias","",752.84,0,"LIPPAUS DISTRIBUIDORA","","bolo-de-rolo-aeroporto-vix"],["d","2026-04",16,"Compras de Mercadorias","",537,0,"XODO DE MINAS","","bolo-de-rolo-aeroporto-vix"],["d","2026-05",2,"Compras de Mercadorias","",420.99,0,"COMERCIAL DISKPAN LTDA","","bolo-de-rolo-aeroporto-vix"],["d","2026-05",4,"Compras de Mercadorias","",1102.95,0,"LIDER REPRESENTACAO E DISTRIBUICAO LTDA","","bolo-de-rolo-aeroporto-vix"],["d","2026-05",4,"Compras de Mercadorias","",1504.57,0,"PDV DISTRIBUIDORA","","bolo-de-rolo-aeroporto-vix"],["d","2026-05",6,"Compras de Mercadorias","",868.69,0,"COMERCIAL DISKPAN LTDA","","bolo-de-rolo-aeroporto-vix"],["d","2026-05",2,"Compras de Mercadorias","",2393.9,0,"T.G.COMERCIO","","bolo-de-rolo-aeroporto-vix"],["d","2026-04",23,"Compras de Mercadorias","",302.28,0,"VILA VITORIA MERCANTIL DO BRASIL LTDA","","bolo-de-rolo-aeroporto-vix"],["d","2026-04",22,"Compras de Mercadorias","",1786,0,"LEVEI UM BOLO MATRIZ","","bolo-de-rolo-aeroporto-vix"],["d","2026-05",7,"Compras de Mercadorias","",936,0,"CAFE MERIDIANO IND. E COM. LTDA - FILIAL 03","","bolo-de-rolo-aeroporto-vix"],["d","2026-05",14,"Compras de Mercadorias","",459.65,0,"GECORE","","bolo-de-rolo-aeroporto-vix"],["d","2026-04",2,"Contabilidade","",1156,0,"OFFICE ASSESSORIA CONTABIL LTDA","","bolo-de-rolo-aeroporto-vix"],["d","2026-04",2,"Custo de Manutenção de Máquinas e Equipamentos","",1200,0,"JOSE CARLOS CORREA DA ROCHA JUNIOR","","bolo-de-rolo-aeroporto-vix"],["d","2026-04",6,"Salários","",982.78,0,"MARIA EDUARDA AMORIM OLIVEIRA","","bolo-de-rolo-aeroporto-vix"],["d","2026-04",6,"Salários","",1743.35,0,"SANDRA FERREIRA MOREIRA","","bolo-de-rolo-aeroporto-vix"],["d","2026-04",30,"Compras de Mercadorias","",1269.58,0,"Fabrica Vitoria","","bolo-de-rolo-aeroporto-vix"],["d","2026-04",14,"Compras de Mercadorias","",255,0,"SIMONE SILVA MARQUES - PANIFICADORA MARQUES","","bolo-de-rolo-aeroporto-vix"],["d","2026-04",24,"Compras de Mercadorias","",859.2,0,"XODO DE MINAS","","bolo-de-rolo-aeroporto-vix"],["d","2026-05",12,"Compras de Mercadorias","",1291.63,0,"CDD VIANA","","bolo-de-rolo-aeroporto-vix"],["d","2026-05",14,"Compras de Mercadorias","",662.11,0,"COMERCIAL DISKPAN LTDA","","bolo-de-rolo-aeroporto-vix"],["d","2026-05",28,"Compras de Mercadorias","",425.22,0,"BENDITO FRUTHO","","bolo-de-rolo-aeroporto-vix"],["d","2026-05",14,"Compras de Mercadorias","",326.81,0,"PARAISO","","bolo-de-rolo-aeroporto-vix"],["d","2026-04",29,"Compras de Mercadorias","",483.3,0,"XODO DE MINAS","","bolo-de-rolo-aeroporto-vix"],["d","2026-04",9,"Compras de Mercadorias","",4500,0,"DECORATO MARMORE E GRANITO REPRESENTACOES LTDA","","bolo-de-rolo-aeroporto-vix"],["d","2026-05",25,"Compras de Mercadorias","",724,0,"CAFE MERIDIANO IND. E COM. LTDA - FILIAL 03","","bolo-de-rolo-aeroporto-vix"],["d","2026-05",4,"Compras de Mercadorias","",912.9,0,"XODO DE MINAS","","bolo-de-rolo-aeroporto-vix"],["d","2026-05",20,"Compras de Mercadorias","",5742.54,0,"COMERCIAL CASA DOS FRIOS LTDA","","bolo-de-rolo-aeroporto-vix"],["d","2026-04",30,"Compras de Mercadorias","",4105.15,0,"MAIS LEVE ALIMENTOS LTDA","","bolo-de-rolo-aeroporto-vix"],["d","2026-05",5,"Compras de Mercadorias","",715.58,0,"VILA VITORIA MERCANTIL DO BRASIL LTDA","","bolo-de-rolo-aeroporto-vix"],["d","2026-05",25,"Compras de Mercadorias","",1476.72,0,"CDD VIANA","","bolo-de-rolo-aeroporto-vix"],["d","2026-03",25,"Compras de Mercadorias","",805.5,1,"XODO DE MINAS","","bolo-de-rolo-aeroporto-vix"],["d","2026-04",14,"Compras de Mercadorias","",1223.39,1,"Fabrica Vitoria","","bolo-de-rolo-aeroporto-vix"],["d","2026-04",16,"Compras de Mercadorias","",640,1,"52422818 HELOISA MARTINS GOVEIA","","bolo-de-rolo-aeroporto-vix"],["d","2026-04",22,"Compras de Mercadorias","",537,1,"XODO DE MINAS","","bolo-de-rolo-aeroporto-vix"],["d","2026-04",22,"Compras de Mercadorias","",2946.9,1,"MAIS LEVE ALIMENTOS LTDA","","bolo-de-rolo-aeroporto-vix"],["d","2026-04",22,"Compras de Mercadorias","",425.22,1,"BENDITO FRUTHO","","bolo-de-rolo-aeroporto-vix"],["d","2026-04",24,"Compras de Mercadorias","",2497.4,1,"T.G.COMERCIO","","bolo-de-rolo-aeroporto-vix"],["d","2026-04",27,"Compras de Mercadorias","",859.2,1,"XODO DE MINAS","","bolo-de-rolo-aeroporto-vix"],["d","2026-04",27,"Compras de Mercadorias","",875.19,1,"PEPSICO DO BRASIL LTDA","","bolo-de-rolo-aeroporto-vix"],["d","2026-05",20,"Aluguel fixo","",14738.53,0,"DP1 RESTAURANTE LTDA","","dominos-campo-belo"],["d","2026-05",11,"Custo Serviços Dedetização/coleta lixo/MICROAMB","",373.15,0,"TRULY NOLEN PEST CONTROL","","dominos-campo-belo"],["d","2026-05",11,"ISS","",42.59,0,"Prefeitura Municipal de São Paulo","","dominos-campo-belo"],["d","2026-05",20,"Taxas e Licenças","",156,0,"ABRASEL-SP","","dominos-campo-belo"],["d","2026-05",15,"Manutenção loja","",1200,0,"NEW STAR- COMUNICACAO VISUAL","","dominos-campo-belo"],["d","2026-06",17,"Energia Elétrica","",4500,0,"ENEL DISTRIBUICAO SAO PAULO","","dominos-campo-belo"],["d","2026-05",17,"Máquinas e Equipamentos","",353.83,0,"EMANUEL PEDRO GEFE DA ROSA MESQUITA","","dominos-campo-belo"],["d","2026-05",10,"Seguros","",225.01,0,"MITSUI SUMITOMO SEGUROS S.A.","","dominos-campo-belo"],["d","2026-04",15,"Royalties","",7661.3,0,"DP1 RESTAURANTE LTDA","","dominos-campo-belo"],["d","2026-04",15,"Serviços Softwares","",1289.51,0,"DP1 RESTAURANTE LTDA","","dominos-campo-belo"],["d","2026-04",20,"ICMS","",6043.52,0,"ICMS À PAGAR","","dominos-campo-belo"],["d","2026-04",20,"Fundo de Promoção","",2847.55,0,"ASSOCIACAO DOMINO&apos;S","","dominos-campo-belo"],["d","2026-05",7,"Compras de Mercadorias","",188.45,0,"HNK BR BEBIDAS LTDA","","dominos-campo-belo"],["d","2026-06",15,"Gás","",877.8,0,"CONSIGAZ MAUA","","dominos-campo-belo"],["d","2026-05",15,"Gás","",937.44,0,"CONSIGAZ MAUA","","dominos-campo-belo"],["d","2026-05",6,"Outros Custos com Pessoal","",361.52,0,"INVESTIMENTOS À PAGAR","","dominos-campo-belo"],["d","2026-05",11,"Informática","",60,0,"JOAO PAULO CABRERA","","dominos-campo-belo"],["d","2026-05",7,"Custo com Serviços de Entrega","",3988,0,"STAR GOLD DELIVERY LTDA","","dominos-campo-belo"],["d","2026-04",9,"Custo com Serviços de Entrega","",4053,1,"STAR GOLD DELIVERY LTDA","","dominos-campo-belo"],["d","2026-04",10,"Custo Serviços Terceirizados","",1062.5,1,"55.504.962 GELSON VIANA MONTALVAO","","dominos-campo-belo"],["d","2026-04",10,"Custo Serviços Terceirizados","",1000,1,"RUAN TONOLLI GESTAO EMPRESARIAL","","dominos-campo-belo"],["d","2026-04",10,"ISS","",42.59,1,"Prefeitura Municipal de São Paulo","","dominos-campo-belo"],["d","2026-04",13,"Freelancers","",280,1,"SALÁRIOS À PAGAR","","dominos-campo-belo"],["d","2026-04",13,"Freelancers","",120,1,"SALÁRIOS À PAGAR","","dominos-campo-belo"],["d","2026-04",13,"Freelancers","",240,1,"SALÁRIOS À PAGAR","","dominos-campo-belo"],["d","2026-04",13,"Freelancers","",240,1,"SALÁRIOS À PAGAR","","dominos-campo-belo"],["d","2026-04",15,"Frete","",83.78,1,"55.504.962 GELSON VIANA MONTALVAO","","dominos-campo-belo"],["d","2026-04",15,"&lt;Disponível&gt;","",2000,1,"EMANUEL PEDRO GEFE DA ROSA MESQUITA","","dominos-campo-belo"],["d","2026-04",15,"&lt;Disponível&gt;","",1000,1,"DANIEL SILVA DE SOUSA","","dominos-campo-belo"],["d","2026-04",15,"Adiantamento","",968.67,1,"EMILY MILLENA DA SILVA VIANA","","dominos-campo-belo"],["d","2026-04",15,"Adiantamento","",675.41,1,"GABRIEL LIMA DA SILVA","","dominos-campo-belo"],["d","2026-04",15,"Adiantamento","",968.67,1,"JULIANA GOMES DE CARVALHO","","dominos-campo-belo"],["d","2026-04",16,"Custo com Serviços de Entrega","",4348,1,"STAR GOLD DELIVERY LTDA","","dominos-campo-belo"],["d","2026-04",17,"Internet/Telefone","",89.9,1,"EMANUEL PEDRO GEFE DA ROSA MESQUITA","","dominos-campo-belo"],["d","2026-04",17,"Equipamentos de Informática","",45.4,1,"EMANUEL PEDRO GEFE DA ROSA MESQUITA","","dominos-campo-belo"],["d","2026-04",20,"Freelancers","",240,1,"SALÁRIOS À PAGAR","","dominos-campo-belo"],["d","2026-04",20,"Freelancers","",280,1,"SALÁRIOS À PAGAR","","dominos-campo-belo"],["d","2026-04",20,"Freelancers","",720,1,"SALÁRIOS À PAGAR","","dominos-campo-belo"],["d","2026-04",20,"Taxas e Licenças","",156,1,"ABRASEL-SP","","dominos-campo-belo"],["d","2026-04",22,"Água e Esgoto","",668.88,1,"SABESP","","dominos-campo-belo"],["d","2026-04",23,"Custo com Serviços de Entrega","",4237,1,"STAR GOLD DELIVERY LTDA","","dominos-campo-belo"],["d","2026-04",27,"Assistência Médica","",202,1,"PLBRASIL HEALTH&amp;SAFETY","","dominos-campo-belo"],["d","2026-04",27,"Freelancers","",120,1,"SALÁRIOS À PAGAR","","dominos-campo-belo"],["d","2026-04",27,"Freelancers","",720,1,"SALÁRIOS À PAGAR","","dominos-campo-belo"],["d","2026-04",27,"Freelancers","",280,1,"SALÁRIOS À PAGAR","","dominos-campo-belo"],["d","2026-04",27,"Freelancers","",140,1,"SALÁRIOS À PAGAR","","dominos-campo-belo"],["d","2026-04",27,"Freelancers","",600,1,"SALÁRIOS À PAGAR","","dominos-campo-belo"],["d","2026-04",27,"Freelancers","",120,1,"SALÁRIOS À PAGAR","","dominos-campo-belo"],["d","2026-04",28,"Compras de Mercadorias","",486,1,"DISTRIB. E IMP. IRMAOS AVELINO S.A","","dominos-campo-belo"],["d","2026-04",28,"Custo Serviços Dedetização/coleta lixo/MICROAMB","",744.03,1,"MULTILIXO","","dominos-campo-belo"],["d","2026-04",29,"Compras de Mercadorias","",20.26,1,"Spal Ind. Bras.Bebidas SA","","dominos-campo-belo"],["d","2026-04",29,"Compras de Mercadorias","",930.01,1,"Spal Ind. Bras.Bebidas SA","","dominos-campo-belo"],["d","2026-04",30,"Salários","",1314.33,1,"EMILY MILLENA DA SILVA VIANA","","dominos-campo-belo"],["d","2026-04",30,"Custo com Serviços de Entrega","",4492.71,1,"STAR GOLD DELIVERY LTDA","","dominos-campo-belo"],["d","2026-04",30,"Salários","",196.09,1,"MAYARA CARDOSO DE JESUS","","dominos-campo-belo"],["d","2026-04",30,"Salários","",1207.02,1,"GABRIEL LIMA DA SILVA","","dominos-campo-belo"],["d","2026-04",30,"Férias","",2385.04,1,"GABRIEL LIMA DA SILVA","","dominos-campo-belo"],["d","2026-04",30,"Salários","",1327.83,1,"JULIANA GOMES DE CARVALHO","","dominos-campo-belo"],["d","2026-05",4,"Contabilidade","",1067.9,1,"OFFICE ASSESSORIA CONTABIL LTDA","","dominos-campo-belo"],["d","2026-05",4,"Freelancers","",720,1,"SALÁRIOS À PAGAR","","dominos-campo-belo"],["d","2026-05",4,"Freelancers","",720,1,"SALÁRIOS À PAGAR","","dominos-campo-belo"],["d","2026-05",5,"Vale Refeição","",5250.32,1,"CAJU","","dominos-campo-belo"],["d","2026-05",7,"Serviços Softwares","",106.87,1,"NEOCOMPANY","","dominos-campo-belo"],["d","2026-05",6,"Compras de Mercadorias","",459.9,1,"27.165.292 ALOISA CORDEIRO DA SILVA","","dominos-campo-belo"],["d","2026-05",6,"Compras de Mercadorias","",658.92,1,"Spal Ind. Bras.Bebidas SA","","dominos-campo-belo"],["d","2026-05",7,"Serviços Softwares","",634.75,1,"GCOM","","dominos-campo-belo"],["d","2026-05",7,"Segurança","",169.92,1,"VERISURE BRASIL MONITORAMENTO DE ALARMES S.A","","dominos-campo-belo"],["d","2026-05",10,"Máquinas e Equipamentos","",2699,0,"DANIEL SILVA DE SOUSA","","dominos-aeroporto-guarulhos"],["d","2026-05",20,"Taxas e Licenças","",156,0,"ABRASEL-SP","","dominos-aeroporto-guarulhos"],["d","2026-05",8,"Manutenção loja","",1200,0,"NEW STAR- COMUNICACAO VISUAL","","dominos-aeroporto-guarulhos"],["d","2026-05",21,"Aluguel fixo","",136.66,0,"CONCESSIONARIA DO AEROPORTO INTERNACIONAL DE GUARULHOS S.A.","","dominos-aeroporto-guarulhos"],["d","2026-05",27,"Custo de Manutenção de Máquinas e Equipamentos","",846,0,"LA SPAZIALE BRASIL &amp; AMERICA LATINA IMPORTACAO E EXPORTACAO LTDA","","dominos-aeroporto-guarulhos"],["d","2027-02",28,"Repasses","",1869.5,0,"DP1 RESTAURANTE LTDA","","dominos-aeroporto-guarulhos"],["d","2026-05",9,"Custo Serviços Dedetização/coleta lixo/MICROAMB","",300,0,"MUNDO DAS PRAGAS","","dominos-aeroporto-guarulhos"],["d","2026-04",15,"Royalties","",10126.38,0,"DP1 RESTAURANTE LTDA","","dominos-aeroporto-guarulhos"],["d","2026-05",14,"Compras de Mercadorias","",223,0,"COMERCIO DE FRUTAS VERDURAS E LEGUMES CAVALCANTE","","dominos-aeroporto-guarulhos"],["d","2026-05",12,"Compras de Mercadorias","",12678.68,0,"RFG COMERCIO TRANSPORTES E SERVICOS LTDA","","dominos-aeroporto-guarulhos"],["d","2026-04",20,"ICMS","",8150.19,0,"ICMS À PAGAR","","dominos-aeroporto-guarulhos"],["d","2026-04",20,"Fundo de Promoção","",2531.49,0,"ASSOCIACAO DOMINO&apos;S","","dominos-aeroporto-guarulhos"],["d","2026-05",8,"Compras de Mercadorias","",1600.61,0,"Spal Ind. Bras.Bebidas SA","","dominos-aeroporto-guarulhos"],["d","2026-05",12,"Compras de Mercadorias","",1698.4,0,"Spal Ind. Bras.Bebidas SA","","dominos-aeroporto-guarulhos"],["d","2026-05",19,"Compras de Mercadorias","",14641.23,0,"RFG COMERCIO TRANSPORTES E SERVICOS LTDA","","dominos-aeroporto-guarulhos"],["d","2026-05",14,"Compras de Mercadorias","",218,0,"COMERCIO DE FRUTAS VERDURAS E LEGUMES CAVALCANTE","","dominos-aeroporto-guarulhos"],["d","2026-05",12,"Compras de Mercadorias","",23.88,0,"RFG COMERCIO TRANSPORTES E SERVICOS LTDA","","dominos-aeroporto-guarulhos"],["d","2026-05",21,"Aluguel fixo","",1115.02,0,"CONCESSIONARIA DO AEROPORTO INTERNACIONAL DE GUARULHOS S.A.","","dominos-aeroporto-guarulhos"],["d","2026-05",18,"Compras de Mercadorias","",81.02,0,"Spal Ind. Bras.Bebidas SA","","dominos-aeroporto-guarulhos"],["d","2026-05",15,"Compras de Mercadorias","",850.48,0,"Spal Ind. Bras.Bebidas SA","","dominos-aeroporto-guarulhos"],["d","2026-05",14,"Compras de Mercadorias","",151,0,"COMERCIO DE FRUTAS VERDURAS E LEGUMES CAVALCANTE","","dominos-aeroporto-guarulhos"],["d","2026-05",17,"Compras de Mercadorias","",309.3,0,"PRINTESPACO SERVICOS GRAFICOS LTDA","","dominos-aeroporto-guarulhos"],["d","2026-05",7,"Rescisões","",738.52,0,"RAFAELA GOMES DOS SANTOS","","dominos-aeroporto-guarulhos"],["d","2026-05",26,"Compras de Mercadorias","",11768.74,0,"RFG COMERCIO TRANSPORTES E SERVICOS LTDA","","dominos-aeroporto-guarulhos"],["d","2026-05",25,"Compras de Mercadorias","",1200.21,0,"Spal Ind. Bras.Bebidas SA","","dominos-aeroporto-guarulhos"],["d","2026-05",20,"Compras de Mercadorias","",385.76,0,"27.165.292 ALOISA CORDEIRO DA SILVA","","dominos-aeroporto-guarulhos"],["d","2026-05",14,"Compras de Mercadorias","",148,0,"COMERCIO DE FRUTAS VERDURAS E LEGUMES CAVALCANTE","","dominos-aeroporto-guarulhos"],["d","2026-05",21,"Energia Elétrica","",1554.43,0,"CONCESSIONARIA DO AEROPORTO INTERNACIONAL DE GUARULHOS S.A.","","dominos-aeroporto-guarulhos"],["d","2026-05",17,"Compras de Mercadorias","",512.4,0,"EMANUEL PEDRO GEFE DA ROSA MESQUITA","","dominos-aeroporto-guarulhos"],["d","2026-05",11,"Informática","",30,0,"JOAO PAULO CABRERA","","dominos-aeroporto-guarulhos"],["d","2026-05",7,"Rescisões","",548.72,0,"PAULO CARDOSO MACHADO","","dominos-aeroporto-guarulhos"],["d","2026-05",7,"FGTS","",93.84,0,"PAULO CARDOSO MACHADO","","dominos-aeroporto-guarulhos"],["d","2026-05",7,"Custo Serviços Terceirizados","",2201.61,0,"TERCEIRIZADOS À PAGAR","","dominos-aeroporto-guarulhos"],["d","2026-06",3,"Compras de Mercadorias","",1700,0,"BAL-Jaguare-SP","","dominos-aeroporto-guarulhos"],["d","2026-06",2,"Compras de Mercadorias","",10581.8,0,"RFG COMERCIO TRANSPORTES E SERVICOS LTDA","","dominos-aeroporto-guarulhos"],["d","2026-05",26,"Compras de Mercadorias","",2234.38,0,"Spal Ind. Bras.Bebidas SA","","dominos-aeroporto-guarulhos"],["d","2026-03",27,"&lt;Disponível&gt;","",1000,1,"DANIEL SILVA DE SOUSA","","dominos-aeroporto-guarulhos"],["d","2026-04",9,"Custo Serviços Dedetização/coleta lixo/MICROAMB","",300,1,"MUNDO DAS PRAGAS","","dominos-aeroporto-guarulhos"],["d","2026-04",10,"Custo Serviços Terceirizados","",1000,1,"RUAN TONOLLI GESTAO EMPRESARIAL","","dominos-aeroporto-guarulhos"],["d","2026-04",10,"Seguros","",194.83,1,"MITSUI SUMITOMO SEGUROS S.A.","","dominos-aeroporto-guarulhos"],["d","2026-04",10,"Custo Serviços Terceirizados","",1062.5,1,"55.504.962 GELSON VIANA MONTALVAO","","dominos-aeroporto-guarulhos"],["d","2026-04",14,"Taxas e Licenças","",40.38,1,"SECRETARIA DO GOVERNO MUNICIPAL","","dominos-aeroporto-guarulhos"],["d","2026-04",15,"&lt;Disponível&gt;","",1000,1,"DANIEL SILVA DE SOUSA","","dominos-aeroporto-guarulhos"],["d","2026-04",15,"Adiantamento","",668.69,1,"ADRIANA SILVA DE ALMEIDA","","dominos-aeroporto-guarulhos"],["d","2026-04",15,"Adiantamento","",922.4,1,"DEBORA RUTE DA SILVA MOURA","","dominos-aeroporto-guarulhos"],["d","2026-04",15,"Adiantamento","",668.69,1,"JOSE AUGUSTO DA SILVA CHAVES","","dominos-aeroporto-guarulhos"],["d","2026-04",15,"Adiantamento","",668.69,1,"LYRIANI FERREIRA RIBEIRO NOVAES","","dominos-aeroporto-guarulhos"],["d","2026-04",15,"Adiantamento","",668.69,1,"PAULO CARDOSO MACHADO","","dominos-aeroporto-guarulhos"],["d","2026-04",15,"Adiantamento","",668.69,1,"RAFAELA GOMES DOS SANTOS","","dominos-aeroporto-guarulhos"],["d","2026-04",15,"Adiantamento","",668.69,1,"SIDNEI RODRIGUES LEITAO","","dominos-aeroporto-guarulhos"],["d","2026-04",15,"Adiantamento","",668.69,1,"STEFANY GOMES DE ALMEIDA","","dominos-aeroporto-guarulhos"],["d","2026-04",15,"Adiantamento","",1421.6,1,"NATALIA BARBOSA DE OLIVEIRA","","dominos-aeroporto-guarulhos"],["d","2026-04",17,"Móveis e Utensílios","",261.9,1,"EMANUEL PEDRO GEFE DA ROSA MESQUITA","","dominos-aeroporto-guarulhos"],["d","2026-04",17,"Compras de Mercadorias","",485.64,1,"EMANUEL PEDRO GEFE DA ROSA MESQUITA","","dominos-aeroporto-guarulhos"],["d","2026-04",17,"Outros Custos com Pessoal","",63.99,1,"EMANUEL PEDRO GEFE DA ROSA MESQUITA","","dominos-aeroporto-guarulhos"],["d","2026-04",17,"FGTS","",810.15,1,"PATRICIA VITORIA MORAIS LEAL","","dominos-aeroporto-guarulhos"],["d","2026-04",17,"Custo Locomoção e Hospedagem Sócios em Viagens","",168,1,"EMANUEL PEDRO GEFE DA ROSA MESQUITA","","dominos-aeroporto-guarulhos"],["d","2026-04",17,"Custo Locomoção e Hospedagem Sócios em Viagens","",184.99,1,"EMANUEL PEDRO GEFE DA ROSA MESQUITA","","dominos-aeroporto-guarulhos"],["d","2026-04",17,"Rescisões","",2272.01,1,"PATRICIA VITORIA MORAIS LEAL","","dominos-aeroporto-guarulhos"],["d","2026-04",20,"Taxas e Licenças","",156,1,"ABRASEL-SP","","dominos-aeroporto-guarulhos"],["d","2026-04",20,"Compras de Mercadorias","",336,1,"CRYSTALMIXGAS COMERCIO DE MATERIAIS E EQUIPAMENTOS DE GAS LTDA","","dominos-aeroporto-guarulhos"],["d","2026-04",22,"Compras de Mercadorias","",724.99,1,"Chopp Fast","","dominos-aeroporto-guarulhos"],["d","2026-04",24,"FGTS","",323.35,1,"DEBORA RUTE DA SILVA MOURA","","dominos-aeroporto-guarulhos"],["d","2026-04",24,"Rescisões","",2027.89,1,"DEBORA RUTE DA SILVA MOURA","","dominos-aeroporto-guarulhos"],["d","2026-04",27,"Outros Custos com Pessoal","",63,1,"CONCESSIONARIA DO AEROPORTO INTERNACIONAL DE GUARULHOS S.A.","","dominos-aeroporto-guarulhos"],["d","2026-04",27,"Outros Custos com Pessoal","",229.95,1,"CONCESSIONARIA DO AEROPORTO INTERNACIONAL DE GUARULHOS S.A.","","dominos-aeroporto-guarulhos"],["d","2026-04",27,"Custo Consultorias","",1666.66,1,"DANIEL SILVA DE SOUSA","","dominos-aeroporto-guarulhos"],["d","2026-04",27,"Assistência Médica","",349.93,1,"PLBRASIL HEALTH&amp;SAFETY","","dominos-aeroporto-guarulhos"],["d","2026-04",29,"Compras de Mercadorias","",604.85,1,"27.165.292 ALOISA CORDEIRO DA SILVA","","dominos-aeroporto-guarulhos"],["d","2026-04",30,"Salários","",903.38,1,"STEFANY GOMES DE ALMEIDA","","dominos-aeroporto-guarulhos"],["d","2026-04",30,"Salários","",1604.1,1,"NATALIA BARBOSA DE OLIVEIRA","","dominos-aeroporto-guarulhos"],["d","2026-04",30,"Salários","",1033.77,1,"JOSE AUGUSTO DA SILVA CHAVES","","dominos-aeroporto-guarulhos"],["d","2026-04",30,"Salários","",925.3,1,"SIDNEI RODRIGUES LEITAO","","dominos-aeroporto-guarulhos"],["d","2026-04",30,"Salários","",791.65,1,"ADRIANA SILVA DE ALMEIDA","","dominos-aeroporto-guarulhos"],["d","2026-05",4,"Custo Locomoção e Moradia","",166.68,1,"DANIEL BARROS DURANTE","","dominos-aeroporto-guarulhos"],["d","2026-05",4,"Serviços Softwares","",104.75,1,"NEOCOMPANY","","dominos-aeroporto-guarulhos"],["d","2026-05",4,"Compras de Mercadorias","",1597.56,1,"Spal Ind. Bras.Bebidas SA","","dominos-aeroporto-guarulhos"],["d","2026-05",4,"Contabilidade","",1067.9,1,"OFFICE ASSESSORIA CONTABIL LTDA","","dominos-aeroporto-guarulhos"],["d","2026-05",4,"Máquinas e Equipamentos","",8000,1,"DANIEL SILVA DE SOUSA","","dominos-aeroporto-guarulhos"],["d","2026-05",4,"Aluguel fixo","",76112.99,1,"CONCESSIONARIA DO AEROPORTO INTERNACIONAL DE GUARULHOS S.A.","","dominos-aeroporto-guarulhos"],["d","2026-05",4,"Aluguel fixo","",3500,1,"CONCESSIONARIA DO AEROPORTO INTERNACIONAL DE GUARULHOS S.A.","","dominos-aeroporto-guarulhos"],["d","2026-05",4,"Rescisões","",35.35,1,"LYRIANI FERREIRA RIBEIRO NOVAES","","dominos-aeroporto-guarulhos"],["d","2026-05",7,"Serviços Softwares","",822.85,1,"GCOM","","dominos-aeroporto-guarulhos"],["d","2026-05",5,"Compras de Mercadorias","",1607.59,1,"Spal Ind. Bras.Bebidas SA","","dominos-aeroporto-guarulhos"],["d","2026-05",5,"Internet/Telefone","",585,1,"SITE TELECOM SERVICOS DE INFORMATICA LTDA","","dominos-aeroporto-guarulhos"],["d","2026-05",5,"Vale Refeição","",5007.12,1,"CAJU","","dominos-aeroporto-guarulhos"],["d","2026-04",10,"Custo Serviços Terceirizados","",1000,0,"RUAN TONOLLI GESTAO EMPRESARIAL","","dominos-mandaqui"],["d","2026-04",20,"Assistência Médica","",400,0,"PLBRASIL HEALTH&amp;SAFETY","","dominos-mandaqui"],["d","2026-05",20,"Aluguel fixo","",9908.43,0,"DP1 RESTAURANTE LTDA","","dominos-mandaqui"],["d","2026-05",20,"Taxas e Licenças","",156,0,"ABRASEL-SP","","dominos-mandaqui"],["d","2026-05",19,"Energia Elétrica","",3454.2,0,"ENEL DISTRIBUICAO SAO PAULO","","dominos-mandaqui"],["d","2026-06",5,"Manutenção loja","",1200,0,"NEW STAR- COMUNICACAO VISUAL","","dominos-mandaqui"],["d","2026-07",10,"Seguros","",218.68,0,"MITSUI SUMITOMO SEGUROS S.A.","","dominos-mandaqui"],["d","2026-05",10,"ISS","",42.82,0,"Prefeitura Municipal de São Paulo","","dominos-mandaqui"],["d","2026-04",8,"Taxas e Licenças","",459,0,"ID CERTIFICACAO","","dominos-mandaqui"],["d","2026-04",15,"Royalties","",5831.96,0,"DP1 RESTAURANTE LTDA","","dominos-mandaqui"],["d","2026-04",15,"Serviços Softwares","",1040.24,0,"DP1 RESTAURANTE LTDA","","dominos-mandaqui"],["d","2026-04",20,"ICMS","",6278.25,0,"ICMS À PAGAR","","dominos-mandaqui"],["d","2026-04",20,"Fundo de Promoção","",3006.73,0,"ASSOCIACAO DOMINO&apos;S","","dominos-mandaqui"],["d","2026-05",11,"Informática","",30,0,"JOAO PAULO CABRERA","","dominos-mandaqui"],["d","2026-05",7,"Custo com Serviços de Entrega","",3667,0,"STAR GOLD DELIVERY LTDA","","dominos-mandaqui"],["d","2026-04",9,"Custo com Serviços de Entrega","",3825,1,"STAR GOLD DELIVERY LTDA","","dominos-mandaqui"],["d","2026-04",10,"Custo Serviços Terceirizados","",1062.5,1,"55.504.962 GELSON VIANA MONTALVAO","","dominos-mandaqui"],["d","2026-04",13,"Freelancers","",600,1,"SALÁRIOS À PAGAR","","dominos-mandaqui"],["d","2026-04",13,"Freelancers","",600,1,"SALÁRIOS À PAGAR","","dominos-mandaqui"],["d","2026-04",13,"Informática","",120,1,"JOAO PAULO CABRERA","","dominos-mandaqui"],["d","2026-04",13,"Freelancers","",1200,1,"SALÁRIOS À PAGAR","","dominos-mandaqui"],["d","2026-04",15,"&lt;Disponível&gt;","",2000,1,"EMANUEL PEDRO GEFE DA ROSA MESQUITA","","dominos-mandaqui"],["d","2026-04",15,"Custo Serviços Dedetização/coleta lixo/MICROAMB","",398.12,1,"TRULY NOLEN PEST CONTROL","","dominos-mandaqui"],["d","2026-04",15,"&lt;Disponível&gt;","",1000,1,"DANIEL SILVA DE SOUSA","","dominos-mandaqui"],["d","2026-04",15,"Adiantamento","",818.01,1,"BIANCA COSTA DA SILVA","","dominos-mandaqui"],["d","2026-04",15,"Adiantamento","",933.13,1,"MAYARA NOGUEIRA DA SILVA","","dominos-mandaqui"],["d","2026-04",16,"Água e Esgoto","",401.4,1,"SABESP","","dominos-mandaqui"],["d","2026-04",16,"Custo com Serviços de Entrega","",3853,1,"STAR GOLD DELIVERY LTDA","","dominos-mandaqui"],["d","2026-04",17,"Instalações","",130.68,1,"EMANUEL PEDRO GEFE DA ROSA MESQUITA","","dominos-mandaqui"],["d","2026-04",20,"Freelancers","",500,1,"SALÁRIOS À PAGAR","","dominos-mandaqui"],["d","2026-04",20,"Freelancers","",400,1,"SALÁRIOS À PAGAR","","dominos-mandaqui"],["d","2026-04",20,"Freelancers","",1200,1,"SALÁRIOS À PAGAR","","dominos-mandaqui"],["d","2026-04",20,"Energia Elétrica","",2968.32,1,"ENEL DISTRIBUICAO SAO PAULO","","dominos-mandaqui"],["d","2026-04",20,"Taxas e Licenças","",156,1,"ABRASEL-SP","","dominos-mandaqui"],["d","2026-04",23,"Custo com Serviços de Entrega","",4099,1,"STAR GOLD DELIVERY LTDA","","dominos-mandaqui"],["d","2026-04",27,"Freelancers","",1200,1,"SALÁRIOS À PAGAR","","dominos-mandaqui"],["d","2026-04",27,"Internet/Telefone","",99.9,1,"55.504.962 GELSON VIANA MONTALVAO","","dominos-mandaqui"],["d","2026-04",27,"Freelancers","",550,1,"SALÁRIOS À PAGAR","","dominos-mandaqui"],["d","2026-04",27,"Freelancers","",600,1,"SALÁRIOS À PAGAR","","dominos-mandaqui"],["d","2026-04",30,"Custo Serviços Dedetização/coleta lixo/MICROAMB","",744.03,1,"MULTILIXO","","dominos-mandaqui"],["d","2026-04",30,"Custo com Serviços de Entrega","",4211.71,1,"STAR GOLD DELIVERY LTDA","","dominos-mandaqui"],["d","2026-04",30,"Salários","",1185.24,1,"BIANCA COSTA DA SILVA","","dominos-mandaqui"],["d","2026-04",30,"Salários","",1362.95,1,"MAYARA NOGUEIRA DA SILVA","","dominos-mandaqui"],["d","2026-05",4,"Contabilidade","",1067.9,1,"OFFICE ASSESSORIA CONTABIL LTDA","","dominos-mandaqui"],["d","2026-05",4,"Serviços Softwares","",104.75,1,"NEOCOMPANY","","dominos-mandaqui"],["d","2026-05",4,"Freelancers","",1200,1,"SALÁRIOS À PAGAR","","dominos-mandaqui"],["d","2026-05",4,"Freelancers","",600,1,"SALÁRIOS À PAGAR","","dominos-mandaqui"],["d","2026-05",4,"Freelancers","",550,1,"SALÁRIOS À PAGAR","","dominos-mandaqui"],["d","2026-05",5,"Vale Refeição","",3580.56,1,"CAJU","","dominos-mandaqui"],["d","2026-05",5,"Segurança","",265.33,1,"VERISURE BRASIL MONITORAMENTO DE ALARMES S.A","","dominos-mandaqui"],["d","2026-05",5,"Serviços Softwares","",622.1,1,"GCOM","","dominos-mandaqui"],["d","2026-05",10,"Instalações","",5807.8,0,"DANIEL SILVA DE SOUSA","","optcalia-shopping-praia-da-costa"],["d","2026-04",15,"Taxas e Licenças","",5000,0,"INVESTIMENTOS À PAGAR","","optcalia-shopping-praia-da-costa"],["d","2026-04",29,"Aluguel fixo","",10073.33,0,"CONSORCIO SHOPPING PRAIA DA COSTA","","optcalia-shopping-praia-da-costa"],["d","2026-04",29,"Fundo de Promoção","",2518.33,0,"CONSORCIO SHOPPING PRAIA DA COSTA","","optcalia-shopping-praia-da-costa"],["d","2026-06",10,"Internet/Telefone","",99.9,0,"EXO","","optcalia-shopping-praia-da-costa"],["d","2026-05",10,"Custo Serviços Terceirizados","",1000,0,"RUAN TONOLLI GESTAO EMPRESARIAL","","optcalia-shopping-praia-da-costa"],["d","2026-05",8,"Freelancers","",141,0,"SALÁRIOS À PAGAR","","optcalia-shopping-praia-da-costa"],["d","2026-05",15,"Freelancers","",141,0,"SALÁRIOS À PAGAR","","optcalia-shopping-praia-da-costa"],["d","2026-04",10,"Taxas e Licenças","",1864.49,0,"HOLDING CALI OPTICA LICENCE S.A","","optcalia-shopping-praia-da-costa"],["d","2026-04",20,"Simples Nacional (DAS)","",1864.5,0,"SIMPLES NACIONAL","","optcalia-shopping-praia-da-costa"],["d","2026-04",20,"INSS","",1034.4,0,"INSS À PAGAR","","optcalia-shopping-praia-da-costa"],["d","2026-05",11,"Compras de Mercadorias","",10.66,0,"BRASLAB","","optcalia-shopping-praia-da-costa"],["d","2026-06",8,"Compras de Mercadorias","",10.66,0,"BRASLAB","","optcalia-shopping-praia-da-costa"],["d","2026-07",6,"Compras de Mercadorias","",10.66,0,"BRASLAB","","optcalia-shopping-praia-da-costa"],["d","2026-08",3,"Compras de Mercadorias","",10.66,0,"BRASLAB","","optcalia-shopping-praia-da-costa"],["d","2026-08",31,"Compras de Mercadorias","",10.66,0,"BRASLAB","","optcalia-shopping-praia-da-costa"],["d","2026-05",11,"Compras de Mercadorias","",4.82,0,"BRASLAB","","optcalia-shopping-praia-da-costa"],["d","2026-06",8,"Compras de Mercadorias","",4.81,0,"BRASLAB","","optcalia-shopping-praia-da-costa"],["d","2026-07",6,"Compras de Mercadorias","",4.81,0,"BRASLAB","","optcalia-shopping-praia-da-costa"],["d","2026-08",3,"Compras de Mercadorias","",4.81,0,"BRASLAB","","optcalia-shopping-praia-da-costa"],["d","2026-08",31,"Compras de Mercadorias","",4.81,0,"BRASLAB","","optcalia-shopping-praia-da-costa"],["d","2026-05",16,"Compras de Mercadorias","",46.75,0,"JJ BRASIL IND COM PR SAÚDE LT","","optcalia-shopping-praia-da-costa"],["d","2026-06",15,"Compras de Mercadorias","",46.75,0,"JJ BRASIL IND COM PR SAÚDE LT","","optcalia-shopping-praia-da-costa"],["d","2026-07",15,"Compras de Mercadorias","",46.75,0,"JJ BRASIL IND COM PR SAÚDE LT","","optcalia-shopping-praia-da-costa"],["d","2026-08",14,"Compras de Mercadorias","",46.76,0,"JJ BRASIL IND COM PR SAÚDE LT","","optcalia-shopping-praia-da-costa"],["d","2026-04",25,"Taxas e Licenças","",2019.13,0,"ASSOCIACAO DOS LOJISTAS CESSIONARIOS DA MARCA OPTICALIA","","optcalia-shopping-praia-da-costa"],["d","2026-05",17,"Compras de Mercadorias","",109.98,0,"BRASLAB","","optcalia-shopping-praia-da-costa"],["d","2026-06",14,"Compras de Mercadorias","",109.98,0,"BRASLAB","","optcalia-shopping-praia-da-costa"],["d","2026-07",12,"Compras de Mercadorias","",109.98,0,"BRASLAB","","optcalia-shopping-praia-da-costa"],["d","2026-08",9,"Compras de Mercadorias","",109.98,0,"BRASLAB","","optcalia-shopping-praia-da-costa"],["d","2026-09",6,"Compras de Mercadorias","",109.98,0,"BRASLAB","","optcalia-shopping-praia-da-costa"],["d","2026-05",13,"Compras de Mercadorias","",185.41,0,"CD SUMARE (SP)","","optcalia-shopping-praia-da-costa"],["d","2026-06",12,"Compras de Mercadorias","",185.41,0,"CD SUMARE (SP)","","optcalia-shopping-praia-da-costa"],["d","2026-07",12,"Compras de Mercadorias","",185.41,0,"CD SUMARE (SP)","","optcalia-shopping-praia-da-costa"],["d","2026-08",11,"Compras de Mercadorias","",185.41,0,"CD SUMARE (SP)","","optcalia-shopping-praia-da-costa"],["d","2026-09",10,"Compras de Mercadorias","",185.41,0,"CD SUMARE (SP)","","optcalia-shopping-praia-da-costa"],["d","2026-10",10,"Compras de Mercadorias","",185.43,0,"CD SUMARE (SP)","","optcalia-shopping-praia-da-costa"],["d","2026-04",29,"Condomínio","",8327.05,0,"CONSORCIO SHOPPING PRAIA DA COSTA","","optcalia-shopping-praia-da-costa"],["d","2026-05",29,"Compras de Mercadorias","",702.77,0,"JUB2","","optcalia-shopping-praia-da-costa"],["d","2026-06",28,"Compras de Mercadorias","",702.77,0,"JUB2","","optcalia-shopping-praia-da-costa"],["d","2026-07",28,"Compras de Mercadorias","",702.77,0,"JUB2","","optcalia-shopping-praia-da-costa"],["d","2026-08",27,"Compras de Mercadorias","",702.77,0,"JUB2","","optcalia-shopping-praia-da-costa"],["d","2026-09",26,"Compras de Mercadorias","",702.77,0,"JUB2","","optcalia-shopping-praia-da-costa"],["d","2026-10",26,"Compras de Mercadorias","",702.77,0,"JUB2","","optcalia-shopping-praia-da-costa"],["d","2026-11",25,"Compras de Mercadorias","",702.77,0,"JUB2","","optcalia-shopping-praia-da-costa"],["d","2026-12",25,"Compras de Mercadorias","",702.73,0,"JUB2","","optcalia-shopping-praia-da-costa"],["d","2026-05",5,"Aluguel fixo","",20901.05,0,"CONSORCIO SHOPPING PRAIA DA COSTA","","optcalia-shopping-praia-da-costa"],["d","2026-05",7,"Salários","",1474.04,0,"BERNARDO COUTINHO BRANDAO","","optcalia-shopping-praia-da-costa"],["d","2026-05",7,"Salários","",1795.78,0,"SALÁRIOS À PAGAR","","optcalia-shopping-praia-da-costa"],["d","2026-05",7,"Salários","",2770.97,0,"OTAVIO MIRANDA COSTA","","optcalia-shopping-praia-da-costa"],["d","2026-04",8,"Outros Custos com Pessoal","",45,1,"BERNARDO COUTINHO BRANDAO","","optcalia-shopping-praia-da-costa"],["d","2026-04",8,"Vale Refeição","",339.45,1,"BERNARDO COUTINHO BRANDAO","","optcalia-shopping-praia-da-costa"],["d","2026-04",8,"Dividendos","",100,1,"OPTICAL VIX","","optcalia-shopping-praia-da-costa"],["d","2026-04",8,"Dividendos","",1400,1,"OPTICAL NIT","","optcalia-shopping-praia-da-costa"],["d","2026-04",8,"Dividendos","",1010,1,"OPTICAL VIX","","optcalia-shopping-praia-da-costa"],["d","2026-04",10,"Rescisões","",13942.27,1,"GABRIEL EXSILEY PORTO ONOFRE","","optcalia-shopping-praia-da-costa"],["d","2026-04",10,"Novas Operações","",1094.78,1,"CONSORCIO SHOPPING PRAIA DA COSTA","","optcalia-shopping-praia-da-costa"],["d","2026-04",10,"FGTS","",2239.3,1,"GABRIEL EXSILEY PORTO ONOFRE","","optcalia-shopping-praia-da-costa"],["d","2026-04",10,"Freelancers","",70.5,1,"FELICIA MARIA GOMES DE SA SOUSA","","optcalia-shopping-praia-da-costa"],["d","2026-04",10,"Freelancers","",185.64,1,"LETICIA SILVA E SILVA","","optcalia-shopping-praia-da-costa"],["d","2026-04",10,"Freelancers","",70.5,1,"THAMIRYS CORREA PINTO","","optcalia-shopping-praia-da-costa"],["d","2026-04",10,"Freelancers","",185.64,1,"BERNARDO COUTINHO BRANDAO","","optcalia-shopping-praia-da-costa"],["d","2026-04",14,"Custo Serviços Terceirizados","",300,1,"RAFAEL FRAGOSO DA SILVA","","optcalia-shopping-praia-da-costa"],["d","2026-04",15,"Custo com Serviços de Entrega","",100,1,"WAGNER DA SILVA CORREA","","optcalia-shopping-praia-da-costa"],["d","2026-04",15,"Compras de Mercadorias","",250,1,"TERCEIRIZADOS À PAGAR","","optcalia-shopping-praia-da-costa"],["d","2026-04",16,"Material de escritório","",60,1,"INVESTIMENTOS À PAGAR","","optcalia-shopping-praia-da-costa"],["d","2026-04",17,"Freelancers","",70.5,1,"LUDMILA TEIXEIRA BARATA","","optcalia-shopping-praia-da-costa"],["d","2026-04",17,"Freelancers","",185.64,1,"THAMIRYS CORREA PINTO","","optcalia-shopping-praia-da-costa"],["d","2026-04",17,"Custo com Serviços de Entrega","",50,1,"WAGNER DA SILVA CORREA","","optcalia-shopping-praia-da-costa"],["d","2026-04",17,"Freelancers","",70.5,1,"BERNARDO COUTINHO BRANDAO","","optcalia-shopping-praia-da-costa"],["d","2026-04",17,"Freelancers","",185.64,1,"SALÁRIOS À PAGAR","","optcalia-shopping-praia-da-costa"],["d","2026-04",20,"Vale Refeição","",120.2,1,"LETICIA SILVA E SILVA","","optcalia-shopping-praia-da-costa"],["d","2026-04",20,"Vale Refeição","",80.8,1,"BEATRIZ ARAUJO DA SILVA","","optcalia-shopping-praia-da-costa"],["d","2026-04",20,"Adiantamento","",1430,1,"SALÁRIOS À PAGAR","","optcalia-shopping-praia-da-costa"],["d","2026-04",20,"Vale Refeição","",202,1,"SALÁRIOS À PAGAR","","optcalia-shopping-praia-da-costa"],["d","2026-04",20,"Custo com Serviços de Entrega","",25,1,"WAGNER DA SILVA CORREA","","optcalia-shopping-praia-da-costa"],["d","2026-04",20,"Compras de Mercadorias","",20,1,"BERNARDO COUTINHO BRANDAO","","optcalia-shopping-praia-da-costa"],["d","2026-04",20,"Adiantamento","",660,1,"BEATRIZ ARAUJO DA SILVA","","optcalia-shopping-praia-da-costa"],["d","2026-04",20,"FGTS","",149.78,1,"FGTS À PAGAR","","optcalia-shopping-praia-da-costa"],["d","2026-04",20,"Adiantamento","",990,1,"LETICIA SILVA E SILVA","","optcalia-shopping-praia-da-costa"],["d","2026-04",20,"Adiantamento","",770,1,"THAMIRYS CORREA PINTO","","optcalia-shopping-praia-da-costa"],["d","2026-04",20,"Vale Refeição","",40.4,1,"LUDMILA TEIXEIRA BARATA","","optcalia-shopping-praia-da-costa"],["d","2026-04",20,"Vale Refeição","",141.4,1,"THAMIRYS CORREA PINTO","","optcalia-shopping-praia-da-costa"],["d","2026-04",20,"Adiantamento","",220,1,"LUDMILA TEIXEIRA BARATA","","optcalia-shopping-praia-da-costa"],["d","2026-04",20,"Dividendos","",533,1,"OPTICAL VIX","","optcalia-shopping-praia-da-costa"],["d","2026-04",22,"Novas Operações","",1206.05,1,"CONSORCIO SHOPPING PRAIA DA COSTA","","optcalia-shopping-praia-da-costa"],["d","2026-04",23,"Rescisões","",1376.52,1,"FELICIA MARIA GOMES DE SA SOUSA","","optcalia-shopping-praia-da-costa"],["d","2026-04",23,"FGTS","",87.65,1,"FELICIA MARIA GOMES DE SA SOUSA","","optcalia-shopping-praia-da-costa"],["d","2026-04",24,"Material de escritório","",160,1,"INVESTIMENTOS À PAGAR","","optcalia-shopping-praia-da-costa"],["d","2026-04",24,"Freelancers","",70.5,1,"THAMIRYS CORREA PINTO","","optcalia-shopping-praia-da-costa"],["d","2026-04",24,"Novas Operações","",1094.78,1,"CONSORCIO SHOPPING PRAIA DA COSTA","","optcalia-shopping-praia-da-costa"],["d","2026-04",24,"Freelancers","",70.5,1,"SALÁRIOS À PAGAR","","optcalia-shopping-praia-da-costa"],["d","2026-04",27,"Custo com Serviços de Entrega","",25,1,"WAGNER DA SILVA CORREA","","optcalia-shopping-praia-da-costa"],["d","2026-04",27,"Compras de Mercadorias","",20,1,"VANESSA ALVES PONTES MENEGUETTE","","optcalia-shopping-praia-da-costa"],["d","2026-04",27,"Marketing","",197.95,1,"EVALDO DE ALMEIDA HEIDERICH","","optcalia-shopping-praia-da-costa"],["d","2026-04",27,"Máquinas e Equipamentos","",1996.5,1,"EVALDO DE ALMEIDA HEIDERICH","","optcalia-shopping-praia-da-costa"],["d","2026-04",27,"Custo Consultorias","",315,1,"EVALDO DE ALMEIDA HEIDERICH","","optcalia-shopping-praia-da-costa"],["d","2026-04",27,"Custo Locomoção e Hospedagem Sócios em Viagens","",54.63,1,"EVALDO DE ALMEIDA HEIDERICH","","optcalia-shopping-praia-da-costa"],["d","2026-04",27,"Compras de Mercadorias","",574.36,1,"CARL ZEISS VISION BRASIL IND. OPTICA LTDA","","optcalia-shopping-praia-da-costa"],["d","2026-04",28,"Serviços Softwares","",217.5,1,"E-CLIK","","optcalia-shopping-praia-da-costa"],["d","2026-04",28,"Dividendos","",160,1,"OPTICAL VIX","","optcalia-shopping-praia-da-costa"],["d","2026-04",28,"Dividendos","",1262,1,"OPTICAL VIX","","optcalia-shopping-praia-da-costa"],["d","2026-04",30,"Freelancers","",70.5,1,"BERNARDO COUTINHO BRANDAO","","optcalia-shopping-praia-da-costa"],["d","2026-04",30,"Custo com Serviços de Entrega","",25,1,"WAGNER DA SILVA CORREA","","optcalia-shopping-praia-da-costa"],["d","2026-04",30,"Custo com Serviços de Entrega","",25,1,"WAGNER DA SILVA CORREA","","optcalia-shopping-praia-da-costa"],["d","2026-04",30,"Freelancers","",70.5,1,"LUDMILA TEIXEIRA BARATA","","optcalia-shopping-praia-da-costa"],["d","2026-04",30,"Aluguel fixo","",10083.33,1,"CONSORCIO SHOPPING PRAIA DA COSTA","","optcalia-shopping-praia-da-costa"],["d","2026-04",9,"Compras de Mercadorias","",537.4,1,"VIXLENS LABORATORIO OPTICO","","optcalia-shopping-praia-da-costa"],["d","2026-04",27,"Compras de Mercadorias","",80,1,"VIXLENS LABORATORIO OPTICO","","optcalia-shopping-praia-da-costa"],["d","2026-05",4,"Vale Refeição","",485,1,"CAJU","","optcalia-shopping-praia-da-costa"],["d","2026-05",4,"Móveis e Utensílios","",27.83,1,"EVALDO DE ALMEIDA HEIDERICH","","optcalia-shopping-praia-da-costa"],["d","2026-05",4,"Novas Operações","",1094.78,1,"CONSORCIO SHOPPING PRAIA DA COSTA","","optcalia-shopping-praia-da-costa"],["d","2026-05",4,"Móveis e Utensílios","",21.62,1,"EVALDO DE ALMEIDA HEIDERICH","","optcalia-shopping-praia-da-costa"],["d","2026-05",4,"Máquinas e Equipamentos","",31.32,1,"EVALDO DE ALMEIDA HEIDERICH","","optcalia-shopping-praia-da-costa"],["d","2026-05",4,"Móveis e Utensílios","",5929.89,1,"EVALDO DE ALMEIDA HEIDERICH","","optcalia-shopping-praia-da-costa"],["d","2026-05",4,"Contabilidade","",810.5,1,"OFFICE ASSESSORIA CONTABIL LTDA","","optcalia-shopping-praia-da-costa"],["d","2026-05",4,"Vale Refeição","",485,1,"CAJU","","optcalia-shopping-praia-da-costa"],["d","2026-05",5,"Freelancers","",770,1,"SALÁRIOS À PAGAR","","optcalia-shopping-praia-da-costa"],["d","2026-05",5,"Comissões","",130.12,1,"BEATRIZ ARAUJO DA SILVA","","optcalia-shopping-praia-da-costa"],["d","2026-05",5,"Vale Refeição","",141.4,1,"VA E VT À PAGAR","","optcalia-shopping-praia-da-costa"],["d","2026-05",5,"Vale Refeição","",141.4,1,"BEATRIZ ARAUJO DA SILVA","","optcalia-shopping-praia-da-costa"],["d","2026-05",5,"Freelancers","",770,1,"BEATRIZ ARAUJO DA SILVA","","optcalia-shopping-praia-da-costa"],["d","2026-05",5,"Vale Refeição","",121.2,1,"THAMIRYS CORREA PINTO","","optcalia-shopping-praia-da-costa"],["d","2026-05",5,"Vale Refeição","",20.2,1,"Diego Neri dos Santos","","optcalia-shopping-praia-da-costa"],["d","2026-05",5,"Vale Refeição","",181.8,1,"LETICIA SILVA E SILVA","","optcalia-shopping-praia-da-costa"],["d","2026-05",5,"Comissões","",324.63,1,"THAMIRYS CORREA PINTO","","optcalia-shopping-praia-da-costa"],["d","2026-05",6,"Custo com Serviços de Entrega","",25,1,"WAGNER DA SILVA CORREA","","optcalia-shopping-praia-da-costa"],["d","2026-05",5,"Freelancers","",660,1,"THAMIRYS CORREA PINTO","","optcalia-shopping-praia-da-costa"],["d","2026-05",5,"Freelancers","",110,1,"Diego Neri dos Santos","","optcalia-shopping-praia-da-costa"],["d","2026-05",5,"Freelancers","",990,1,"LETICIA SILVA E SILVA","","optcalia-shopping-praia-da-costa"],["d","2026-05",5,"Comissões","",458.95,1,"LETICIA SILVA E SILVA","","optcalia-shopping-praia-da-costa"],["d","2026-05",5,"Tarifas Bancárias","",63.64,1,"REDECARD","","optcalia-shopping-praia-da-costa"],["d","2026-05",6,"Tarifas Bancárias","",76.42,1,"REDECARD","","optcalia-shopping-praia-da-costa"],["d","2026-04",30,"Repasses","",1254.1,0,"ASSOCIACAO DOMINO&apos;S","","dominos-pinheiros"],["d","2026-05",20,"Taxas e Licenças","",156,0,"ABRASEL-SP","","dominos-pinheiros"],["d","2026-06",12,"Manutenção loja","",1200,0,"NEW STAR- COMUNICACAO VISUAL","","dominos-pinheiros"],["d","2026-04",12,"Gás","",3721.49,0,"COMPANHIA DE GAS DE SAO PAULO COMGAS","","dominos-pinheiros"],["d","2026-04",30,"Repasses","",847.46,0,"DP1 RESTAURANTE LTDA","","dominos-pinheiros"],["d","2026-04",30,"Repasses","",6609.64,0,"DP3 INDUSTRIA E DISTRIBUICAO DE ALIMENTOS LTDA","","dominos-pinheiros"],["d","2026-07",10,"Seguros","",218.99,0,"MITSUI SUMITOMO SEGUROS S.A.","","dominos-pinheiros"],["d","2026-05",17,"Máquinas e Equipamentos","",557.96,0,"EMANUEL PEDRO GEFE DA ROSA MESQUITA","","dominos-pinheiros"],["d","2026-05",9,"Custo Serviços Dedetização/coleta lixo/MICROAMB","",300,0,"MUNDO DAS PRAGAS","","dominos-pinheiros"],["d","2026-04",9,"Compras de Mercadorias","",46.13,0,"SPAL INDUSTRIA BRASILEIRA DE BEBIDAS S/A","","dominos-pinheiros"],["d","2026-05",14,"Compras de Mercadorias","",111,0,"COMERCIO DE FRUTAS VERDURAS E LEGUMES CAVALCANTE","","dominos-pinheiros"],["d","2026-05",14,"Compras de Mercadorias","",111,0,"COMERCIO DE FRUTAS VERDURAS E LEGUMES CAVALCANTE","","dominos-pinheiros"],["d","2026-05",7,"Compras de Mercadorias","",8523.61,0,"RFG COMERCIO TRANSPORTES E SERVICOS LTDA","","dominos-pinheiros"],["d","2026-04",15,"Royalties","",8889.54,0,"DP1 RESTAURANTE LTDA","","dominos-pinheiros"],["d","2026-04",15,"Serviços Softwares","",1022.43,0,"DP1 RESTAURANTE LTDA","","dominos-pinheiros"],["d","2026-04",20,"ICMS","",5901.53,0,"ICMS À PAGAR","","dominos-pinheiros"],["d","2026-04",20,"Fundo de Promoção","",5571.53,0,"ASSOCIACAO DOMINO&apos;S","","dominos-pinheiros"],["d","2026-05",14,"Compras de Mercadorias","",8877.68,0,"RFG COMERCIO TRANSPORTES E SERVICOS LTDA","","dominos-pinheiros"],["d","2026-05",8,"Compras de Mercadorias","",622.64,0,"SPAL INDUSTRIA BRASILEIRA DE BEBIDAS S/A","","dominos-pinheiros"],["d","2026-04",17,"Compras de Mercadorias","",45.8,0,"DECOVAN","","dominos-pinheiros"],["d","2026-05",14,"Compras de Mercadorias","",70,0,"COMERCIO DE FRUTAS VERDURAS E LEGUMES CAVALCANTE","","dominos-pinheiros"],["d","2026-05",17,"Compras de Mercadorias","",110,0,"Loja Jaguare","","dominos-pinheiros"],["d","2026-06",17,"Compras de Mercadorias","",110,0,"Loja Jaguare","","dominos-pinheiros"],["d","2026-07",17,"Compras de Mercadorias","",110,0,"Loja Jaguare","","dominos-pinheiros"],["d","2026-08",17,"Compras de Mercadorias","",110,0,"Loja Jaguare","","dominos-pinheiros"],["d","2026-09",17,"Compras de Mercadorias","",110,0,"Loja Jaguare","","dominos-pinheiros"],["d","2026-05",17,"Instalações","",39,0,"EMANUEL PEDRO GEFE DA ROSA MESQUITA","","dominos-pinheiros"],["d","2026-05",15,"Compras de Mercadorias","",1063.63,0,"SPAL INDUSTRIA BRASILEIRA DE BEBIDAS S/A","","dominos-pinheiros"],["d","2026-05",14,"Compras de Mercadorias","",136,0,"COMERCIO DE FRUTAS VERDURAS E LEGUMES CAVALCANTE","","dominos-pinheiros"],["d","2026-05",21,"Compras de Mercadorias","",6028.35,0,"RFG COMERCIO TRANSPORTES E SERVICOS LTDA","","dominos-pinheiros"],["d","2026-05",14,"Compras de Mercadorias","",470.3,0,"27.165.292 ALOISA CORDEIRO DA SILVA","","dominos-pinheiros"],["d","2026-05",28,"Compras de Mercadorias","",7212.85,0,"RFG COMERCIO TRANSPORTES E SERVICOS LTDA","","dominos-pinheiros"],["d","2026-05",28,"Compras de Mercadorias","",177.94,0,"RFG COMERCIO TRANSPORTES E SERVICOS LTDA","","dominos-pinheiros"],["d","2026-06",15,"Compras de Mercadorias","",116,0,"COMERCIO DE FRUTAS VERDURAS E LEGUMES CAVALCANTE","","dominos-pinheiros"],["d","2026-05",26,"Compras de Mercadorias","",1265.78,0,"SPAL INDUSTRIA BRASILEIRA DE BEBIDAS S/A","","dominos-pinheiros"],["d","2026-05",11,"Informática","",60,0,"JOAO PAULO CABRERA","","dominos-pinheiros"],["d","2026-05",7,"Custo com Serviços de Entrega","",4230,0,"STAR GOLD DELIVERY LTDA","","dominos-pinheiros"],["d","2026-04",9,"Custo Serviços Dedetização/coleta lixo/MICROAMB","",300,1,"MUNDO DAS PRAGAS","","dominos-pinheiros"],["d","2026-04",9,"Custo com Serviços de Entrega","",4094,1,"STAR GOLD DELIVERY LTDA","","dominos-pinheiros"],["d","2026-04",10,"Custo Serviços Terceirizados","",1062.5,1,"55.504.962 GELSON VIANA MONTALVAO","","dominos-pinheiros"],["d","2026-04",10,"Custo Serviços Terceirizados","",1000,1,"RUAN TONOLLI GESTAO EMPRESARIAL","","dominos-pinheiros"],["d","2026-04",13,"Informática","",170,1,"JOAO PAULO CABRERA","","dominos-pinheiros"],["d","2026-04",13,"Custo com Serviços de Entrega","",33.13,1,"BRENDA KENIA DE CASTRO","","dominos-pinheiros"],["d","2026-04",13,"Freelancers","",120,1,"SALÁRIOS À PAGAR","","dominos-pinheiros"],["d","2026-04",13,"Freelancers","",200,1,"SALÁRIOS À PAGAR","","dominos-pinheiros"],["d","2026-04",13,"Freelancers","",360,1,"SALÁRIOS À PAGAR","","dominos-pinheiros"],["d","2026-04",13,"Freelancers","",240,1,"SALÁRIOS À PAGAR","","dominos-pinheiros"],["d","2026-04",13,"Freelancers","",600,1,"SALÁRIOS À PAGAR","","dominos-pinheiros"],["d","2026-04",13,"Vale Refeição","",1154.6,1,"VA E VT À PAGAR","","dominos-pinheiros"],["d","2026-04",13,"Freelancers","",120,1,"SALÁRIOS À PAGAR","","dominos-pinheiros"],["d","2026-04",13,"Gás","",4069.09,1,"COMPANHIA DE GAS DE SAO PAULO COMGAS","","dominos-pinheiros"],["d","2026-04",13,"Material de escritório","",124.5,1,"BRENDA KENIA DE CASTRO","","dominos-pinheiros"],["d","2026-04",15,"&lt;Disponível&gt;","",1000,1,"DANIEL SILVA DE SOUSA","","dominos-pinheiros"],["d","2026-04",15,"Adiantamento","",1304.19,1,"BRENDA KENIA DE CASTRO","","dominos-pinheiros"],["d","2026-04",15,"Adiantamento","",895.01,1,"SABRINA ANGELICA FERREIRA NEVES","","dominos-pinheiros"],["d","2026-04",15,"Adiantamento","",675.41,1,"DENISE SILVA SANTOS","","dominos-pinheiros"],["d","2026-04",16,"Custo com Serviços de Entrega","",3810,1,"STAR GOLD DELIVERY LTDA","","dominos-pinheiros"],["d","2026-04",17,"Material de escritório","",103.9,1,"BRENDA KENIA DE CASTRO","","dominos-pinheiros"],["d","2026-04",20,"Freelancers","",500,1,"SALÁRIOS À PAGAR","","dominos-pinheiros"],["d","2026-04",20,"Freelancers","",240,1,"SALÁRIOS À PAGAR","","dominos-pinheiros"],["d","2026-04",20,"Freelancers","",600,1,"SALÁRIOS À PAGAR","","dominos-pinheiros"],["d","2026-04",20,"Freelancers","",120,1,"SALÁRIOS À PAGAR","","dominos-pinheiros"],["d","2026-04",20,"Freelancers","",120,1,"SALÁRIOS À PAGAR","","dominos-pinheiros"],["d","2026-04",20,"Taxas e Licenças","",156,1,"ABRASEL-SP","","dominos-pinheiros"],["d","2026-04",20,"Freelancers","",200,1,"SALÁRIOS À PAGAR","","dominos-pinheiros"],["d","2026-04",23,"Custo com Serviços de Entrega","",4461,1,"STAR GOLD DELIVERY LTDA","","dominos-pinheiros"],["d","2026-04",23,"Compras de Mercadorias","",324,1,"VINHAIS","","dominos-pinheiros"],["d","2026-04",27,"Material de escritório","",45.8,1,"BRENDA KENIA DE CASTRO","","dominos-pinheiros"],["d","2026-04",27,"Internet/Telefone","",109,1,"TELEFONICA BRASIL S.A.","","dominos-pinheiros"],["d","2026-04",27,"Internet/Telefone","",109,1,"TELEFONICA BRASIL S.A.","","dominos-pinheiros"],["d","2026-04",27,"Internet/Telefone","",79,1,"TELEFONICA BRASIL S.A.","","dominos-pinheiros"],["d","2026-04",27,"Internet/Telefone","",49,1,"TELEFONICA BRASIL S.A.","","dominos-pinheiros"],["d","2026-04",27,"Assistência Médica","",158,1,"PLBRASIL HEALTH&amp;SAFETY","","dominos-pinheiros"],["d","2026-04",27,"Material de escritório","",310,1,"INVESTIMENTOS","","dominos-pinheiros"],["d","2026-04",28,"Freelancers","",200,1,"SALÁRIOS À PAGAR","","dominos-pinheiros"],["d","2026-04",28,"Freelancers","",230,1,"SALÁRIOS À PAGAR","","dominos-pinheiros"],["d","2026-04",28,"Freelancers","",120,1,"SALÁRIOS À PAGAR","","dominos-pinheiros"],["d","2026-04",28,"Freelancers","",600,1,"SALÁRIOS À PAGAR","","dominos-pinheiros"],["d","2026-04",28,"Freelancers","",460,1,"SALÁRIOS À PAGAR","","dominos-pinheiros"],["d","2026-04",28,"Freelancers","",240,1,"SALÁRIOS À PAGAR","","dominos-pinheiros"],["d","2026-04",29,"Água e Esgoto","",1467.68,1,"SABESP","","dominos-pinheiros"],["d","2026-04",30,"Salários","",1480.81,1,"BRENDA KENIA DE CASTRO","","dominos-pinheiros"],["d","2026-04",30,"Salários","",1262.77,1,"VINICIUS SILVA DE SOUZA","","dominos-pinheiros"],["d","2026-04",30,"Custo com Serviços de Entrega","",5080.71,1,"STAR GOLD DELIVERY LTDA","","dominos-pinheiros"],["d","2026-04",30,"Salários","",917.83,1,"DENISE SILVA SANTOS","","dominos-pinheiros"],["d","2026-04",30,"Salários","",1393.61,1,"SABRINA ANGELICA FERREIRA NEVES","","dominos-pinheiros"],["d","2026-05",1,"Contabilidade","",1067.9,1,"OFFICE ASSESSORIA CONTABIL LTDA","","dominos-pinheiros"],["d","2026-05",4,"Freelancers","",200,1,"SALÁRIOS À PAGAR","","dominos-pinheiros"],["d","2026-05",4,"Freelancers","",480,1,"SALÁRIOS À PAGAR","","dominos-pinheiros"],["d","2026-05",4,"Freelancers","",120,1,"SALÁRIOS À PAGAR","","dominos-pinheiros"],["d","2026-05",4,"Aluguel fixo","",12030.37,1,"MARIO LADNER","","dominos-pinheiros"],["d","2026-05",4,"Energia Elétrica","",3046.46,1,"ENEL DISTRIBUICAO SAO PAULO","","dominos-pinheiros"],["d","2026-05",4,"Freelancers","",480,1,"SALÁRIOS À PAGAR","","dominos-pinheiros"],["d","2026-05",4,"Freelancers","",360,1,"SALÁRIOS À PAGAR","","dominos-pinheiros"],["d","2026-05",5,"Vale Refeição","",5479.26,1,"CAJU","","dominos-pinheiros"],["d","2026-05",7,"Outros Custos com Pessoal","",162.7,1,"GIRASSOL ESTACIONAMENTO","","dominos-pinheiros"],["d","2026-05",6,"Internet/Telefone","",102.91,1,"TELEFONICA BRASIL S.A.","","dominos-pinheiros"],["d","2026-05",7,"Serviços Softwares","",634.75,1,"GCOM","","dominos-pinheiros"],["d","2026-05",7,"Segurança","",269.09,1,"VERISURE BRASIL MONITORAMENTO DE ALARMES S.A","","dominos-pinheiros"],["d","2026-05",6,"Material de escritório","",310,1,"INVESTIMENTOS","","dominos-pinheiros"],["d","2026-06",10,"Móveis e Utensílios","",2110,0,"Dellabruna Mesas e Cadeiras","","boali-shopping-praia-da-costa"],["d","2026-06",10,"Custo de Manutenção de Máquinas e Equipamentos","",880,0,"ENERGIA PARA BRILHAR LTDA","","boali-shopping-praia-da-costa"],["d","2026-05",10,"Internet/Telefone","",99.9,0,"EXO","","boali-shopping-praia-da-costa"],["d","2026-10",5,"Serviços Softwares","",16,0,"LINX SISTEMAS E CONSULTORIA LTDA","","boali-shopping-praia-da-costa"],["d","2026-05",15,"Assistência Médica","",2789.75,0,"DANIEL SILVA DE SOUSA","","boali-shopping-praia-da-costa"],["d","2026-04",20,"FGTS","",647.08,0,"FGTS À PAGAR","","boali-shopping-praia-da-costa"],["d","2026-05",1,"Máquinas e Equipamentos","",2599.2,0,"DANIEL SILVA DE SOUSA","","boali-shopping-praia-da-costa"],["d","2026-05",1,"Máquinas e Equipamentos","",433.2,0,"DANIEL SILVA DE SOUSA","","boali-shopping-praia-da-costa"],["d","2026-04",20,"INSS","",3613.85,0,"RECEITA FEDERAL","","boali-shopping-praia-da-costa"],["d","2026-04",20,"ICMS","",15116.16,0,"ES SEFAZ","","boali-shopping-praia-da-costa"],["d","2026-05",7,"Compras de Mercadorias","",671,0,"NATUREXPRESS","","boali-shopping-praia-da-costa"],["d","2026-05",11,"Compras de Mercadorias","",739.5,0,"NATUREXPRESS","","boali-shopping-praia-da-costa"],["d","2026-05",15,"Compras de Mercadorias","",699,0,"NATUREXPRESS","","boali-shopping-praia-da-costa"],["d","2026-05",13,"Compras de Mercadorias","",262.96,0,"COMERCIAL DISKPAN LTDA","","boali-shopping-praia-da-costa"],["d","2026-04",29,"Aluguel fixo","",19700.39,0,"CONSORCIO SHOPPING PRAIA DA COSTA","","boali-shopping-praia-da-costa"],["d","2026-05",5,"Aluguel fixo","",19519.53,0,"CONSORCIO SHOPPING PRAIA DA COSTA","","boali-shopping-praia-da-costa"],["d","2026-05",2,"Compras de Mercadorias","",1027.15,0,"NFS FOOD SERVICE LTDA","","boali-shopping-praia-da-costa"],["d","2026-05",7,"Salários","",1196,0,"GISLAYNE VIEIRA MOREIRA FERREIRA","","boali-shopping-praia-da-costa"],["d","2026-05",7,"Salários","",2485,0,"JAINA CARLA BALDUINO PINTO","","boali-shopping-praia-da-costa"],["d","2026-05",7,"Salários","",1364,0,"JHULY ALVES VERICIMO","","boali-shopping-praia-da-costa"],["d","2026-05",7,"Salários","",732,0,"JULLY RAFAELY CIRILO COSME","","boali-shopping-praia-da-costa"],["d","2026-05",7,"Salários","",1214,0,"LUAN CARVALHO FERREIRA","","boali-shopping-praia-da-costa"],["d","2026-05",7,"Salários","",667,0,"MARCELA JAQUELINE JESUS DE SOUZA","","boali-shopping-praia-da-costa"],["d","2026-05",7,"Vale Refeição","",61.22,0,"AJAX SERVICOS DE ENTREGA LTDA","","boali-shopping-praia-da-costa"],["d","2026-05",7,"Salários","",264.67,0,"AJAX SERVICOS DE ENTREGA LTDA","","boali-shopping-praia-da-costa"],["d","2026-05",7,"Compras de Mercadorias","",193.76,0,"DANIEL BARROS DURANTE","","boali-shopping-praia-da-costa"],["d","2026-05",12,"Compras de Mercadorias","",228.83,0,"Fabrica Vitoria","","boali-shopping-praia-da-costa"],["d","2026-05",26,"Compras de Mercadorias","",815.5,0,"NATUREXPRESS","","boali-shopping-praia-da-costa"],["d","2026-05",17,"Compras de Mercadorias","",4698.81,0,"NFS FOOD SERVICE LTDA","","boali-shopping-praia-da-costa"],["d","2026-05",10,"Compras de Mercadorias","",5587.05,0,"NFS FOOD SERVICE LTDA","","boali-shopping-praia-da-costa"],["d","2026-05",17,"Compras de Mercadorias","",1080.65,0,"NFS FOOD SERVICE LTDA","","boali-shopping-praia-da-costa"],["d","2026-05",10,"Compras de Mercadorias","",902.5,0,"NFS FOOD SERVICE LTDA","","boali-shopping-praia-da-costa"],["d","2026-05",21,"Compras de Mercadorias","",792,0,"NATUREXPRESS","","boali-shopping-praia-da-costa"],["d","2026-05",18,"Compras de Mercadorias","",739.5,0,"NATUREXPRESS","","boali-shopping-praia-da-costa"],["d","2026-01",26,"Máquinas e Equipamentos","",4657.8,1,"EVALDO DE ALMEIDA HEIDERICH","","boali-shopping-praia-da-costa"],["d","2026-04",7,"Salários","",161,1,"DANIEL BARROS DURANTE","","boali-shopping-praia-da-costa"],["d","2026-04",8,"Salários","",839,1,"DANIEL BARROS DURANTE","","boali-shopping-praia-da-costa"],["d","2026-04",10,"Freelancers","",450,1,"SALÁRIOS À PAGAR","","boali-shopping-praia-da-costa"],["d","2026-04",10,"Freelancers","",450,1,"SALÁRIOS À PAGAR","","boali-shopping-praia-da-costa"],["d","2026-04",10,"Outros Custos com Pessoal","",90,1,"SPRING","","boali-shopping-praia-da-costa"],["d","2026-04",10,"Custo Serviços Terceirizados","",1000,1,"RUAN TONOLLI GESTAO EMPRESARIAL","","boali-shopping-praia-da-costa"],["d","2026-04",10,"Aluguel fixo","",1341.62,1,"CONSORCIO SHOPPING PRAIA DA COSTA","","boali-shopping-praia-da-costa"],["d","2026-04",14,"ICMS","",3120.56,1,"ES SEFAZ","","boali-shopping-praia-da-costa"],["d","2026-04",15,"Salários","",500,1,"DANIEL BARROS DURANTE","","boali-shopping-praia-da-costa"],["d","2026-04",15,"Aluguel fixo","",1085.73,1,"CONSORCIO SHOPPING PRAIA DA COSTA","","boali-shopping-praia-da-costa"],["d","2026-04",15,"&lt;Disponível&gt;","",1000,1,"DANIEL SILVA DE SOUSA","","boali-shopping-praia-da-costa"],["d","2026-04",15,"Royalties","",5486.96,1,"BOALI","","boali-shopping-praia-da-costa"],["d","2026-04",17,"Freelancers","",450,1,"SALÁRIOS À PAGAR","","boali-shopping-praia-da-costa"],["d","2026-04",17,"Freelancers","",540,1,"SALÁRIOS À PAGAR","","boali-shopping-praia-da-costa"],["d","2026-04",17,"Vale Refeição","",61.2,1,"SALÁRIOS À PAGAR","","boali-shopping-praia-da-costa"],["d","2026-04",17,"Novas Operações","",1341.89,1,"CONSORCIO SHOPPING PRAIA DA COSTA","","boali-shopping-praia-da-costa"],["d","2026-04",17,"Custos Processuais, Judiciais, Cartório e Sindicatos","",228,1,"SINDICATO DOS RESTAURANTES, BARES E SIMILARES NO ESTADO DO ESPIRITO SANTO","","boali-shopping-praia-da-costa"],["d","2026-04",20,"ICMS","",283.53,1,"ES SEFAZ","","boali-shopping-praia-da-costa"],["d","2026-04",20,"Adiantamento","",920,1,"JAINA CARLA BALDUINO PINTO","","boali-shopping-praia-da-costa"],["d","2026-04",20,"ICMS","",12.51,1,"ES SEFAZ","","boali-shopping-praia-da-costa"],["d","2026-04",20,"FGTS","",786.68,1,"FGTS À PAGAR","","boali-shopping-praia-da-costa"],["d","2026-04",22,"Salários","",500,1,"DANIEL BARROS DURANTE","","boali-shopping-praia-da-costa"],["d","2026-04",22,"Compras de Mercadorias","",261.64,1,"Fabrica Vitoria","","boali-shopping-praia-da-costa"],["d","2026-04",23,"PIS","",3764.11,1,"RECEITA FEDERAL","","boali-shopping-praia-da-costa"],["d","2026-04",24,"Freelancers","",540,1,"SALÁRIOS À PAGAR","","boali-shopping-praia-da-costa"],["d","2026-04",24,"PIS","",3979.92,1,"RECEITA FEDERAL","","boali-shopping-praia-da-costa"],["d","2026-04",24,"Móveis e Utensílios","",3056.85,1,"DANIEL BARROS DURANTE","","boali-shopping-praia-da-costa"],["d","2026-04",24,"Freelancers","",270,1,"SALÁRIOS À PAGAR","","boali-shopping-praia-da-costa"],["d","2026-04",24,"Novas Operações","",1341.89,1,"CONSORCIO SHOPPING PRAIA DA COSTA","","boali-shopping-praia-da-costa"],["d","2026-04",27,"Compras de Mercadorias","",2669.36,1,"NFS FOOD SERVICE LTDA","","boali-shopping-praia-da-costa"],["d","2026-04",27,"Compras de Mercadorias","",577.7,1,"NFS FOOD SERVICE LTDA","","boali-shopping-praia-da-costa"],["d","2026-04",27,"Compras de Mercadorias","",202.68,1,"COMERCIAL DISKPAN LTDA","","boali-shopping-praia-da-costa"],["d","2026-04",27,"Compras de Mercadorias","",486.98,1,"NFS FOOD SERVICE LTDA","","boali-shopping-praia-da-costa"],["d","2026-04",27,"Fundo de Promoção","",2613.06,1,"BOALI","","boali-shopping-praia-da-costa"],["d","2026-04",20,"Adiantamento","",682,1,"GISLAYNE VIEIRA MOREIRA FERREIRA","","boali-shopping-praia-da-costa"],["d","2026-04",20,"Adiantamento","",682,1,"LUAN CARVALHO FERREIRA","","boali-shopping-praia-da-costa"],["d","2026-04",20,"Adiantamento","",682,1,"MARCELA JAQUELINE JESUS DE SOUZA","","boali-shopping-praia-da-costa"],["d","2026-04",20,"Adiantamento","",682,1,"JHULY ALVES VERICIMO","","boali-shopping-praia-da-costa"],["d","2026-04",20,"Adiantamento","",682,1,"JULLY RAFAELY CIRILO COSME","","boali-shopping-praia-da-costa"],["d","2026-04",20,"Adiantamento","",149.45,1,"AJAX SERVICOS DE ENTREGA LTDA","","boali-shopping-praia-da-costa"],["d","2026-04",20,"Outros Custos com Pessoal","",9.3,1,"AJAX SERVICOS DE ENTREGA LTDA","","boali-shopping-praia-da-costa"],["d","2026-04",20,"ICMS","",149.91,1,"AJAX SERVICOS DE ENTREGA LTDA","","boali-shopping-praia-da-costa"],["d","2026-04",28,"Máquinas e Equipamentos","",1622.4,1,"EVALDO DE ALMEIDA HEIDERICH","","boali-shopping-praia-da-costa"],["d","2026-04",28,"FGTS","",467.43,1,"DIEGO MAYCON MATTOS","","boali-shopping-praia-da-costa"],["d","2026-04",28,"Assistência Médica","",390,1,"SEMETRA","","boali-shopping-praia-da-costa"],["d","2026-04",28,"Rescisões","",2409.65,1,"DIEGO MAYCON MATTOS","","boali-shopping-praia-da-costa"],["d","2026-04",30,"ICMS","",542.98,1,"ES SEFAZ","","boali-shopping-praia-da-costa"],["d","2026-04",29,"Salários","",500,1,"DANIEL BARROS DURANTE","","boali-shopping-praia-da-costa"],["d","2026-04",29,"Aluguel fixo","",4030.67,1,"CONSORCIO SHOPPING PRAIA DA COSTA","","boali-shopping-praia-da-costa"],["d","2026-04",30,"Compras de Mercadorias","",257.98,1,"Fabrica Vitoria","","boali-shopping-praia-da-costa"],["d","2026-04",30,"Compras de Mercadorias","",721.5,1,"NATUREXPRESS","","boali-shopping-praia-da-costa"],["d","2026-05",4,"Freelancers","",450,1,"SALÁRIOS À PAGAR","","boali-shopping-praia-da-costa"],["d","2026-05",4,"Equipamentos de Informática","",175.8,1,"DANIEL BARROS DURANTE","","boali-shopping-praia-da-costa"],["d","2026-05",4,"Freelancers","",270,1,"SALÁRIOS À PAGAR","","boali-shopping-praia-da-costa"],["d","2026-05",4,"Compras de Mercadorias","",648.5,1,"NATUREXPRESS","","boali-shopping-praia-da-costa"],["d","2026-05",4,"Taxas e Licenças","",195,1,"VIXBRASIL CERTIFICACAO DIGITAL","","boali-shopping-praia-da-costa"],["d","2026-05",4,"Compras de Mercadorias","",1012,1,"LAS PALETITAS","","boali-shopping-praia-da-costa"],["d","2026-05",4,"Contabilidade","",810.5,1,"OFFICE ASSESSORIA CONTABIL LTDA","","boali-shopping-praia-da-costa"],["d","2026-05",4,"Custo Serviços Terceirizados","",850,1,"DANIEL BARROS DURANTE","","boali-shopping-praia-da-costa"],["d","2026-05",4,"Aluguel fixo","",2000,1,"DOMINOS CAMPO BELO","","boali-shopping-praia-da-costa"],["d","2026-05",4,"Tarifas Bancárias","",1835.18,1,"REDECARD","","boali-shopping-praia-da-costa"],["d","2026-05",4,"Novas Operações","",1341.89,1,"CONSORCIO SHOPPING PRAIA DA COSTA","","boali-shopping-praia-da-costa"],["d","2026-05",5,"Vale Refeição","",1244.4,1,"IFOOD.COM AGENCIA DE RESTAURANTES ONLINE S.A.","","boali-shopping-praia-da-costa"],["d","2026-05",5,"Vale Refeição","",3145.16,1,"IFOOD.COM AGENCIA DE RESTAURANTES ONLINE S.A.","","boali-shopping-praia-da-costa"],["d","2026-05",5,"Vale Refeição","",670.28,1,"IFOOD.COM AGENCIA DE RESTAURANTES ONLINE S.A.","","boali-shopping-praia-da-costa"],["d","2026-05",5,"Custo com Serviços de Entrega","",70,1,"IFOOD.COM AGENCIA DE RESTAURANTES ONLINE S.A.","","boali-shopping-praia-da-costa"],["d","2026-05",5,"Serviços Softwares","",149,1,"B2 MIDIA DIGITAL LTDA","","boali-shopping-praia-da-costa"],["d","2026-05",5,"Compras de Mercadorias","",5107.36,1,"NFS FOOD SERVICE LTDA","","boali-shopping-praia-da-costa"],["d","2026-05",5,"Dividendos","",9400,1,"DOMINOS AEROPORTO GUARULHOS","","boali-shopping-praia-da-costa"],["d","2026-05",5,"IOF","",142.41,1,"REDECARD","","boali-shopping-praia-da-costa"],["d","2026-05",5,"Tarifas Bancárias","",106.53,1,"REDECARD","","boali-shopping-praia-da-costa"],["d","2026-05",6,"Salários","",500,1,"DANIEL BARROS DURANTE","","boali-shopping-praia-da-costa"],["d","2026-05",6,"Vale Transporte","",428.4,1,"IFOOD.COM AGENCIA DE RESTAURANTES ONLINE S.A.","","boali-shopping-praia-da-costa"],["d","2026-05",8,"Internet/Telefone","",99.99,0,"TELEFONICA BRASIL S.A.","","dominos-jabaquara"],["d","2026-05",4,"Segurança","",168.98,0,"VERISURE BRASIL MONITORAMENTO DE ALARMES S.A","","dominos-jabaquara"],["d","2026-05",20,"Taxas e Licenças","",156,0,"ABRASEL-SP","","dominos-jabaquara"],["d","2026-05",29,"Manutenção loja","",1200,0,"NEW STAR- COMUNICACAO VISUAL","","dominos-jabaquara"],["d","2026-07",10,"Seguros","",402.96,0,"MITSUI SUMITOMO SEGUROS S.A.","","dominos-jabaquara"],["d","2026-05",8,"Segurança","",316.97,0,"ANZEN UNICA","","dominos-jabaquara"],["d","2026-05",17,"Máquinas e Equipamentos","",94.84,0,"EMANUEL PEDRO GEFE DA ROSA MESQUITA","","dominos-jabaquara"],["d","2026-05",10,"ISS","",16.68,0,"Prefeitura Municipal de São Paulo","","dominos-jabaquara"],["d","2026-05",18,"Assistência Médica","",2012.35,0,"AMIL ASSISTENCIA MEDICA INTERNACIONAL S.A.","","dominos-jabaquara"],["d","2026-05",9,"Custo Serviços Dedetização/coleta lixo/MICROAMB","",350,0,"MUNDO DAS PRAGAS","","dominos-jabaquara"],["d","2026-04",13,"Custo Agregadores e Cartões","",231.05,0,"STONE INSTITUICAO DE PAGAMENTO S.A","","dominos-jabaquara"],["d","2026-04",13,"Freelancers","",700,0,"SALÁRIOS À PAGAR","","dominos-jabaquara"],["d","2026-04",13,"Freelancers","",140,0,"SALÁRIOS À PAGAR","","dominos-jabaquara"],["d","2026-04",13,"Freelancers","",120,0,"SALÁRIOS À PAGAR","","dominos-jabaquara"],["d","2026-04",13,"Freelancers","",280,0,"SALÁRIOS À PAGAR","","dominos-jabaquara"],["d","2026-04",13,"Freelancers","",100,0,"SALÁRIOS À PAGAR","","dominos-jabaquara"],["d","2026-04",15,"Royalties","",7021.85,0,"DP1 RESTAURANTE LTDA","","dominos-jabaquara"],["d","2026-04",15,"Serviços Softwares","",1029.8,0,"DP1 RESTAURANTE LTDA","","dominos-jabaquara"],["d","2026-04",20,"ICMS","",10274.2,0,"ICMS À PAGAR","","dominos-jabaquara"],["d","2026-04",20,"Fundo de Promoção","",1319.63,0,"ASSOCIACAO DOMINO&apos;S","","dominos-jabaquara"],["d","2026-05",17,"Máquinas e Equipamentos","",262,0,"EMANUEL PEDRO GEFE DA ROSA MESQUITA","","dominos-jabaquara"],["d","2026-05",17,"Compras de Mercadorias","",289.76,0,"Loja Jaguare","","dominos-jabaquara"],["d","2026-05",17,"Material de escritório","",13.9,0,"EMANUEL PEDRO GEFE DA ROSA MESQUITA","","dominos-jabaquara"],["d","2026-05",8,"Internet/Telefone","",221.84,0,"TELEFONICA BRASIL S.A.","","dominos-jabaquara"],["d","2026-05",13,"Água e Esgoto","",2054.56,0,"SABESP","","dominos-jabaquara"],["d","2026-05",7,"Custo com Serviços de Entrega","",3119,0,"STAR GOLD DELIVERY LTDA","","dominos-jabaquara"],["d","2026-05",7,"Compras de Mercadorias","",242.94,0,"DANIEL BARROS DURANTE","","dominos-jabaquara"],["d","2026-05",7,"Freelancers","",188.4,0,"SALÁRIOS À PAGAR","","dominos-jabaquara"],["d","2026-04",9,"Custo com Serviços de Entrega","",3112,1,"STAR GOLD DELIVERY LTDA","","dominos-jabaquara"],["d","2026-04",9,"Custo Serviços Dedetização/coleta lixo/MICROAMB","",350,1,"MUNDO DAS PRAGAS","","dominos-jabaquara"],["d","2026-04",10,"Custo Serviços Terceirizados","",2750,1,"THIAGO AUGUSTO FRANCA COLATTO","","dominos-jabaquara"],["d","2026-04",10,"Custo Serviços Terceirizados","",1062.5,1,"55.504.962 GELSON VIANA MONTALVAO","","dominos-jabaquara"],["d","2026-04",10,"Custo Serviços Terceirizados","",1000,1,"RUAN TONOLLI GESTAO EMPRESARIAL","","dominos-jabaquara"],["d","2026-04",14,"Água e Esgoto","",2160.5,1,"SABESP","","dominos-jabaquara"],["d","2026-04",15,"&lt;Disponível&gt;","",2000,1,"EMANUEL PEDRO GEFE DA ROSA MESQUITA","","dominos-jabaquara"],["d","2026-04",15,"Adiantamento","",675.41,1,"MIKAELLY CRISTINA LIMA","","dominos-jabaquara"],["d","2026-04",15,"&lt;Disponível&gt;","",1000,1,"DANIEL SILVA DE SOUSA","","dominos-jabaquara"],["d","2026-04",15,"Adiantamento","",968.67,1,"NAIZA ANDRADE DE OLIVEIRA","","dominos-jabaquara"],["d","2026-04",15,"Adiantamento","",675.41,1,"VICTOR DA SILVA AMORIM","","dominos-jabaquara"],["d","2026-04",15,"Adiantamento","",968.67,1,"MAYARA DOS SANTOS PEREIRA DA SILVA","","dominos-jabaquara"],["d","2026-04",15,"Adiantamento","",539.63,1,"CARLOS EDUARDO SANTOS DA ROCHA","","dominos-jabaquara"],["d","2026-04",16,"Custo com Serviços de Entrega","",3165,1,"STAR GOLD DELIVERY LTDA","","dominos-jabaquara"],["d","2026-04",20,"Assistência Médica","",2012.35,1,"AMIL ASSISTENCIA MEDICA INTERNACIONAL S.A.","","dominos-jabaquara"],["d","2026-04",20,"Taxas e Licenças","",156,1,"ABRASEL-SP","","dominos-jabaquara"],["d","2026-04",20,"Freelancers","",720,1,"SALÁRIOS À PAGAR","","dominos-jabaquara"],["d","2026-04",22,"Freelancers","",240,1,"SALÁRIOS À PAGAR","","dominos-jabaquara"],["d","2026-04",22,"Energia Elétrica","",9365.98,1,"ENEL DISTRIBUICAO SAO PAULO","","dominos-jabaquara"],["d","2026-04",22,"Freelancers","",120,1,"SALÁRIOS À PAGAR","","dominos-jabaquara"],["d","2026-04",22,"Freelancers","",260,1,"SALÁRIOS À PAGAR","","dominos-jabaquara"],["d","2026-04",22,"Freelancers","",100,1,"SALÁRIOS À PAGAR","","dominos-jabaquara"],["d","2026-04",22,"Freelancers","",140,1,"SALÁRIOS À PAGAR","","dominos-jabaquara"],["d","2026-04",22,"Freelancers","",120,1,"SALÁRIOS À PAGAR","","dominos-jabaquara"],["d","2026-04",23,"Custo com Serviços de Entrega","",2672,1,"STAR GOLD DELIVERY LTDA","","dominos-jabaquara"],["d","2026-04",27,"Assistência Médica","",392.84,1,"PLBRASIL HEALTH&amp;SAFETY","","dominos-jabaquara"],["d","2026-04",27,"Freelancers","",280,1,"SALÁRIOS À PAGAR","","dominos-jabaquara"],["d","2026-04",27,"Freelancers","",100,1,"SALÁRIOS À PAGAR","","dominos-jabaquara"],["d","2026-04",27,"Outros Custos com Pessoal","",346.32,1,"CASBORG EQUIPAMENTOS INDUSTRIAIS LTDA","","dominos-jabaquara"],["d","2026-04",27,"Freelancers","",720,1,"SALÁRIOS À PAGAR","","dominos-jabaquara"],["d","2026-04",27,"Freelancers","",420,1,"SALÁRIOS À PAGAR","","dominos-jabaquara"],["d","2026-04",29,"Compras de Mercadorias","",2000.73,1,"Spal Ind. Bras.Bebidas SA","","dominos-jabaquara"],["d","2026-04",30,"Custo com Serviços de Entrega","",3795.71,1,"STAR GOLD DELIVERY LTDA","","dominos-jabaquara"],["d","2026-04",30,"Salários","",964.14,1,"MIKAELLY CRISTINA LIMA","","dominos-jabaquara"],["d","2026-04",30,"Salários","",1297.73,1,"NAIZA ANDRADE DE OLIVEIRA","","dominos-jabaquara"],["d","2026-04",30,"Salários","",1407.6,1,"MAYARA DOS SANTOS PEREIRA DA SILVA","","dominos-jabaquara"],["d","2026-04",30,"Salários","",766.17,1,"CARLOS EDUARDO SANTOS DA ROCHA","","dominos-jabaquara"],["d","2026-04",30,"Salários","",933.33,1,"VICTOR DA SILVA AMORIM","","dominos-jabaquara"],["d","2026-05",4,"Contabilidade","",1067.9,1,"OFFICE ASSESSORIA CONTABIL LTDA","","dominos-jabaquara"],["d","2026-05",3,"Aluguel fixo","",7693.26,1,"NOVA MOBILE IMOVEIS","","dominos-jabaquara"],["d","2026-05",4,"Freelancers","",600,1,"SALÁRIOS À PAGAR","","dominos-jabaquara"],["d","2026-05",4,"Freelancers","",120,1,"SALÁRIOS À PAGAR","","dominos-jabaquara"],["d","2026-05",4,"Freelancers","",240,1,"SALÁRIOS À PAGAR","","dominos-jabaquara"],["d","2026-05",4,"Freelancers","",280,1,"SALÁRIOS À PAGAR","","dominos-jabaquara"],["d","2026-05",4,"Freelancers","",720,1,"SALÁRIOS À PAGAR","","dominos-jabaquara"],["d","2026-05",5,"Freelancers","",100,1,"SALÁRIOS À PAGAR","","dominos-jabaquara"],["d","2026-05",5,"Freelancers","",100,1,"55.504.962 GELSON VIANA MONTALVAO","","dominos-jabaquara"],["d","2026-05",5,"Vale Refeição","",4120.68,1,"CAJU","","dominos-jabaquara"],["d","2026-05",5,"Custo Locomoção e Moradia","",95.09,1,"DANIEL BARROS DURANTE","","dominos-jabaquara"],["d","2026-05",7,"Serviços Softwares","",780.15,1,"GCOM","","dominos-jabaquara"],["d","2026-05",7,"Serviços Softwares","",239.04,1,"NEOCOMPANY","","dominos-jabaquara"],["d","2026-04",10,"Custo Serviços Terceirizados","",1000,0,"RUAN TONOLLI GESTAO EMPRESARIAL","","dominos-serra"],["d","2026-04",12,"Assistência Médica","",60,0,"FED.DOS TRAB.EM TURISMO E HOSPITALIDADE NO E.ESP.SANTO","","dominos-serra"],["d","2026-04",30,"Repasses","",1004.37,0,"DP3 INDUSTRIA E DISTRIBUICAO DE ALIMENTOS LTDA","","dominos-serra"],["d","2026-04",30,"Repasses","",1696.18,0,"ASSOCIACAO DOMINO&apos;S","","dominos-serra"],["d","2026-04",30,"Repasses","",3838.33,0,"DP1 RESTAURANTE LTDA","","dominos-serra"],["d","2026-06",15,"IPTU","",127.77,0,"Prefeitura Municipal da Serra","","dominos-serra"],["d","2026-04",15,"Royalties","",5351.2,0,"DP1 RESTAURANTE LTDA","","dominos-serra"],["d","2026-04",15,"Serviços Softwares","",1043.8,0,"DP1 RESTAURANTE LTDA","","dominos-serra"],["d","2026-04",18,"ICMS","",4521.86,0,"Secretaria de Estado da Fazenda","","dominos-serra"],["d","2026-04",20,"Fundo de Promoção","",2812.6,0,"ASSOCIACAO DOMINO&apos;S","","dominos-serra"],["d","2026-04",24,"Freelancers","",550,0,"SALÁRIOS À PAGAR","","dominos-serra"],["d","2026-05",12,"Internet/Telefone","",141.92,0,"GIGA MAIS FIBRA","","dominos-serra"],["d","2026-05",7,"Compras de Mercadorias","",13258.72,0,"RFG COMERCIO TRANSPORTES E SERVICOS LTDA","","dominos-serra"],["d","2026-05",14,"Compras de Mercadorias","",11416.19,0,"RFG COMERCIO TRANSPORTES E SERVICOS LTDA","","dominos-serra"],["d","2026-05",21,"Compras de Mercadorias","",10084.38,0,"RFG COMERCIO TRANSPORTES E SERVICOS LTDA","","dominos-serra"],["d","2026-05",21,"Compras de Mercadorias","",162.01,0,"RFG COMERCIO TRANSPORTES E SERVICOS LTDA","","dominos-serra"],["d","2026-05",20,"Compras de Mercadorias","",1046.91,0,"Fabrica Vitoria","","dominos-serra"],["d","2026-05",28,"Compras de Mercadorias","",8259.78,0,"RFG COMERCIO TRANSPORTES E SERVICOS LTDA","","dominos-serra"],["d","2026-05",6,"Salários","",1161.38,0,"DAIANE DE ALMEIDA","","dominos-serra"],["d","2026-05",6,"Salários","",2202.54,0,"INGRID KAYLLA FERREIRA DOS SANTOS","","dominos-serra"],["d","2026-05",6,"Salários","",1238.63,0,"LEYDIANE DE MACEDO NOVAES","","dominos-serra"],["d","2026-05",7,"Custo com Serviços de Entrega","",460,0,"IFOOD.COM AGENCIA DE RESTAURANTES ONLINE S.A.","","dominos-serra"],["d","2026-05",27,"Compras de Mercadorias","",1007.38,0,"Fabrica Vitoria","","dominos-serra"],["d","2026-05",7,"Vale Refeição","",61.22,0,"AJAX SERVICOS DE ENTREGA LTDA","","dominos-serra"],["d","2026-05",7,"Custo com Serviços de Entrega","",9833.53,0,"AJAX SERVICOS DE ENTREGA LTDA","","dominos-serra"],["d","2026-05",7,"Salários","",264.67,0,"AJAX SERVICOS DE ENTREGA LTDA","","dominos-serra"],["d","2026-05",7,"Contabilidade","",541.41,0,"AJAX SERVICOS DE ENTREGA LTDA","","dominos-serra"],["d","2026-06",15,"ISS","",42.7,0,"Prefeitura Municipal da Serra","","dominos-serra"],["d","2026-05",15,"ISS","",25.2,0,"Prefeitura Municipal da Serra","","dominos-serra"],["d","2026-04",9,"Custo com Serviços de Entrega","",400,1,"IFOOD.COM AGENCIA DE RESTAURANTES ONLINE S.A.","","dominos-serra"],["d","2026-04",10,"Outros Custos com Pessoal","",45,1,"SPRING","","dominos-serra"],["d","2026-04",10,"Seguros","",191.14,1,"MITSUI SUMITOMO SEGUROS S.A.","","dominos-serra"],["d","2026-04",10,"Freelancers","",390,1,"SALÁRIOS À PAGAR","","dominos-serra"],["d","2026-04",10,"Freelancers","",110,1,"SALÁRIOS À PAGAR","","dominos-serra"],["d","2026-04",10,"Freelancers","",1050,1,"SALÁRIOS À PAGAR","","dominos-serra"],["d","2026-04",10,"Salários","",500,1,"DANIEL BARROS DURANTE","","dominos-serra"],["d","2026-04",10,"Outros Custos com Pessoal","",114,1,"SINDICATO DOS RESTAURANTES, BARES E SIMILARES NO ESTADO DO ESPIRITO SANTO","","dominos-serra"],["d","2026-04",15,"Material de escritório","",29.9,1,"DANIEL BARROS DURANTE","","dominos-serra"],["d","2026-04",15,"&lt;Disponível&gt;","",1000,1,"DANIEL SILVA DE SOUSA","","dominos-serra"],["d","2026-04",16,"Custo com Serviços de Entrega","",460,1,"IFOOD.COM AGENCIA DE RESTAURANTES ONLINE S.A.","","dominos-serra"],["d","2026-04",17,"Freelancers","",440,1,"SALÁRIOS À PAGAR","","dominos-serra"],["d","2026-04",17,"Freelancers","",480,1,"SALÁRIOS À PAGAR","","dominos-serra"],["d","2026-04",17,"Salários","",500,1,"DANIEL BARROS DURANTE","","dominos-serra"],["d","2026-04",17,"Freelancers","",1080,1,"SALÁRIOS À PAGAR","","dominos-serra"],["d","2026-04",20,"ICMS","",158.27,1,"Secretaria de Estado da Fazenda","","dominos-serra"],["d","2026-04",20,"Outros Custos com Pessoal","",62.3,1,"AJAX SERVICOS DE ENTREGA LTDA","","dominos-serra"],["d","2026-04",20,"Adiantamento","",149.45,1,"AJAX SERVICOS DE ENTREGA LTDA","","dominos-serra"],["d","2026-04",20,"ICMS","",149.91,1,"AJAX SERVICOS DE ENTREGA LTDA","","dominos-serra"],["d","2026-04",20,"FGTS","",898.75,1,"AJAX SERVICOS DE ENTREGA LTDA","","dominos-serra"],["d","2026-04",20,"INSS","",858.49,1,"AJAX SERVICOS DE ENTREGA LTDA","","dominos-serra"],["d","2026-04",20,"Simples Nacional (DAS)","",1212.02,1,"AJAX SERVICOS DE ENTREGA LTDA","","dominos-serra"],["d","2026-04",20,"Custo com Serviços de Entrega","",3389.01,1,"AJAX SERVICOS DE ENTREGA LTDA","","dominos-serra"],["d","2026-04",20,"Adiantamento","",682,1,"LEYDIANE DE MACEDO NOVAES","","dominos-serra"],["d","2026-04",20,"INSS","",1801.09,1,"RECEITA FEDERAL","","dominos-serra"],["d","2026-04",20,"FGTS","",424.52,1,"FGTS À PAGAR","","dominos-serra"],["d","2026-04",20,"ICMS","",181.36,1,"Secretaria de Estado da Fazenda","","dominos-serra"],["d","2026-04",22,"Energia Elétrica","",6110.16,1,"EDP ESPIRITO SANTO","","dominos-serra"],["d","2026-04",20,"Adiantamento","",909.62,1,"INGRID KAYLLA FERREIRA DOS SANTOS","","dominos-serra"],["d","2026-04",20,"Adiantamento","",682,1,"DAIANE DE ALMEIDA","","dominos-serra"],["d","2026-04",20,"Adiantamento","",682,1,"STEFANY FERNANDES FERREIRA SANTOS","","dominos-serra"],["d","2026-04",23,"Custo Serviços Terceirizados","",450,1,"TERCEIRIZADOS À PAGAR","","dominos-serra"],["d","2026-04",23,"Custo com Serviços de Entrega","",460,1,"IFOOD.COM AGENCIA DE RESTAURANTES ONLINE S.A.","","dominos-serra"],["d","2026-04",24,"Freelancers","",180,1,"SALÁRIOS À PAGAR","","dominos-serra"],["d","2026-04",24,"Salários","",500,1,"DANIEL BARROS DURANTE","","dominos-serra"],["d","2026-04",24,"Freelancers","",900,1,"SALÁRIOS À PAGAR","","dominos-serra"],["d","2026-04",24,"Freelancers","",90,1,"SALÁRIOS À PAGAR","","dominos-serra"],["d","2026-04",24,"Freelancers","",380,1,"SALÁRIOS À PAGAR","","dominos-serra"],["d","2026-04",27,"Custo Locomoção e Hospedagem Sócios em Viagens","",5037.64,1,"DANIEL SILVA DE SOUSA","","dominos-serra"],["d","2026-04",27,"Móveis e Utensílios","",141.21,1,"DANIEL BARROS DURANTE","","dominos-serra"],["d","2026-04",27,"Custo Serviços Terceirizados","",350,1,"TERCEIRIZADOS À PAGAR","","dominos-serra"],["d","2026-04",27,"Gás","",1951.53,1,"ES GAS","","dominos-serra"],["d","2026-04",27,"Custos Processuais, Judiciais, Cartório e Sindicatos","",170,1,"SINDICATO DOS RESTAURANTES, BARES E SIMILARES NO ESTADO DO ESPIRITO SANTO","","dominos-serra"],["d","2026-04",30,"Custo com Serviços de Entrega","",9.6,1,"IFOOD.COM AGENCIA DE RESTAURANTES ONLINE S.A.","","dominos-serra"],["d","2026-04",30,"Custo com Serviços de Entrega","",500,1,"IFOOD.COM AGENCIA DE RESTAURANTES ONLINE S.A.","","dominos-serra"],["d","2026-04",30,"Freelancers","",180,1,"SALÁRIOS À PAGAR","","dominos-serra"],["d","2026-04",30,"Freelancers","",1080,1,"SALÁRIOS À PAGAR","","dominos-serra"],["d","2026-04",30,"Salários","",500,1,"SALÁRIOS À PAGAR","","dominos-serra"],["d","2026-05",4,"Contabilidade","",1067.9,1,"OFFICE ASSESSORIA CONTABIL LTDA","","dominos-serra"],["d","2026-05",4,"Água e Esgoto","",517.86,1,"CESAN","","dominos-serra"],["d","2026-05",4,"Aluguel fixo","",8250.22,1,"KASA IMOVEIS LTDA","","dominos-serra"],["d","2026-05",4,"Custo Serviços Dedetização/coleta lixo/MICROAMB","",504,1,"AMBSERVICE SERVICOS AMBIENTAIS","","dominos-serra"],["d","2026-05",4,"Seguros","",117.58,1,"EVALDO DE ALMEIDA HEIDERICH","","dominos-serra"],["d","2026-05",5,"Vale Refeição","",2687.18,1,"CAJU","","dominos-serra"],["d","2026-05",5,"Custo com Serviços de Entrega","",1572.48,1,"IFOOD.COM AGENCIA DE RESTAURANTES ONLINE S.A.","","dominos-serra"],["d","2026-05",5,"Custo com Serviços de Entrega","",38.4,1,"IFOOD.COM AGENCIA DE RESTAURANTES ONLINE S.A.","","dominos-serra"],["d","2026-05",7,"Serviços Softwares","",634.75,1,"GCOM","","dominos-serra"],["d","2026-05",6,"Compras de Mercadorias","",1007.38,1,"Fabrica Vitoria","","dominos-serra"],["d","2026-05",10,"Contabilidade","",1032.22,0,"OFFICE ASSESSORIA CONTABIL LTDA","","dominos-vila-clementino"],["d","2026-05",10,"&lt;Disponível&gt;","",2000,0,"EMANUEL PEDRO GEFE DA ROSA MESQUITA","","dominos-vila-clementino"],["d","2026-05",11,"Custo Serviços Dedetização/coleta lixo/MICROAMB","",327.47,0,"TRULY NOLEN PEST CONTROL","","dominos-vila-clementino"],["d","2026-05",11,"ISS","",42.59,0,"Prefeitura Municipal de São Paulo","","dominos-vila-clementino"],["d","2026-05",20,"Taxas e Licenças","",156,0,"ABRASEL-SP","","dominos-vila-clementino"],["d","2026-05",15,"Serviços Softwares","",1550,0,"SONAVOIP","","dominos-vila-clementino"],["d","2026-06",10,"Seguros","",223.98,0,"MITSUI SUMITOMO SEGUROS S.A.","","dominos-vila-clementino"],["d","2026-05",10,"Custos Processuais, Judiciais, Cartório e Sindicatos","",1567.62,0,"VIEIRA DE CASTRO, MANSUR &amp; FAVER ADVOGADOS","","dominos-vila-clementino"],["d","2026-05",17,"Custo Consultorias","",109.9,0,"EMANUEL PEDRO GEFE DA ROSA MESQUITA","","dominos-vila-clementino"],["d","2026-05",10,"Custo Consultorias","",2500,0,"CAPITAL UPGRADE ASSESSORIA E CONSULTORIA LTDA.","","dominos-vila-clementino"],["d","2026-06",10,"ICMS","",539.12,0,"Prefeitura Municipal de São Paulo","","dominos-vila-clementino"],["d","2026-05",18,"Assistência Médica","",1042.94,0,"AMIL ASSISTENCIA MEDICA INTERNACIONAL S.A.","","dominos-vila-clementino"],["d","2026-05",15,"Compras de Mercadorias","",1707.77,0,"CONSIGAZ MAUA","","dominos-vila-clementino"],["d","2026-05",8,"Compras de Mercadorias","",12808.64,0,"RFG COMERCIO TRANSPORTES E SERVICOS LTDA","","dominos-vila-clementino"],["d","2026-04",15,"Royalties","",11933.5,0,"DP1 RESTAURANTE LTDA","","dominos-vila-clementino"],["d","2026-04",15,"Serviços Softwares","",1839.92,0,"DP1 RESTAURANTE LTDA","","dominos-vila-clementino"],["d","2026-05",9,"Compras de Mercadorias","",1020,0,"BAL-Jaguare-SP","","dominos-vila-clementino"],["d","2026-04",20,"ICMS","",9682.43,0,"Prefeitura Municipal de São Paulo","","dominos-vila-clementino"],["d","2026-04",20,"INSS","",38343.03,0,"INSS À PAGAR","","dominos-vila-clementino"],["d","2026-04",20,"Fundo de Promoção","",4455.53,0,"ASSOCIACAO DOMINO&apos;S","","dominos-vila-clementino"],["d","2026-05",15,"Compras de Mercadorias","",11723.55,0,"RFG COMERCIO TRANSPORTES E SERVICOS LTDA","","dominos-vila-clementino"],["d","2026-05",13,"Compras de Mercadorias","",1109.68,0,"SPAL INDUSTRIA BRASILEIRA DE BEBIDAS S/A","","dominos-vila-clementino"],["d","2026-05",7,"Compras de Mercadorias","",390.97,0,"HNK BR BEBIDAS LTDA","","dominos-vila-clementino"],["d","2026-05",14,"Compras de Mercadorias","",568.3,0,"27.165.292 ALOISA CORDEIRO DA SILVA","","dominos-vila-clementino"],["d","2026-05",22,"Compras de Mercadorias","",14257.97,0,"RFG COMERCIO TRANSPORTES E SERVICOS LTDA","","dominos-vila-clementino"],["d","2026-05",20,"Compras de Mercadorias","",756.46,0,"SPAL INDUSTRIA BRASILEIRA DE BEBIDAS S/A","","dominos-vila-clementino"],["d","2026-05",27,"Compras de Mercadorias","",1275,0,"BAL-Jaguare-SP","","dominos-vila-clementino"],["d","2026-04",28,"Compras de Mercadorias","",346.32,0,"CASBORG EQUIPAMENTOS INDUSTRIAIS LTDA","","dominos-vila-clementino"],["d","2026-05",29,"Compras de Mercadorias","",132.14,0,"RFG COMERCIO TRANSPORTES E SERVICOS LTDA","","dominos-vila-clementino"],["d","2026-05",29,"Compras de Mercadorias","",12188.81,0,"RFG COMERCIO TRANSPORTES E SERVICOS LTDA","","dominos-vila-clementino"],["d","2026-05",15,"Internet/Telefone","",89.9,0,"CLARO NXT TELECOMUNICACOES S/A","","dominos-vila-clementino"],["d","2026-05",10,"Custo Serviços Terceirizados","",5000,0,"WENDEL LIMA DA PAIXAO","","dominos-vila-clementino"],["d","2026-05",17,"Compras de Mercadorias","",121,0,"BANDEIRANTES REFRIGERACAO COMERCIAL LTDA","","dominos-vila-clementino"],["d","2026-05",8,"Custo Locomoção e Moradia","",3075.06,0,"QUINTOANDAR","","dominos-vila-clementino"],["d","2026-05",15,"Internet/Telefone","",92.48,0,"TELEFONICA BRASIL S.A.","","dominos-vila-clementino"],["d","2026-05",7,"Frete","",176.38,0,"TRANSPORTADORA TURISTICA SUZANO LTDA","","dominos-vila-clementino"],["d","2026-06",15,"Compras de Mercadorias","",1953.84,0,"CONSIGAZ MAUA","","dominos-vila-clementino"],["d","2026-05",12,"Compras de Mercadorias","",261.1,0,"FREXCO","","dominos-vila-clementino"],["d","2026-06",2,"Compras de Mercadorias","",2486,0,"ADEGRAF ETIQUETAS ADESIVAS LTDA","","dominos-vila-clementino"],["d","2026-05",27,"Compras de Mercadorias","",805.83,0,"SPAL INDUSTRIA BRASILEIRA DE BEBIDAS S/A","","dominos-vila-clementino"],["d","2026-05",7,"Custo com Serviços de Entrega","",5868,0,"STAR GOLD DELIVERY LTDA","","dominos-vila-clementino"],["d","2026-05",7,"Vale Refeição","",551.01,0,"AJAX SERVICOS DE ENTREGA LTDA","","dominos-vila-clementino"],["d","2026-05",7,"Salários","",2382.02,0,"AJAX SERVICOS DE ENTREGA LTDA","","dominos-vila-clementino"],["d","2026-06",3,"Compras de Mercadorias","",1020,0,"BAL-Jaguare-SP","","dominos-vila-clementino"],["d","2026-05",28,"Compras de Mercadorias","",522.19,0,"27.165.292 ALOISA CORDEIRO DA SILVA","","dominos-vila-clementino"],["d","2025-05",9,"Empréstimos capital de giro","",21549.79,1,"EMPRESTIMO","","dominos-vila-clementino"],["d","2026-04",9,"Custo com Serviços de Entrega","",5955,1,"STAR GOLD DELIVERY LTDA","","dominos-vila-clementino"],["d","2026-04",10,"ISS","",42.59,1,"Prefeitura Municipal de São Paulo","","dominos-vila-clementino"],["d","2026-04",10,"Custo Serviços Terceirizados","",1000,1,"RUAN TONOLLI GESTAO EMPRESARIAL","","dominos-vila-clementino"],["d","2026-04",10,"Frete","",243.96,1,"TRANSPORTADORA TURISTICA SUZANO LTDA","","dominos-vila-clementino"],["d","2026-04",10,"Custo Serviços Terceirizados","",1062.5,1,"55.504.962 GELSON VIANA MONTALVAO","","dominos-vila-clementino"],["d","2026-04",14,"Freelancers","",240,1,"SALÁRIO À PAGAR","","dominos-vila-clementino"],["d","2026-04",14,"Freelancers","",480,1,"SALÁRIO À PAGAR","","dominos-vila-clementino"],["d","2026-04",14,"Freelancers","",600,1,"SALÁRIO À PAGAR","","dominos-vila-clementino"],["d","2026-04",14,"Custo Consultorias","",2500,1,"CONSULTORIA","","dominos-vila-clementino"],["d","2026-04",14,"Softwares gestão","",4176,1,"OMIEXPERIENCE LTDA.","","dominos-vila-clementino"],["d","2026-04",14,"Custo Serviços Dedetização/coleta lixo/MICROAMB","",338.49,1,"MICROAMBIENTAL LABORATORIO, COMERCIO E SERVICOS EM AGUA LTDA.","","dominos-vila-clementino"],["d","2026-04",15,"&lt;Disponível&gt;","",1000,1,"DANIEL SILVA DE SOUSA","","dominos-vila-clementino"],["d","2026-04",15,"Adiantamento","",675.41,1,"BEATRIZ MEDEIROS SOARES","","dominos-vila-clementino"],["d","2026-04",15,"Adiantamento","",675.41,1,"JAQUELINE ARAUJO DA SILVA","","dominos-vila-clementino"],["d","2026-04",15,"Adiantamento","",968.67,1,"IVANILDA BATISTA DE JESUS","","dominos-vila-clementino"],["d","2026-04",15,"Adiantamento","",872.29,1,"LAERCIO MARINHO CORDEIRO","","dominos-vila-clementino"],["d","2026-04",15,"Adiantamento","",968.67,1,"JOSE VICTOR DOS SANTOS DUARTE","","dominos-vila-clementino"],["d","2026-04",16,"Serviços Softwares","",500,1,"SONAVOIP","","dominos-vila-clementino"],["d","2026-04",16,"Serviços Softwares","",549,1,"LYTEX","","dominos-vila-clementino"],["d","2026-04",16,"Custo com Serviços de Entrega","",5918,1,"STAR GOLD DELIVERY LTDA","","dominos-vila-clementino"],["d","2026-04",17,"Custo Locomoção e Hospedagem Sócios em Viagens","",4189.61,1,"EMANUEL PEDRO GEFE DA ROSA MESQUITA","","dominos-vila-clementino"],["d","2026-04",17,"Instalações","",220.72,1,"EMANUEL PEDRO GEFE DA ROSA MESQUITA","","dominos-vila-clementino"],["d","2026-04",17,"Marketing","",1645,1,"EMANUEL PEDRO GEFE DA ROSA MESQUITA","","dominos-vila-clementino"],["d","2026-04",17,"Custo Locomoção e Hospedagem Sócios em Viagens","",75.58,1,"EMANUEL PEDRO GEFE DA ROSA MESQUITA","","dominos-vila-clementino"],["d","2026-04",20,"Compras de Mercadorias","",361.78,1,"FREXCO","","dominos-vila-clementino"],["d","2026-04",20,"Freelancers","",720,1,"SALÁRIO À PAGAR","","dominos-vila-clementino"],["d","2026-04",20,"Freelancers","",720,1,"SALÁRIO À PAGAR","","dominos-vila-clementino"],["d","2026-04",20,"Outros Custos com Pessoal","",83.68,1,"AJAX SERVICOS DE ENTREGA LTDA","","dominos-vila-clementino"],["d","2026-04",20,"Adiantamento","",1345.08,1,"AJAX SERVICOS DE ENTREGA LTDA","","dominos-vila-clementino"],["d","2026-04",20,"ICMS","",1349.2,1,"AJAX SERVICOS DE ENTREGA LTDA","","dominos-vila-clementino"],["d","2026-04",20,"Freelancers","",120,1,"SALÁRIO À PAGAR","","dominos-vila-clementino"],["d","2026-04",20,"FGTS","",8662.34,1,"FGTS À PAGAR","","dominos-vila-clementino"],["d","2026-04",20,"Taxas e Licenças","",156,1,"ABRASEL-SP","","dominos-vila-clementino"],["d","2026-04",20,"Custo Consultorias","",569.24,1,"CONSULTORIA","","dominos-vila-clementino"],["d","2026-04",20,"Assistência Médica","",1042.94,1,"AMIL ASSISTENCIA MEDICA INTERNACIONAL S.A.","","dominos-vila-clementino"],["d","2026-04",22,"Internet/Telefone","",217.54,1,"TELEFONICA BRASIL S.A.","","dominos-vila-clementino"],["d","2026-04",23,"Custo com Serviços de Entrega","",6717,1,"STAR GOLD DELIVERY LTDA","","dominos-vila-clementino"],["d","2026-04",24,"Frete","",243.96,1,"TRANSPORTADORA TURISTICA SUZANO LTDA","","dominos-vila-clementino"],["d","2026-04",24,"Água e Esgoto","",988,1,"SABESP","","dominos-vila-clementino"],["d","2026-04",24,"Manutenção loja","",1200,1,"NEW STAR- COMUNICACAO VISUAL","","dominos-vila-clementino"],["d","2026-04",27,"Assistência Médica","",103,1,"PLBRASIL HEALTH&amp;SAFETY","","dominos-vila-clementino"],["d","2026-04",27,"Freelancers","",240,1,"SALÁRIO À PAGAR","","dominos-vila-clementino"],["d","2026-04",27,"Internet/Telefone","",90,1,"TELEFONICA BRASIL S.A.","","dominos-vila-clementino"],["d","2026-04",27,"Softwares gestão","",1219.84,1,"DANIEL SILVA DE SOUSA","","dominos-vila-clementino"],["d","2026-04",27,"Internet/Telefone","",1101.89,1,"TELEFONICA BRASIL S.A.","","dominos-vila-clementino"],["d","2026-04",27,"Freelancers","",675,1,"SALÁRIO À PAGAR","","dominos-vila-clementino"],["d","2026-04",27,"Assistência Médica","",462.27,1,"SUL AMERICA COMPANHIA DE SEGURO SAUDE","","dominos-vila-clementino"],["d","2026-04",27,"Custo Consultorias","",5135.18,1,"NEFFA &amp; MANSUR ADVOGADOS ASSOCIADOS","","dominos-vila-clementino"],["d","2026-04",27,"Freelancers","",720,1,"SALÁRIO À PAGAR","","dominos-vila-clementino"],["d","2026-04",29,"Compras de Mercadorias","",330.53,1,"FREXCO","","dominos-vila-clementino"],["d","2026-04",30,"Custo Serviços Dedetização/coleta lixo/MICROAMB","",761.37,1,"MULTILIXO","","dominos-vila-clementino"],["d","2026-04",29,"Compras de Mercadorias","",1423.26,1,"SPAL INDUSTRIA BRASILEIRA DE BEBIDAS S/A","","dominos-vila-clementino"],["d","2026-05",4,"Custo Serviços Terceirizados","",1200,1,"NEW STAR- COMUNICACAO VISUAL","","dominos-vila-clementino"],["d","2026-04",30,"Custo com Serviços de Entrega","",6887.71,1,"STAR GOLD DELIVERY LTDA","","dominos-vila-clementino"],["d","2026-04",30,"Custo Locomoção e Hospedagem Sócios em Viagens","",2965.7,1,"LOCALIZA FLEET S.A.","","dominos-vila-clementino"],["d","2026-04",30,"Softwares gestão","",3994,1,"KONCLUI GESTAO INTELIGENTE COM CHECKLISTS PARA EMPRESAS LTDA","","dominos-vila-clementino"],["d","2026-04",30,"Salários","",1478.16,1,"IVANILDA BATISTA DE JESUS","","dominos-vila-clementino"],["d","2026-04",30,"Salários","",1297.73,1,"JOSE VICTOR DOS SANTOS DUARTE","","dominos-vila-clementino"],["d","2026-04",30,"Salários","",721.73,1,"JAQUELINE ARAUJO DA SILVA","","dominos-vila-clementino"],["d","2026-04",30,"Salários","",890.53,1,"BEATRIZ MEDEIROS SOARES","","dominos-vila-clementino"],["d","2026-04",30,"Salários","",1352.32,1,"LAERCIO MARINHO CORDEIRO","","dominos-vila-clementino"],["d","2026-05",4,"Contabilidade","",1067.9,1,"OFFICE ASSESSORIA CONTABIL LTDA","","dominos-vila-clementino"],["d","2026-05",4,"Compras de Mercadorias","",665.28,1,"BRF S.A.","","dominos-vila-clementino"],["d","2026-05",4,"INSS","",5412.69,1,"RECEITA FEDERAL","","dominos-vila-clementino"],["d","2026-05",5,"Vale Refeição","",9074.52,1,"CAJU","","dominos-vila-clementino"],["d","2026-05",5,"Aluguel fixo","",6584.94,1,"CENTURY 21 PARCERIA IMOVEIS","","dominos-vila-clementino"],["d","2026-05",5,"Custo Serviços Terceirizados","",1500,1,"SANDRA FERREIRA MOREIRA","","dominos-vila-clementino"],["d","2026-05",5,"Bonificações","",1000,1,"CAJU","","dominos-vila-clementino"],["d","2026-05",5,"Freelancers","",1215,1,"SALÁRIO À PAGAR","","dominos-vila-clementino"],["d","2026-05",5,"Freelancers","",600,1,"SALÁRIO À PAGAR","","dominos-vila-clementino"],["d","2026-05",5,"Freelancers","",240,1,"SALÁRIO À PAGAR","","dominos-vila-clementino"],["d","2026-05",5,"Freelancers","",600,1,"SALÁRIO À PAGAR","","dominos-vila-clementino"],["d","2026-05",6,"Energia Elétrica","",4508.59,1,"ENEL DISTRIBUICAO SAO PAULO","","dominos-vila-clementino"],["d","2026-05",7,"Segurança","",169.04,1,"VERISURE BRASIL MONITORAMENTO DE ALARMES S.A","","dominos-vila-clementino"],["d","2026-05",7,"Serviços Softwares","",634.75,1,"GCOM","","dominos-vila-clementino"],["d","2026-05",7,"Outros Custos com Pessoal","",162.7,1,"GIRASSOL ESTACIONAMENTO","","dominos-vila-clementino"],["d","2026-05",6,"Compras de Mercadorias","",1372.03,1,"SPAL INDUSTRIA BRASILEIRA DE BEBIDAS S/A","","dominos-vila-clementino"],["d","2026-05",6,"Compras de Mercadorias","",68.73,1,"SPAL INDUSTRIA BRASILEIRA DE BEBIDAS S/A","","dominos-vila-clementino"],["d","2026-05",7,"Serviços Softwares","",106.87,1,"NEOCOMPANY","","dominos-vila-clementino"],["d","2026-05",15,"Compras de Mercadorias","",104,0,"COMERCIO DE FRUTAS VERDURAS E LEGUMES CAVALCANTE","","spoleto-jabaquara"],["d","2026-04",17,"Fundo de Promoção","",2426.06,0,"ASSOCIACAO SPOLETO","","spoleto-jabaquara"],["d","2026-05",12,"Compras de Mercadorias","",200,0,"PAO ITALIANO FRANCIULLI EIRELI","","spoleto-jabaquara"],["d","2026-05",13,"Compras de Mercadorias","",1046.67,0,"MAGAZZINO DISTRIBUIDORA DE ALIMENTOS LTDA","","spoleto-jabaquara"],["d","2026-05",28,"Compras de Mercadorias","",1046.68,0,"MAGAZZINO DISTRIBUIDORA DE ALIMENTOS LTDA","","spoleto-jabaquara"],["d","2026-05",13,"Compras de Mercadorias","",2115.94,0,"MAGAZZINO DISTRIBUIDORA DE ALIMENTOS LTDA","","spoleto-jabaquara"],["d","2026-05",28,"Compras de Mercadorias","",2115.95,0,"MAGAZZINO DISTRIBUIDORA DE ALIMENTOS LTDA","","spoleto-jabaquara"],["d","2026-05",20,"Compras de Mercadorias","",2854.94,0,"MAGAZZINO DISTRIBUIDORA DE ALIMENTOS LTDA","","spoleto-jabaquara"],["d","2026-06",4,"Compras de Mercadorias","",2854.95,0,"MAGAZZINO DISTRIBUIDORA DE ALIMENTOS LTDA","","spoleto-jabaquara"],["d","2026-05",20,"Compras de Mercadorias","",1377.9,0,"MAGAZZINO DISTRIBUIDORA DE ALIMENTOS LTDA","","spoleto-jabaquara"],["d","2026-06",4,"Compras de Mercadorias","",1377.89,0,"MAGAZZINO DISTRIBUIDORA DE ALIMENTOS LTDA","","spoleto-jabaquara"],["d","2026-05",15,"Compras de Mercadorias","",45,0,"COMERCIO DE FRUTAS VERDURAS E LEGUMES CAVALCANTE","","spoleto-jabaquara"],["d","2026-06",15,"Compras de Mercadorias","",179,0,"COMERCIO DE FRUTAS VERDURAS E LEGUMES CAVALCANTE","","spoleto-jabaquara"],["d","2026-05",13,"Compras de Mercadorias","",542.72,0,"Spal Ind. Bras.Bebidas SA","","spoleto-jabaquara"],["d","2026-04",10,"Custo Serviços Terceirizados","",1062.5,1,"55.504.962 GELSON VIANA MONTALVAO","","spoleto-jabaquara"],["d","2026-04",10,"Custo Serviços Terceirizados","",2750,1,"THIAGO AUGUSTO FRANCA COLATTO","","spoleto-jabaquara"],["d","2026-04",10,"Custo Serviços Terceirizados","",1000,1,"RUAN TONOLLI GESTAO EMPRESARIAL","","spoleto-jabaquara"],["d","2026-04",10,"Royalties","",7278.17,1,"SPT FRANCHISING LTDA","","spoleto-jabaquara"],["d","2026-04",13,"Freelancers","",220,1,"SALÁRIOS À PAGAR","","spoleto-jabaquara"],["d","2026-04",13,"Freelancers","",100,1,"SALÁRIOS À PAGAR","","spoleto-jabaquara"],["d","2026-04",13,"Freelancers","",120,1,"SALÁRIOS À PAGAR","","spoleto-jabaquara"],["d","2026-04",13,"Frete","",552.17,1,"RJ ARMAZENS GERAIS E SERVICOS LOGISTICOS LTDA","","spoleto-jabaquara"],["d","2026-04",15,"Adiantamento","",675.41,1,"ANTONY PEREIRA FEITOSA SILVA","","spoleto-jabaquara"],["d","2026-04",15,"Adiantamento","",675.41,1,"NICOLE ANTHONELI  VINCI DE ANDRADE","","spoleto-jabaquara"],["d","2026-04",15,"Adiantamento","",968.67,1,"AMANDA MARIA DE SOUZA","","spoleto-jabaquara"],["d","2026-04",15,"Adiantamento","",968.67,1,"ROGERIO GOMES SIMOES","","spoleto-jabaquara"],["d","2026-04",15,"Adiantamento","",675.41,1,"RUTE DE OLIVEIRA SILVA","","spoleto-jabaquara"],["d","2026-04",15,"Frete","",100,1,"55.504.962 GELSON VIANA MONTALVAO","","spoleto-jabaquara"],["d","2026-04",15,"Adiantamento","",675.41,1,"STHEFANY KEROLAINY FELIPE DA SILVA","","spoleto-jabaquara"],["d","2026-04",15,"&lt;Disponível&gt;","",1000,1,"DANIEL SILVA DE SOUSA","","spoleto-jabaquara"],["d","2026-04",20,"Rescisões","",610.98,1,"RUTE DE OLIVEIRA SILVA","","spoleto-jabaquara"],["d","2026-04",20,"Material de escritório","",217.95,1,"55.504.962 GELSON VIANA MONTALVAO","","spoleto-jabaquara"],["d","2026-04",20,"Freelancers","",340,1,"SALÁRIOS À PAGAR","","spoleto-jabaquara"],["d","2026-04",20,"Freelancers","",320,1,"SALÁRIOS À PAGAR","","spoleto-jabaquara"],["d","2026-04",20,"Freelancers","",220,1,"SALÁRIOS À PAGAR","","spoleto-jabaquara"],["d","2026-04",20,"Custos Processuais, Judiciais, Cartório e Sindicatos","",3500,1,"PONTES &amp; XIMENES ADVOGADOS ASSOCIADOS","","spoleto-jabaquara"],["d","2026-04",20,"Freelancers","",100,1,"SALÁRIOS À PAGAR","","spoleto-jabaquara"],["d","2026-04",20,"Freelancers","",100,1,"SALÁRIOS À PAGAR","","spoleto-jabaquara"],["d","2026-04",20,"Frete","",662.05,1,"RJ ARMAZENS GERAIS E SERVICOS LOGISTICOS LTDA","","spoleto-jabaquara"],["d","2026-04",17,"Outros Custos com Pessoal","",270.36,1,"EMANUEL PEDRO GEFE DA ROSA MESQUITA","","spoleto-jabaquara"],["d","2026-04",17,"Compras de Mercadorias","",200,1,"PAO ITALIANO FRANCIULLI EIRELI","","spoleto-jabaquara"],["d","2026-04",17,"Máquinas e Equipamentos","",110.78,1,"EMANUEL PEDRO GEFE DA ROSA MESQUITA","","spoleto-jabaquara"],["d","2026-04",17,"Máquinas e Equipamentos","",397.51,1,"EMANUEL PEDRO GEFE DA ROSA MESQUITA","","spoleto-jabaquara"],["d","2026-04",22,"FGTS","",88.42,1,"RUTE DE OLIVEIRA SILVA","","spoleto-jabaquara"],["d","2026-04",22,"Rescisões","",247.4,1,"RUTE DE OLIVEIRA SILVA","","spoleto-jabaquara"],["d","2026-04",23,"Material de escritório","",158,1,"55.504.962 GELSON VIANA MONTALVAO","","spoleto-jabaquara"],["d","2026-04",24,"Compras de Mercadorias","",200,1,"55.504.962 GELSON VIANA MONTALVAO","","spoleto-jabaquara"],["d","2026-04",24,"Vale Transporte","",34.47,1,"AMANDA MARIA DE SOUZA","","spoleto-jabaquara"],["d","2026-04",27,"Freelancers","",120,1,"SALÁRIOS À PAGAR","","spoleto-jabaquara"],["d","2026-04",27,"Freelancers","",300,1,"SALÁRIOS À PAGAR","","spoleto-jabaquara"],["d","2026-04",27,"Freelancers","",120,1,"SALÁRIOS À PAGAR","","spoleto-jabaquara"],["d","2026-04",27,"Freelancers","",420,1,"SALÁRIOS À PAGAR","","spoleto-jabaquara"],["d","2026-04",27,"Serviços Softwares","",1640.42,1,"ATM SOLUCOES EM AUTOATENDIMENTO LTDA","","spoleto-jabaquara"],["d","2026-04",27,"Freelancers","",100,1,"SALÁRIOS À PAGAR","","spoleto-jabaquara"],["d","2026-04",27,"Freelancers","",100,1,"SALÁRIOS À PAGAR","","spoleto-jabaquara"],["d","2026-04",27,"Freelancers","",240,1,"SALÁRIOS À PAGAR","","spoleto-jabaquara"],["d","2026-04",27,"Freelancers","",440,1,"SALÁRIOS À PAGAR","","spoleto-jabaquara"],["d","2026-04",27,"Frete","",399.04,1,"RJ ARMAZENS GERAIS E SERVICOS LOGISTICOS LTDA","","spoleto-jabaquara"],["d","2026-04",28,"Compras de Mercadorias","",200,1,"PAO ITALIANO FRANCIULLI EIRELI","","spoleto-jabaquara"],["d","2026-04",28,"Compras de Mercadorias","",2115.94,1,"MAGAZZINO DISTRIBUIDORA DE ALIMENTOS LTDA","","spoleto-jabaquara"],["d","2026-04",28,"Compras de Mercadorias","",1046.67,1,"MAGAZZINO DISTRIBUIDORA DE ALIMENTOS LTDA","","spoleto-jabaquara"],["d","2026-04",28,"Dividendos","",3200,1,"BOALI PRAIA DA COSTA","","spoleto-jabaquara"],["d","2026-04",30,"Salários","",622.4,1,"ANTONY PEREIRA FEITOSA SILVA","","spoleto-jabaquara"],["d","2026-04",30,"Rescisões","",831.1,1,"ROGERIO GOMES SIMOES","","spoleto-jabaquara"],["d","2026-04",30,"Salários","",1015.66,1,"STHEFANY KEROLAINY FELIPE DA SILVA","","spoleto-jabaquara"],["d","2026-04",30,"Salários","",912.21,1,"NICOLE ANTHONELI  VINCI DE ANDRADE","","spoleto-jabaquara"],["d","2026-04",30,"Salários","",1297.73,1,"AMANDA MARIA DE SOUZA","","spoleto-jabaquara"],["d","2026-05",4,"Frete","",19.47,1,"AMANDA MARIA DE SOUZA","","spoleto-jabaquara"],["d","2026-05",4,"Compras de Mercadorias","",164.63,1,"RJ ARMAZENS GERAIS E SERVICOS LOGISTICOS LTDA","","spoleto-jabaquara"],["d","2026-05",4,"Compras de Mercadorias","",263.56,1,"RJ ARMAZENS GERAIS E SERVICOS LOGISTICOS LTDA","","spoleto-jabaquara"],["d","2026-05",4,"Frete","",501.89,1,"RJ ARMAZENS GERAIS E SERVICOS LOGISTICOS LTDA","","spoleto-jabaquara"],["d","2026-05",4,"Dividendos","",2300,1,"DEX INVEST COMERCIO E VAREJO LTDA","","spoleto-jabaquara"],["d","2026-05",4,"Juros","",6029.82,1,"REDECARD","","spoleto-jabaquara"],["d","2026-05",5,"Freelancers","",100,1,"SALÁRIOS À PAGAR","","spoleto-jabaquara"],["d","2026-05",5,"Freelancers","",540,1,"SALÁRIOS À PAGAR","","spoleto-jabaquara"],["d","2026-05",5,"Freelancers","",540,1,"SALÁRIOS À PAGAR","","spoleto-jabaquara"],["d","2026-05",5,"Freelancers","",120,1,"SALÁRIOS À PAGAR","","spoleto-jabaquara"],["d","2026-05",5,"Compras de Mercadorias","",200,1,"PAO ITALIANO FRANCIULLI EIRELI","","spoleto-jabaquara"],["d","2026-05",5,"Serviços Softwares","",104.75,1,"NEOCOMPANY","","spoleto-jabaquara"],["d","2026-05",5,"Compras de Mercadorias","",2854.94,1,"MAGAZZINO DISTRIBUIDORA DE ALIMENTOS LTDA","","spoleto-jabaquara"],["d","2026-05",5,"Compras de Mercadorias","",1377.9,1,"MAGAZZINO DISTRIBUIDORA DE ALIMENTOS LTDA","","spoleto-jabaquara"],["d","2026-05",5,"Dividendos","",2300,1,"DOMINOS SERRA","","spoleto-jabaquara"],["d","2026-05",5,"Dividendos","",500,1,"DOMINOS PINHEIROS","","spoleto-jabaquara"],["d","2026-05",5,"Dividendos","",2000,1,"JC REFEICOES LTDA","","spoleto-jabaquara"],["d","2026-05",5,"Dividendos","",5000,1,"DOMINOS PRAIA DO CANTO","","spoleto-jabaquara"],["d","2026-05",5,"Dividendos","",500,1,"DOMINOS VILA CLEMENTINO","","spoleto-jabaquara"],["d","2026-05",5,"Dividendos","",5000,1,"DOMINOS CAMPO BELO","","spoleto-jabaquara"],["d","2026-05",5,"Vale Refeição","",5429.32,1,"CAJU","","spoleto-jabaquara"],["d","2026-05",5,"Dividendos","",2600,1,"DOMINOS AEROPORTO GUARULHOS","","spoleto-jabaquara"],["d","2026-05",5,"Dividendos","",9880,1,"DEX INVEST COMERCIO E VAREJO LTDA","","spoleto-jabaquara"],["d","2026-05",5,"IOF","",223.27,1,"REDECARD","","spoleto-jabaquara"],["d","2026-05",6,"Compras de Mercadorias","",960.87,1,"Spal Ind. Bras.Bebidas SA","","spoleto-jabaquara"],["d","2026-05",6,"Tarifas Bancárias","",14.64,1,"REDECARD","","spoleto-jabaquara"],["d","2026-04",15,"Custo Serviços Dedetização/coleta lixo/MICROAMB","",380.65,0,"TRULY NOLEN PEST CONTROL","","dominos-gopouva"],["d","2026-05",10,"Aluguel fixo","",12729.46,0,"OCARROS","","dominos-gopouva"],["d","2026-05",20,"Taxas e Licenças","",156,0,"ABRASEL-SP","","dominos-gopouva"],["d","2026-06",10,"Seguros","",202.15,0,"MITSUI SUMITOMO SEGUROS S.A.","","dominos-gopouva"],["d","2026-05",17,"Instalações","",361.87,0,"EMANUEL PEDRO GEFE DA ROSA MESQUITA","","dominos-gopouva"],["d","2026-05",17,"Equipamentos de Informática","",153.7,0,"INVESTIMENTOS","","dominos-gopouva"],["d","2026-04",8,"Taxas e Licenças","",459,0,"ID CERTIFICACAO","","dominos-gopouva"],["d","2026-04",15,"Royalties","",8156.7,0,"DP1 RESTAURANTE LTDA","","dominos-gopouva"],["d","2026-04",15,"Serviços Softwares","",964.09,0,"DP1 RESTAURANTE LTDA","","dominos-gopouva"],["d","2026-05",14,"Compras de Mercadorias","",229,0,"COMERCIO DE FRUTAS VERDURAS E LEGUMES CAVALCANTE","","dominos-gopouva"],["d","2026-05",12,"Compras de Mercadorias","",12290.24,0,"RFG COMERCIO TRANSPORTES E SERVICOS LTDA","","dominos-gopouva"],["d","2026-04",20,"ICMS","",5404.1,0,"ICMS À PAGAR","","dominos-gopouva"],["d","2026-04",20,"Fundo de Promoção","",5187.13,0,"ASSOCIACAO DOMINO&apos;S","","dominos-gopouva"],["d","2026-05",18,"Energia Elétrica","",3438.01,0,"EDP SP","","dominos-gopouva"],["d","2026-04",16,"Compras de Mercadorias","",1700,0,"BAL-Jaguare-SP","","dominos-gopouva"],["d","2026-05",14,"Compras de Mercadorias","",165,0,"COMERCIO DE FRUTAS VERDURAS E LEGUMES CAVALCANTE","","dominos-gopouva"],["d","2026-05",19,"Compras de Mercadorias","",12163.84,0,"RFG COMERCIO TRANSPORTES E SERVICOS LTDA","","dominos-gopouva"],["d","2026-05",12,"Compras de Mercadorias","",663.76,0,"Spal Ind. Bras.Bebidas SA","","dominos-gopouva"],["d","2026-05",19,"Compras de Mercadorias","",823.38,0,"Spal Ind. Bras.Bebidas SA","","dominos-gopouva"],["d","2026-05",14,"Compras de Mercadorias","",279,0,"COMERCIO DE FRUTAS VERDURAS E LEGUMES CAVALCANTE","","dominos-gopouva"],["d","2026-04",29,"Compras de Mercadorias","",1700,0,"BAL-Jaguare-SP","","dominos-gopouva"],["d","2026-05",7,"Custo com Serviços de Entrega","",3914,0,"STAR GOLD DELIVERY LTDA","","dominos-gopouva"],["d","2026-06",2,"Compras de Mercadorias","",8467.16,0,"RFG COMERCIO TRANSPORTES E SERVICOS LTDA","","dominos-gopouva"],["d","2026-05",26,"Compras de Mercadorias","",662.98,0,"Spal Ind. Bras.Bebidas SA","","dominos-gopouva"],["d","2026-04",5,"Manutenção loja","",1200,1,"NEW STAR- COMUNICACAO VISUAL","","dominos-gopouva"],["d","2026-04",9,"Custo com Serviços de Entrega","",4551,1,"STAR GOLD DELIVERY LTDA","","dominos-gopouva"],["d","2026-04",10,"Custo Serviços Terceirizados","",1062.5,1,"55.504.962 GELSON VIANA MONTALVAO","","dominos-gopouva"],["d","2026-04",10,"Custo Serviços Terceirizados","",1000,1,"RUAN TONOLLI GESTAO EMPRESARIAL","","dominos-gopouva"],["d","2026-04",13,"Informática","",130,1,"JOAO PAULO CABRERA","","dominos-gopouva"],["d","2026-04",15,"&lt;Disponível&gt;","",1000,1,"DANIEL SILVA DE SOUSA","","dominos-gopouva"],["d","2026-04",15,"Água e Esgoto","",1357.78,1,"SABESP","","dominos-gopouva"],["d","2026-04",15,"Custo Serviços Dedetização/coleta lixo/MICROAMB","",398.12,1,"TRULY NOLEN PEST CONTROL","","dominos-gopouva"],["d","2026-04",15,"&lt;Disponível&gt;","",2000,1,"EMANUEL PEDRO GEFE DA ROSA MESQUITA","","dominos-gopouva"],["d","2026-04",15,"Adiantamento","",668.69,1,"MAYARA FERNANDA NASCIMENTO","","dominos-gopouva"],["d","2026-04",15,"Adiantamento","",668.69,1,"GEOVANA CARNEIRO DE JESUS","","dominos-gopouva"],["d","2026-04",15,"Adiantamento","",1421.6,1,"MARIA SUERLENE OLIVEIRA SILVA","","dominos-gopouva"],["d","2026-04",15,"Adiantamento","",874.4,1,"KYARA MARIA DA SILVA","","dominos-gopouva"],["d","2026-04",15,"Adiantamento","",922.4,1,"CARLA VITORIA SANTOS MUNCK","","dominos-gopouva"],["d","2026-04",15,"Adiantamento","",668.69,1,"LUANA SANTOS RAMOS","","dominos-gopouva"],["d","2026-04",16,"Energia Elétrica","",4260.06,1,"EDP SP","","dominos-gopouva"],["d","2026-04",16,"Custo com Serviços de Entrega","",4420,1,"STAR GOLD DELIVERY LTDA","","dominos-gopouva"],["d","2026-04",17,"Instalações","",235.93,1,"EMANUEL PEDRO GEFE DA ROSA MESQUITA","","dominos-gopouva"],["d","2026-04",17,"Instalações","",258.54,1,"EMANUEL PEDRO GEFE DA ROSA MESQUITA","","dominos-gopouva"],["d","2026-04",17,"Instalações","",296.04,1,"EMANUEL PEDRO GEFE DA ROSA MESQUITA","","dominos-gopouva"],["d","2026-04",20,"Taxas e Licenças","",156,1,"ABRASEL-SP","","dominos-gopouva"],["d","2026-04",21,"Custos Processuais, Judiciais, Cartório e Sindicatos","",3000,1,"SILVA &amp; CIKANOVICIUS ADVOCACIA","","dominos-gopouva"],["d","2026-04",23,"Custo com Serviços de Entrega","",4294,1,"STAR GOLD DELIVERY LTDA","","dominos-gopouva"],["d","2026-04",27,"Assistência Médica","",158,1,"PLBRASIL HEALTH&amp;SAFETY","","dominos-gopouva"],["d","2026-04",27,"Gás","",1952.24,1,"COMPANHIA DE GAS DE SAO PAULO COMGAS","","dominos-gopouva"],["d","2026-04",28,"Freelancers","",112.6,1,"SALÁRIOS À PAGAR","","dominos-gopouva"],["d","2026-04",30,"Custo com Serviços de Entrega","",4840.71,1,"STAR GOLD DELIVERY LTDA","","dominos-gopouva"],["d","2026-04",30,"Custo Serviços Dedetização/coleta lixo/MICROAMB","",744.03,1,"MULTILIXO","","dominos-gopouva"],["d","2026-04",30,"Salários","",1000.09,1,"MAYARA FERNANDA NASCIMENTO","","dominos-gopouva"],["d","2026-04",30,"Salários","",1038.15,1,"GEOVANA CARNEIRO DE JESUS","","dominos-gopouva"],["d","2026-04",30,"Salários","",1411.87,1,"CARLA VITORIA SANTOS MUNCK","","dominos-gopouva"],["d","2026-04",30,"Salários","",975.99,1,"LUANA SANTOS RAMOS","","dominos-gopouva"],["d","2026-04",30,"Salários","",1604.1,1,"MARIA SUERLENE OLIVEIRA SILVA","","dominos-gopouva"],["d","2026-04",30,"Férias","",3456.81,1,"CARLA VITORIA SANTOS MUNCK","","dominos-gopouva"],["d","2026-04",30,"Salários","",1297.44,1,"KYARA MARIA DA SILVA","","dominos-gopouva"],["d","2026-05",4,"Contabilidade","",1067.9,1,"OFFICE ASSESSORIA CONTABIL LTDA","","dominos-gopouva"],["d","2026-05",4,"Serviços Softwares","",104.75,1,"NEOCOMPANY","","dominos-gopouva"],["d","2026-05",5,"Vale Refeição","",4806.16,1,"CAJU","","dominos-gopouva"],["d","2026-05",5,"Compras de Mercadorias","",549.42,1,"Spal Ind. Bras.Bebidas SA","","dominos-gopouva"],["d","2026-05",7,"Serviços Softwares","",634.75,1,"GCOM","","dominos-gopouva"],["d","2026-05",7,"Segurança","",259.91,1,"VERISURE BRASIL MONITORAMENTO DE ALARMES S.A","","dominos-gopouva"],["d","2026-05",6,"Salários","",340,0,"SALÁRIOS À PAGAR","","luigi-alegre"],["d","2026-05",6,"Salários","",510,0,"SALÁRIOS À PAGAR","","luigi-alegre"],["d","2026-05",7,"Salários","",1627.71,0,"ROSEMARY OLIVEIRA LEAO","","luigi-alegre"],["d","2026-05",7,"Salários","",1710.8,0,"THAYS MOREIRA BERNARDO","","luigi-alegre"],["d","2026-04",20,"Simples Nacional (DAS)","",2342.49,1,"SIMPLES NACIONAL","","luigi-alegre"],["d","2026-04",20,"INSS","",185.43,1,"RECEITA FEDERAL","","luigi-alegre"],["d","2026-04",20,"FGTS","",197.79,1,"FGTS À PAGAR","","luigi-alegre"],["d","2026-05",4,"Contabilidade","",747.53,1,"OFFICE ASSESSORIA CONTABIL LTDA","","luigi-alegre"],["d","2026-05",4,"Compras de Mercadorias","",4560.67,1,"LAS PALETITAS","","luigi-alegre"],["d","2026-05",5,"Softwares gestão","",258,1,"Yooga - Sistema de Gestão e Delivery","","luigi-alegre"],["d","2026-05",5,"Custo Serviços Terceirizados","",700,1,"RUAN TONOLLI GESTAO EMPRESARIAL","","luigi-alegre"],["d","2026-05",5,"Tarifas Bancárias","",66.5,1,"REDECARD","","luigi-alegre"],["d","2026-05",25,"Móveis e Utensílios","",2910.9,0,"DANIEL SILVA DE SOUSA","","optcalia-niteroi"],["d","2026-04",15,"Taxas e Licenças","",5000,0,"HOLDING CALI OPTICA LICENCE S.A","","optcalia-niteroi"],["d","2026-05",10,"Custo Serviços Terceirizados","",1000,0,"RUAN TONOLLI GESTAO EMPRESARIAL","","optcalia-niteroi"],["d","2026-04",10,"&lt;Disponível&gt;","",1000,0,"DANIEL SILVA DE SOUSA","","optcalia-niteroi"],["d","2026-04",10,"&lt;Disponível&gt;","",1000,0,"DANIEL SILVA DE SOUSA","","optcalia-niteroi"],["d","2026-05",9,"Compras de Mercadorias","",7.44,0,"CARL ZEISS VISION BRASIL IND. OPTICA LTDA","","optcalia-niteroi"],["d","2026-06",8,"Compras de Mercadorias","",7.44,0,"CARL ZEISS VISION BRASIL IND. OPTICA LTDA","","optcalia-niteroi"],["d","2026-07",8,"Compras de Mercadorias","",7.44,0,"CARL ZEISS VISION BRASIL IND. OPTICA LTDA","","optcalia-niteroi"],["d","2026-08",7,"Compras de Mercadorias","",7.44,0,"CARL ZEISS VISION BRASIL IND. OPTICA LTDA","","optcalia-niteroi"],["d","2026-09",6,"Compras de Mercadorias","",7.44,0,"CARL ZEISS VISION BRASIL IND. OPTICA LTDA","","optcalia-niteroi"],["d","2026-10",6,"Compras de Mercadorias","",7.44,0,"CARL ZEISS VISION BRASIL IND. OPTICA LTDA","","optcalia-niteroi"],["d","2026-11",5,"Compras de Mercadorias","",7.44,0,"CARL ZEISS VISION BRASIL IND. OPTICA LTDA","","optcalia-niteroi"],["d","2026-12",5,"Compras de Mercadorias","",7.47,0,"CARL ZEISS VISION BRASIL IND. OPTICA LTDA","","optcalia-niteroi"],["d","2027-01",4,"Compras de Mercadorias","",7.44,0,"CARL ZEISS VISION BRASIL IND. OPTICA LTDA","","optcalia-niteroi"],["d","2027-02",3,"Compras de Mercadorias","",7.44,0,"CARL ZEISS VISION BRASIL IND. OPTICA LTDA","","optcalia-niteroi"],["d","2026-04",25,"Taxas e Licenças","",1559.69,0,"ASSOCIACAO DOS LOJISTAS CESSIONARIOS DA MARCA OPTICALIA","","optcalia-niteroi"],["d","2026-05",10,"Compras de Mercadorias","",53.07,0,"CARL ZEISS VISION BRASIL IND. OPTICA LTDA","","optcalia-niteroi"],["d","2026-06",9,"Compras de Mercadorias","",53.07,0,"CARL ZEISS VISION BRASIL IND. OPTICA LTDA","","optcalia-niteroi"],["d","2026-07",9,"Compras de Mercadorias","",53.07,0,"CARL ZEISS VISION BRASIL IND. OPTICA LTDA","","optcalia-niteroi"],["d","2026-08",8,"Compras de Mercadorias","",53.07,0,"CARL ZEISS VISION BRASIL IND. OPTICA LTDA","","optcalia-niteroi"],["d","2026-09",7,"Compras de Mercadorias","",53.07,0,"CARL ZEISS VISION BRASIL IND. OPTICA LTDA","","optcalia-niteroi"],["d","2026-10",7,"Compras de Mercadorias","",53.07,0,"CARL ZEISS VISION BRASIL IND. OPTICA LTDA","","optcalia-niteroi"],["d","2026-11",6,"Compras de Mercadorias","",53.07,0,"CARL ZEISS VISION BRASIL IND. OPTICA LTDA","","optcalia-niteroi"],["d","2026-12",6,"Compras de Mercadorias","",53.07,0,"CARL ZEISS VISION BRASIL IND. OPTICA LTDA","","optcalia-niteroi"],["d","2027-01",5,"Compras de Mercadorias","",53.07,0,"CARL ZEISS VISION BRASIL IND. OPTICA LTDA","","optcalia-niteroi"],["d","2027-02",4,"Compras de Mercadorias","",53.07,0,"CARL ZEISS VISION BRASIL IND. OPTICA LTDA","","optcalia-niteroi"],["d","2026-05",6,"Compras de Mercadorias","",181.95,0,"BRASLAB","","optcalia-niteroi"],["d","2026-06",3,"Compras de Mercadorias","",181.95,0,"BRASLAB","","optcalia-niteroi"],["d","2026-07",1,"Compras de Mercadorias","",181.95,0,"BRASLAB","","optcalia-niteroi"],["d","2026-07",29,"Compras de Mercadorias","",181.95,0,"BRASLAB","","optcalia-niteroi"],["d","2026-08",26,"Compras de Mercadorias","",181.95,0,"BRASLAB","","optcalia-niteroi"],["d","2026-04",13,"Compras de Mercadorias","",678,0,"HOYA LENS BRAZIL","","optcalia-niteroi"],["d","2026-04",12,"Compras de Mercadorias","",412.8,0,"HOYA LENS BRAZIL","","optcalia-niteroi"],["d","2026-05",7,"Compras de Mercadorias","",10.76,0,"BRASLAB","","optcalia-niteroi"],["d","2026-06",4,"Compras de Mercadorias","",10.76,0,"BRASLAB","","optcalia-niteroi"],["d","2026-07",2,"Compras de Mercadorias","",10.76,0,"BRASLAB","","optcalia-niteroi"],["d","2026-07",30,"Compras de Mercadorias","",10.76,0,"BRASLAB","","optcalia-niteroi"],["d","2026-08",27,"Compras de Mercadorias","",10.76,0,"BRASLAB","","optcalia-niteroi"],["d","2026-05",10,"Compras de Mercadorias","",42.88,0,"CARL ZEISS VISION BRASIL IND. OPTICA LTDA","","optcalia-niteroi"],["d","2026-06",9,"Compras de Mercadorias","",42.88,0,"CARL ZEISS VISION BRASIL IND. OPTICA LTDA","","optcalia-niteroi"],["d","2026-07",9,"Compras de Mercadorias","",42.88,0,"CARL ZEISS VISION BRASIL IND. OPTICA LTDA","","optcalia-niteroi"],["d","2026-08",8,"Compras de Mercadorias","",42.88,0,"CARL ZEISS VISION BRASIL IND. OPTICA LTDA","","optcalia-niteroi"],["d","2026-09",7,"Compras de Mercadorias","",42.88,0,"CARL ZEISS VISION BRASIL IND. OPTICA LTDA","","optcalia-niteroi"],["d","2026-10",7,"Compras de Mercadorias","",42.88,0,"CARL ZEISS VISION BRASIL IND. OPTICA LTDA","","optcalia-niteroi"],["d","2026-11",6,"Compras de Mercadorias","",42.88,0,"CARL ZEISS VISION BRASIL IND. OPTICA LTDA","","optcalia-niteroi"],["d","2026-12",6,"Compras de Mercadorias","",42.9,0,"CARL ZEISS VISION BRASIL IND. OPTICA LTDA","","optcalia-niteroi"],["d","2027-01",5,"Compras de Mercadorias","",42.88,0,"CARL ZEISS VISION BRASIL IND. OPTICA LTDA","","optcalia-niteroi"],["d","2027-02",4,"Compras de Mercadorias","",42.88,0,"CARL ZEISS VISION BRASIL IND. OPTICA LTDA","","optcalia-niteroi"],["d","2026-05",11,"Compras de Mercadorias","",16.14,0,"BRASLAB","","optcalia-niteroi"],["d","2026-06",8,"Compras de Mercadorias","",16.14,0,"BRASLAB","","optcalia-niteroi"],["d","2026-07",6,"Compras de Mercadorias","",16.14,0,"BRASLAB","","optcalia-niteroi"],["d","2026-08",3,"Compras de Mercadorias","",16.14,0,"BRASLAB","","optcalia-niteroi"],["d","2026-08",31,"Compras de Mercadorias","",16.14,0,"BRASLAB","","optcalia-niteroi"],["d","2026-05",12,"Compras de Mercadorias","",113.02,0,"BRASLAB","","optcalia-niteroi"],["d","2026-06",9,"Compras de Mercadorias","",113.02,0,"BRASLAB","","optcalia-niteroi"],["d","2026-07",7,"Compras de Mercadorias","",113.02,0,"BRASLAB","","optcalia-niteroi"],["d","2026-08",4,"Compras de Mercadorias","",113.02,0,"BRASLAB","","optcalia-niteroi"],["d","2026-09",1,"Compras de Mercadorias","",113.02,0,"BRASLAB","","optcalia-niteroi"],["d","2026-06",9,"Compras de Mercadorias","",295.43,0,"CD SUMARE (SP)","","optcalia-niteroi"],["d","2026-07",9,"Compras de Mercadorias","",295.43,0,"CD SUMARE (SP)","","optcalia-niteroi"],["d","2026-08",8,"Compras de Mercadorias","",295.43,0,"CD SUMARE (SP)","","optcalia-niteroi"],["d","2026-09",7,"Compras de Mercadorias","",295.43,0,"CD SUMARE (SP)","","optcalia-niteroi"],["d","2026-10",7,"Compras de Mercadorias","",295.47,0,"CD SUMARE (SP)","","optcalia-niteroi"],["d","2026-05",16,"Compras de Mercadorias","",9.43,0,"CARL ZEISS VISION BRASIL IND. OPTICA LTDA","","optcalia-niteroi"],["d","2026-06",15,"Compras de Mercadorias","",9.43,0,"CARL ZEISS VISION BRASIL IND. OPTICA LTDA","","optcalia-niteroi"],["d","2026-07",15,"Compras de Mercadorias","",9.43,0,"CARL ZEISS VISION BRASIL IND. OPTICA LTDA","","optcalia-niteroi"],["d","2026-08",14,"Compras de Mercadorias","",9.43,0,"CARL ZEISS VISION BRASIL IND. OPTICA LTDA","","optcalia-niteroi"],["d","2026-09",13,"Compras de Mercadorias","",9.43,0,"CARL ZEISS VISION BRASIL IND. OPTICA LTDA","","optcalia-niteroi"],["d","2026-10",13,"Compras de Mercadorias","",9.43,0,"CARL ZEISS VISION BRASIL IND. OPTICA LTDA","","optcalia-niteroi"],["d","2026-11",12,"Compras de Mercadorias","",9.43,0,"CARL ZEISS VISION BRASIL IND. OPTICA LTDA","","optcalia-niteroi"],["d","2026-12",12,"Compras de Mercadorias","",9.43,0,"CARL ZEISS VISION BRASIL IND. OPTICA LTDA","","optcalia-niteroi"],["d","2027-01",11,"Compras de Mercadorias","",9.43,0,"CARL ZEISS VISION BRASIL IND. OPTICA LTDA","","optcalia-niteroi"],["d","2027-02",10,"Compras de Mercadorias","",9.43,0,"CARL ZEISS VISION BRASIL IND. OPTICA LTDA","","optcalia-niteroi"],["d","2026-05",29,"Compras de Mercadorias","",702.77,0,"JUB2","","optcalia-niteroi"],["d","2026-06",28,"Compras de Mercadorias","",702.77,0,"JUB2","","optcalia-niteroi"],["d","2026-07",28,"Compras de Mercadorias","",702.77,0,"JUB2","","optcalia-niteroi"],["d","2026-08",27,"Compras de Mercadorias","",702.77,0,"JUB2","","optcalia-niteroi"],["d","2026-09",26,"Compras de Mercadorias","",702.77,0,"JUB2","","optcalia-niteroi"],["d","2026-10",26,"Compras de Mercadorias","",702.77,0,"JUB2","","optcalia-niteroi"],["d","2026-11",25,"Compras de Mercadorias","",702.77,0,"JUB2","","optcalia-niteroi"],["d","2026-12",25,"Compras de Mercadorias","",702.73,0,"JUB2","","optcalia-niteroi"],["d","2026-05",17,"Compras de Mercadorias","",40.54,0,"CARL ZEISS VISION BRASIL IND. OPTICA LTDA","","optcalia-niteroi"],["d","2026-06",16,"Compras de Mercadorias","",40.54,0,"CARL ZEISS VISION BRASIL IND. OPTICA LTDA","","optcalia-niteroi"],["d","2026-07",16,"Compras de Mercadorias","",40.54,0,"CARL ZEISS VISION BRASIL IND. OPTICA LTDA","","optcalia-niteroi"],["d","2026-08",15,"Compras de Mercadorias","",40.54,0,"CARL ZEISS VISION BRASIL IND. OPTICA LTDA","","optcalia-niteroi"],["d","2026-09",14,"Compras de Mercadorias","",40.54,0,"CARL ZEISS VISION BRASIL IND. OPTICA LTDA","","optcalia-niteroi"],["d","2026-10",14,"Compras de Mercadorias","",40.54,0,"CARL ZEISS VISION BRASIL IND. OPTICA LTDA","","optcalia-niteroi"],["d","2026-11",13,"Compras de Mercadorias","",40.54,0,"CARL ZEISS VISION BRASIL IND. OPTICA LTDA","","optcalia-niteroi"],["d","2026-12",13,"Compras de Mercadorias","",40.55,0,"CARL ZEISS VISION BRASIL IND. OPTICA LTDA","","optcalia-niteroi"],["d","2027-01",12,"Compras de Mercadorias","",40.54,0,"CARL ZEISS VISION BRASIL IND. OPTICA LTDA","","optcalia-niteroi"],["d","2027-02",11,"Compras de Mercadorias","",40.54,0,"CARL ZEISS VISION BRASIL IND. OPTICA LTDA","","optcalia-niteroi"],["d","2026-05",18,"Compras de Mercadorias","",19.8,0,"CARL ZEISS VISION BRASIL IND. OPTICA LTDA","","optcalia-niteroi"],["d","2026-06",17,"Compras de Mercadorias","",19.8,0,"CARL ZEISS VISION BRASIL IND. OPTICA LTDA","","optcalia-niteroi"],["d","2026-07",17,"Compras de Mercadorias","",19.8,0,"CARL ZEISS VISION BRASIL IND. OPTICA LTDA","","optcalia-niteroi"],["d","2026-08",16,"Compras de Mercadorias","",19.8,0,"CARL ZEISS VISION BRASIL IND. OPTICA LTDA","","optcalia-niteroi"],["d","2026-09",15,"Compras de Mercadorias","",19.8,0,"CARL ZEISS VISION BRASIL IND. OPTICA LTDA","","optcalia-niteroi"],["d","2026-10",15,"Compras de Mercadorias","",19.8,0,"CARL ZEISS VISION BRASIL IND. OPTICA LTDA","","optcalia-niteroi"],["d","2026-11",14,"Compras de Mercadorias","",19.8,0,"CARL ZEISS VISION BRASIL IND. OPTICA LTDA","","optcalia-niteroi"],["d","2026-12",14,"Compras de Mercadorias","",19.76,0,"CARL ZEISS VISION BRASIL IND. OPTICA LTDA","","optcalia-niteroi"],["d","2027-01",13,"Compras de Mercadorias","",19.8,0,"CARL ZEISS VISION BRASIL IND. OPTICA LTDA","","optcalia-niteroi"],["d","2027-02",12,"Compras de Mercadorias","",19.8,0,"CARL ZEISS VISION BRASIL IND. OPTICA LTDA","","optcalia-niteroi"],["d","2026-05",19,"Compras de Mercadorias","",76.35,0,"CARL ZEISS VISION BRASIL IND. OPTICA LTDA","","optcalia-niteroi"],["d","2026-06",18,"Compras de Mercadorias","",76.35,0,"CARL ZEISS VISION BRASIL IND. OPTICA LTDA","","optcalia-niteroi"],["d","2026-07",18,"Compras de Mercadorias","",76.35,0,"CARL ZEISS VISION BRASIL IND. OPTICA LTDA","","optcalia-niteroi"],["d","2026-08",17,"Compras de Mercadorias","",76.35,0,"CARL ZEISS VISION BRASIL IND. OPTICA LTDA","","optcalia-niteroi"],["d","2026-09",16,"Compras de Mercadorias","",76.35,0,"CARL ZEISS VISION BRASIL IND. OPTICA LTDA","","optcalia-niteroi"],["d","2026-10",16,"Compras de Mercadorias","",76.35,0,"CARL ZEISS VISION BRASIL IND. OPTICA LTDA","","optcalia-niteroi"],["d","2026-11",15,"Compras de Mercadorias","",76.35,0,"CARL ZEISS VISION BRASIL IND. OPTICA LTDA","","optcalia-niteroi"],["d","2026-12",15,"Compras de Mercadorias","",76.39,0,"CARL ZEISS VISION BRASIL IND. OPTICA LTDA","","optcalia-niteroi"],["d","2027-01",14,"Compras de Mercadorias","",76.35,0,"CARL ZEISS VISION BRASIL IND. OPTICA LTDA","","optcalia-niteroi"],["d","2027-02",13,"Compras de Mercadorias","",76.35,0,"CARL ZEISS VISION BRASIL IND. OPTICA LTDA","","optcalia-niteroi"],["d","2026-05",20,"Compras de Mercadorias","",11.07,0,"CARL ZEISS VISION BRASIL IND. OPTICA LTDA","","optcalia-niteroi"],["d","2026-06",19,"Compras de Mercadorias","",11.07,0,"CARL ZEISS VISION BRASIL IND. OPTICA LTDA","","optcalia-niteroi"],["d","2026-07",19,"Compras de Mercadorias","",11.07,0,"CARL ZEISS VISION BRASIL IND. OPTICA LTDA","","optcalia-niteroi"],["d","2026-08",18,"Compras de Mercadorias","",11.07,0,"CARL ZEISS VISION BRASIL IND. OPTICA LTDA","","optcalia-niteroi"],["d","2026-09",17,"Compras de Mercadorias","",11.07,0,"CARL ZEISS VISION BRASIL IND. OPTICA LTDA","","optcalia-niteroi"],["d","2026-10",17,"Compras de Mercadorias","",11.07,0,"CARL ZEISS VISION BRASIL IND. OPTICA LTDA","","optcalia-niteroi"],["d","2026-11",16,"Compras de Mercadorias","",11.07,0,"CARL ZEISS VISION BRASIL IND. OPTICA LTDA","","optcalia-niteroi"],["d","2026-12",16,"Compras de Mercadorias","",11.03,0,"CARL ZEISS VISION BRASIL IND. OPTICA LTDA","","optcalia-niteroi"],["d","2027-01",15,"Compras de Mercadorias","",11.07,0,"CARL ZEISS VISION BRASIL IND. OPTICA LTDA","","optcalia-niteroi"],["d","2027-02",14,"Compras de Mercadorias","",11.07,0,"CARL ZEISS VISION BRASIL IND. OPTICA LTDA","","optcalia-niteroi"],["d","2026-05",14,"Compras de Mercadorias","",210.23,0,"BRASLAB","","optcalia-niteroi"],["d","2026-06",11,"Compras de Mercadorias","",210.23,0,"BRASLAB","","optcalia-niteroi"],["d","2026-07",9,"Compras de Mercadorias","",210.23,0,"BRASLAB","","optcalia-niteroi"],["d","2026-08",6,"Compras de Mercadorias","",210.23,0,"BRASLAB","","optcalia-niteroi"],["d","2026-09",3,"Compras de Mercadorias","",210.23,0,"BRASLAB","","optcalia-niteroi"],["d","2026-04",17,"Compras de Mercadorias","",8,0,"CooperVision","","optcalia-niteroi"],["d","2026-05",18,"Compras de Mercadorias","",355.24,0,"CD SUMARE (SP)","","optcalia-niteroi"],["d","2026-06",17,"Compras de Mercadorias","",355.24,0,"CD SUMARE (SP)","","optcalia-niteroi"],["d","2026-07",17,"Compras de Mercadorias","",355.24,0,"CD SUMARE (SP)","","optcalia-niteroi"],["d","2026-08",16,"Compras de Mercadorias","",355.24,0,"CD SUMARE (SP)","","optcalia-niteroi"],["d","2026-09",15,"Compras de Mercadorias","",355.24,0,"CD SUMARE (SP)","","optcalia-niteroi"],["d","2026-10",15,"Compras de Mercadorias","",355.31,0,"CD SUMARE (SP)","","optcalia-niteroi"],["d","2026-05",15,"Compras de Mercadorias","",14.96,0,"BRASLAB","","optcalia-niteroi"],["d","2026-06",12,"Compras de Mercadorias","",14.96,0,"BRASLAB","","optcalia-niteroi"],["d","2026-07",10,"Compras de Mercadorias","",14.96,0,"BRASLAB","","optcalia-niteroi"],["d","2026-08",7,"Compras de Mercadorias","",14.96,0,"BRASLAB","","optcalia-niteroi"],["d","2026-09",4,"Compras de Mercadorias","",14.96,0,"BRASLAB","","optcalia-niteroi"],["d","2026-07",14,"Compras de Mercadorias","",34.2,0,"MARCHON BRASIL LTDA","","optcalia-niteroi"],["d","2026-08",13,"Compras de Mercadorias","",34.2,0,"MARCHON BRASIL LTDA","","optcalia-niteroi"],["d","2026-09",12,"Compras de Mercadorias","",34.2,0,"MARCHON BRASIL LTDA","","optcalia-niteroi"],["d","2026-10",12,"Compras de Mercadorias","",34.2,0,"MARCHON BRASIL LTDA","","optcalia-niteroi"],["d","2026-11",11,"Compras de Mercadorias","",34.2,0,"MARCHON BRASIL LTDA","","optcalia-niteroi"],["d","2026-12",11,"Compras de Mercadorias","",34.2,0,"MARCHON BRASIL LTDA","","optcalia-niteroi"],["d","2027-01",10,"Compras de Mercadorias","",34.2,0,"MARCHON BRASIL LTDA","","optcalia-niteroi"],["d","2027-02",9,"Compras de Mercadorias","",34.2,0,"MARCHON BRASIL LTDA","","optcalia-niteroi"],["d","2027-03",11,"Compras de Mercadorias","",34.2,0,"MARCHON BRASIL LTDA","","optcalia-niteroi"],["d","2027-04",10,"Compras de Mercadorias","",34.16,0,"MARCHON BRASIL LTDA","","optcalia-niteroi"],["d","2026-06",10,"Compras de Mercadorias","",2373.23,0,"MARCHON BRASIL LTDA","","optcalia-niteroi"],["d","2026-07",10,"Compras de Mercadorias","",2373.23,0,"MARCHON BRASIL LTDA","","optcalia-niteroi"],["d","2026-08",9,"Compras de Mercadorias","",2373.23,0,"MARCHON BRASIL LTDA","","optcalia-niteroi"],["d","2026-09",8,"Compras de Mercadorias","",2373.23,0,"MARCHON BRASIL LTDA","","optcalia-niteroi"],["d","2026-10",8,"Compras de Mercadorias","",2373.23,0,"MARCHON BRASIL LTDA","","optcalia-niteroi"],["d","2026-11",7,"Compras de Mercadorias","",2373.23,0,"MARCHON BRASIL LTDA","","optcalia-niteroi"],["d","2026-12",7,"Compras de Mercadorias","",2373.23,0,"MARCHON BRASIL LTDA","","optcalia-niteroi"],["d","2027-01",6,"Compras de Mercadorias","",2373.23,0,"MARCHON BRASIL LTDA","","optcalia-niteroi"],["d","2027-02",5,"Compras de Mercadorias","",2373.23,0,"MARCHON BRASIL LTDA","","optcalia-niteroi"],["d","2027-03",7,"Compras de Mercadorias","",2373.22,0,"MARCHON BRASIL LTDA","","optcalia-niteroi"],["d","2026-07",10,"Compras de Mercadorias","",5226.71,0,"MARCHON BRASIL LTDA","","optcalia-niteroi"],["d","2026-08",9,"Compras de Mercadorias","",5226.71,0,"MARCHON BRASIL LTDA","","optcalia-niteroi"],["d","2026-09",8,"Compras de Mercadorias","",5226.71,0,"MARCHON BRASIL LTDA","","optcalia-niteroi"],["d","2026-10",8,"Compras de Mercadorias","",5226.71,0,"MARCHON BRASIL LTDA","","optcalia-niteroi"],["d","2026-11",7,"Compras de Mercadorias","",5226.71,0,"MARCHON BRASIL LTDA","","optcalia-niteroi"],["d","2026-12",7,"Compras de Mercadorias","",5226.7,0,"MARCHON BRASIL LTDA","","optcalia-niteroi"],["d","2026-05",21,"Compras de Mercadorias","",135.87,0,"CD SUMARE (SP)","","optcalia-niteroi"],["d","2026-06",20,"Compras de Mercadorias","",135.87,0,"CD SUMARE (SP)","","optcalia-niteroi"],["d","2026-07",20,"Compras de Mercadorias","",135.87,0,"CD SUMARE (SP)","","optcalia-niteroi"],["d","2026-08",19,"Compras de Mercadorias","",135.87,0,"CD SUMARE (SP)","","optcalia-niteroi"],["d","2026-09",18,"Compras de Mercadorias","",135.87,0,"CD SUMARE (SP)","","optcalia-niteroi"],["d","2026-10",18,"Compras de Mercadorias","",135.89,0,"CD SUMARE (SP)","","optcalia-niteroi"],["d","2026-07",15,"Compras de Mercadorias","",755.66,0,"MARCHON BRASIL LTDA","","optcalia-niteroi"],["d","2026-08",14,"Compras de Mercadorias","",755.66,0,"MARCHON BRASIL LTDA","","optcalia-niteroi"],["d","2026-09",13,"Compras de Mercadorias","",755.66,0,"MARCHON BRASIL LTDA","","optcalia-niteroi"],["d","2026-10",13,"Compras de Mercadorias","",755.66,0,"MARCHON BRASIL LTDA","","optcalia-niteroi"],["d","2026-11",12,"Compras de Mercadorias","",755.66,0,"MARCHON BRASIL LTDA","","optcalia-niteroi"],["d","2026-12",12,"Compras de Mercadorias","",755.67,0,"MARCHON BRASIL LTDA","","optcalia-niteroi"],["d","2026-07",14,"Compras de Mercadorias","",142.5,0,"MARCHON BRASIL LTDA","","optcalia-niteroi"],["d","2026-08",13,"Compras de Mercadorias","",142.5,0,"MARCHON BRASIL LTDA","","optcalia-niteroi"],["d","2026-09",12,"Compras de Mercadorias","",142.5,0,"MARCHON BRASIL LTDA","","optcalia-niteroi"],["d","2026-10",12,"Compras de Mercadorias","",142.5,0,"MARCHON BRASIL LTDA","","optcalia-niteroi"],["d","2026-11",11,"Compras de Mercadorias","",142.5,0,"MARCHON BRASIL LTDA","","optcalia-niteroi"],["d","2026-12",11,"Compras de Mercadorias","",142.49,0,"MARCHON BRASIL LTDA","","optcalia-niteroi"],["d","2026-07",20,"Compras de Mercadorias","",889.86,0,"MARCHON BRASIL LTDA","","optcalia-niteroi"],["d","2026-08",19,"Compras de Mercadorias","",889.86,0,"MARCHON BRASIL LTDA","","optcalia-niteroi"],["d","2026-09",18,"Compras de Mercadorias","",889.86,0,"MARCHON BRASIL LTDA","","optcalia-niteroi"],["d","2026-10",18,"Compras de Mercadorias","",889.86,0,"MARCHON BRASIL LTDA","","optcalia-niteroi"],["d","2026-11",17,"Compras de Mercadorias","",889.86,0,"MARCHON BRASIL LTDA","","optcalia-niteroi"],["d","2026-12",17,"Compras de Mercadorias","",889.87,0,"MARCHON BRASIL LTDA","","optcalia-niteroi"],["d","2026-05",22,"Compras de Mercadorias","",203.9,0,"CD SUMARE (SP)","","optcalia-niteroi"],["d","2026-06",21,"Compras de Mercadorias","",203.9,0,"CD SUMARE (SP)","","optcalia-niteroi"],["d","2026-07",21,"Compras de Mercadorias","",203.9,0,"CD SUMARE (SP)","","optcalia-niteroi"],["d","2026-08",20,"Compras de Mercadorias","",203.9,0,"CD SUMARE (SP)","","optcalia-niteroi"],["d","2026-09",19,"Compras de Mercadorias","",203.9,0,"CD SUMARE (SP)","","optcalia-niteroi"],["d","2026-10",19,"Compras de Mercadorias","",203.89,0,"CD SUMARE (SP)","","optcalia-niteroi"],["d","2026-05",28,"Compras de Mercadorias","",18.36,0,"CARL ZEISS VISION BRASIL IND. OPTICA LTDA","","optcalia-niteroi"],["d","2026-06",27,"Compras de Mercadorias","",18.36,0,"CARL ZEISS VISION BRASIL IND. OPTICA LTDA","","optcalia-niteroi"],["d","2026-07",27,"Compras de Mercadorias","",18.36,0,"CARL ZEISS VISION BRASIL IND. OPTICA LTDA","","optcalia-niteroi"],["d","2026-08",26,"Compras de Mercadorias","",18.36,0,"CARL ZEISS VISION BRASIL IND. OPTICA LTDA","","optcalia-niteroi"],["d","2026-09",25,"Compras de Mercadorias","",18.36,0,"CARL ZEISS VISION BRASIL IND. OPTICA LTDA","","optcalia-niteroi"],["d","2026-10",25,"Compras de Mercadorias","",18.36,0,"CARL ZEISS VISION BRASIL IND. OPTICA LTDA","","optcalia-niteroi"],["d","2026-11",24,"Compras de Mercadorias","",18.36,0,"CARL ZEISS VISION BRASIL IND. OPTICA LTDA","","optcalia-niteroi"],["d","2026-12",24,"Compras de Mercadorias","",18.32,0,"CARL ZEISS VISION BRASIL IND. OPTICA LTDA","","optcalia-niteroi"],["d","2027-01",23,"Compras de Mercadorias","",18.36,0,"CARL ZEISS VISION BRASIL IND. OPTICA LTDA","","optcalia-niteroi"],["d","2027-02",22,"Compras de Mercadorias","",18.36,0,"CARL ZEISS VISION BRASIL IND. OPTICA LTDA","","optcalia-niteroi"],["d","2026-06",20,"Compras de Mercadorias","",27.16,0,"MARCHON BRASIL LTDA","","optcalia-niteroi"],["d","2026-07",20,"Compras de Mercadorias","",27.16,0,"MARCHON BRASIL LTDA","","optcalia-niteroi"],["d","2026-08",19,"Compras de Mercadorias","",27.16,0,"MARCHON BRASIL LTDA","","optcalia-niteroi"],["d","2026-09",18,"Compras de Mercadorias","",27.16,0,"MARCHON BRASIL LTDA","","optcalia-niteroi"],["d","2026-10",18,"Compras de Mercadorias","",27.16,0,"MARCHON BRASIL LTDA","","optcalia-niteroi"],["d","2026-11",17,"Compras de Mercadorias","",27.16,0,"MARCHON BRASIL LTDA","","optcalia-niteroi"],["d","2026-12",17,"Compras de Mercadorias","",27.16,0,"MARCHON BRASIL LTDA","","optcalia-niteroi"],["d","2027-01",16,"Compras de Mercadorias","",27.16,0,"MARCHON BRASIL LTDA","","optcalia-niteroi"],["d","2027-02",15,"Compras de Mercadorias","",27.16,0,"MARCHON BRASIL LTDA","","optcalia-niteroi"],["d","2027-03",17,"Compras de Mercadorias","",27.19,0,"MARCHON BRASIL LTDA","","optcalia-niteroi"],["d","2026-06",14,"Compras de Mercadorias","",232.7,0,"MARCHON BRASIL LTDA","","optcalia-niteroi"],["d","2026-07",14,"Compras de Mercadorias","",232.7,0,"MARCHON BRASIL LTDA","","optcalia-niteroi"],["d","2026-08",13,"Compras de Mercadorias","",232.7,0,"MARCHON BRASIL LTDA","","optcalia-niteroi"],["d","2026-09",12,"Compras de Mercadorias","",232.7,0,"MARCHON BRASIL LTDA","","optcalia-niteroi"],["d","2026-10",12,"Compras de Mercadorias","",232.7,0,"MARCHON BRASIL LTDA","","optcalia-niteroi"],["d","2026-11",11,"Compras de Mercadorias","",232.7,0,"MARCHON BRASIL LTDA","","optcalia-niteroi"],["d","2026-12",11,"Compras de Mercadorias","",232.7,0,"MARCHON BRASIL LTDA","","optcalia-niteroi"],["d","2027-01",10,"Compras de Mercadorias","",232.7,0,"MARCHON BRASIL LTDA","","optcalia-niteroi"],["d","2027-02",9,"Compras de Mercadorias","",232.7,0,"MARCHON BRASIL LTDA","","optcalia-niteroi"],["d","2027-03",11,"Compras de Mercadorias","",232.7,0,"MARCHON BRASIL LTDA","","optcalia-niteroi"],["d","2026-05",27,"Compras de Mercadorias","",577.07,0,"JJ BRASIL IND COM PR SAÚDE LT","","optcalia-niteroi"],["d","2026-06",26,"Compras de Mercadorias","",577.07,0,"JJ BRASIL IND COM PR SAÚDE LT","","optcalia-niteroi"],["d","2026-07",26,"Compras de Mercadorias","",577.07,0,"JJ BRASIL IND COM PR SAÚDE LT","","optcalia-niteroi"],["d","2026-08",25,"Compras de Mercadorias","",577.05,0,"JJ BRASIL IND COM PR SAÚDE LT","","optcalia-niteroi"],["d","2026-04",27,"Compras de Mercadorias","",46,0,"JJ BRASIL IND COM PR SAÚDE LT","","optcalia-niteroi"],["d","2026-05",27,"Compras de Mercadorias","",111.35,0,"JJ BRASIL IND COM PR SAÚDE LT","","optcalia-niteroi"],["d","2026-06",26,"Compras de Mercadorias","",111.35,0,"JJ BRASIL IND COM PR SAÚDE LT","","optcalia-niteroi"],["d","2026-07",26,"Compras de Mercadorias","",111.35,0,"JJ BRASIL IND COM PR SAÚDE LT","","optcalia-niteroi"],["d","2026-08",25,"Compras de Mercadorias","",111.36,0,"JJ BRASIL IND COM PR SAÚDE LT","","optcalia-niteroi"],["d","2026-07",24,"Compras de Mercadorias","",83.79,0,"MARCHON BRASIL LTDA","","optcalia-niteroi"],["d","2026-08",23,"Compras de Mercadorias","",83.79,0,"MARCHON BRASIL LTDA","","optcalia-niteroi"],["d","2026-09",22,"Compras de Mercadorias","",83.79,0,"MARCHON BRASIL LTDA","","optcalia-niteroi"],["d","2026-10",22,"Compras de Mercadorias","",83.79,0,"MARCHON BRASIL LTDA","","optcalia-niteroi"],["d","2026-11",21,"Compras de Mercadorias","",83.79,0,"MARCHON BRASIL LTDA","","optcalia-niteroi"],["d","2026-12",21,"Compras de Mercadorias","",83.8,0,"MARCHON BRASIL LTDA","","optcalia-niteroi"],["d","2026-05",10,"Internet/Telefone","",259.9,0,"RL CONNECT","","optcalia-niteroi"],["d","2026-05",20,"Aluguel fixo","",3125.25,0,"CONSORCIO PLAZA NITEROI","","optcalia-niteroi"],["d","2026-05",5,"Aluguel fixo","",17557,0,"CONSORCIO PLAZA NITEROI","","optcalia-niteroi"],["d","2026-05",5,"Condomínio","",7848.75,0,"CONSORCIO PLAZA NITEROI","","optcalia-niteroi"],["d","2026-05",5,"IPTU","",1137.11,0,"CONSORCIO PLAZA NITEROI","","optcalia-niteroi"],["d","2026-05",5,"Fundo de Promoção","",1755.7,0,"CONSORCIO PLAZA NITEROI","","optcalia-niteroi"],["d","2026-05",30,"Compras de Mercadorias","",18.35,0,"CARL ZEISS VISION BRASIL IND. OPTICA LTDA","","optcalia-niteroi"],["d","2026-06",29,"Compras de Mercadorias","",18.35,0,"CARL ZEISS VISION BRASIL IND. OPTICA LTDA","","optcalia-niteroi"],["d","2026-07",29,"Compras de Mercadorias","",18.35,0,"CARL ZEISS VISION BRASIL IND. OPTICA LTDA","","optcalia-niteroi"],["d","2026-08",28,"Compras de Mercadorias","",18.35,0,"CARL ZEISS VISION BRASIL IND. OPTICA LTDA","","optcalia-niteroi"],["d","2026-09",27,"Compras de Mercadorias","",18.35,0,"CARL ZEISS VISION BRASIL IND. OPTICA LTDA","","optcalia-niteroi"],["d","2026-10",27,"Compras de Mercadorias","",18.35,0,"CARL ZEISS VISION BRASIL IND. OPTICA LTDA","","optcalia-niteroi"],["d","2026-11",26,"Compras de Mercadorias","",18.35,0,"CARL ZEISS VISION BRASIL IND. OPTICA LTDA","","optcalia-niteroi"],["d","2026-12",26,"Compras de Mercadorias","",18.33,0,"CARL ZEISS VISION BRASIL IND. OPTICA LTDA","","optcalia-niteroi"],["d","2027-01",25,"Compras de Mercadorias","",18.35,0,"CARL ZEISS VISION BRASIL IND. OPTICA LTDA","","optcalia-niteroi"],["d","2027-02",24,"Compras de Mercadorias","",18.35,0,"CARL ZEISS VISION BRASIL IND. OPTICA LTDA","","optcalia-niteroi"],["d","2026-05",30,"Compras de Mercadorias","",31.08,0,"CARL ZEISS VISION BRASIL IND. OPTICA LTDA","","optcalia-niteroi"],["d","2026-06",29,"Compras de Mercadorias","",31.08,0,"CARL ZEISS VISION BRASIL IND. OPTICA LTDA","","optcalia-niteroi"],["d","2026-07",29,"Compras de Mercadorias","",31.08,0,"CARL ZEISS VISION BRASIL IND. OPTICA LTDA","","optcalia-niteroi"],["d","2026-08",28,"Compras de Mercadorias","",31.08,0,"CARL ZEISS VISION BRASIL IND. OPTICA LTDA","","optcalia-niteroi"],["d","2026-09",27,"Compras de Mercadorias","",31.08,0,"CARL ZEISS VISION BRASIL IND. OPTICA LTDA","","optcalia-niteroi"],["d","2026-10",27,"Compras de Mercadorias","",31.08,0,"CARL ZEISS VISION BRASIL IND. OPTICA LTDA","","optcalia-niteroi"],["d","2026-11",26,"Compras de Mercadorias","",31.08,0,"CARL ZEISS VISION BRASIL IND. OPTICA LTDA","","optcalia-niteroi"],["d","2026-12",26,"Compras de Mercadorias","",31.08,0,"CARL ZEISS VISION BRASIL IND. OPTICA LTDA","","optcalia-niteroi"],["d","2027-01",25,"Compras de Mercadorias","",31.08,0,"CARL ZEISS VISION BRASIL IND. OPTICA LTDA","","optcalia-niteroi"],["d","2027-02",24,"Compras de Mercadorias","",31.08,0,"CARL ZEISS VISION BRASIL IND. OPTICA LTDA","","optcalia-niteroi"],["d","2026-06",27,"Compras de Mercadorias","",419.28,0,"MARCOLIN BRASIL","","optcalia-niteroi"],["d","2026-07",27,"Compras de Mercadorias","",419.28,0,"MARCOLIN BRASIL","","optcalia-niteroi"],["d","2026-08",27,"Compras de Mercadorias","",419.28,0,"MARCOLIN BRASIL","","optcalia-niteroi"],["d","2026-09",27,"Compras de Mercadorias","",419.28,0,"MARCOLIN BRASIL","","optcalia-niteroi"],["d","2026-10",27,"Compras de Mercadorias","",419.28,0,"MARCOLIN BRASIL","","optcalia-niteroi"],["d","2026-11",27,"Compras de Mercadorias","",419.28,0,"MARCOLIN BRASIL","","optcalia-niteroi"],["d","2026-12",27,"Compras de Mercadorias","",420.44,0,"MARCOLIN BRASIL","","optcalia-niteroi"],["d","2026-05",30,"Compras de Mercadorias","",17.38,0,"BRASLAB","","optcalia-niteroi"],["d","2026-06",30,"Compras de Mercadorias","",17.38,0,"BRASLAB","","optcalia-niteroi"],["d","2026-07",30,"Compras de Mercadorias","",17.38,0,"BRASLAB","","optcalia-niteroi"],["d","2026-08",30,"Compras de Mercadorias","",17.38,0,"BRASLAB","","optcalia-niteroi"],["d","2026-09",30,"Compras de Mercadorias","",17.38,0,"BRASLAB","","optcalia-niteroi"],["d","2026-05",27,"Compras de Mercadorias","",18.26,0,"BRASLAB","","optcalia-niteroi"],["d","2026-06",24,"Compras de Mercadorias","",18.25,0,"BRASLAB","","optcalia-niteroi"],["d","2026-07",22,"Compras de Mercadorias","",18.25,0,"BRASLAB","","optcalia-niteroi"],["d","2026-08",19,"Compras de Mercadorias","",18.25,0,"BRASLAB","","optcalia-niteroi"],["d","2026-09",16,"Compras de Mercadorias","",18.25,0,"BRASLAB","","optcalia-niteroi"],["d","2026-05",5,"Compras de Mercadorias","",405.42,0,"CARL ZEISS VISION BRASIL IND. OPTICA LTDA","","optcalia-niteroi"],["d","2026-06",1,"Compras de Mercadorias","",5.38,0,"BRASLAB","","optcalia-niteroi"],["d","2026-06",29,"Compras de Mercadorias","",5.38,0,"BRASLAB","","optcalia-niteroi"],["d","2026-07",27,"Compras de Mercadorias","",5.38,0,"BRASLAB","","optcalia-niteroi"],["d","2026-08",24,"Compras de Mercadorias","",5.38,0,"BRASLAB","","optcalia-niteroi"],["d","2026-09",21,"Compras de Mercadorias","",5.38,0,"BRASLAB","","optcalia-niteroi"],["d","2026-06",1,"Compras de Mercadorias","",44.76,0,"BRASLAB","","optcalia-niteroi"],["d","2026-06",29,"Compras de Mercadorias","",44.76,0,"BRASLAB","","optcalia-niteroi"],["d","2026-07",27,"Compras de Mercadorias","",44.76,0,"BRASLAB","","optcalia-niteroi"],["d","2026-08",24,"Compras de Mercadorias","",44.76,0,"BRASLAB","","optcalia-niteroi"],["d","2026-09",21,"Compras de Mercadorias","",44.76,0,"BRASLAB","","optcalia-niteroi"],["d","2026-05",30,"Compras de Mercadorias","",6.96,0,"BRASLAB","","optcalia-niteroi"],["d","2026-06",27,"Compras de Mercadorias","",6.96,0,"BRASLAB","","optcalia-niteroi"],["d","2026-07",25,"Compras de Mercadorias","",6.96,0,"BRASLAB","","optcalia-niteroi"],["d","2026-08",22,"Compras de Mercadorias","",6.96,0,"BRASLAB","","optcalia-niteroi"],["d","2026-09",19,"Compras de Mercadorias","",6.96,0,"BRASLAB","","optcalia-niteroi"],["d","2026-05",11,"Compras de Mercadorias","",384.6,0,"CooperVision","","optcalia-niteroi"],["d","2026-05",4,"Compras de Mercadorias","",16,0,"CooperVision","","optcalia-niteroi"],["d","2026-05",12,"Energia Elétrica","",891.05,0,"ENEL DISTRIBUICAO SAO PAULO","","optcalia-niteroi"],["d","2026-05",12,"Internet/Telefone","",34.9,0,"CLARO","","optcalia-niteroi"],["d","2026-05",7,"Salários","",2583.8,0,"DENIS DE OLIVEIRA PIERROTI","","optcalia-niteroi"],["d","2026-05",7,"Salários","",4697.76,0,"LUCIANO PACHECO DE CARVALHO","","optcalia-niteroi"],["d","2026-05",7,"Salários","",1571.32,0,"TAMARA ENNES FERREIRA","","optcalia-niteroi"],["d","2026-05",7,"Salários","",2081.72,0,"THAYNA NEIDE MONTEIRO DE CARVALHO","","optcalia-niteroi"],["d","2026-06",29,"Compras de Mercadorias","",391.75,0,"SAFILO DO BRASIL LTDA.","","optcalia-niteroi"],["d","2026-07",29,"Compras de Mercadorias","",391.75,0,"SAFILO DO BRASIL LTDA.","","optcalia-niteroi"],["d","2026-08",28,"Compras de Mercadorias","",391.75,0,"SAFILO DO BRASIL LTDA.","","optcalia-niteroi"],["d","2026-09",25,"Compras de Mercadorias","",391.75,0,"SAFILO DO BRASIL LTDA.","","optcalia-niteroi"],["d","2026-10",27,"Compras de Mercadorias","",391.51,0,"SAFILO DO BRASIL LTDA.","","optcalia-niteroi"],["d","2026-11",26,"Compras de Mercadorias","",391.52,0,"SAFILO DO BRASIL LTDA.","","optcalia-niteroi"],["d","2026-06",29,"Compras de Mercadorias","",242.87,0,"SAFILO DO BRASIL LTDA.","","optcalia-niteroi"],["d","2026-07",29,"Compras de Mercadorias","",242.87,0,"SAFILO DO BRASIL LTDA.","","optcalia-niteroi"],["d","2026-08",28,"Compras de Mercadorias","",242.87,0,"SAFILO DO BRASIL LTDA.","","optcalia-niteroi"],["d","2026-09",25,"Compras de Mercadorias","",242.87,0,"SAFILO DO BRASIL LTDA.","","optcalia-niteroi"],["d","2026-10",27,"Compras de Mercadorias","",242.72,0,"SAFILO DO BRASIL LTDA.","","optcalia-niteroi"],["d","2026-11",26,"Compras de Mercadorias","",242.7,0,"SAFILO DO BRASIL LTDA.","","optcalia-niteroi"],["d","2026-06",24,"Compras de Mercadorias","",22.22,0,"MARCHON BRASIL LTDA","","optcalia-niteroi"],["d","2026-07",24,"Compras de Mercadorias","",22.22,0,"MARCHON BRASIL LTDA","","optcalia-niteroi"],["d","2026-08",23,"Compras de Mercadorias","",22.22,0,"MARCHON BRASIL LTDA","","optcalia-niteroi"],["d","2026-09",22,"Compras de Mercadorias","",22.22,0,"MARCHON BRASIL LTDA","","optcalia-niteroi"],["d","2026-10",22,"Compras de Mercadorias","",22.22,0,"MARCHON BRASIL LTDA","","optcalia-niteroi"],["d","2026-11",21,"Compras de Mercadorias","",22.22,0,"MARCHON BRASIL LTDA","","optcalia-niteroi"],["d","2026-12",21,"Compras de Mercadorias","",22.22,0,"MARCHON BRASIL LTDA","","optcalia-niteroi"],["d","2027-01",20,"Compras de Mercadorias","",22.22,0,"MARCHON BRASIL LTDA","","optcalia-niteroi"],["d","2027-02",19,"Compras de Mercadorias","",22.22,0,"MARCHON BRASIL LTDA","","optcalia-niteroi"],["d","2027-03",21,"Compras de Mercadorias","",22.26,0,"MARCHON BRASIL LTDA","","optcalia-niteroi"],["d","2026-05",10,"Royalties","",1954.19,0,"HOLDING CALI OPTICA LICENCE S.A","","optcalia-niteroi"],["d","2026-06",3,"Compras de Mercadorias","",82.25,0,"CD SUMARE (SP)","","optcalia-niteroi"],["d","2026-07",3,"Compras de Mercadorias","",82.25,0,"CD SUMARE (SP)","","optcalia-niteroi"],["d","2026-08",2,"Compras de Mercadorias","",82.25,0,"CD SUMARE (SP)","","optcalia-niteroi"],["d","2026-09",1,"Compras de Mercadorias","",82.25,0,"CD SUMARE (SP)","","optcalia-niteroi"],["d","2026-10",1,"Compras de Mercadorias","",82.25,0,"CD SUMARE (SP)","","optcalia-niteroi"],["d","2026-10",31,"Compras de Mercadorias","",82.27,0,"CD SUMARE (SP)","","optcalia-niteroi"],["d","2026-04",1,"Máquinas e Equipamentos","",116.84,1,"EVALDO DE ALMEIDA HEIDERICH","","optcalia-niteroi"],["d","2026-04",8,"Salários","",1261.6,1,"MONIQUE DA COSTA MARTINS","","optcalia-niteroi"],["d","2026-04",9,"FGTS","",438.82,1,"DANIEL DOS SANTOS RANGEL","","optcalia-niteroi"],["d","2026-04",9,"Rescisões","",2604.9,1,"DANIEL DOS SANTOS RANGEL","","optcalia-niteroi"],["d","2026-04",10,"Compras de Mercadorias","",412.8,1,"Optotal Hoya Ltda","","optcalia-niteroi"],["d","2026-04",10,"Compras de Mercadorias","",678,1,"Optotal Hoya Ltda","","optcalia-niteroi"],["d","2026-04",13,"Internet/Telefone","",34.9,1,"CLARO","","optcalia-niteroi"],["d","2026-04",14,"Compras de Mercadorias","",256.4,1,"CooperVision","","optcalia-niteroi"],["d","2026-04",15,"Móveis e Utensílios","",2910.8,1,"JOSUE ERYCK PINHEIRO E SILVA","","optcalia-niteroi"],["d","2026-04",15,"Compras de Mercadorias","",250,1,"TERCEIRIZADOS À PAGAR","","optcalia-niteroi"],["d","2026-04",17,"Rescisões","",2630.36,1,"MONIQUE DA COSTA MARTINS","","optcalia-niteroi"],["d","2026-04",17,"FGTS","",169.14,1,"MONIQUE DA COSTA MARTINS","","optcalia-niteroi"],["d","2026-04",20,"Simples Nacional (DAS)","",1489.06,1,"SIMPLES NACIONAL","","optcalia-niteroi"],["d","2026-04",24,"Dividendos","",1800,1,"OPTICAL VIX","","optcalia-niteroi"],["d","2026-04",24,"Dividendos","",2200,1,"OPTICÁLIA PRAIA DA COSTA","","optcalia-niteroi"],["d","2026-04",27,"Custo Locomoção e Hospedagem Sócios em Viagens","",54.63,1,"EVALDO DE ALMEIDA HEIDERICH","","optcalia-niteroi"],["d","2026-04",27,"Custo Consultorias","",315,1,"EVALDO DE ALMEIDA HEIDERICH","","optcalia-niteroi"],["d","2026-04",27,"Máquinas e Equipamentos","",173.01,1,"EVALDO DE ALMEIDA HEIDERICH","","optcalia-niteroi"],["d","2026-04",27,"Máquinas e Equipamentos","",91.89,1,"EVALDO DE ALMEIDA HEIDERICH","","optcalia-niteroi"],["d","2026-04",27,"Máquinas e Equipamentos","",496.5,1,"EVALDO DE ALMEIDA HEIDERICH","","optcalia-niteroi"],["d","2026-04",27,"CDU","",3132.29,1,"CONSORCIO PLAZA NITEROI","","optcalia-niteroi"],["d","2026-04",27,"Custo Serviços Terceirizados","",29,1,"NIT LAB PRODUTOS OPTICOS","","optcalia-niteroi"],["d","2026-04",27,"Máquinas e Equipamentos","",118.68,1,"EVALDO DE ALMEIDA HEIDERICH","","optcalia-niteroi"],["d","2026-04",27,"Máquinas e Equipamentos","",106.66,1,"EVALDO DE ALMEIDA HEIDERICH","","optcalia-niteroi"],["d","2026-04",27,"Compras de Mercadorias","",21.76,1,"CARL ZEISS VISION BRASIL INDUSTRIA OPTICA LTDA","","optcalia-niteroi"],["d","2026-04",27,"Vale Refeição","",421,1,"LUCIANO PACHECO DE CARVALHO","","optcalia-niteroi"],["d","2026-04",27,"Móveis e Utensílios","",2910.9,1,"DANIEL SILVA DE SOUSA","","optcalia-niteroi"],["d","2026-04",30,"Taxas e Licenças","",315,1,"SIND DOS EMPREGADOS NO COMERCIO NO EST DO ESP SANTO","","optcalia-niteroi"],["d","2026-04",30,"Vale Refeição","",3108,1,"CAJU","","optcalia-niteroi"],["d","2026-04",30,"Compras de Mercadorias","",512.8,1,"CooperVision","","optcalia-niteroi"],["d","2026-04",30,"Tarifas Bancárias","",6.82,1,"REDECARD","","optcalia-niteroi"],["d","2026-04",30,"Tarifas Bancárias","",51,1,"REDECARD","","optcalia-niteroi"],["d","2026-05",4,"Custo Serviços Terceirizados","",50,1,"NIT LAB PRODUTOS OPTICOS","","optcalia-niteroi"],["d","2026-05",4,"Contabilidade","",810.5,1,"OFFICE ASSESSORIA CONTABIL LTDA","","optcalia-niteroi"],["d","2026-05",4,"Seguros","",112.12,1,"TOKIO MARINE SEGURADORA S.A.","","optcalia-niteroi"],["d","2026-05",6,"Instalações","",61.6,1,"TERCEIRIZADOS À PAGAR","","optcalia-niteroi"],["d","2026-05",6,"Dividendos","",500,1,"OPTICAL VIX","","optcalia-niteroi"],["d","2026-05",6,"Dividendos","",3500,1,"OPTICAL VIX","","optcalia-niteroi"],["d","2026-05",5,"Tarifas Bancárias","",4.56,1,"REDECARD","","optcalia-niteroi"],["d","2026-05",5,"Tarifas Bancárias","",34.86,1,"REDECARD","","optcalia-niteroi"],["d","2026-05",6,"Compras de Mercadorias","",295.43,1,"CD SUMARE (SP)","","optcalia-niteroi"],["d","2026-04",10,"Custo Serviços Terceirizados","",1000,0,"RUAN TONOLLI GESTAO EMPRESARIAL","","oculum-shopping-vitoria"],["d","2026-05",25,"Serviços Softwares","",639.65,0,"LINX SISTEMAS E CONSULTORIA LTDA","","oculum-shopping-vitoria"],["d","2026-05",20,"Contabilidade","",810.5,0,"OFFICE ASSESSORIA CONTABIL LTDA","","oculum-shopping-vitoria"],["d","2026-04",20,"Simples Nacional (DAS)","",10199.98,0,"SIMPLES NACIONAL","","oculum-shopping-vitoria"],["d","2026-05",13,"Custo Serviços Terceirizados","",500,0,"TERCEIRIZADOS À PAGAR","","oculum-shopping-vitoria"],["d","2026-05",8,"Freelancers","",149.5,0,"SALÁRIOS À PAGAR","","oculum-shopping-vitoria"],["d","2026-05",20,"Adiantamento","",5050,0,"SALÁRIOS À PAGAR","","oculum-shopping-vitoria"],["d","2026-05",20,"INSS","",1300,0,"INSS À PAGAR","","oculum-shopping-vitoria"],["d","2026-05",20,"FGTS","",1280,0,"FGTS À PAGAR","","oculum-shopping-vitoria"],["d","2026-06",1,"Aluguel fixo","",15868.81,0,"NOVA CIDADE SHOPPING CENTERS S/A","","oculum-shopping-vitoria"],["d","2026-10",10,"Condomínio","",9882,0,"NOVA CIDADE SHOPPING CENTERS S/A","","oculum-shopping-vitoria"],["d","2026-05",18,"Fundo de Promoção","",5562.41,0,"ALOSVIT","","oculum-shopping-vitoria"],["d","2026-05",15,"Energia Elétrica","",1700,0,"NOVA CIDADE SHOPPING CENTERS S/A","","oculum-shopping-vitoria"],["d","2026-05",19,"Empréstimos capital de giro","",10562.91,0,"EMPRETIMOS","","oculum-shopping-vitoria"],["d","2026-05",10,"Marketing","",500,0,"INVESTIMENTOS","","oculum-shopping-vitoria"],["d","2026-05",10,"Compras de Mercadorias","",162.24,0,"Optotal Hoya Ltda","","oculum-shopping-vitoria"],["d","2026-06",9,"Compras de Mercadorias","",162.22,0,"Optotal Hoya Ltda","","oculum-shopping-vitoria"],["d","2026-07",9,"Compras de Mercadorias","",162.22,0,"Optotal Hoya Ltda","","oculum-shopping-vitoria"],["d","2026-08",8,"Compras de Mercadorias","",162.22,0,"Optotal Hoya Ltda","","oculum-shopping-vitoria"],["d","2026-09",7,"Compras de Mercadorias","",162.22,0,"Optotal Hoya Ltda","","oculum-shopping-vitoria"],["d","2026-07",8,"Compras de Mercadorias","",304,0,"CARL ZEISS VISION BRASIL IND. OPTICA LTDA","","oculum-shopping-vitoria"],["d","2026-07",9,"Compras de Mercadorias","",581.76,0,"CARL ZEISS VISION BRASIL IND. OPTICA LTDA","","oculum-shopping-vitoria"],["d","2026-07",10,"Compras de Mercadorias","",192.54,0,"CARL ZEISS VISION BRASIL IND. OPTICA LTDA","","oculum-shopping-vitoria"],["d","2026-07",11,"Compras de Mercadorias","",383.46,0,"CARL ZEISS VISION BRASIL IND. OPTICA LTDA","","oculum-shopping-vitoria"],["d","2026-07",13,"Compras de Mercadorias","",199.78,0,"CARL ZEISS VISION BRASIL IND. OPTICA LTDA","","oculum-shopping-vitoria"],["d","2026-07",10,"Royalties","",6568.5,0,"OCLM FRANCHISING LTDA","","oculum-shopping-vitoria"],["d","2026-07",10,"Fundo de Promoção","",2627.4,0,"OCLM FRANCHISING LTDA","","oculum-shopping-vitoria"],["d","2026-04",17,"Marketing","",4400,0,"DESTEMIDA BRANDING E MARKETING","","oculum-shopping-vitoria"],["d","2026-05",10,"Compras de Mercadorias","",1151.88,0,"PRESTIGE EYEWEAR DISTRIBUIDORA DE OPTICOS","","oculum-shopping-vitoria"],["d","2026-06",9,"Compras de Mercadorias","",1151.88,0,"PRESTIGE EYEWEAR DISTRIBUIDORA DE OPTICOS","","oculum-shopping-vitoria"],["d","2026-07",9,"Compras de Mercadorias","",1151.88,0,"PRESTIGE EYEWEAR DISTRIBUIDORA DE OPTICOS","","oculum-shopping-vitoria"],["d","2026-08",8,"Compras de Mercadorias","",1151.88,0,"PRESTIGE EYEWEAR DISTRIBUIDORA DE OPTICOS","","oculum-shopping-vitoria"],["d","2026-09",7,"Compras de Mercadorias","",1151.88,0,"PRESTIGE EYEWEAR DISTRIBUIDORA DE OPTICOS","","oculum-shopping-vitoria"],["d","2026-10",7,"Compras de Mercadorias","",1151.85,0,"PRESTIGE EYEWEAR DISTRIBUIDORA DE OPTICOS","","oculum-shopping-vitoria"],["d","2026-06",8,"Compras de Mercadorias","",367.08,0,"PRESTIGE EYEWEAR DISTRIBUIDORA DE OPTICOS","","oculum-shopping-vitoria"],["d","2026-07",8,"Compras de Mercadorias","",367.08,0,"PRESTIGE EYEWEAR DISTRIBUIDORA DE OPTICOS","","oculum-shopping-vitoria"],["d","2026-08",7,"Compras de Mercadorias","",367.08,0,"PRESTIGE EYEWEAR DISTRIBUIDORA DE OPTICOS","","oculum-shopping-vitoria"],["d","2026-09",6,"Compras de Mercadorias","",367.08,0,"PRESTIGE EYEWEAR DISTRIBUIDORA DE OPTICOS","","oculum-shopping-vitoria"],["d","2026-10",6,"Compras de Mercadorias","",367.06,0,"PRESTIGE EYEWEAR DISTRIBUIDORA DE OPTICOS","","oculum-shopping-vitoria"],["d","2026-05",10,"Compras de Mercadorias","",554.75,0,"PRESTIGE EYEWEAR DISTRIBUIDORA DE OPTICOS","","oculum-shopping-vitoria"],["d","2026-06",9,"Compras de Mercadorias","",554.75,0,"PRESTIGE EYEWEAR DISTRIBUIDORA DE OPTICOS","","oculum-shopping-vitoria"],["d","2026-07",9,"Compras de Mercadorias","",554.75,0,"PRESTIGE EYEWEAR DISTRIBUIDORA DE OPTICOS","","oculum-shopping-vitoria"],["d","2026-08",8,"Compras de Mercadorias","",554.75,0,"PRESTIGE EYEWEAR DISTRIBUIDORA DE OPTICOS","","oculum-shopping-vitoria"],["d","2026-09",7,"Compras de Mercadorias","",554.75,0,"PRESTIGE EYEWEAR DISTRIBUIDORA DE OPTICOS","","oculum-shopping-vitoria"],["d","2026-10",7,"Compras de Mercadorias","",554.74,0,"PRESTIGE EYEWEAR DISTRIBUIDORA DE OPTICOS","","oculum-shopping-vitoria"],["d","2026-05",10,"Compras de Mercadorias","",316.08,0,"PRESTIGE EYEWEAR DISTRIBUIDORA DE OPTICOS","","oculum-shopping-vitoria"],["d","2026-06",9,"Compras de Mercadorias","",316.08,0,"PRESTIGE EYEWEAR DISTRIBUIDORA DE OPTICOS","","oculum-shopping-vitoria"],["d","2026-07",9,"Compras de Mercadorias","",316.08,0,"PRESTIGE EYEWEAR DISTRIBUIDORA DE OPTICOS","","oculum-shopping-vitoria"],["d","2026-08",8,"Compras de Mercadorias","",316.08,0,"PRESTIGE EYEWEAR DISTRIBUIDORA DE OPTICOS","","oculum-shopping-vitoria"],["d","2026-09",7,"Compras de Mercadorias","",316.08,0,"PRESTIGE EYEWEAR DISTRIBUIDORA DE OPTICOS","","oculum-shopping-vitoria"],["d","2026-10",7,"Compras de Mercadorias","",316.1,0,"PRESTIGE EYEWEAR DISTRIBUIDORA DE OPTICOS","","oculum-shopping-vitoria"],["d","2026-06",8,"Compras de Mercadorias","",929.1,0,"PRESTIGE EYEWEAR DISTRIBUIDORA DE OPTICOS","","oculum-shopping-vitoria"],["d","2026-07",8,"Compras de Mercadorias","",929.1,0,"PRESTIGE EYEWEAR DISTRIBUIDORA DE OPTICOS","","oculum-shopping-vitoria"],["d","2026-08",7,"Compras de Mercadorias","",929.1,0,"PRESTIGE EYEWEAR DISTRIBUIDORA DE OPTICOS","","oculum-shopping-vitoria"],["d","2026-09",6,"Compras de Mercadorias","",929.1,0,"PRESTIGE EYEWEAR DISTRIBUIDORA DE OPTICOS","","oculum-shopping-vitoria"],["d","2026-10",6,"Compras de Mercadorias","",929.09,0,"PRESTIGE EYEWEAR DISTRIBUIDORA DE OPTICOS","","oculum-shopping-vitoria"],["d","2026-06",8,"Compras de Mercadorias","",373.74,0,"PRESTIGE EYEWEAR DISTRIBUIDORA DE OPTICOS","","oculum-shopping-vitoria"],["d","2026-07",8,"Compras de Mercadorias","",373.74,0,"PRESTIGE EYEWEAR DISTRIBUIDORA DE OPTICOS","","oculum-shopping-vitoria"],["d","2026-08",7,"Compras de Mercadorias","",373.74,0,"PRESTIGE EYEWEAR DISTRIBUIDORA DE OPTICOS","","oculum-shopping-vitoria"],["d","2026-09",6,"Compras de Mercadorias","",373.74,0,"PRESTIGE EYEWEAR DISTRIBUIDORA DE OPTICOS","","oculum-shopping-vitoria"],["d","2026-10",6,"Compras de Mercadorias","",373.73,0,"PRESTIGE EYEWEAR DISTRIBUIDORA DE OPTICOS","","oculum-shopping-vitoria"],["d","2026-07",19,"Compras de Mercadorias","",545.16,0,"CARL ZEISS VISION BRASIL IND. OPTICA LTDA","","oculum-shopping-vitoria"],["d","2026-04",22,"Compras de Mercadorias","",175.98,0,"VIXLENS LABORATORIO OPTICO","","oculum-shopping-vitoria"],["d","2026-06",16,"Compras de Mercadorias","",386.21,0,"CD SUMARE (SP)","","oculum-shopping-vitoria"],["d","2026-07",16,"Compras de Mercadorias","",386.21,0,"CD SUMARE (SP)","","oculum-shopping-vitoria"],["d","2026-08",15,"Compras de Mercadorias","",386.21,0,"CD SUMARE (SP)","","oculum-shopping-vitoria"],["d","2026-09",14,"Compras de Mercadorias","",386.21,0,"CD SUMARE (SP)","","oculum-shopping-vitoria"],["d","2026-10",14,"Compras de Mercadorias","",386.21,0,"CD SUMARE (SP)","","oculum-shopping-vitoria"],["d","2026-11",13,"Compras de Mercadorias","",386.21,0,"CD SUMARE (SP)","","oculum-shopping-vitoria"],["d","2026-12",13,"Compras de Mercadorias","",386.3,0,"CD SUMARE (SP)","","oculum-shopping-vitoria"],["d","2026-06",20,"Compras de Mercadorias","",716.46,0,"MARCOLIN BRASIL","","oculum-shopping-vitoria"],["d","2026-07",20,"Compras de Mercadorias","",716.46,0,"MARCOLIN BRASIL","","oculum-shopping-vitoria"],["d","2026-08",20,"Compras de Mercadorias","",716.89,0,"MARCOLIN BRASIL","","oculum-shopping-vitoria"],["d","2026-09",20,"Compras de Mercadorias","",716.89,0,"MARCOLIN BRASIL","","oculum-shopping-vitoria"],["d","2026-10",20,"Compras de Mercadorias","",716.89,0,"MARCOLIN BRASIL","","oculum-shopping-vitoria"],["d","2026-11",20,"Compras de Mercadorias","",716.91,0,"MARCOLIN BRASIL","","oculum-shopping-vitoria"],["d","2026-06",16,"Compras de Mercadorias","",727.79,0,"CD SUMARE (SP)","","oculum-shopping-vitoria"],["d","2026-07",16,"Compras de Mercadorias","",727.79,0,"CD SUMARE (SP)","","oculum-shopping-vitoria"],["d","2026-08",15,"Compras de Mercadorias","",727.79,0,"CD SUMARE (SP)","","oculum-shopping-vitoria"],["d","2026-09",14,"Compras de Mercadorias","",727.79,0,"CD SUMARE (SP)","","oculum-shopping-vitoria"],["d","2026-10",14,"Compras de Mercadorias","",727.79,0,"CD SUMARE (SP)","","oculum-shopping-vitoria"],["d","2026-11",13,"Compras de Mercadorias","",727.79,0,"CD SUMARE (SP)","","oculum-shopping-vitoria"],["d","2026-12",13,"Compras de Mercadorias","",728.09,0,"CD SUMARE (SP)","","oculum-shopping-vitoria"],["d","2026-04",29,"Compras de Mercadorias","",214.9,0,"LAB RIO - VILA VELHA","","oculum-shopping-vitoria"],["d","2026-04",29,"Compras de Mercadorias","",38.9,0,"LAB RIO - VILA VELHA","","oculum-shopping-vitoria"],["d","2026-04",29,"Compras de Mercadorias","",390.9,0,"LAB RIO - VILA VELHA","","oculum-shopping-vitoria"],["d","2026-05",31,"Compras de Mercadorias","",82.68,0,"Optotal Hoya Ltda","","oculum-shopping-vitoria"],["d","2026-06",30,"Compras de Mercadorias","",82.65,0,"Optotal Hoya Ltda","","oculum-shopping-vitoria"],["d","2026-07",30,"Compras de Mercadorias","",82.65,0,"Optotal Hoya Ltda","","oculum-shopping-vitoria"],["d","2026-08",29,"Compras de Mercadorias","",82.65,0,"Optotal Hoya Ltda","","oculum-shopping-vitoria"],["d","2026-09",28,"Compras de Mercadorias","",82.65,0,"Optotal Hoya Ltda","","oculum-shopping-vitoria"],["d","2026-06",8,"Compras de Mercadorias","",737.93,0,"CD SUMARE (SP)","","oculum-shopping-vitoria"],["d","2026-07",8,"Compras de Mercadorias","",737.93,0,"CD SUMARE (SP)","","oculum-shopping-vitoria"],["d","2026-08",7,"Compras de Mercadorias","",737.93,0,"CD SUMARE (SP)","","oculum-shopping-vitoria"],["d","2026-09",6,"Compras de Mercadorias","",737.93,0,"CD SUMARE (SP)","","oculum-shopping-vitoria"],["d","2026-10",6,"Compras de Mercadorias","",737.93,0,"CD SUMARE (SP)","","oculum-shopping-vitoria"],["d","2026-11",5,"Compras de Mercadorias","",737.93,0,"CD SUMARE (SP)","","oculum-shopping-vitoria"],["d","2026-12",5,"Compras de Mercadorias","",738.18,0,"CD SUMARE (SP)","","oculum-shopping-vitoria"],["d","2026-04",29,"Compras de Mercadorias","",80.3,0,"LAB RIO - VILA VELHA","","oculum-shopping-vitoria"],["d","2026-06",30,"Compras de Mercadorias","",41.9,0,"HTK LENTES OFTALMICAS S.A.","","oculum-shopping-vitoria"],["d","2026-06",30,"Compras de Mercadorias","",41.9,0,"HTK LENTES OFTALMICAS S.A.","","oculum-shopping-vitoria"],["d","2026-06",21,"Compras de Mercadorias","",323.14,0,"CD SUMARE (SP)","","oculum-shopping-vitoria"],["d","2026-07",21,"Compras de Mercadorias","",323.14,0,"CD SUMARE (SP)","","oculum-shopping-vitoria"],["d","2026-08",20,"Compras de Mercadorias","",323.14,0,"CD SUMARE (SP)","","oculum-shopping-vitoria"],["d","2026-09",19,"Compras de Mercadorias","",323.14,0,"CD SUMARE (SP)","","oculum-shopping-vitoria"],["d","2026-10",19,"Compras de Mercadorias","",323.14,0,"CD SUMARE (SP)","","oculum-shopping-vitoria"],["d","2026-11",18,"Compras de Mercadorias","",323.14,0,"CD SUMARE (SP)","","oculum-shopping-vitoria"],["d","2026-12",18,"Compras de Mercadorias","",323.22,0,"CD SUMARE (SP)","","oculum-shopping-vitoria"],["d","2026-07",27,"Compras de Mercadorias","",127.06,0,"CARL ZEISS VISION BRASIL IND. OPTICA LTDA","","oculum-shopping-vitoria"],["d","2026-05",7,"Salários","",1493.11,0,"ANA JULIA CHAVES BARROS PATEZ","","oculum-shopping-vitoria"],["d","2026-05",7,"Salários","",1759.9,0,"Diego Neri dos Santos","","oculum-shopping-vitoria"],["d","2026-05",7,"Salários","",924.32,0,"Fábio Xavier Vieira","","oculum-shopping-vitoria"],["d","2026-05",7,"Salários","",1497.51,0,"LUDMILA TEIXEIRA BARATA","","oculum-shopping-vitoria"],["d","2026-05",7,"Salários","",1800.98,0,"RAYANE ROCHA DOS SANTOS","","oculum-shopping-vitoria"],["d","2026-05",5,"Compras de Mercadorias","",189.9,0,"LAB RIO - VILA VELHA","","oculum-shopping-vitoria"],["d","2026-05",4,"Compras de Mercadorias","",183.9,0,"LAB RIO - VILA VELHA","","oculum-shopping-vitoria"],["d","2026-08",3,"Compras de Mercadorias","",199.78,0,"CARL ZEISS VISION BRASIL IND. OPTICA LTDA","","oculum-shopping-vitoria"],["d","2026-05",6,"Compras de Mercadorias","",788.1,0,"LAB RIO - VILA VELHA","","oculum-shopping-vitoria"],["d","2026-05",7,"Compras de Mercadorias","",83.8,0,"VIXLENS LABORATORIO OPTICO","","oculum-shopping-vitoria"],["d","2026-04",6,"&lt;Disponível&gt;","",5000,1,"ISABELA DE ALMEIDA HEIDERICH","","oculum-shopping-vitoria"],["d","2026-04",8,"Bonificações","",200,1,"CAJU","","oculum-shopping-vitoria"],["d","2026-04",8,"Bonificações","",909.1,1,"CAJU","","oculum-shopping-vitoria"],["d","2026-04",10,"Freelancers","",205.16,1,"RAYANE ROCHA DOS SANTOS","","oculum-shopping-vitoria"],["d","2026-04",10,"Freelancers","",74.75,1,"LUDMILA TEIXEIRA BARATA","","oculum-shopping-vitoria"],["d","2026-04",10,"Custo com Serviços de Entrega","",125,1,"WAGNER DA SILVA CORREA","","oculum-shopping-vitoria"],["d","2026-04",16,"Taxas e Licenças","",103.7,1,"Secretaria de Estado da Fazenda","","oculum-shopping-vitoria"],["d","2026-04",17,"Outros Custos com Pessoal","",113.99,1,"ANA JULIA CHAVES BARROS PATEZ","","oculum-shopping-vitoria"],["d","2026-04",17,"Freelancers","",74.75,1,"RAYANE ROCHA DOS SANTOS","","oculum-shopping-vitoria"],["d","2026-04",17,"Freelancers","",74.75,1,"ANA JULIA CHAVES BARROS PATEZ","","oculum-shopping-vitoria"],["d","2026-04",20,"Adiantamento","",907.36,1,"Diego Neri dos Santos","","oculum-shopping-vitoria"],["d","2026-04",20,"Adiantamento","",800,1,"Fábio Xavier Vieira","","oculum-shopping-vitoria"],["d","2026-04",20,"Custo com Serviços de Entrega","",100,1,"WAGNER DA SILVA CORREA","","oculum-shopping-vitoria"],["d","2026-04",20,"Custo Serviços Terceirizados","",170.2,1,"TERCEIRIZADOS À PAGAR","","oculum-shopping-vitoria"],["d","2026-04",20,"Adiantamento","",907.36,1,"LUDMILA TEIXEIRA BARATA","","oculum-shopping-vitoria"],["d","2026-04",20,"Freelancers","",205.16,1,"ANA JULIA CHAVES BARROS PATEZ","","oculum-shopping-vitoria"],["d","2026-04",20,"Freelancers","",205.16,1,"LUDMILA TEIXEIRA BARATA","","oculum-shopping-vitoria"],["d","2026-04",20,"Adiantamento","",907.36,1,"RAYANE ROCHA DOS SANTOS","","oculum-shopping-vitoria"],["d","2026-04",20,"Juros","",4160,1,"REDECARD","","oculum-shopping-vitoria"],["d","2026-04",22,"Condomínio","",11242.92,1,"NOVA CIDADE SHOPPING CENTERS S/A","","oculum-shopping-vitoria"],["d","2026-04",22,"Máquinas e Equipamentos","",2249.3,1,"MULTIOPTICA","","oculum-shopping-vitoria"],["d","2026-04",22,"Máquinas e Equipamentos","",249.92,1,"MULTIOPTICA","","oculum-shopping-vitoria"],["d","2026-04",20,"Demais Despesas","",3780.94,1,"REDECARD","","oculum-shopping-vitoria"],["d","2026-04",20,"Demais Despesas","",158.82,1,"REDECARD","","oculum-shopping-vitoria"],["d","2026-04",20,"Demais Despesas","",168.67,1,"REDECARD","","oculum-shopping-vitoria"],["d","2026-04",20,"Demais Despesas","",1462.94,1,"REDECARD","","oculum-shopping-vitoria"],["d","2026-04",20,"Demais Despesas","",3731.93,1,"REDECARD","","oculum-shopping-vitoria"],["d","2026-04",24,"Freelancers","",74.75,1,"Diego Neri dos Santos","","oculum-shopping-vitoria"],["d","2026-04",24,"Freelancers","",74.75,1,"LUDMILA TEIXEIRA BARATA","","oculum-shopping-vitoria"],["d","2026-04",24,"Compras de Mercadorias","",254.9,1,"LAB RIO - VILA VELHA","","oculum-shopping-vitoria"],["d","2026-04",24,"Compras de Mercadorias","",916.16,1,"LAB RIO - VILA VELHA","","oculum-shopping-vitoria"],["d","2026-04",24,"Compras de Mercadorias","",311.8,1,"LAB RIO - VILA VELHA","","oculum-shopping-vitoria"],["d","2026-04",24,"Compras de Mercadorias","",276.9,1,"LAB RIO - VILA VELHA","","oculum-shopping-vitoria"],["d","2026-04",24,"Demais Despesas","",165,1,"REDECARD","","oculum-shopping-vitoria"],["d","2026-04",27,"Dividendos","",2900,1,"OPTICÁLIA PRAIA DA COSTA","","oculum-shopping-vitoria"],["d","2026-04",27,"Dividendos","",6560,1,"OPTICAL NIT","","oculum-shopping-vitoria"],["d","2026-04",27,"Dividendos","",1000,1,"OPTICAL VIX","","oculum-shopping-vitoria"],["d","2026-04",27,"Vale Transporte","",36.25,1,"Diego Neri dos Santos","","oculum-shopping-vitoria"],["d","2026-04",27,"&lt;Disponível&gt;","",217,1,"ISABELA DE ALMEIDA HEIDERICH","","oculum-shopping-vitoria"],["d","2026-04",27,"Custo Locomoção e Hospedagem Sócios em Viagens","",54.63,1,"EVALDO DE ALMEIDA HEIDERICH","","oculum-shopping-vitoria"],["d","2026-04",27,"Custo Consultorias","",315,1,"EVALDO DE ALMEIDA HEIDERICH","","oculum-shopping-vitoria"],["d","2026-04",28,"Frete","",175,1,"MOTOBOYS À PAGAR","","oculum-shopping-vitoria"],["d","2026-04",28,"Dividendos","",500,1,"OPTICAL NIT","","oculum-shopping-vitoria"],["d","2026-04",28,"Dividendos","",1300,1,"OCULUM VILA VELHA","","oculum-shopping-vitoria"],["d","2026-04",28,"Dividendos","",1850,1,"OPTICAL VIX","","oculum-shopping-vitoria"],["d","2026-04",28,"Dividendos","",3090,1,"OPTICAL VIX","","oculum-shopping-vitoria"],["d","2026-04",30,"Material de escritório","",65.6,1,"VANESSA ALVES PONTES MENEGUETTE","","oculum-shopping-vitoria"],["d","2026-04",30,"Freelancers","",74.75,1,"RAYANE ROCHA DOS SANTOS","","oculum-shopping-vitoria"],["d","2026-04",30,"Vale Refeição","",2775,1,"CAJU","","oculum-shopping-vitoria"],["d","2026-04",30,"Internet/Telefone","",99.9,1,"LOGA INTERNET","","oculum-shopping-vitoria"],["d","2026-04",30,"Freelancers","",74.75,1,"ANA JULIA CHAVES BARROS PATEZ","","oculum-shopping-vitoria"],["d","2026-04",30,"Marketing","",3000,1,"INVESTIMENTOS","","oculum-shopping-vitoria"],["d","2026-05",4,"Frete","",17.4,1,"Fábio Xavier Vieira","","oculum-shopping-vitoria"],["d","2026-05",4,"Custo com Serviços de Entrega","",125,1,"WAGNER DA SILVA CORREA","","oculum-shopping-vitoria"],["d","2026-05",4,"Móveis e Utensílios","",27.83,1,"EVALDO DE ALMEIDA HEIDERICH","","oculum-shopping-vitoria"],["d","2026-05",4,"Dividendos","",9500,1,"OPTICÁLIA PRAIA DA COSTA","","oculum-shopping-vitoria"],["d","2026-05",4,"Dividendos","",15500,1,"OPTICAL VIX","","oculum-shopping-vitoria"],["d","2026-05",4,"Demais Despesas","",1153.31,1,"REDECARD","","oculum-shopping-vitoria"],["d","2026-05",4,"Demais Despesas","",38.55,1,"REDECARD","","oculum-shopping-vitoria"],["d","2026-05",4,"Compras de Mercadorias","",305,1,"LAB RIO - VILA VELHA","","oculum-shopping-vitoria"],["d","2026-05",4,"Compras de Mercadorias","",272.9,1,"LAB RIO - VILA VELHA","","oculum-shopping-vitoria"],["d","2026-05",4,"Compras de Mercadorias","",1937.6,1,"LAB RIO - VILA VELHA","","oculum-shopping-vitoria"],["d","2026-05",4,"Máquinas e Equipamentos","",226.66,1,"EVALDO DE ALMEIDA HEIDERICH","","oculum-shopping-vitoria"],["d","2026-05",4,"Máquinas e Equipamentos","",158.25,1,"EVALDO DE ALMEIDA HEIDERICH","","oculum-shopping-vitoria"],["d","2026-05",4,"Móveis e Utensílios","",208.25,1,"EVALDO DE ALMEIDA HEIDERICH","","oculum-shopping-vitoria"],["d","2026-05",5,"Serviços Softwares","",350,1,"WLSINFO","","oculum-shopping-vitoria"],["d","2026-05",5,"Salários","",8500,1,"SALÁRIOS À PAGAR","","oculum-shopping-vitoria"],["d","2026-05",5,"Dividendos","",1000,1,"OPTICAL VIX","","oculum-shopping-vitoria"],["d","2026-05",5,"Dividendos","",1000,1,"OPTICAL VIX","","oculum-shopping-vitoria"],["d","2026-05",5,"Dividendos","",2800,1,"OPTICÁLIA PRAIA DA COSTA","","oculum-shopping-vitoria"],["d","2026-05",5,"Demais Despesas","",246,1,"REDECARD","","oculum-shopping-vitoria"],["d","2026-05",5,"IOF","",126.34,1,"REDECARD","","oculum-shopping-vitoria"],["d","2026-05",5,"Demais Despesas","",4.28,1,"REDECARD","","oculum-shopping-vitoria"],["d","2026-05",5,"Demais Despesas","",49.55,1,"REDECARD","","oculum-shopping-vitoria"],["d","2026-05",5,"Assistência Médica","",649.11,1,"BENEVIX","","oculum-shopping-vitoria"],["d","2026-05",6,"Custo Serviços Terceirizados","",250,1,"TERCEIRIZADOS À PAGAR","","oculum-shopping-vitoria"],["d","2026-05",8,"Compras de Mercadorias","",451.68,0,"PANINI BRASIL LTDA","","nobel-zastras-aeroporto-vix"],["d","2026-06",7,"Compras de Mercadorias","",451.67,0,"PANINI BRASIL LTDA","","nobel-zastras-aeroporto-vix"],["d","2026-04",14,"Compras de Mercadorias","",4496.18,0,"CATAVENTO DISTRIBUIDORA DE LIVROS LTDA.","","nobel-zastras-aeroporto-vix"],["d","2026-05",15,"Compras de Mercadorias","",835.75,0,"CATAVENTO DISTRIBUIDORA DE LIVROS LTDA.","","nobel-zastras-aeroporto-vix"],["d","2026-05",30,"Compras de Mercadorias","",835.75,0,"CATAVENTO DISTRIBUIDORA DE LIVROS LTDA.","","nobel-zastras-aeroporto-vix"],["d","2026-06",14,"Compras de Mercadorias","",835.76,0,"CATAVENTO DISTRIBUIDORA DE LIVROS LTDA.","","nobel-zastras-aeroporto-vix"],["d","2026-05",6,"Compras de Mercadorias","",314.98,0,"EPOCA COMERCIO E DISTRIBUICAO DE PRODUTOS ALIMENTICIOS","","nobel-zastras-aeroporto-vix"],["d","2026-05",13,"Compras de Mercadorias","",314.99,0,"EPOCA COMERCIO E DISTRIBUICAO DE PRODUTOS ALIMENTICIOS","","nobel-zastras-aeroporto-vix"],["d","2026-05",20,"Compras de Mercadorias","",314.99,0,"EPOCA COMERCIO E DISTRIBUICAO DE PRODUTOS ALIMENTICIOS","","nobel-zastras-aeroporto-vix"],["d","2026-04",29,"Compras de Mercadorias","",398.54,0,"PARAISO","","nobel-zastras-aeroporto-vix"],["d","2026-05",15,"Compras de Mercadorias","",566.82,0,"CATAVENTO DISTRIBUIDORA DE LIVROS LTDA.","","nobel-zastras-aeroporto-vix"],["d","2026-05",15,"Compras de Mercadorias","",491.34,0,"CATAVENTO DISTRIBUIDORA DE LIVROS LTDA.","","nobel-zastras-aeroporto-vix"],["d","2026-05",13,"Compras de Mercadorias","",167.7,0,"LIDER REPRESENTACAO E DISTRIBUICAO LTDA","","nobel-zastras-aeroporto-vix"],["d","2026-05",18,"Compras de Mercadorias","",1209.19,0,"MASQUERADE","","nobel-zastras-aeroporto-vix"],["d","2026-06",16,"Compras de Mercadorias","",1209.19,0,"MASQUERADE","","nobel-zastras-aeroporto-vix"],["d","2026-07",16,"Compras de Mercadorias","",1209.56,0,"MASQUERADE","","nobel-zastras-aeroporto-vix"],["d","2026-05",14,"Compras de Mercadorias","",402.88,0,"DISTRIMAX","","nobel-zastras-aeroporto-vix"],["d","2026-05",30,"Compras de Mercadorias","",358.8,0,"CATAVENTO DISTRIBUIDORA DE LIVROS LTDA.","","nobel-zastras-aeroporto-vix"],["d","2026-05",30,"Compras de Mercadorias","",418,0,"CATAVENTO DISTRIBUIDORA DE LIVROS LTDA.","","nobel-zastras-aeroporto-vix"],["d","2026-06",14,"Compras de Mercadorias","",2660.25,0,"CATAVENTO DISTRIBUIDORA DE LIVROS LTDA.","","nobel-zastras-aeroporto-vix"],["d","2026-04",10,"Compras de Mercadorias","",2255.12,1,"CLARISSA LIMA DOS SANTOS","","nobel-zastras-aeroporto-vix"],["d","2026-04",14,"Outros Custos com Pessoal","",50,1,"LIDER MAIS SAUDE","","nobel-zastras-aeroporto-vix"],["d","2026-04",14,"Outros Custos com Pessoal","",66,1,"AEROPORTOS DO SUDESTE DO BRASIL S.A","","nobel-zastras-aeroporto-vix"],["d","2026-04",14,"Aluguel fixo","",9062.12,1,"AEROPORTOS DO SUDESTE DO BRASIL S.A","","nobel-zastras-aeroporto-vix"],["d","2026-04",15,"Adiantamento","",500,1,"EMILY MOREIRA XAVIER PITANGUI","","nobel-zastras-aeroporto-vix"],["d","2026-04",15,"Adiantamento","",500,1,"BRENDA CRISTINA DA SILVA GOMES","","nobel-zastras-aeroporto-vix"],["d","2026-04",15,"Adiantamento","",500,1,"LEVI NASCIMENTO MORAES","","nobel-zastras-aeroporto-vix"],["d","2026-04",20,"Simples Nacional (DAS)","",3097.16,1,"RECEITA FEDERAL","","nobel-zastras-aeroporto-vix"],["d","2026-04",20,"FGTS","",533.6,1,"CEF MATRIZ","","nobel-zastras-aeroporto-vix"],["d","2026-04",20,"INSS","",460.84,1,"RECEITA FEDERAL","","nobel-zastras-aeroporto-vix"],["d","2026-04",20,"ICMS","",124.72,1,"RECEITA FEDERAL","","nobel-zastras-aeroporto-vix"],["d","2026-04",20,"Condomínio","",3017.15,1,"AEROPORTOS DO SUDESTE DO BRASIL S.A","","nobel-zastras-aeroporto-vix"],["d","2026-04",22,"Compras de Mercadorias","",375.87,1,"PDV DISTRIBUIDORA","","nobel-zastras-aeroporto-vix"],["d","2026-04",24,"Compras de Mercadorias","",1433.61,1,"CLARISSA LIMA DOS SANTOS","","nobel-zastras-aeroporto-vix"],["d","2026-05",1,"Empréstimos capital de giro","",12205.63,0,"EMPRÉSTIMO","","bolo-de-rolo-fair-trade-sdu"],["d","2026-06",5,"Salários","",13000,0,"SALÁRIOS À PAGAR","","bolo-de-rolo-fair-trade-sdu"],["d","2026-05",7,"Custo Serviços Terceirizados","",1000,0,"RUAN TONOLLI GESTAO EMPRESARIAL","","bolo-de-rolo-fair-trade-sdu"],["d","2026-05",10,"Aluguel fixo","",24255.28,0,"AEROPORTO SANTOS DUMONT","","bolo-de-rolo-fair-trade-sdu"],["d","2026-05",30,"Custo Serviços Dedetização/coleta lixo/MICROAMB","",374.16,0,"IMUNEPLACE","","bolo-de-rolo-fair-trade-sdu"],["d","2026-04",10,"ICMS","",8607.84,0,"Secretaria de Estado de Fazenda - SEFAZ","","bolo-de-rolo-fair-trade-sdu"],["d","2026-05",11,"ICMS","",7760.9,0,"Secretaria de Estado de Fazenda - SEFAZ","","bolo-de-rolo-fair-trade-sdu"],["d","2026-05",10,"Aluguel variável","",14956.25,0,"AEROPORTOS DO SUDESTE DO BRASIL S.A","","bolo-de-rolo-fair-trade-sdu"],["d","2026-06",10,"Aluguel variável","",18400,0,"AEROPORTOS DO SUDESTE DO BRASIL S.A","","bolo-de-rolo-fair-trade-sdu"],["d","2026-05",7,"Compras de Mercadorias","",154.37,0,"LOPES MACHADO DESCARTAVEIS LTDA","","bolo-de-rolo-fair-trade-sdu"],["d","2026-04",9,"Compras de Mercadorias","",56.6,0,"GP RJ COMERCIO DE DESCARTAVEIS LTDA","","bolo-de-rolo-fair-trade-sdu"],["d","2026-05",7,"Compras de Mercadorias","",71,0,"GP RJ COMERCIO DE DESCARTAVEIS LTDA","","bolo-de-rolo-fair-trade-sdu"],["d","2026-05",14,"Compras de Mercadorias","",1329.52,0,"CDD SAO CRISTOVAO","","bolo-de-rolo-fair-trade-sdu"],["d","2026-05",11,"Compras de Mercadorias","",299.7,0,"GP RJ COMERCIO DE DESCARTAVEIS LTDA","","bolo-de-rolo-fair-trade-sdu"],["d","2026-05",11,"Compras de Mercadorias","",74.06,0,"LOPES MACHADO DESCARTAVEIS LTDA","","bolo-de-rolo-fair-trade-sdu"],["d","2026-04",10,"Custo Locomoção e Hospedagem Sócios em Viagens","",707.01,0,"DANIEL SILVA DE SOUSA","","bolo-de-rolo-fair-trade-sdu"],["d","2026-05",18,"Compras de Mercadorias","",795.54,0,"CDD SAO CRISTOVAO","","bolo-de-rolo-fair-trade-sdu"],["d","2026-05",20,"Compras de Mercadorias","",463.11,0,"CDD SAO CRISTOVAO","","bolo-de-rolo-fair-trade-sdu"],["d","2026-05",11,"Compras de Mercadorias","",3638.75,0,"COMERCIAL CASA DOS FRIOS LTDA","","bolo-de-rolo-fair-trade-sdu"],["d","2026-05",18,"Compras de Mercadorias","",146.04,0,"LOPES MACHADO DESCARTAVEIS LTDA","","bolo-de-rolo-fair-trade-sdu"],["d","2026-05",18,"Compras de Mercadorias","",187.98,0,"GP RJ COMERCIO DE DESCARTAVEIS LTDA","","bolo-de-rolo-fair-trade-sdu"],["d","2026-05",25,"Compras de Mercadorias","",677.99,0,"CDD SAO CRISTOVAO","","bolo-de-rolo-fair-trade-sdu"],["d","2026-05",7,"Compras de Mercadorias","",365.01,0,"NOBREDO ALIMENTOS","","bolo-de-rolo-fair-trade-sdu"],["d","2026-05",21,"Compras de Mercadorias","",183.15,0,"GP RJ COMERCIO DE DESCARTAVEIS LTDA","","bolo-de-rolo-fair-trade-sdu"],["d","2026-05",21,"Compras de Mercadorias","",292.28,0,"LOPES MACHADO DESCARTAVEIS LTDA","","bolo-de-rolo-fair-trade-sdu"],["d","2026-05",8,"Compras de Mercadorias","",964.33,0,"DISTRI RIO COMERCIAL LTDA","","bolo-de-rolo-fair-trade-sdu"],["d","2026-05",7,"Compras de Mercadorias","",663.25,0,"TRADICAO MINEIRA COMERCIAL LTDA","","bolo-de-rolo-fair-trade-sdu"],["d","2026-05",13,"Compras de Mercadorias","",386.05,0,"NOBREDO ALIMENTOS","","bolo-de-rolo-fair-trade-sdu"],["d","2026-05",26,"Compras de Mercadorias","",339.92,0,"GP RJ COMERCIO DE DESCARTAVEIS LTDA","","bolo-de-rolo-fair-trade-sdu"],["d","2026-05",26,"Compras de Mercadorias","",167.09,0,"LOPES MACHADO DESCARTAVEIS LTDA","","bolo-de-rolo-fair-trade-sdu"],["d","2026-05",12,"Compras de Mercadorias","",827.5,0,"JC DISTRIBUIDORA DE BEBIDAS","","bolo-de-rolo-fair-trade-sdu"],["d","2026-05",9,"Compras de Mercadorias","",1624.87,0,"FALEIRO","","bolo-de-rolo-fair-trade-sdu"],["d","2026-05",29,"Compras de Mercadorias","",340.19,0,"PRINCIPADO LOUCAS","","bolo-de-rolo-fair-trade-sdu"],["d","2026-05",7,"Compras de Mercadorias","",517.5,0,"IMPERADOR D PETROPOLIS PRODUTOS ALIMENTICIOS LTDA","","bolo-de-rolo-fair-trade-sdu"],["d","2026-04",30,"Compras de Mercadorias","",885,0,"JC DISTRIBUIDORA DE BEBIDAS","","bolo-de-rolo-fair-trade-sdu"],["d","2026-06",1,"Compras de Mercadorias","",1013.1,0,"CDD SAO CRISTOVAO","","bolo-de-rolo-fair-trade-sdu"],["d","2026-05",20,"Compras de Mercadorias","",304.38,0,"COMERCIAL CASA DOS FRIOS LTDA","","bolo-de-rolo-fair-trade-sdu"],["d","2026-05",20,"Compras de Mercadorias","",2500.68,0,"COMERCIAL CASA DOS FRIOS LTDA","","bolo-de-rolo-fair-trade-sdu"],["d","2026-06",3,"Compras de Mercadorias","",952.61,0,"CDD SAO CRISTOVAO","","bolo-de-rolo-fair-trade-sdu"],["d","2026-05",14,"Compras de Mercadorias","",454.8,0,"TRADICAO MINEIRA COMERCIAL LTDA","","bolo-de-rolo-fair-trade-sdu"],["d","2026-05",20,"Outros Custos com Pessoal","",170,0,"AEROPORTO SANTOS DUMONT","","bolo-de-rolo-fair-trade-sdu"],["d","2026-05",7,"Compras de Mercadorias","",181.45,0,"BISC GLOBO 2","","bolo-de-rolo-fair-trade-sdu"],["d","2026-05",6,"Salários","",2113,0,"ADRIELY NOGUEIRA DE MORAES","","bolo-de-rolo-fair-trade-sdu"],["d","2026-05",6,"Salários","",1966,0,"ELLEN SOUZA MODESTO DA SILVA","","bolo-de-rolo-fair-trade-sdu"],["d","2026-05",6,"Salários","",1972,0,"JAQUELINE SILVA DE MELO","","bolo-de-rolo-fair-trade-sdu"],["d","2026-05",6,"Salários","",1466,0,"LORENA COSTA ALVES","","bolo-de-rolo-fair-trade-sdu"],["d","2026-05",6,"Salários","",1060,0,"MARCIA ALMEIDA BAPTISTA","","bolo-de-rolo-fair-trade-sdu"],["d","2026-05",6,"Salários","",1774,0,"PATRICIA GABRIELLE SOARES DOS SANTOS","","bolo-de-rolo-fair-trade-sdu"],["d","2026-05",6,"Salários","",1298,0,"TATIANE DA SILVA CARVALHO","","bolo-de-rolo-fair-trade-sdu"],["d","2026-05",11,"Compras de Mercadorias","",243,0,"CONFEITARIA BERNARDO RODRIGUES","","bolo-de-rolo-fair-trade-sdu"],["d","2026-05",11,"Compras de Mercadorias","",301,0,"AVELA DOCERIA","","bolo-de-rolo-fair-trade-sdu"],["d","2026-05",12,"Compras de Mercadorias","",459.3,0,"CRESCENTE COMERCIO E GASTRONOMIA LTDA","","bolo-de-rolo-fair-trade-sdu"],["d","2026-05",5,"Compras de Mercadorias","",588.5,0,"PANIFICACAO FLAMENGO","","bolo-de-rolo-fair-trade-sdu"],["d","2026-05",7,"Salários","",1908,0,"MARCIA ALMEIDA BAPTISTA","","bolo-de-rolo-fair-trade-sdu"],["d","2026-05",7,"Compras de Mercadorias","",561.45,0,"BRF S.A.","","bolo-de-rolo-fair-trade-sdu"],["d","2026-06",2,"Compras de Mercadorias","",277.29,0,"GP RJ COMERCIO DE DESCARTAVEIS LTDA","","bolo-de-rolo-fair-trade-sdu"],["d","2026-06",2,"Compras de Mercadorias","",113.93,0,"LOPES MACHADO DESCARTAVEIS LTDA","","bolo-de-rolo-fair-trade-sdu"],["d","2026-05",20,"Compras de Mercadorias","",479.76,0,"NOBREDO ALIMENTOS","","bolo-de-rolo-fair-trade-sdu"],["d","2026-04",9,"Comissões","",635.66,1,"ANA CLAUDIA","","bolo-de-rolo-fair-trade-sdu"],["d","2026-04",10,"Compras de Mercadorias","",3600,1,"JUAN DAVID COLLAZOS VARGAS","","bolo-de-rolo-fair-trade-sdu"],["d","2026-04",10,"Serviços Softwares","",406,1,"New Choice Sistemas","","bolo-de-rolo-fair-trade-sdu"],["d","2026-04",10,"Dividendos","",707.01,1,"DANIEL SILVA DE SOUSA","","bolo-de-rolo-fair-trade-sdu"],["d","2026-04",15,"Frete","",2140.29,1,"TERCEIRIZADOS À PAGAR","","bolo-de-rolo-fair-trade-sdu"],["d","2026-04",15,"Frete","",1757.2,1,"TERCEIRIZADOS À PAGAR","","bolo-de-rolo-fair-trade-sdu"],["d","2026-04",15,"Compras de Mercadorias","",819.4,1,"RIO DE JANEIRO REFRESCOS LTDA","","bolo-de-rolo-fair-trade-sdu"],["d","2026-04",16,"Compras de Mercadorias","",324,1,"CRESCENTE COMERCIO E GASTRONOMIA LTDA","","bolo-de-rolo-fair-trade-sdu"],["d","2026-04",16,"Compras de Mercadorias","",360,1,"IMPERADOR D PETROPOLIS PRODUTOS ALIMENTICIOS LTDA","","bolo-de-rolo-fair-trade-sdu"],["d","2026-04",16,"&lt;Disponível&gt;","",11483.07,1,"FAIR TRADE COFFEE BRASIL","","bolo-de-rolo-fair-trade-sdu"],["d","2026-04",20,"Bonificações","",4600,1,"CAJU","","bolo-de-rolo-fair-trade-sdu"],["d","2026-04",20,"Compras de Mercadorias","",876.63,1,"FALEIRO","","bolo-de-rolo-fair-trade-sdu"],["d","2026-04",20,"Compras de Mercadorias","",243,1,"CONFEITARIA BERNARDO RODRIGUES","","bolo-de-rolo-fair-trade-sdu"],["d","2026-04",20,"INSS","",4727.52,1,"RECEITA FEDERAL","","bolo-de-rolo-fair-trade-sdu"],["d","2026-04",20,"Compras de Mercadorias","",280.72,1,"BRF S.A.","","bolo-de-rolo-fair-trade-sdu"],["d","2026-04",20,"Compras de Mercadorias","",126.72,1,"NESTLE BRASIL LTDA.","","bolo-de-rolo-fair-trade-sdu"],["d","2026-04",20,"FGTS","",2201.55,1,"FGTS À PAGAR","","bolo-de-rolo-fair-trade-sdu"],["d","2026-04",20,"Compras de Mercadorias","",509.78,1,"FALEIRO","","bolo-de-rolo-fair-trade-sdu"],["d","2026-04",22,"Compras de Mercadorias","",726.77,1,"RIO DE JANEIRO REFRESCOS LTDA","","bolo-de-rolo-fair-trade-sdu"],["d","2026-04",22,"Compras de Mercadorias","",421.55,1,"CRESCENTE COMERCIO E GASTRONOMIA LTDA","","bolo-de-rolo-fair-trade-sdu"],["d","2026-04",23,"Compras de Mercadorias","",405,1,"IMPERADOR D PETROPOLIS PRODUTOS ALIMENTICIOS LTDA","","bolo-de-rolo-fair-trade-sdu"],["d","2026-04",23,"Compras de Mercadorias","",362.91,1,"BISC GLOBO 2","","bolo-de-rolo-fair-trade-sdu"],["d","2026-04",23,"Compras de Mercadorias","",421.67,1,"NOBREDO ALIMENTOS","","bolo-de-rolo-fair-trade-sdu"],["d","2026-04",23,"Compras de Mercadorias","",653.65,1,"DISTRI RIO COMERCIAL LTDA","","bolo-de-rolo-fair-trade-sdu"],["d","2026-04",23,"Compras de Mercadorias","",322.15,1,"TRADICAO MINEIRA COMERCIAL LTDA","","bolo-de-rolo-fair-trade-sdu"],["d","2026-04",24,"PIS","",7914.85,1,"RECEITA FEDERAL","","bolo-de-rolo-fair-trade-sdu"],["d","2026-04",24,"Compras de Mercadorias","",671,1,"JC DISTRIBUIDORA DE BEBIDAS","","bolo-de-rolo-fair-trade-sdu"],["d","2026-04",24,"&lt;Disponível&gt;","",5000,1,"DANIEL SILVA DE SOUSA","","bolo-de-rolo-fair-trade-sdu"],["d","2026-04",27,"Compras de Mercadorias","",363,1,"CONFEITARIA BERNARDO RODRIGUES","","bolo-de-rolo-fair-trade-sdu"],["d","2026-04",27,"Compras de Mercadorias","",1457.32,1,"FALEIRO","","bolo-de-rolo-fair-trade-sdu"],["d","2026-04",27,"Compras de Mercadorias","",438.66,1,"AURORA COOP","","bolo-de-rolo-fair-trade-sdu"],["d","2026-04",27,"Compras de Mercadorias","",301,1,"AVELA DOCERIA","","bolo-de-rolo-fair-trade-sdu"],["d","2026-04",27,"Compras de Mercadorias","",418.08,1,"CONGELADOS DELICIA","","bolo-de-rolo-fair-trade-sdu"],["d","2026-04",27,"Custo Locomoção e Hospedagem Sócios em Viagens","",591.23,1,"DANIEL SILVA DE SOUSA","","bolo-de-rolo-fair-trade-sdu"],["d","2026-04",28,"Vale Refeição","",5781,1,"CAJU","","bolo-de-rolo-fair-trade-sdu"],["d","2026-04",28,"Custo Consultorias","",5000,1,"CONSULTORIA","","bolo-de-rolo-fair-trade-sdu"],["d","2026-04",29,"&lt;Disponível&gt;","",11500,1,"FAIR TRADE COFFEE BRASIL","","bolo-de-rolo-fair-trade-sdu"],["d","2026-04",29,"Compras de Mercadorias","",7038.7,1,"COMERCIAL CASA DOS FRIOS LTDA","","bolo-de-rolo-fair-trade-sdu"],["d","2026-04",29,"Compras de Mercadorias","",352.62,1,"NOBREDO ALIMENTOS","","bolo-de-rolo-fair-trade-sdu"],["d","2026-04",30,"Compras de Mercadorias","",405,1,"IMPERADOR D PETROPOLIS PRODUTOS ALIMENTICIOS LTDA","","bolo-de-rolo-fair-trade-sdu"],["d","2026-04",30,"Compras de Mercadorias","",302.42,1,"BISC GLOBO 2","","bolo-de-rolo-fair-trade-sdu"],["d","2026-04",30,"Compras de Mercadorias","",473.75,1,"TRADICAO MINEIRA COMERCIAL LTDA","","bolo-de-rolo-fair-trade-sdu"],["d","2026-04",30,"Compras de Mercadorias","",421.55,1,"CRESCENTE COMERCIO E GASTRONOMIA LTDA","","bolo-de-rolo-fair-trade-sdu"],["d","2026-04",30,"Empréstimos capital de giro","",38,1,"EMPRÉSTIMO","","bolo-de-rolo-fair-trade-sdu"],["d","2026-04",30,"Empréstimos capital de giro","",32,1,"EMPRÉSTIMO","","bolo-de-rolo-fair-trade-sdu"],["d","2026-04",30,"Empréstimos capital de giro","",285.33,1,"EMPRÉSTIMO","","bolo-de-rolo-fair-trade-sdu"],["d","2026-04",30,"Empréstimos capital de giro","",3787.95,1,"EMPRÉSTIMO","","bolo-de-rolo-fair-trade-sdu"],["d","2026-04",30,"Empréstimos capital de giro","",50,1,"EMPRÉSTIMO","","bolo-de-rolo-fair-trade-sdu"],["d","2026-04",30,"Empréstimos capital de giro","",2403.44,1,"EMPRÉSTIMO","","bolo-de-rolo-fair-trade-sdu"],["d","2026-04",30,"Empréstimos capital de giro","",26,1,"EMPRÉSTIMO","","bolo-de-rolo-fair-trade-sdu"],["d","2026-04",30,"Empréstimos capital de giro","",32,1,"EMPRÉSTIMO","","bolo-de-rolo-fair-trade-sdu"],["d","2026-04",30,"Empréstimos capital de giro","",12,1,"EMPRÉSTIMO","","bolo-de-rolo-fair-trade-sdu"],["d","2026-04",30,"Empréstimos capital de giro","",18,1,"EMPRÉSTIMO","","bolo-de-rolo-fair-trade-sdu"],["d","2026-04",30,"Empréstimos capital de giro","",38,1,"EMPRÉSTIMO","","bolo-de-rolo-fair-trade-sdu"],["d","2026-04",30,"Empréstimos capital de giro","",3061.03,1,"EMPRÉSTIMO","","bolo-de-rolo-fair-trade-sdu"],["d","2026-04",30,"Empréstimos capital de giro","",61.25,1,"EMPRÉSTIMO","","bolo-de-rolo-fair-trade-sdu"],["d","2026-04",30,"Empréstimos capital de giro","",482.15,1,"EMPRÉSTIMO","","bolo-de-rolo-fair-trade-sdu"],["d","2026-04",30,"Empréstimos capital de giro","",896.76,1,"EMPRÉSTIMO","","bolo-de-rolo-fair-trade-sdu"],["d","2026-04",30,"Empréstimos capital de giro","",75.2,1,"EMPRÉSTIMO","","bolo-de-rolo-fair-trade-sdu"],["d","2026-04",30,"Empréstimos capital de giro","",32,1,"EMPRÉSTIMO","","bolo-de-rolo-fair-trade-sdu"],["d","2026-04",30,"Empréstimos capital de giro","",53.9,1,"EMPRÉSTIMO","","bolo-de-rolo-fair-trade-sdu"],["d","2026-04",30,"Empréstimos capital de giro","",173.96,1,"EMPRÉSTIMO","","bolo-de-rolo-fair-trade-sdu"],["d","2026-04",30,"Empréstimos capital de giro","",20,1,"EMPRÉSTIMO","","bolo-de-rolo-fair-trade-sdu"],["d","2026-04",30,"Empréstimos capital de giro","",626.66,1,"EMPRÉSTIMO","","bolo-de-rolo-fair-trade-sdu"],["d","2026-05",4,"Compras de Mercadorias","",280.72,1,"BRF S.A.","","bolo-de-rolo-fair-trade-sdu"],["d","2026-05",4,"Compras de Mercadorias","",225,1,"AVELA DOCERIA","","bolo-de-rolo-fair-trade-sdu"],["d","2026-05",4,"Compras de Mercadorias","",541.13,1,"RIO QUALITY COMERCIO DE ALIMENTOS S/A.","","bolo-de-rolo-fair-trade-sdu"],["d","2026-05",4,"Compras de Mercadorias","",428.76,1,"CONGELADOS DELICIA","","bolo-de-rolo-fair-trade-sdu"],["d","2026-05",4,"Compras de Mercadorias","",948,1,"JC DISTRIBUIDORA DE BEBIDAS","","bolo-de-rolo-fair-trade-sdu"],["d","2026-05",4,"Compras de Mercadorias","",183,1,"CONFEITARIA BERNARDO RODRIGUES","","bolo-de-rolo-fair-trade-sdu"],["d","2026-05",4,"Compras de Mercadorias","",645.12,1,"RIO DE JANEIRO REFRESCOS LTDA","","bolo-de-rolo-fair-trade-sdu"],["d","2026-05",4,"Compras de Mercadorias","",644.18,1,"NESTLE BRASIL LTDA.","","bolo-de-rolo-fair-trade-sdu"],["d","2026-05",4,"Compras de Mercadorias","",823.73,1,"FALEIRO","","bolo-de-rolo-fair-trade-sdu"],["d","2026-05",4,"Compras de Mercadorias","",340.78,1,"DU RIO DISTRIBUIDORA DE VARIEDADES LTDA","","bolo-de-rolo-fair-trade-sdu"],["d","2026-05",4,"Contabilidade","",1067.9,1,"OFFICE ASSESSORIA CONTABIL LTDA","","bolo-de-rolo-fair-trade-sdu"],["d","2026-05",4,"&lt;Disponível&gt;","",10179.74,1,"FAIR TRADE COFFEE BRASIL","","bolo-de-rolo-fair-trade-sdu"],["d","2026-05",4,"Dividendos","",10200,1,"DANIEL SILVA DE SOUSA","","bolo-de-rolo-fair-trade-sdu"],["d","2026-05",4,"Dividendos","",40000,1,"DOMINOS PRAIA DO CANTO","","bolo-de-rolo-fair-trade-sdu"],["d","2026-05",4,"Empréstimos capital de giro","",140294.54,1,"REDECARD","","bolo-de-rolo-fair-trade-sdu"],["d","2026-05",5,"Custo Consultorias","",550,1,"B.C.C QUALIDADE DE VIDA","","bolo-de-rolo-fair-trade-sdu"],["d","2026-05",5,"Assistência Médica","",1329.99,1,"ASSIM SAUDE","","bolo-de-rolo-fair-trade-sdu"],["d","2026-05",5,"Internet/Telefone","",416.78,1,"SITE TELECOM SERVICOS DE INFORMATICA LTDA","","bolo-de-rolo-fair-trade-sdu"],["d","2026-05",5,"Serviços Softwares","",190,1,"NEW CHOICE - LOCACAO E REPAROS LTDA","","bolo-de-rolo-fair-trade-sdu"],["d","2026-05",5,"Custo Serviços Terceirizados","",150,1,"TERCEIRIZADOS À PAGAR","","bolo-de-rolo-fair-trade-sdu"],["d","2026-05",5,"Custo Serviços Terceirizados","",300,1,"TERCEIRIZADOS À PAGAR","","bolo-de-rolo-fair-trade-sdu"],["d","2026-05",5,"IOF","",102.52,1,"REDECARD","","bolo-de-rolo-fair-trade-sdu"],["d","2026-05",6,"Compras de Mercadorias","",583.44,1,"CONGELADOS DELICIA","","bolo-de-rolo-fair-trade-sdu"],["d","2026-05",6,"Compras de Mercadorias","",2095.73,1,"COMERCIAL CASA DOS FRIOS LTDA","","bolo-de-rolo-fair-trade-sdu"],["d","2026-05",6,"Compras de Mercadorias","",656.35,1,"RIO DE JANEIRO REFRESCOS LTDA","","bolo-de-rolo-fair-trade-sdu"],["d","2026-05",6,"Compras de Mercadorias","",421.55,1,"CRESCENTE COMERCIO E GASTRONOMIA LTDA","","bolo-de-rolo-fair-trade-sdu"],["d","2026-05",6,"Juros","",200.88,1,"REDECARD","","bolo-de-rolo-fair-trade-sdu"],["d","2026-05",5,"Tarifas Bancárias","",20,1,"REDECARD","","bolo-de-rolo-fair-trade-sdu"],["d","2026-05",5,"Tarifas Bancárias","",98.11,1,"REDECARD","","bolo-de-rolo-fair-trade-sdu"],["d","2026-04",10,"Custo Serviços Terceirizados","",1000,0,"RUAN TONOLLI GESTAO EMPRESARIAL","","oculum-shopping-vila-velha"],["d","2026-05",5,"Salários","",12050,0,"SALÁRIOS À PAGAR","","oculum-shopping-vila-velha"],["d","2026-05",8,"Freelancers","",74.75,0,"MARCIA CRISTINA DE JESUS","","oculum-shopping-vila-velha"],["d","2026-05",20,"Adiantamento","",5500,0,"SALÁRIOS À PAGAR","","oculum-shopping-vila-velha"],["d","2026-05",20,"INSS","",2200,0,"INSS À PAGAR","","oculum-shopping-vila-velha"],["d","2026-05",20,"FGTS","",2300,0,"FGTS À PAGAR","","oculum-shopping-vila-velha"],["d","2026-05",25,"Aluguel fixo","",37502,0,"ESPIRITO SANTO MALL S.A.","","oculum-shopping-vila-velha"],["d","2026-05",13,"Seguros","",96.3,0,"TOKIO MARINE SEGURADORA S.A.","","oculum-shopping-vila-velha"],["d","2026-05",20,"Simples Nacional (DAS)","",28000,0,"SIMPLES NACIONAL","","oculum-shopping-vila-velha"],["d","2026-09",30,"Repasses","",48336.73,0,"OCLM FRANCHISING LTDA","","oculum-shopping-vila-velha"],["d","2026-05",16,"Internet/Telefone","",108.22,0,"EXO","","oculum-shopping-vila-velha"],["d","2026-05",10,"Internet/Telefone","",70,0,"TELEFONICA BRASIL S.A.","","oculum-shopping-vila-velha"],["d","2026-05",25,"Serviços Softwares","",743.46,0,"LINX SISTEMAS E CONSULTORIA LTDA","","oculum-shopping-vila-velha"],["d","2026-05",25,"Serviços Softwares","",194.29,0,"E-CLIK","","oculum-shopping-vila-velha"],["d","2026-05",13,"Custo Serviços Terceirizados","",500,0,"TERCEIRIZADOS À PAGAR","","oculum-shopping-vila-velha"],["d","2026-05",2,"Empréstimos capital de giro","",5293.48,0,"EMPRÉSTIMO","","oculum-shopping-vila-velha"],["d","2026-05",5,"Empréstimos capital de giro","",4233.8,0,"EMPRÉSTIMO","","oculum-shopping-vila-velha"],["d","2026-05",20,"Repasses","",42258.06,0,"OCLM FRANCHISING LTDA","","oculum-shopping-vila-velha"],["d","2026-05",10,"Marketing","",500,0,"INVESTIMENTOS À PAGAR","","oculum-shopping-vila-velha"],["d","2026-04",10,"&lt;Disponível&gt;","",1000,0,"DANIEL SILVA DE SOUSA","","oculum-shopping-vila-velha"],["d","2026-07",7,"Compras de Mercadorias","",489.8,0,"CARL ZEISS VISION BRASIL IND. OPTICA LTDA","","oculum-shopping-vila-velha"],["d","2026-05",30,"Compras de Mercadorias","",112.2,0,"Optotal Hoya Ltda","","oculum-shopping-vila-velha"],["d","2026-06",29,"Compras de Mercadorias","",112.2,0,"Optotal Hoya Ltda","","oculum-shopping-vila-velha"],["d","2026-07",29,"Compras de Mercadorias","",112.2,0,"Optotal Hoya Ltda","","oculum-shopping-vila-velha"],["d","2026-08",28,"Compras de Mercadorias","",112.2,0,"Optotal Hoya Ltda","","oculum-shopping-vila-velha"],["d","2026-09",27,"Compras de Mercadorias","",112.2,0,"Optotal Hoya Ltda","","oculum-shopping-vila-velha"],["d","2026-07",13,"Compras de Mercadorias","",580.69,0,"CARL ZEISS VISION BRASIL IND. OPTICA LTDA","","oculum-shopping-vila-velha"],["d","2026-07",9,"Compras de Mercadorias","",821.39,0,"CARL ZEISS VISION BRASIL IND. OPTICA LTDA","","oculum-shopping-vila-velha"],["d","2026-05",30,"Compras de Mercadorias","",42.4,0,"HOYA LENS BRAZIL","","oculum-shopping-vila-velha"],["d","2026-06",29,"Compras de Mercadorias","",42.4,0,"HOYA LENS BRAZIL","","oculum-shopping-vila-velha"],["d","2026-07",29,"Compras de Mercadorias","",42.4,0,"HOYA LENS BRAZIL","","oculum-shopping-vila-velha"],["d","2026-08",28,"Compras de Mercadorias","",42.4,0,"HOYA LENS BRAZIL","","oculum-shopping-vila-velha"],["d","2026-09",27,"Compras de Mercadorias","",42.4,0,"HOYA LENS BRAZIL","","oculum-shopping-vila-velha"],["d","2026-05",30,"Compras de Mercadorias","",124.9,0,"Optotal Hoya Ltda","","oculum-shopping-vila-velha"],["d","2026-06",29,"Compras de Mercadorias","",124.89,0,"Optotal Hoya Ltda","","oculum-shopping-vila-velha"],["d","2026-07",29,"Compras de Mercadorias","",124.89,0,"Optotal Hoya Ltda","","oculum-shopping-vila-velha"],["d","2026-08",28,"Compras de Mercadorias","",124.89,0,"Optotal Hoya Ltda","","oculum-shopping-vila-velha"],["d","2026-09",27,"Compras de Mercadorias","",124.89,0,"Optotal Hoya Ltda","","oculum-shopping-vila-velha"],["d","2026-07",10,"Royalties","",11193.48,0,"OCLM FRANCHISING LTDA","","oculum-shopping-vila-velha"],["d","2026-07",10,"Fundo de Promoção","",4477.39,0,"OCLM FRANCHISING LTDA","","oculum-shopping-vila-velha"],["d","2026-07",13,"Compras de Mercadorias","",139.8,0,"CARL ZEISS VISION BRASIL IND. OPTICA LTDA","","oculum-shopping-vila-velha"],["d","2026-06",9,"Compras de Mercadorias","",123.39,0,"CD SUMARE (SP)","","oculum-shopping-vila-velha"],["d","2026-07",9,"Compras de Mercadorias","",123.39,0,"CD SUMARE (SP)","","oculum-shopping-vila-velha"],["d","2026-08",8,"Compras de Mercadorias","",123.39,0,"CD SUMARE (SP)","","oculum-shopping-vila-velha"],["d","2026-09",7,"Compras de Mercadorias","",123.39,0,"CD SUMARE (SP)","","oculum-shopping-vila-velha"],["d","2026-10",7,"Compras de Mercadorias","",123.39,0,"CD SUMARE (SP)","","oculum-shopping-vila-velha"],["d","2026-11",6,"Compras de Mercadorias","",123.39,0,"CD SUMARE (SP)","","oculum-shopping-vila-velha"],["d","2026-12",6,"Compras de Mercadorias","",123.42,0,"CD SUMARE (SP)","","oculum-shopping-vila-velha"],["d","2026-06",9,"Compras de Mercadorias","",542.55,0,"CD SUMARE (SP)","","oculum-shopping-vila-velha"],["d","2026-07",9,"Compras de Mercadorias","",542.55,0,"CD SUMARE (SP)","","oculum-shopping-vila-velha"],["d","2026-08",8,"Compras de Mercadorias","",542.55,0,"CD SUMARE (SP)","","oculum-shopping-vila-velha"],["d","2026-09",7,"Compras de Mercadorias","",542.55,0,"CD SUMARE (SP)","","oculum-shopping-vila-velha"],["d","2026-10",7,"Compras de Mercadorias","",542.55,0,"CD SUMARE (SP)","","oculum-shopping-vila-velha"],["d","2026-11",6,"Compras de Mercadorias","",542.55,0,"CD SUMARE (SP)","","oculum-shopping-vila-velha"],["d","2026-12",6,"Compras de Mercadorias","",542.72,0,"CD SUMARE (SP)","","oculum-shopping-vila-velha"],["d","2026-05",30,"Compras de Mercadorias","",82.8,0,"Optotal Hoya Ltda","","oculum-shopping-vila-velha"],["d","2026-06",29,"Compras de Mercadorias","",82.8,0,"Optotal Hoya Ltda","","oculum-shopping-vila-velha"],["d","2026-07",29,"Compras de Mercadorias","",82.8,0,"Optotal Hoya Ltda","","oculum-shopping-vila-velha"],["d","2026-08",28,"Compras de Mercadorias","",82.8,0,"Optotal Hoya Ltda","","oculum-shopping-vila-velha"],["d","2026-09",27,"Compras de Mercadorias","",82.8,0,"Optotal Hoya Ltda","","oculum-shopping-vila-velha"],["d","2026-05",30,"Compras de Mercadorias","",42.4,0,"HOYA LENS BRAZIL","","oculum-shopping-vila-velha"],["d","2026-06",29,"Compras de Mercadorias","",42.4,0,"HOYA LENS BRAZIL","","oculum-shopping-vila-velha"],["d","2026-07",29,"Compras de Mercadorias","",42.4,0,"HOYA LENS BRAZIL","","oculum-shopping-vila-velha"],["d","2026-08",28,"Compras de Mercadorias","",42.4,0,"HOYA LENS BRAZIL","","oculum-shopping-vila-velha"],["d","2026-09",27,"Compras de Mercadorias","",42.4,0,"HOYA LENS BRAZIL","","oculum-shopping-vila-velha"],["d","2026-07",15,"Compras de Mercadorias","",971.62,0,"CARL ZEISS VISION BRASIL IND. OPTICA LTDA","","oculum-shopping-vila-velha"],["d","2026-05",30,"Compras de Mercadorias","",195.9,0,"HOYA LENS BRAZIL","","oculum-shopping-vila-velha"],["d","2026-06",29,"Compras de Mercadorias","",195.9,0,"HOYA LENS BRAZIL","","oculum-shopping-vila-velha"],["d","2026-07",29,"Compras de Mercadorias","",195.9,0,"HOYA LENS BRAZIL","","oculum-shopping-vila-velha"],["d","2026-08",28,"Compras de Mercadorias","",195.9,0,"HOYA LENS BRAZIL","","oculum-shopping-vila-velha"],["d","2026-09",27,"Compras de Mercadorias","",195.9,0,"HOYA LENS BRAZIL","","oculum-shopping-vila-velha"],["d","2026-06",8,"Compras de Mercadorias","",388.53,0,"MARCOLIN BRASIL","","oculum-shopping-vila-velha"],["d","2026-07",8,"Compras de Mercadorias","",388.53,0,"MARCOLIN BRASIL","","oculum-shopping-vila-velha"],["d","2026-08",8,"Compras de Mercadorias","",388.76,0,"MARCOLIN BRASIL","","oculum-shopping-vila-velha"],["d","2026-09",8,"Compras de Mercadorias","",388.76,0,"MARCOLIN BRASIL","","oculum-shopping-vila-velha"],["d","2026-10",8,"Compras de Mercadorias","",388.76,0,"MARCOLIN BRASIL","","oculum-shopping-vila-velha"],["d","2026-11",8,"Compras de Mercadorias","",388.78,0,"MARCOLIN BRASIL","","oculum-shopping-vila-velha"],["d","2026-06",15,"Compras de Mercadorias","",582.88,0,"MARCOLIN BRASIL","","oculum-shopping-vila-velha"],["d","2026-07",15,"Compras de Mercadorias","",582.88,0,"MARCOLIN BRASIL","","oculum-shopping-vila-velha"],["d","2026-08",15,"Compras de Mercadorias","",583.23,0,"MARCOLIN BRASIL","","oculum-shopping-vila-velha"],["d","2026-09",15,"Compras de Mercadorias","",583.23,0,"MARCOLIN BRASIL","","oculum-shopping-vila-velha"],["d","2026-10",15,"Compras de Mercadorias","",583.23,0,"MARCOLIN BRASIL","","oculum-shopping-vila-velha"],["d","2026-11",15,"Compras de Mercadorias","",583.24,0,"MARCOLIN BRASIL","","oculum-shopping-vila-velha"],["d","2026-05",13,"Compras de Mercadorias","",677.48,0,"Mello Optical - SCS II","","oculum-shopping-vila-velha"],["d","2026-06",10,"Compras de Mercadorias","",624,0,"Mello Optical - SCS II","","oculum-shopping-vila-velha"],["d","2026-07",19,"Compras de Mercadorias","",1185.64,0,"CARL ZEISS VISION BRASIL IND. OPTICA LTDA","","oculum-shopping-vila-velha"],["d","2026-06",30,"Compras de Mercadorias","",53.21,0,"HTK LENTES OFTALMICAS S.A.","","oculum-shopping-vila-velha"],["d","2026-06",30,"Compras de Mercadorias","",83.11,0,"HTK LENTES OFTALMICAS S.A.","","oculum-shopping-vila-velha"],["d","2026-05",8,"Compras de Mercadorias","",663.31,0,"OCULUM","","oculum-shopping-vila-velha"],["d","2026-06",16,"Compras de Mercadorias","",123.39,0,"CD SUMARE (SP)","","oculum-shopping-vila-velha"],["d","2026-07",16,"Compras de Mercadorias","",123.39,0,"CD SUMARE (SP)","","oculum-shopping-vila-velha"],["d","2026-08",15,"Compras de Mercadorias","",123.39,0,"CD SUMARE (SP)","","oculum-shopping-vila-velha"],["d","2026-09",14,"Compras de Mercadorias","",123.39,0,"CD SUMARE (SP)","","oculum-shopping-vila-velha"],["d","2026-10",14,"Compras de Mercadorias","",123.39,0,"CD SUMARE (SP)","","oculum-shopping-vila-velha"],["d","2026-11",13,"Compras de Mercadorias","",123.39,0,"CD SUMARE (SP)","","oculum-shopping-vila-velha"],["d","2026-12",13,"Compras de Mercadorias","",123.42,0,"CD SUMARE (SP)","","oculum-shopping-vila-velha"],["d","2026-05",23,"Compras de Mercadorias","",396,0,"PRESTIGE EYEWEAR DISTRIBUIDORA DE OPTICOS","","oculum-shopping-vila-velha"],["d","2026-06",22,"Compras de Mercadorias","",396,0,"PRESTIGE EYEWEAR DISTRIBUIDORA DE OPTICOS","","oculum-shopping-vila-velha"],["d","2026-07",22,"Compras de Mercadorias","",396,0,"PRESTIGE EYEWEAR DISTRIBUIDORA DE OPTICOS","","oculum-shopping-vila-velha"],["d","2026-08",21,"Compras de Mercadorias","",396,0,"PRESTIGE EYEWEAR DISTRIBUIDORA DE OPTICOS","","oculum-shopping-vila-velha"],["d","2026-09",20,"Compras de Mercadorias","",396,0,"PRESTIGE EYEWEAR DISTRIBUIDORA DE OPTICOS","","oculum-shopping-vila-velha"],["d","2026-10",20,"Compras de Mercadorias","",395.98,0,"PRESTIGE EYEWEAR DISTRIBUIDORA DE OPTICOS","","oculum-shopping-vila-velha"],["d","2026-06",17,"Compras de Mercadorias","",985.87,0,"CD SUMARE (SP)","","oculum-shopping-vila-velha"],["d","2026-07",17,"Compras de Mercadorias","",985.87,0,"CD SUMARE (SP)","","oculum-shopping-vila-velha"],["d","2026-08",16,"Compras de Mercadorias","",985.87,0,"CD SUMARE (SP)","","oculum-shopping-vila-velha"],["d","2026-09",15,"Compras de Mercadorias","",985.87,0,"CD SUMARE (SP)","","oculum-shopping-vila-velha"],["d","2026-10",15,"Compras de Mercadorias","",985.87,0,"CD SUMARE (SP)","","oculum-shopping-vila-velha"],["d","2026-11",14,"Compras de Mercadorias","",985.87,0,"CD SUMARE (SP)","","oculum-shopping-vila-velha"],["d","2026-12",14,"Compras de Mercadorias","",986.22,0,"CD SUMARE (SP)","","oculum-shopping-vila-velha"],["d","2026-05",30,"Compras de Mercadorias","",90,0,"Optotal Hoya Ltda","","oculum-shopping-vila-velha"],["d","2026-06",29,"Compras de Mercadorias","",90,0,"Optotal Hoya Ltda","","oculum-shopping-vila-velha"],["d","2026-07",29,"Compras de Mercadorias","",90,0,"Optotal Hoya Ltda","","oculum-shopping-vila-velha"],["d","2026-08",28,"Compras de Mercadorias","",90,0,"Optotal Hoya Ltda","","oculum-shopping-vila-velha"],["d","2026-09",27,"Compras de Mercadorias","",90,0,"Optotal Hoya Ltda","","oculum-shopping-vila-velha"],["d","2026-06",17,"Compras de Mercadorias","",277.78,0,"CD SUMARE (SP)","","oculum-shopping-vila-velha"],["d","2026-07",17,"Compras de Mercadorias","",277.78,0,"CD SUMARE (SP)","","oculum-shopping-vila-velha"],["d","2026-08",16,"Compras de Mercadorias","",277.78,0,"CD SUMARE (SP)","","oculum-shopping-vila-velha"],["d","2026-09",15,"Compras de Mercadorias","",277.78,0,"CD SUMARE (SP)","","oculum-shopping-vila-velha"],["d","2026-10",15,"Compras de Mercadorias","",277.78,0,"CD SUMARE (SP)","","oculum-shopping-vila-velha"],["d","2026-11",14,"Compras de Mercadorias","",277.78,0,"CD SUMARE (SP)","","oculum-shopping-vila-velha"],["d","2026-12",14,"Compras de Mercadorias","",277.92,0,"CD SUMARE (SP)","","oculum-shopping-vila-velha"],["d","2026-07",23,"Compras de Mercadorias","",1185.64,0,"CARL ZEISS VISION BRASIL IND. OPTICA LTDA","","oculum-shopping-vila-velha"],["d","2026-06",30,"Compras de Mercadorias","",53.21,0,"HTK LENTES OFTALMICAS S.A.","","oculum-shopping-vila-velha"],["d","2026-05",30,"Compras de Mercadorias","",56.4,0,"HOYA LENS BRAZIL","","oculum-shopping-vila-velha"],["d","2026-06",29,"Compras de Mercadorias","",56.4,0,"HOYA LENS BRAZIL","","oculum-shopping-vila-velha"],["d","2026-07",29,"Compras de Mercadorias","",56.4,0,"HOYA LENS BRAZIL","","oculum-shopping-vila-velha"],["d","2026-08",28,"Compras de Mercadorias","",56.4,0,"HOYA LENS BRAZIL","","oculum-shopping-vila-velha"],["d","2026-09",27,"Compras de Mercadorias","",56.4,0,"HOYA LENS BRAZIL","","oculum-shopping-vila-velha"],["d","2026-05",10,"Compras de Mercadorias","",119.5,0,"VIXLENS LABORATORIO OPTICO","","oculum-shopping-vila-velha"],["d","2026-07",19,"Compras de Mercadorias","",545.16,0,"CARL ZEISS VISION BRASIL IND. OPTICA LTDA","","oculum-shopping-vila-velha"],["d","2026-06",21,"Compras de Mercadorias","",311.99,0,"CD SUMARE (SP)","","oculum-shopping-vila-velha"],["d","2026-07",21,"Compras de Mercadorias","",311.99,0,"CD SUMARE (SP)","","oculum-shopping-vila-velha"],["d","2026-08",20,"Compras de Mercadorias","",311.99,0,"CD SUMARE (SP)","","oculum-shopping-vila-velha"],["d","2026-09",19,"Compras de Mercadorias","",311.99,0,"CD SUMARE (SP)","","oculum-shopping-vila-velha"],["d","2026-10",19,"Compras de Mercadorias","",311.99,0,"CD SUMARE (SP)","","oculum-shopping-vila-velha"],["d","2026-11",18,"Compras de Mercadorias","",311.99,0,"CD SUMARE (SP)","","oculum-shopping-vila-velha"],["d","2026-12",18,"Compras de Mercadorias","",312.04,0,"CD SUMARE (SP)","","oculum-shopping-vila-velha"],["d","2026-06",24,"Compras de Mercadorias","",217.89,0,"CD SUMARE (SP)","","oculum-shopping-vila-velha"],["d","2026-07",24,"Compras de Mercadorias","",217.89,0,"CD SUMARE (SP)","","oculum-shopping-vila-velha"],["d","2026-08",23,"Compras de Mercadorias","",217.89,0,"CD SUMARE (SP)","","oculum-shopping-vila-velha"],["d","2026-09",22,"Compras de Mercadorias","",217.89,0,"CD SUMARE (SP)","","oculum-shopping-vila-velha"],["d","2026-10",22,"Compras de Mercadorias","",217.89,0,"CD SUMARE (SP)","","oculum-shopping-vila-velha"],["d","2026-11",21,"Compras de Mercadorias","",217.89,0,"CD SUMARE (SP)","","oculum-shopping-vila-velha"],["d","2026-12",21,"Compras de Mercadorias","",217.91,0,"CD SUMARE (SP)","","oculum-shopping-vila-velha"],["d","2026-04",30,"Informática","",208.83,0,"NEXGEN SOLUCOES DE INFORMATICA LTDA","","oculum-shopping-vila-velha"],["d","2026-04",30,"Informática","",27.05,0,"NEXGEN SOLUCOES DE INFORMATICA LTDA","","oculum-shopping-vila-velha"],["d","2026-06",20,"Compras de Mercadorias","",363.78,0,"MARCOLIN BRASIL","","oculum-shopping-vila-velha"],["d","2026-07",20,"Compras de Mercadorias","",363.78,0,"MARCOLIN BRASIL","","oculum-shopping-vila-velha"],["d","2026-08",20,"Compras de Mercadorias","",364,0,"MARCOLIN BRASIL","","oculum-shopping-vila-velha"],["d","2026-09",20,"Compras de Mercadorias","",364,0,"MARCOLIN BRASIL","","oculum-shopping-vila-velha"],["d","2026-10",20,"Compras de Mercadorias","",364,0,"MARCOLIN BRASIL","","oculum-shopping-vila-velha"],["d","2026-11",20,"Compras de Mercadorias","",363.98,0,"MARCOLIN BRASIL","","oculum-shopping-vila-velha"],["d","2026-05",10,"Compras de Mercadorias","",217.24,0,"VIXLENS LABORATORIO OPTICO","","oculum-shopping-vila-velha"],["d","2026-05",30,"Compras de Mercadorias","",76.4,0,"Optotal Hoya Ltda","","oculum-shopping-vila-velha"],["d","2026-06",29,"Compras de Mercadorias","",76.4,0,"Optotal Hoya Ltda","","oculum-shopping-vila-velha"],["d","2026-07",29,"Compras de Mercadorias","",76.4,0,"Optotal Hoya Ltda","","oculum-shopping-vila-velha"],["d","2026-08",28,"Compras de Mercadorias","",76.4,0,"Optotal Hoya Ltda","","oculum-shopping-vila-velha"],["d","2026-09",27,"Compras de Mercadorias","",76.4,0,"Optotal Hoya Ltda","","oculum-shopping-vila-velha"],["d","2026-05",30,"Compras de Mercadorias","",158.2,0,"HOYA LENS BRAZIL","","oculum-shopping-vila-velha"],["d","2026-06",29,"Compras de Mercadorias","",158.2,0,"HOYA LENS BRAZIL","","oculum-shopping-vila-velha"],["d","2026-07",29,"Compras de Mercadorias","",158.2,0,"HOYA LENS BRAZIL","","oculum-shopping-vila-velha"],["d","2026-08",28,"Compras de Mercadorias","",158.2,0,"HOYA LENS BRAZIL","","oculum-shopping-vila-velha"],["d","2026-09",27,"Compras de Mercadorias","",158.2,0,"HOYA LENS BRAZIL","","oculum-shopping-vila-velha"],["d","2026-06",30,"Compras de Mercadorias","",59.8,0,"HTK LENTES OFTALMICAS S.A.","","oculum-shopping-vila-velha"],["d","2026-06",30,"Compras de Mercadorias","",53.21,0,"HTK LENTES OFTALMICAS S.A.","","oculum-shopping-vila-velha"],["d","2026-06",30,"Compras de Mercadorias","",20.9,0,"HTK LENTES OFTALMICAS S.A.","","oculum-shopping-vila-velha"],["d","2026-06",30,"Compras de Mercadorias","",59.2,0,"HTK LENTES OFTALMICAS S.A.","","oculum-shopping-vila-velha"],["d","2026-05",7,"Salários","",2168.9,0,"BEATRIZ ARAUJO DA SILVA","","oculum-shopping-vila-velha"],["d","2026-05",7,"Salários","",1996.21,0,"LETICIA SILVA E SILVA","","oculum-shopping-vila-velha"],["d","2026-05",7,"Salários","",3705.6,0,"MARCIA CRISTINA DE JESUS","","oculum-shopping-vila-velha"],["d","2026-05",7,"Salários","",2959.23,0,"VANESSA ALVES PONTES","","oculum-shopping-vila-velha"],["d","2026-05",7,"Salários","",841.91,0,"VANTUIL TEIXEIRA DO ROSARIO","","oculum-shopping-vila-velha"],["d","2026-05",7,"Compras de Mercadorias","",439.8,0,"LAB RIO - VILA VELHA","","oculum-shopping-vila-velha"],["d","2026-05",7,"Compras de Mercadorias","",474.7,0,"LAB RIO - VILA VELHA","","oculum-shopping-vila-velha"],["d","2026-05",7,"Compras de Mercadorias","",272.9,0,"LAB RIO - VILA VELHA","","oculum-shopping-vila-velha"],["d","2026-05",7,"Compras de Mercadorias","",441.8,0,"LAB RIO - VILA VELHA","","oculum-shopping-vila-velha"],["d","2026-05",7,"Vale Refeição","",574.8,0,"VA E VT À PAGAR","","oculum-shopping-vila-velha"],["d","2026-07",26,"Compras de Mercadorias","",654.69,0,"CARL ZEISS VISION BRASIL IND. OPTICA LTDA","","oculum-shopping-vila-velha"],["d","2026-07",25,"Compras de Mercadorias","",654.69,0,"CARL ZEISS VISION BRASIL IND. OPTICA LTDA","","oculum-shopping-vila-velha"],["d","2026-05",30,"Compras de Mercadorias","",37.6,0,"HOYA LENS BRAZIL","","oculum-shopping-vila-velha"],["d","2026-06",29,"Compras de Mercadorias","",37.6,0,"HOYA LENS BRAZIL","","oculum-shopping-vila-velha"],["d","2026-07",29,"Compras de Mercadorias","",37.6,0,"HOYA LENS BRAZIL","","oculum-shopping-vila-velha"],["d","2026-08",28,"Compras de Mercadorias","",37.6,0,"HOYA LENS BRAZIL","","oculum-shopping-vila-velha"],["d","2026-09",27,"Compras de Mercadorias","",37.6,0,"HOYA LENS BRAZIL","","oculum-shopping-vila-velha"],["d","2026-05",30,"Compras de Mercadorias","",43.6,0,"Optotal Hoya Ltda","","oculum-shopping-vila-velha"],["d","2026-06",29,"Compras de Mercadorias","",43.6,0,"Optotal Hoya Ltda","","oculum-shopping-vila-velha"],["d","2026-07",29,"Compras de Mercadorias","",43.6,0,"Optotal Hoya Ltda","","oculum-shopping-vila-velha"],["d","2026-08",28,"Compras de Mercadorias","",43.6,0,"Optotal Hoya Ltda","","oculum-shopping-vila-velha"],["d","2026-09",27,"Compras de Mercadorias","",43.6,0,"Optotal Hoya Ltda","","oculum-shopping-vila-velha"],["d","2026-05",30,"Compras de Mercadorias","",182.8,0,"Optotal Hoya Ltda","","oculum-shopping-vila-velha"],["d","2026-06",29,"Compras de Mercadorias","",182.8,0,"Optotal Hoya Ltda","","oculum-shopping-vila-velha"],["d","2026-07",29,"Compras de Mercadorias","",182.8,0,"Optotal Hoya Ltda","","oculum-shopping-vila-velha"],["d","2026-08",28,"Compras de Mercadorias","",182.8,0,"Optotal Hoya Ltda","","oculum-shopping-vila-velha"],["d","2026-09",27,"Compras de Mercadorias","",182.8,0,"Optotal Hoya Ltda","","oculum-shopping-vila-velha"],["d","2026-06",30,"Compras de Mercadorias","",53.4,0,"Optotal Hoya Ltda","","oculum-shopping-vila-velha"],["d","2026-07",30,"Compras de Mercadorias","",53.4,0,"Optotal Hoya Ltda","","oculum-shopping-vila-velha"],["d","2026-08",29,"Compras de Mercadorias","",53.4,0,"Optotal Hoya Ltda","","oculum-shopping-vila-velha"],["d","2026-09",28,"Compras de Mercadorias","",53.4,0,"Optotal Hoya Ltda","","oculum-shopping-vila-velha"],["d","2026-10",28,"Compras de Mercadorias","",53.4,0,"Optotal Hoya Ltda","","oculum-shopping-vila-velha"],["d","2026-06",30,"Compras de Mercadorias","",85.2,0,"Optotal Hoya Ltda","","oculum-shopping-vila-velha"],["d","2026-07",30,"Compras de Mercadorias","",85.2,0,"Optotal Hoya Ltda","","oculum-shopping-vila-velha"],["d","2026-08",29,"Compras de Mercadorias","",85.2,0,"Optotal Hoya Ltda","","oculum-shopping-vila-velha"],["d","2026-09",28,"Compras de Mercadorias","",85.2,0,"Optotal Hoya Ltda","","oculum-shopping-vila-velha"],["d","2026-10",28,"Compras de Mercadorias","",85.2,0,"Optotal Hoya Ltda","","oculum-shopping-vila-velha"],["d","2026-06",30,"Compras de Mercadorias","",185.9,0,"Optotal Hoya Ltda","","oculum-shopping-vila-velha"],["d","2026-07",30,"Compras de Mercadorias","",185.9,0,"Optotal Hoya Ltda","","oculum-shopping-vila-velha"],["d","2026-08",29,"Compras de Mercadorias","",185.9,0,"Optotal Hoya Ltda","","oculum-shopping-vila-velha"],["d","2026-09",28,"Compras de Mercadorias","",185.9,0,"Optotal Hoya Ltda","","oculum-shopping-vila-velha"],["d","2026-10",28,"Compras de Mercadorias","",185.9,0,"Optotal Hoya Ltda","","oculum-shopping-vila-velha"],["d","2026-07",15,"Compras de Mercadorias","",92,0,"HTK LENTES OFTALMICAS S.A.","","oculum-shopping-vila-velha"],["d","2026-07",15,"Compras de Mercadorias","",53.21,0,"HTK LENTES OFTALMICAS S.A.","","oculum-shopping-vila-velha"],["d","2026-05",10,"Compras de Mercadorias","",149,0,"VIXLENS LABORATORIO OPTICO","","oculum-shopping-vila-velha"],["d","2026-05",10,"Compras de Mercadorias","",45,0,"VIXLENS LABORATORIO OPTICO","","oculum-shopping-vila-velha"],["d","2026-05",25,"Compras de Mercadorias","",74.5,0,"VIXLENS LABORATORIO OPTICO","","oculum-shopping-vila-velha"],["d","2026-05",25,"Compras de Mercadorias","",15,0,"VIXLENS LABORATORIO OPTICO","","oculum-shopping-vila-velha"],["d","2026-06",28,"Compras de Mercadorias","",393.31,0,"MARCOLIN BRASIL","","oculum-shopping-vila-velha"],["d","2026-07",28,"Compras de Mercadorias","",393.31,0,"MARCOLIN BRASIL","","oculum-shopping-vila-velha"],["d","2026-08",28,"Compras de Mercadorias","",393.55,0,"MARCOLIN BRASIL","","oculum-shopping-vila-velha"],["d","2026-09",28,"Compras de Mercadorias","",393.55,0,"MARCOLIN BRASIL","","oculum-shopping-vila-velha"],["d","2026-10",28,"Compras de Mercadorias","",393.55,0,"MARCOLIN BRASIL","","oculum-shopping-vila-velha"],["d","2026-11",28,"Compras de Mercadorias","",393.56,0,"MARCOLIN BRASIL","","oculum-shopping-vila-velha"],["d","2026-05",8,"Freelancers","",74.75,0,"BEATRIZ ARAUJO DA SILVA","","oculum-shopping-vila-velha"],["d","2026-04",1,"Móveis e Utensílios","",27.83,1,"EVALDO DE ALMEIDA HEIDERICH","","oculum-shopping-vila-velha"],["d","2026-04",8,"Dividendos","",6500,1,"DEX LUMEN VIX LTDA","","oculum-shopping-vila-velha"],["d","2026-04",8,"Bonificações","",300,1,"CAJU","","oculum-shopping-vila-velha"],["d","2026-04",8,"Bonificações","",244.83,1,"CAJU","","oculum-shopping-vila-velha"],["d","2026-04",8,"Dividendos","",150,1,"DEX LUMEN VIX LTDA","","oculum-shopping-vila-velha"],["d","2026-04",9,"Dividendos","",3200,1,"OPTICAL NIT","","oculum-shopping-vila-velha"],["d","2026-04",10,"Freelancers","",74.75,1,"LETICIA SILVA E SILVA","","oculum-shopping-vila-velha"],["d","2026-04",10,"Freelancers","",205.16,1,"MARCIA CRISTINA DE JESUS","","oculum-shopping-vila-velha"],["d","2026-04",10,"Custo Serviços Terceirizados","",200,1,"TERCEIRIZADOS À PAGAR","","oculum-shopping-vila-velha"],["d","2026-04",10,"Dividendos","",3160,1,"OPTICAL NIT","","oculum-shopping-vila-velha"],["d","2026-04",10,"Dividendos","",21500,1,"OPTICÁLIA PRAIA DA COSTA","","oculum-shopping-vila-velha"],["d","2026-04",10,"Tarifas Bancárias","",350,1,"REDECARD","","oculum-shopping-vila-velha"],["d","2026-04",10,"Compras de Mercadorias","",171,1,"VIXLENS LABORATORIO OPTICO","","oculum-shopping-vila-velha"],["d","2026-04",14,"Dividendos","",1900,1,"OPTICAL NIT","","oculum-shopping-vila-velha"],["d","2026-04",14,"Dividendos","",1230,1,"OPTICÁLIA PRAIA DA COSTA","","oculum-shopping-vila-velha"],["d","2026-04",14,"Dividendos","",660,1,"OPTICAL VIX","","oculum-shopping-vila-velha"],["d","2026-04",14,"Dividendos","",20,1,"OPTICÁLIA PRAIA DA COSTA","","oculum-shopping-vila-velha"],["d","2026-04",14,"Dividendos","",50,1,"OPTICAL VIX","","oculum-shopping-vila-velha"],["d","2026-04",14,"Dividendos","",1000,1,"OPTICAL VIX","","oculum-shopping-vila-velha"],["d","2026-04",15,"Outros Custos com Pessoal","",180,1,"VANESSA ALVES PONTES","","oculum-shopping-vila-velha"],["d","2026-04",15,"Dividendos","",7500,1,"OPTICAL NIT","","oculum-shopping-vila-velha"],["d","2026-04",15,"Dividendos","",3500,1,"OPTICAL VIX","","oculum-shopping-vila-velha"],["d","2026-04",16,"Compras de Mercadorias","",59,1,"ART-LENTES","","oculum-shopping-vila-velha"],["d","2026-04",16,"Dividendos","",5000,1,"DEX LUMEN VIX LTDA","","oculum-shopping-vila-velha"],["d","2026-04",16,"Dividendos","",2800,1,"OPTICAL VIX","","oculum-shopping-vila-velha"],["d","2026-04",17,"Freelancers","",74.75,1,"BEATRIZ ARAUJO DA SILVA","","oculum-shopping-vila-velha"],["d","2026-04",17,"Freelancers","",74.75,1,"MARCIA CRISTINA DE JESUS","","oculum-shopping-vila-velha"],["d","2026-04",17,"Compras de Mercadorias","",37.9,1,"LAB RIO - VILA VELHA","","oculum-shopping-vila-velha"],["d","2026-04",20,"Adiantamento","",907.36,1,"BEATRIZ ARAUJO DA SILVA","","oculum-shopping-vila-velha"],["d","2026-04",20,"Dividendos","",15000,1,"DEX LUMEN VIX LTDA","","oculum-shopping-vila-velha"],["d","2026-04",20,"Adiantamento","",1528.57,1,"VANESSA ALVES PONTES","","oculum-shopping-vila-velha"],["d","2026-04",20,"Adiantamento","",907.36,1,"LETICIA SILVA E SILVA","","oculum-shopping-vila-velha"],["d","2026-04",20,"Adiantamento","",800,1,"VANTUIL TEIXEIRA DO ROSARIO","","oculum-shopping-vila-velha"],["d","2026-04",20,"Adiantamento","",907.36,1,"MARCIA CRISTINA DE JESUS","","oculum-shopping-vila-velha"],["d","2026-04",20,"Freelancers","",205.16,1,"MARCIA CRISTINA DE JESUS","","oculum-shopping-vila-velha"],["d","2026-04",20,"Freelancers","",205.16,1,"LETICIA SILVA E SILVA","","oculum-shopping-vila-velha"],["d","2026-04",20,"Dividendos","",5000,1,"OPTICÁLIA PRAIA DA COSTA","","oculum-shopping-vila-velha"],["d","2026-04",20,"Dividendos","",300,1,"OPTICAL NIT","","oculum-shopping-vila-velha"],["d","2026-04",22,"Dividendos","",4000,1,"OPTICÁLIA PRAIA DA COSTA","","oculum-shopping-vila-velha"],["d","2026-04",22,"Custo Serviços Terceirizados","",2211,1,"HEBER DA CONCEICAO VIANNA","","oculum-shopping-vila-velha"],["d","2026-04",23,"Dividendos","",1080,1,"OPTICAL NIT","","oculum-shopping-vila-velha"],["d","2026-04",24,"Freelancers","",74.75,1,"LETICIA SILVA E SILVA","","oculum-shopping-vila-velha"],["d","2026-04",24,"Compras de Mercadorias","",509.8,1,"LAB RIO - VILA VELHA","","oculum-shopping-vila-velha"],["d","2026-04",24,"Freelancers","",74.75,1,"BEATRIZ ARAUJO DA SILVA","","oculum-shopping-vila-velha"],["d","2026-04",24,"Dividendos","",6170,1,"DEX LUMEN VIX LTDA","","oculum-shopping-vila-velha"],["d","2026-04",24,"Dividendos","",160,1,"DEX LUMEN VIX LTDA","","oculum-shopping-vila-velha"],["d","2026-04",27,"Dividendos","",2330,1,"OPTICAL VIX","","oculum-shopping-vila-velha"],["d","2026-04",27,"Empréstimos capital de giro","",4200.95,1,"EMPRÉSTIMO","","oculum-shopping-vila-velha"],["d","2026-04",27,"Custo Locomoção e Hospedagem Sócios em Viagens","",54.63,1,"EVALDO DE ALMEIDA HEIDERICH","","oculum-shopping-vila-velha"],["d","2026-04",27,"Custo Consultorias","",315,1,"EVALDO DE ALMEIDA HEIDERICH","","oculum-shopping-vila-velha"],["d","2026-04",27,"Compras de Mercadorias","",128,1,"VIXLENS LABORATORIO OPTICO","","oculum-shopping-vila-velha"],["d","2026-04",27,"Compras de Mercadorias","",30,1,"VIXLENS LABORATORIO OPTICO","","oculum-shopping-vila-velha"],["d","2026-04",28,"Custo Serviços Terceirizados","",160,1,"TERCEIRIZADOS À PAGAR","","oculum-shopping-vila-velha"],["d","2026-04",9,"Dividendos","",1000,1,"OPTICAL VIX","","oculum-shopping-vila-velha"],["d","2026-04",22,"Tarifas Bancárias","",3307.5,1,"REDECARD","","oculum-shopping-vila-velha"],["d","2026-04",30,"Freelancers","",74.75,1,"LETICIA SILVA E SILVA","","oculum-shopping-vila-velha"],["d","2026-04",30,"Freelancers","",74.75,1,"MARCIA CRISTINA DE JESUS","","oculum-shopping-vila-velha"],["d","2026-04",30,"Repasses","",17642.08,1,"HENRIQUE DE ALMEIDA BAPTISTA FERREIRA PEREIRA","","oculum-shopping-vila-velha"],["d","2026-04",30,"Repasses","",17642.08,1,"RAUL CANTARELLI DE CARVALHO MARANHAO","","oculum-shopping-vila-velha"],["d","2026-04",30,"Vale Refeição","",3075,1,"CAJU","","oculum-shopping-vila-velha"],["d","2026-04",30,"Outros Custos com Pessoal","",24.4,1,"Diego Neri dos Santos","","oculum-shopping-vila-velha"],["d","2026-04",30,"Dividendos","",7500,1,"OPTICAL NIT","","oculum-shopping-vila-velha"],["d","2026-04",30,"Dividendos","",10000,1,"OPTICÁLIA PRAIA DA COSTA","","oculum-shopping-vila-velha"],["d","2026-04",30,"Dividendos","",5500,1,"OPTICAL VIX","","oculum-shopping-vila-velha"],["d","2026-04",30,"Dividendos","",16000,1,"DEX LUMEN VIX LTDA","","oculum-shopping-vila-velha"],["d","2026-04",30,"Repasses","",17642.08,1,"HENRIQUE RODRIGUES ALVES DOS SANTOS","","oculum-shopping-vila-velha"],["d","2026-05",4,"Contabilidade","",810.5,1,"OFFICE ASSESSORIA CONTABIL LTDA","","oculum-shopping-vila-velha"],["d","2026-05",4,"Juros","",2221.87,1,"REDECARD","","oculum-shopping-vila-velha"],["d","2026-05",4,"Juros","",13.13,1,"REDECARD","","oculum-shopping-vila-velha"],["d","2026-05",4,"Empréstimos capital de giro","",4233.8,1,"EMPRÉSTIMO","","oculum-shopping-vila-velha"],["d","2026-05",4,"Empréstimos capital de giro","",5293.48,1,"EMPRÉSTIMO","","oculum-shopping-vila-velha"],["d","2026-05",4,"Compras de Mercadorias","",214.9,1,"LAB RIO - VILA VELHA","","oculum-shopping-vila-velha"],["d","2026-05",4,"Compras de Mercadorias","",55.9,1,"LAB RIO - VILA VELHA","","oculum-shopping-vila-velha"],["d","2026-05",4,"Compras de Mercadorias","",959.6,1,"LAB RIO - VILA VELHA","","oculum-shopping-vila-velha"],["d","2026-05",5,"Assistência Médica","",21.85,1,"SAO BERNARDO SAMP","","oculum-shopping-vila-velha"],["d","2026-05",5,"Assistência Médica","",1337.85,1,"BENEVIX","","oculum-shopping-vila-velha"],["d","2026-05",6,"Serviços Softwares","",121.26,1,"VR BENEFICIOS E SERVICOS DE PROCESSAMENTO S.A","","oculum-shopping-vila-velha"],["d","2026-05",5,"Juros","",163.75,1,"REDECARD","","oculum-shopping-vila-velha"],["d","2026-05",5,"IOF","",248.75,1,"REDECARD","","oculum-shopping-vila-velha"],["d","2026-05",5,"IOF","",154.97,1,"REDECARD","","oculum-shopping-vila-velha"],["d","2026-05",5,"Serviços Softwares","",350,1,"WLSINFO","","oculum-shopping-vila-velha"],["d","2026-04",10,"Custo Serviços Terceirizados","",1000,0,"RUAN TONOLLI GESTAO EMPRESARIAL","","dominos-jardim-camburi"],["d","2026-04",12,"Assistência Médica","",45,0,"FED.DOS TRAB.EM TURISMO E HOSPITALIDADE NO E.ESP.SANTO","","dominos-jardim-camburi"],["d","2026-04",30,"Repasses","",3078.51,0,"DP1 RESTAURANTE LTDA","","dominos-jardim-camburi"],["d","2026-04",30,"Repasses","",1501.98,0,"DP1 RESTAURANTE LTDA","","dominos-jardim-camburi"],["d","2026-04",30,"Repasses","",1958.39,0,"ASSOCIACAO DOMINO&apos;S","","dominos-jardim-camburi"],["d","2026-06",1,"Contabilidade","",1067.9,0,"OFFICE ASSESSORIA CONTABIL LTDA","","dominos-jardim-camburi"],["d","2026-05",10,"Seguros","",191.14,0,"MITSUI SUMITOMO SEGUROS S.A.","","dominos-jardim-camburi"],["d","2026-04",15,"Royalties","",5337.79,0,"DP1 RESTAURANTE LTDA","","dominos-jardim-camburi"],["d","2026-04",15,"Serviços Softwares","",1963.94,0,"DP1 RESTAURANTE LTDA","","dominos-jardim-camburi"],["d","2026-04",20,"ICMS","",4569.94,0,"Secretaria de Estado da Fazenda","","dominos-jardim-camburi"],["d","2026-04",20,"Fundo de Promoção","",2756.23,0,"ASSOCIACAO DOMINO&apos;S","","dominos-jardim-camburi"],["d","2026-05",13,"Compras de Mercadorias","",11996.79,0,"RFG COMERCIO TRANSPORTES E SERVICOS LTDA","","dominos-jardim-camburi"],["d","2026-05",24,"Custo Serviços Terceirizados","",500,0,"TERCEIRIZADOS À PAGAR","","dominos-jardim-camburi"],["d","2026-05",4,"Outros Custos com Pessoal","",28.9,0,"CAROLINA MARIA DE JESUS SANTOS","","dominos-jardim-camburi"],["d","2026-05",11,"Compras de Mercadorias","",2205,0,"BUAIZ S/A INDUSTRIA E COMERCIO","","dominos-jardim-camburi"],["d","2026-05",18,"Compras de Mercadorias","",974.03,0,"Fabrica Vitoria","","dominos-jardim-camburi"],["d","2026-05",20,"Compras de Mercadorias","",14349.83,0,"RFG COMERCIO TRANSPORTES E SERVICOS LTDA","","dominos-jardim-camburi"],["d","2026-04",25,"Compras de Mercadorias","",9500,0,"BAL - Novo Moinho Fluminense","","dominos-jardim-camburi"],["d","2026-05",27,"Compras de Mercadorias","",14107.5,0,"RFG COMERCIO TRANSPORTES E SERVICOS LTDA","","dominos-jardim-camburi"],["d","2026-05",6,"Salários","",1156,0,"ALEXANDRE CARDOSO ALVES","","dominos-jardim-camburi"],["d","2026-05",6,"Salários","",1352,0,"GREISOM FERREIRA CAMPOS","","dominos-jardim-camburi"],["d","2026-05",6,"Salários","",2348,0,"KAILANY VITORIA FREIRE TEOTONIO","","dominos-jardim-camburi"],["d","2026-05",6,"Salários","",1324,0,"RICASSIA SANTOS CARDOSO","","dominos-jardim-camburi"],["d","2026-05",7,"Custo com Serviços de Entrega","",304,0,"IFOOD.COM AGENCIA DE RESTAURANTES ONLINE S.A.","","dominos-jardim-camburi"],["d","2026-05",7,"Custo com Serviços de Entrega","",10613.48,0,"AJAX SERVICOS DE ENTREGA LTDA","","dominos-jardim-camburi"],["d","2026-05",7,"Vale Refeição","",61.22,0,"AJAX SERVICOS DE ENTREGA LTDA","","dominos-jardim-camburi"],["d","2026-05",7,"Salários","",264.67,0,"AJAX SERVICOS DE ENTREGA LTDA","","dominos-jardim-camburi"],["d","2026-05",7,"Contabilidade","",541.41,0,"AJAX SERVICOS DE ENTREGA LTDA","","dominos-jardim-camburi"],["d","2026-05",14,"Compras de Mercadorias","",2205,0,"BUAIZ S/A INDUSTRIA E COMERCIO","","dominos-jardim-camburi"],["d","2026-04",9,"Custo com Serviços de Entrega","",304,1,"IFOOD.COM AGENCIA DE RESTAURANTES ONLINE S.A.","","dominos-jardim-camburi"],["d","2026-04",10,"Custo Serviços Terceirizados","",110,1,"SALÁRIOS À PAGAR","","dominos-jardim-camburi"],["d","2026-04",10,"Freelancers","",630,1,"SALÁRIOS À PAGAR","","dominos-jardim-camburi"],["d","2026-04",10,"Outros Custos com Pessoal","",114,1,"SINDICATO DOS RESTAURANTES, BARES E SIMILARES NO ESTADO DO ESPIRITO SANTO","","dominos-jardim-camburi"],["d","2026-04",10,"Freelancers","",90,1,"SALÁRIOS À PAGAR","","dominos-jardim-camburi"],["d","2026-04",10,"Outros Custos com Pessoal","",45,1,"SPRING","","dominos-jardim-camburi"],["d","2026-04",10,"Freelancers","",270,1,"SALÁRIOS À PAGAR","","dominos-jardim-camburi"],["d","2026-04",10,"Freelancers","",270,1,"SALÁRIOS À PAGAR","","dominos-jardim-camburi"],["d","2026-04",10,"Freelancers","",540,1,"SALÁRIOS À PAGAR","","dominos-jardim-camburi"],["d","2026-04",10,"Salários","",500,1,"DANIEL BARROS DURANTE","","dominos-jardim-camburi"],["d","2026-04",10,"Freelancers","",180,1,"SALÁRIOS À PAGAR","","dominos-jardim-camburi"],["d","2026-04",13,"Custo Agregadores e Cartões","",280,1,"STONE INSTITUICAO DE PAGAMENTO S.A","","dominos-jardim-camburi"],["d","2026-04",15,"Aluguel fixo","",6000,1,"FATIMA RAMALHO BARCELOS ABELHA RODRIGUES","","dominos-jardim-camburi"],["d","2026-04",15,"FGTS","",635.16,1,"AJAX SERVICOS DE ENTREGA LTDA","","dominos-jardim-camburi"],["d","2026-04",15,"Rescisões","",2025.91,1,"AJAX SERVICOS DE ENTREGA LTDA","","dominos-jardim-camburi"],["d","2026-04",15,"&lt;Disponível&gt;","",1000,1,"DANIEL SILVA DE SOUSA","","dominos-jardim-camburi"],["d","2026-04",16,"Custo com Serviços de Entrega","",400,1,"IFOOD.COM AGENCIA DE RESTAURANTES ONLINE S.A.","","dominos-jardim-camburi"],["d","2026-04",17,"Custo com Serviços de Entrega","",300,1,"MOTOBOY À PAGAR","","dominos-jardim-camburi"],["d","2026-04",17,"Freelancers","",770,1,"SALÁRIOS À PAGAR","","dominos-jardim-camburi"],["d","2026-04",17,"Freelancers","",450,1,"SALÁRIOS À PAGAR","","dominos-jardim-camburi"],["d","2026-04",17,"Salários","",500,1,"DANIEL BARROS DURANTE","","dominos-jardim-camburi"],["d","2026-04",17,"Custo Serviços Terceirizados","",150,1,"TERCEIRIZADOS À PAGAR","","dominos-jardim-camburi"],["d","2026-04",17,"Freelancers","",630,1,"SALÁRIOS À PAGAR","","dominos-jardim-camburi"],["d","2026-04",20,"Adiantamento","",872,1,"RICASSIA SANTOS CARDOSO","","dominos-jardim-camburi"],["d","2026-04",20,"INSS","",3308.8,1,"RECEITA FEDERAL","","dominos-jardim-camburi"],["d","2026-04",20,"Adiantamento","",149.45,1,"AJAX SERVICOS DE ENTREGA LTDA","","dominos-jardim-camburi"],["d","2026-04",20,"Outros Custos com Pessoal","",298.34,1,"AJAX SERVICOS DE ENTREGA LTDA","","dominos-jardim-camburi"],["d","2026-04",20,"Internet/Telefone","",381,1,"AJAX SERVICOS DE ENTREGA LTDA","","dominos-jardim-camburi"],["d","2026-04",20,"FGTS","",879.34,1,"AJAX SERVICOS DE ENTREGA LTDA","","dominos-jardim-camburi"],["d","2026-04",20,"INSS","",998.44,1,"AJAX SERVICOS DE ENTREGA LTDA","","dominos-jardim-camburi"],["d","2026-04",20,"Simples Nacional (DAS)","",1212.02,1,"AJAX SERVICOS DE ENTREGA LTDA","","dominos-jardim-camburi"],["d","2026-04",20,"Custo com Serviços de Entrega","",1895.54,1,"AJAX SERVICOS DE ENTREGA LTDA","","dominos-jardim-camburi"],["d","2026-04",20,"ICMS","",159.95,1,"Secretaria de Estado da Fazenda","","dominos-jardim-camburi"],["d","2026-04",20,"FGTS","",762.23,1,"FGTS À PAGAR","","dominos-jardim-camburi"],["d","2026-04",20,"ICMS","",274.42,1,"Secretaria de Estado da Fazenda","","dominos-jardim-camburi"],["d","2026-04",20,"Adiantamento","",910,1,"KAILANY VITORIA FREIRE TEOTONIO","","dominos-jardim-camburi"],["d","2026-04",20,"Adiantamento","",682,1,"GREISOM FERREIRA CAMPOS","","dominos-jardim-camburi"],["d","2026-04",22,"Custo Serviços Terceirizados","",550,1,"FREON-TEC","","dominos-jardim-camburi"],["d","2026-04",23,"Energia Elétrica","",5416.79,1,"EDP ESPIRITO SANTO","","dominos-jardim-camburi"],["d","2026-04",23,"Custo com Serviços de Entrega","",144,1,"IFOOD.COM AGENCIA DE RESTAURANTES ONLINE S.A.","","dominos-jardim-camburi"],["d","2026-04",24,"Custo com Serviços de Entrega","",160,1,"IFOOD.COM AGENCIA DE RESTAURANTES ONLINE S.A.","","dominos-jardim-camburi"],["d","2026-04",24,"Custo Serviços Terceirizados","",220,1,"SALÁRIOS À PAGAR","","dominos-jardim-camburi"],["d","2026-04",24,"Salários","",450,1,"DANIEL BARROS DURANTE","","dominos-jardim-camburi"],["d","2026-04",24,"Freelancers","",450,1,"SALÁRIOS À PAGAR","","dominos-jardim-camburi"],["d","2026-04",24,"Freelancers","",180,1,"SALÁRIOS À PAGAR","","dominos-jardim-camburi"],["d","2026-04",24,"Custo com Serviços de Entrega","",450,1,"MOTOBOY À PAGAR","","dominos-jardim-camburi"],["d","2026-04",24,"Freelancers","",450,1,"SALÁRIOS À PAGAR","","dominos-jardim-camburi"],["d","2026-04",24,"Freelancers","",180,1,"SALÁRIOS À PAGAR","","dominos-jardim-camburi"],["d","2026-04",27,"Custos Processuais, Judiciais, Cartório e Sindicatos","",170,1,"SINDICATO DOS RESTAURANTES, BARES E SIMILARES NO ESTADO DO ESPIRITO SANTO","","dominos-jardim-camburi"],["d","2026-04",28,"Rescisões","",4184.08,1,"AJAX SERVICOS DE ENTREGA LTDA","","dominos-jardim-camburi"],["d","2026-04",30,"Custo com Serviços de Entrega","",80,1,"IFOOD.COM AGENCIA DE RESTAURANTES ONLINE S.A.","","dominos-jardim-camburi"],["d","2026-04",30,"Custo com Serviços de Entrega","",240,1,"IFOOD.COM AGENCIA DE RESTAURANTES ONLINE S.A.","","dominos-jardim-camburi"],["d","2026-04",30,"Custo com Serviços de Entrega","",320,1,"IFOOD.COM AGENCIA DE RESTAURANTES ONLINE S.A.","","dominos-jardim-camburi"],["d","2026-04",30,"Freelancers","",180,1,"SALÁRIOS À PAGAR","","dominos-jardim-camburi"],["d","2026-04",30,"Freelancers","",110,1,"SALÁRIOS À PAGAR","","dominos-jardim-camburi"],["d","2026-04",30,"Freelancers","",660,1,"SALÁRIOS À PAGAR","","dominos-jardim-camburi"],["d","2026-04",30,"Salários","",500,1,"DANIEL BARROS DURANTE","","dominos-jardim-camburi"],["d","2026-04",30,"Freelancers","",540,1,"SALÁRIOS À PAGAR","","dominos-jardim-camburi"],["d","2026-04",30,"Freelancers","",110,1,"SALÁRIOS À PAGAR","","dominos-jardim-camburi"],["d","2026-04",30,"Compras de Mercadorias","",2150,1,"BUAIZ S/A INDUSTRIA E COMERCIO","","dominos-jardim-camburi"],["d","2026-05",4,"Compras de Mercadorias","",1083.35,1,"Fabrica Vitoria","","dominos-jardim-camburi"],["d","2026-05",4,"Custo com Serviços de Entrega","",450,1,"MOTOBOY À PAGAR","","dominos-jardim-camburi"],["d","2026-05",4,"Custo Serviços Dedetização/coleta lixo/MICROAMB","",472.5,1,"AMBSERVICE SERVICOS AMBIENTAIS","","dominos-jardim-camburi"],["d","2026-05",5,"Custo com Serviços de Entrega","",211.2,1,"IFOOD.COM AGENCIA DE RESTAURANTES ONLINE S.A.","","dominos-jardim-camburi"],["d","2026-05",5,"Vale Refeição","",2185.14,1,"CAJU","","dominos-jardim-camburi"],["d","2026-05",5,"Custo com Serviços de Entrega","",728,1,"IFOOD.COM AGENCIA DE RESTAURANTES ONLINE S.A.","","dominos-jardim-camburi"],["d","2026-05",6,"Compras de Mercadorias","",12663.29,1,"RFG COMERCIO TRANSPORTES E SERVICOS LTDA","","dominos-jardim-camburi"],["d","2026-05",7,"Condomínio","",3041.46,1,"CONDOMINIO DO ED NORTE SUL TOWER","","dominos-jardim-camburi"],["d","2026-05",7,"Serviços Softwares","",634.75,1,"GCOM","","dominos-jardim-camburi"],["d","2026-04",10,"Custo Serviços Terceirizados","",1000,0,"RUAN TONOLLI GESTAO EMPRESARIAL","","dominos-praia-do-canto"],["d","2026-04",12,"Assistência Médica","",60,0,"FED.DOS TRAB.EM TURISMO E HOSPITALIDADE NO E.ESP.SANTO","","dominos-praia-do-canto"],["d","2026-04",30,"Repasses","",1275.08,0,"DP3 INDUSTRIA E DISTRIBUICAO DE ALIMENTOS LTDA","","dominos-praia-do-canto"],["d","2026-04",30,"Repasses","",1889.73,0,"ASSOCIACAO DOMINO&apos;S","","dominos-praia-do-canto"],["d","2026-04",30,"Repasses","",3374.07,0,"DP1 RESTAURANTE LTDA","","dominos-praia-do-canto"],["d","2026-06",10,"Seguros","",191.14,0,"MITSUI SUMITOMO SEGUROS S.A.","","dominos-praia-do-canto"],["d","2026-05",15,"Aluguel fixo","",3968.08,0,"BETHA-ESPACO IMOVEIS LTDA","","dominos-praia-do-canto"],["d","2026-05",15,"Aluguel fixo","",3987.61,0,"BETHA-ESPACO IMOVEIS LTDA","","dominos-praia-do-canto"],["d","2026-04",15,"Royalties","",7854.14,0,"DP1 RESTAURANTE LTDA","","dominos-praia-do-canto"],["d","2026-04",15,"Serviços Softwares","",2620.85,0,"DP1 RESTAURANTE LTDA","","dominos-praia-do-canto"],["d","2026-04",20,"ICMS","",6838.52,0,"Secretaria de Estado da Fazenda","","dominos-praia-do-canto"],["d","2026-04",20,"Fundo de Promoção","",4043.68,0,"ASSOCIACAO DOMINO&apos;S","","dominos-praia-do-canto"],["d","2026-05",17,"Compras de Mercadorias","",650.8,0,"PRINTESPACO SERVICOS GRAFICOS LTDA","","dominos-praia-do-canto"],["d","2026-05",20,"Compras de Mercadorias","",13226.83,0,"RFG COMERCIO TRANSPORTES E SERVICOS LTDA","","dominos-praia-do-canto"],["d","2026-05",14,"Compras de Mercadorias","",1048.99,0,"Fabrica Vitoria","","dominos-praia-do-canto"],["d","2026-05",13,"Compras de Mercadorias","",14090.09,0,"RFG COMERCIO TRANSPORTES E SERVICOS LTDA","","dominos-praia-do-canto"],["d","2026-05",20,"Compras de Mercadorias","",1028.32,0,"Fabrica Vitoria","","dominos-praia-do-canto"],["d","2026-05",15,"Internet/Telefone","",92.01,0,"CLARO NXT TELECOMUNICACOES S/A","","dominos-praia-do-canto"],["d","2026-05",11,"Informática","",60,0,"JOAO PAULO CABRERA","","dominos-praia-do-canto"],["d","2026-05",7,"Salários","",2113.65,0,"GIZELY FERREIRA SOARES","","dominos-praia-do-canto"],["d","2026-05",7,"Salários","",925.95,0,"LETICIA SILVA NASCIMENTO SIMOES","","dominos-praia-do-canto"],["d","2026-05",7,"Salários","",2802.11,0,"MAIELLY BICALHO DE OLIVEIRA MARTINS","","dominos-praia-do-canto"],["d","2026-05",7,"Custo com Serviços de Entrega","",432,0,"IFOOD.COM AGENCIA DE RESTAURANTES ONLINE S.A.","","dominos-praia-do-canto"],["d","2026-05",27,"Compras de Mercadorias","",1028.32,0,"Fabrica Vitoria","","dominos-praia-do-canto"],["d","2026-05",27,"Compras de Mercadorias","",13701.7,0,"RFG COMERCIO TRANSPORTES E SERVICOS LTDA","","dominos-praia-do-canto"],["d","2026-05",7,"Vale Refeição","",61.22,0,"AJAX SERVICOS DE ENTREGA LTDA","","dominos-praia-do-canto"],["d","2026-05",7,"Custo com Serviços de Entrega","",15024,0,"AJAX SERVICOS DE ENTREGA LTDA","","dominos-praia-do-canto"],["d","2026-05",7,"Salários","",264.67,0,"AJAX SERVICOS DE ENTREGA LTDA","","dominos-praia-do-canto"],["d","2026-05",7,"Contabilidade","",541.41,0,"AJAX SERVICOS DE ENTREGA LTDA","","dominos-praia-do-canto"],["d","2026-05",13,"Energia Elétrica","",4794.46,0,"EDP ESPIRITO SANTO","","dominos-praia-do-canto"],["d","2026-05",13,"Energia Elétrica","",1534.2,0,"EDP ESPIRITO SANTO","","dominos-praia-do-canto"],["d","2026-03",31,"Custo Serviços Dedetização/coleta lixo/MICROAMB","",525,1,"AMBSERVICE SERVICOS AMBIENTAIS","","dominos-praia-do-canto"],["d","2026-04",8,"Salários","",925.61,1,"MAIELLY BICALHO DE OLIVEIRA MARTINS","","dominos-praia-do-canto"],["d","2026-04",8,"Salários","",310.22,1,"GIZELY FERREIRA SOARES","","dominos-praia-do-canto"],["d","2026-04",9,"Compras de Mercadorias","",77.18,1,"PRINTESPACO SERVICOS GRAFICOS LTDA","","dominos-praia-do-canto"],["d","2026-04",9,"Custo com Serviços de Entrega","",544,1,"IFOOD.COM AGENCIA DE RESTAURANTES ONLINE S.A.","","dominos-praia-do-canto"],["d","2026-04",10,"Freelancers","",360,1,"SALÁRIOS À PAGAR","","dominos-praia-do-canto"],["d","2026-04",10,"Freelancers","",540,1,"SALÁRIOS À PAGAR","","dominos-praia-do-canto"],["d","2026-04",10,"Freelancers","",90,1,"SALÁRIOS À PAGAR","","dominos-praia-do-canto"],["d","2026-04",10,"Custo com Serviços de Entrega","",300,1,"MOTOBOYS","","dominos-praia-do-canto"],["d","2026-04",10,"Freelancers","",540,1,"SALÁRIOS À PAGAR","","dominos-praia-do-canto"],["d","2026-04",10,"Salários","",500,1,"DANIEL BARROS DURANTE","","dominos-praia-do-canto"],["d","2026-04",10,"Freelancers","",270,1,"SALÁRIOS À PAGAR","","dominos-praia-do-canto"],["d","2026-04",10,"Custo com Serviços de Entrega","",450,1,"MOTOBOYS","","dominos-praia-do-canto"],["d","2026-04",10,"Freelancers","",240,1,"SALÁRIOS À PAGAR","","dominos-praia-do-canto"],["d","2026-04",10,"Custo com Serviços de Entrega","",32,1,"IFOOD.COM AGENCIA DE RESTAURANTES ONLINE S.A.","","dominos-praia-do-canto"],["d","2026-04",10,"Outros Custos com Pessoal","",152,1,"SINDICATO DOS RESTAURANTES, BARES E SIMILARES NO ESTADO DO ESPIRITO SANTO","","dominos-praia-do-canto"],["d","2026-04",10,"Outros Custos com Pessoal","",60,1,"SPRING","","dominos-praia-do-canto"],["d","2026-04",13,"Água e Esgoto","",1335.64,1,"CESAN","","dominos-praia-do-canto"],["d","2026-04",13,"Custo Agregadores e Cartões","",280,1,"STONE INSTITUICAO DE PAGAMENTO S.A","","dominos-praia-do-canto"],["d","2026-04",13,"Informática","",120,1,"JOAO PAULO CABRERA","","dominos-praia-do-canto"],["d","2026-04",14,"Energia Elétrica","",1417.3,1,"EDP ES","","dominos-praia-do-canto"],["d","2026-04",14,"Energia Elétrica","",3537.69,1,"EDP ES","","dominos-praia-do-canto"],["d","2026-04",15,"Aluguel fixo","",3968.08,1,"BETHA-ESPACO IMOVEIS LTDA","","dominos-praia-do-canto"],["d","2026-04",15,"Aluguel fixo","",3987.61,1,"BETHA-ESPACO IMOVEIS LTDA","","dominos-praia-do-canto"],["d","2026-04",15,"&lt;Disponível&gt;","",1000,1,"DANIEL SILVA DE SOUSA","","dominos-praia-do-canto"],["d","2026-04",16,"Custo com Serviços de Entrega","",464,1,"IFOOD.COM AGENCIA DE RESTAURANTES ONLINE S.A.","","dominos-praia-do-canto"],["d","2026-04",17,"Freelancers","",440,1,"SALÁRIOS À PAGAR","","dominos-praia-do-canto"],["d","2026-04",17,"Freelancers","",450,1,"SALÁRIOS À PAGAR","","dominos-praia-do-canto"],["d","2026-04",17,"Custo com Serviços de Entrega","",300,1,"MOTOBOYS","","dominos-praia-do-canto"],["d","2026-04",17,"Freelancers","",540,1,"SALÁRIOS À PAGAR","","dominos-praia-do-canto"],["d","2026-04",17,"Salários","",500,1,"DANIEL BARROS DURANTE","","dominos-praia-do-canto"],["d","2026-04",17,"Custo com Serviços de Entrega","",450,1,"MOTOBOYS","","dominos-praia-do-canto"],["d","2026-04",17,"Freelancers","",90,1,"SALÁRIOS À PAGAR","","dominos-praia-do-canto"],["d","2026-04",20,"ICMS","",10.5,1,"Secretaria de Estado da Fazenda","","dominos-praia-do-canto"],["d","2026-04",20,"Custo Serviços Terceirizados","",840,1,"TERCEIRIZADOS À PAGAR","","dominos-praia-do-canto"],["d","2026-04",20,"INSS","",2724.17,1,"RECEITA FEDERAL","","dominos-praia-do-canto"],["d","2026-04",20,"ICMS","",200.54,1,"Secretaria de Estado da Fazenda","","dominos-praia-do-canto"],["d","2026-04",20,"ICMS","",239.35,1,"Secretaria de Estado da Fazenda","","dominos-praia-do-canto"],["d","2026-04",20,"Outros Custos com Pessoal","",62.3,1,"AJAX SERVICOS DE ENTREGA LTDA","","dominos-praia-do-canto"],["d","2026-04",20,"Adiantamento","",149.45,1,"AJAX SERVICOS DE ENTREGA LTDA","","dominos-praia-do-canto"],["d","2026-04",20,"ICMS","",149.91,1,"AJAX SERVICOS DE ENTREGA LTDA","","dominos-praia-do-canto"],["d","2026-04",20,"Outros Custos com Pessoal","",385.35,1,"AJAX SERVICOS DE ENTREGA LTDA","","dominos-praia-do-canto"],["d","2026-04",20,"Simples Nacional (DAS)","",1212.02,1,"AJAX SERVICOS DE ENTREGA LTDA","","dominos-praia-do-canto"],["d","2026-04",20,"INSS","",1265.3,1,"AJAX SERVICOS DE ENTREGA LTDA","","dominos-praia-do-canto"],["d","2026-04",20,"FGTS","",1298.11,1,"AJAX SERVICOS DE ENTREGA LTDA","","dominos-praia-do-canto"],["d","2026-04",20,"Custo com Serviços de Entrega","",4400.44,1,"AJAX SERVICOS DE ENTREGA LTDA","","dominos-praia-do-canto"],["d","2026-04",20,"FGTS","",604.1,1,"FGTS À PAGAR","","dominos-praia-do-canto"],["d","2026-04",20,"Adiantamento","",909.62,1,"GIZELY FERREIRA SOARES","","dominos-praia-do-canto"],["d","2026-04",20,"Adiantamento","",909.62,1,"LETICIA SILVA NASCIMENTO SIMOES","","dominos-praia-do-canto"],["d","2026-04",20,"Adiantamento","",1137.02,1,"MAIELLY BICALHO DE OLIVEIRA MARTINS","","dominos-praia-do-canto"],["d","2026-04",23,"Custo com Serviços de Entrega","",496,1,"IFOOD.COM AGENCIA DE RESTAURANTES ONLINE S.A.","","dominos-praia-do-canto"],["d","2026-04",24,"Custo Serviços Terceirizados","",440,1,"SALÁRIOS À PAGAR","","dominos-praia-do-canto"],["d","2026-04",24,"Salários","",500,1,"DANIEL BARROS DURANTE","","dominos-praia-do-canto"],["d","2026-04",24,"Freelancers","",450,1,"SALÁRIOS À PAGAR","","dominos-praia-do-canto"],["d","2026-04",24,"Freelancers","",180,1,"SALÁRIOS À PAGAR","","dominos-praia-do-canto"],["d","2026-04",24,"Freelancers","",270,1,"SALÁRIOS À PAGAR","","dominos-praia-do-canto"],["d","2026-04",24,"Freelancers","",540,1,"SALÁRIOS À PAGAR","","dominos-praia-do-canto"],["d","2026-04",24,"Custo com Serviços de Entrega","",450,1,"MOTOBOYS","","dominos-praia-do-canto"],["d","2026-04",27,"Custos Processuais, Judiciais, Cartório e Sindicatos","",170,1,"SINDICATO DOS RESTAURANTES, BARES E SIMILARES NO ESTADO DO ESPIRITO SANTO","","dominos-praia-do-canto"],["d","2026-04",27,"Gás","",1753.63,1,"ES GAS","","dominos-praia-do-canto"],["d","2026-04",30,"Custo com Serviços de Entrega","",201.6,1,"IFOOD.COM AGENCIA DE RESTAURANTES ONLINE S.A.","","dominos-praia-do-canto"],["d","2026-04",30,"Custo com Serviços de Entrega","",496,1,"IFOOD.COM AGENCIA DE RESTAURANTES ONLINE S.A.","","dominos-praia-do-canto"],["d","2026-04",30,"Custo com Serviços de Entrega","",130,1,"IFOOD.COM AGENCIA DE RESTAURANTES ONLINE S.A.","","dominos-praia-do-canto"],["d","2026-04",30,"Freelancers","",450,1,"SALÁRIOS À PAGAR","","dominos-praia-do-canto"],["d","2026-04",30,"Freelancers","",360,1,"SALÁRIOS À PAGAR","","dominos-praia-do-canto"],["d","2026-04",30,"Freelancers","",180,1,"SALÁRIOS À PAGAR","","dominos-praia-do-canto"],["d","2026-04",30,"Freelancers","",90,1,"SALÁRIOS À PAGAR","","dominos-praia-do-canto"],["d","2026-04",30,"Freelancers","",360,1,"SALÁRIOS À PAGAR","","dominos-praia-do-canto"],["d","2026-04",30,"Salários","",500,1,"DANIEL BARROS DURANTE","","dominos-praia-do-canto"],["d","2026-05",4,"Contabilidade","",1067.9,1,"OFFICE ASSESSORIA CONTABIL LTDA","","dominos-praia-do-canto"],["d","2026-05",4,"Custo com Serviços de Entrega","",750,1,"MOTOBOYS","","dominos-praia-do-canto"],["d","2026-05",4,"Férias","",2440.52,1,"AJAX SERVICOS DE ENTREGA LTDA","","dominos-praia-do-canto"],["d","2026-05",4,"Custo Serviços Dedetização/coleta lixo/MICROAMB","",525,1,"AMBSERVICE SERVICOS AMBIENTAIS","","dominos-praia-do-canto"],["d","2026-05",5,"Vale Refeição","",3346.14,1,"CAJU","","dominos-praia-do-canto"],["d","2026-05",5,"Custo com Serviços de Entrega","",182.4,1,"IFOOD.COM AGENCIA DE RESTAURANTES ONLINE S.A.","","dominos-praia-do-canto"],["d","2026-05",5,"Custo com Serviços de Entrega","",1907.36,1,"IFOOD.COM AGENCIA DE RESTAURANTES ONLINE S.A.","","dominos-praia-do-canto"],["d","2026-05",7,"Serviços Softwares","",634.75,1,"GCOM","","dominos-praia-do-canto"],["d","2026-05",6,"Compras de Mercadorias","",1380.1,1,"Fabrica Vitoria","","dominos-praia-do-canto"],["d","2026-05",6,"Compras de Mercadorias","",12800.2,1,"RFG COMERCIO TRANSPORTES E SERVICOS LTDA","","dominos-praia-do-canto"],["d","2026-04",15,"Taxas e Licenças","",5000,0,"INVESTIMENTOS À PAGAR","","optcalia-shopping-vitoria"],["d","2026-06",1,"Aluguel fixo","",21162.57,0,"NOVA CIDADE SHOPPING CENTERS S/A","","optcalia-shopping-vitoria"],["d","2026-05",11,"Condomínio","",7740,0,"CONDOMINIO DO SHOPPING VITORIA","","optcalia-shopping-vitoria"],["d","2026-05",20,"INSS","",309.32,0,"INSS À PAGAR","","optcalia-shopping-vitoria"],["d","2026-05",20,"FGTS","",325.78,0,"FGTS À PAGAR","","optcalia-shopping-vitoria"],["d","2026-05",15,"Energia Elétrica","",1400,0,"CONDOMINIO DO SHOPPING VITORIA","","optcalia-shopping-vitoria"],["d","2026-05",18,"Fundo de Promoção","",4173.12,0,"ALOSVIT","","optcalia-shopping-vitoria"],["d","2026-05",10,"Custo Serviços Terceirizados","",1000,0,"RUAN TONOLLI GESTAO EMPRESARIAL","","optcalia-shopping-vitoria"],["d","2026-05",8,"Freelancers","",141,0,"SALÁRIOS À PAGAR","","optcalia-shopping-vitoria"],["d","2026-05",25,"CDU","",11582.09,0,"NOVA CIDADE SHOPPING CENTERS S/A","","optcalia-shopping-vitoria"],["d","2026-04",10,"Taxas e Licenças","",1689.91,0,"HOLDING CALI OPTICA LICENCE S.A","","optcalia-shopping-vitoria"],["d","2026-05",8,"Compras de Mercadorias","",113.71,0,"JJ BRASIL IND COM PR SAÚDE LT","","optcalia-shopping-vitoria"],["d","2026-06",7,"Compras de Mercadorias","",113.71,0,"JJ BRASIL IND COM PR SAÚDE LT","","optcalia-shopping-vitoria"],["d","2026-07",7,"Compras de Mercadorias","",117.15,0,"JJ BRASIL IND COM PR SAÚDE LT","","optcalia-shopping-vitoria"],["d","2026-04",8,"Compras de Mercadorias","",16.8,0,"VILA VELHA","","optcalia-shopping-vitoria"],["d","2026-04",8,"Compras de Mercadorias","",108.8,0,"VILA VELHA","","optcalia-shopping-vitoria"],["d","2026-04",8,"Compras de Mercadorias","",83.2,0,"VILA VELHA","","optcalia-shopping-vitoria"],["d","2026-04",8,"Compras de Mercadorias","",278.92,0,"VILA VELHA","","optcalia-shopping-vitoria"],["d","2026-06",7,"Compras de Mercadorias","",235.17,0,"CD SUMARE (SP)","","optcalia-shopping-vitoria"],["d","2026-07",7,"Compras de Mercadorias","",235.17,0,"CD SUMARE (SP)","","optcalia-shopping-vitoria"],["d","2026-08",6,"Compras de Mercadorias","",235.17,0,"CD SUMARE (SP)","","optcalia-shopping-vitoria"],["d","2026-09",5,"Compras de Mercadorias","",235.17,0,"CD SUMARE (SP)","","optcalia-shopping-vitoria"],["d","2026-10",5,"Compras de Mercadorias","",235.21,0,"CD SUMARE (SP)","","optcalia-shopping-vitoria"],["d","2026-05",13,"Compras de Mercadorias","",8.89,0,"CARL ZEISS VISION BRASIL IND. OPTICA LTDA","","optcalia-shopping-vitoria"],["d","2026-06",12,"Compras de Mercadorias","",8.89,0,"CARL ZEISS VISION BRASIL IND. OPTICA LTDA","","optcalia-shopping-vitoria"],["d","2026-07",12,"Compras de Mercadorias","",8.89,0,"CARL ZEISS VISION BRASIL IND. OPTICA LTDA","","optcalia-shopping-vitoria"],["d","2026-08",11,"Compras de Mercadorias","",8.89,0,"CARL ZEISS VISION BRASIL IND. OPTICA LTDA","","optcalia-shopping-vitoria"],["d","2026-09",10,"Compras de Mercadorias","",8.89,0,"CARL ZEISS VISION BRASIL IND. OPTICA LTDA","","optcalia-shopping-vitoria"],["d","2026-10",10,"Compras de Mercadorias","",8.89,0,"CARL ZEISS VISION BRASIL IND. OPTICA LTDA","","optcalia-shopping-vitoria"],["d","2026-11",9,"Compras de Mercadorias","",8.89,0,"CARL ZEISS VISION BRASIL IND. OPTICA LTDA","","optcalia-shopping-vitoria"],["d","2026-12",9,"Compras de Mercadorias","",8.89,0,"CARL ZEISS VISION BRASIL IND. OPTICA LTDA","","optcalia-shopping-vitoria"],["d","2027-01",8,"Compras de Mercadorias","",8.89,0,"CARL ZEISS VISION BRASIL IND. OPTICA LTDA","","optcalia-shopping-vitoria"],["d","2027-02",7,"Compras de Mercadorias","",8.89,0,"CARL ZEISS VISION BRASIL IND. OPTICA LTDA","","optcalia-shopping-vitoria"],["d","2026-04",20,"Simples Nacional (DAS)","",2254.11,0,"SIMPLES NACIONAL DAS","","optcalia-shopping-vitoria"],["d","2026-05",15,"Compras de Mercadorias","",19.82,0,"CARL ZEISS VISION BRASIL IND. OPTICA LTDA","","optcalia-shopping-vitoria"],["d","2026-06",14,"Compras de Mercadorias","",19.82,0,"CARL ZEISS VISION BRASIL IND. OPTICA LTDA","","optcalia-shopping-vitoria"],["d","2026-07",14,"Compras de Mercadorias","",19.82,0,"CARL ZEISS VISION BRASIL IND. OPTICA LTDA","","optcalia-shopping-vitoria"],["d","2026-08",13,"Compras de Mercadorias","",19.82,0,"CARL ZEISS VISION BRASIL IND. OPTICA LTDA","","optcalia-shopping-vitoria"],["d","2026-09",12,"Compras de Mercadorias","",19.82,0,"CARL ZEISS VISION BRASIL IND. OPTICA LTDA","","optcalia-shopping-vitoria"],["d","2026-10",12,"Compras de Mercadorias","",19.82,0,"CARL ZEISS VISION BRASIL IND. OPTICA LTDA","","optcalia-shopping-vitoria"],["d","2026-11",11,"Compras de Mercadorias","",19.82,0,"CARL ZEISS VISION BRASIL IND. OPTICA LTDA","","optcalia-shopping-vitoria"],["d","2026-12",11,"Compras de Mercadorias","",19.78,0,"CARL ZEISS VISION BRASIL IND. OPTICA LTDA","","optcalia-shopping-vitoria"],["d","2027-01",10,"Compras de Mercadorias","",19.82,0,"CARL ZEISS VISION BRASIL IND. OPTICA LTDA","","optcalia-shopping-vitoria"],["d","2027-02",9,"Compras de Mercadorias","",19.82,0,"CARL ZEISS VISION BRASIL IND. OPTICA LTDA","","optcalia-shopping-vitoria"],["d","2026-05",11,"Compras de Mercadorias","",48,0,"BRASLAB","","optcalia-shopping-vitoria"],["d","2026-06",8,"Compras de Mercadorias","",48.01,0,"BRASLAB","","optcalia-shopping-vitoria"],["d","2026-07",6,"Compras de Mercadorias","",48.01,0,"BRASLAB","","optcalia-shopping-vitoria"],["d","2026-08",3,"Compras de Mercadorias","",48.01,0,"BRASLAB","","optcalia-shopping-vitoria"],["d","2026-08",31,"Compras de Mercadorias","",48.01,0,"BRASLAB","","optcalia-shopping-vitoria"],["d","2026-05",13,"Compras de Mercadorias","",10.66,0,"BRASLAB","","optcalia-shopping-vitoria"],["d","2026-06",10,"Compras de Mercadorias","",10.66,0,"BRASLAB","","optcalia-shopping-vitoria"],["d","2026-07",8,"Compras de Mercadorias","",10.66,0,"BRASLAB","","optcalia-shopping-vitoria"],["d","2026-08",5,"Compras de Mercadorias","",10.66,0,"BRASLAB","","optcalia-shopping-vitoria"],["d","2026-09",2,"Compras de Mercadorias","",10.66,0,"BRASLAB","","optcalia-shopping-vitoria"],["d","2026-05",13,"Compras de Mercadorias","",194.5,0,"BRASLAB","","optcalia-shopping-vitoria"],["d","2026-06",10,"Compras de Mercadorias","",194.5,0,"BRASLAB","","optcalia-shopping-vitoria"],["d","2026-07",8,"Compras de Mercadorias","",194.5,0,"BRASLAB","","optcalia-shopping-vitoria"],["d","2026-08",5,"Compras de Mercadorias","",194.5,0,"BRASLAB","","optcalia-shopping-vitoria"],["d","2026-09",2,"Compras de Mercadorias","",194.5,0,"BRASLAB","","optcalia-shopping-vitoria"],["d","2026-05",11,"Compras de Mercadorias","",34.34,0,"BRASLAB","","optcalia-shopping-vitoria"],["d","2026-06",8,"Compras de Mercadorias","",34.36,0,"BRASLAB","","optcalia-shopping-vitoria"],["d","2026-07",6,"Compras de Mercadorias","",34.36,0,"BRASLAB","","optcalia-shopping-vitoria"],["d","2026-08",3,"Compras de Mercadorias","",34.36,0,"BRASLAB","","optcalia-shopping-vitoria"],["d","2026-08",31,"Compras de Mercadorias","",34.36,0,"BRASLAB","","optcalia-shopping-vitoria"],["d","2026-05",29,"Compras de Mercadorias","",702.77,0,"JUB2","","optcalia-shopping-vitoria"],["d","2026-06",28,"Compras de Mercadorias","",702.77,0,"JUB2","","optcalia-shopping-vitoria"],["d","2026-07",28,"Compras de Mercadorias","",702.77,0,"JUB2","","optcalia-shopping-vitoria"],["d","2026-08",27,"Compras de Mercadorias","",702.77,0,"JUB2","","optcalia-shopping-vitoria"],["d","2026-09",26,"Compras de Mercadorias","",702.77,0,"JUB2","","optcalia-shopping-vitoria"],["d","2026-10",26,"Compras de Mercadorias","",702.77,0,"JUB2","","optcalia-shopping-vitoria"],["d","2026-11",25,"Compras de Mercadorias","",702.77,0,"JUB2","","optcalia-shopping-vitoria"],["d","2026-12",25,"Compras de Mercadorias","",702.73,0,"JUB2","","optcalia-shopping-vitoria"],["d","2026-05",20,"Compras de Mercadorias","",20.64,0,"CARL ZEISS VISION BRASIL IND. OPTICA LTDA","","optcalia-shopping-vitoria"],["d","2026-06",19,"Compras de Mercadorias","",20.64,0,"CARL ZEISS VISION BRASIL IND. OPTICA LTDA","","optcalia-shopping-vitoria"],["d","2026-07",19,"Compras de Mercadorias","",20.64,0,"CARL ZEISS VISION BRASIL IND. OPTICA LTDA","","optcalia-shopping-vitoria"],["d","2026-08",18,"Compras de Mercadorias","",20.64,0,"CARL ZEISS VISION BRASIL IND. OPTICA LTDA","","optcalia-shopping-vitoria"],["d","2026-09",17,"Compras de Mercadorias","",20.64,0,"CARL ZEISS VISION BRASIL IND. OPTICA LTDA","","optcalia-shopping-vitoria"],["d","2026-10",17,"Compras de Mercadorias","",20.64,0,"CARL ZEISS VISION BRASIL IND. OPTICA LTDA","","optcalia-shopping-vitoria"],["d","2026-11",16,"Compras de Mercadorias","",20.64,0,"CARL ZEISS VISION BRASIL IND. OPTICA LTDA","","optcalia-shopping-vitoria"],["d","2026-12",16,"Compras de Mercadorias","",20.65,0,"CARL ZEISS VISION BRASIL IND. OPTICA LTDA","","optcalia-shopping-vitoria"],["d","2027-01",15,"Compras de Mercadorias","",20.64,0,"CARL ZEISS VISION BRASIL IND. OPTICA LTDA","","optcalia-shopping-vitoria"],["d","2027-02",14,"Compras de Mercadorias","",20.64,0,"CARL ZEISS VISION BRASIL IND. OPTICA LTDA","","optcalia-shopping-vitoria"],["d","2026-05",20,"Compras de Mercadorias","",66.97,0,"CARL ZEISS VISION BRASIL IND. OPTICA LTDA","","optcalia-shopping-vitoria"],["d","2026-06",19,"Compras de Mercadorias","",66.97,0,"CARL ZEISS VISION BRASIL IND. OPTICA LTDA","","optcalia-shopping-vitoria"],["d","2026-07",19,"Compras de Mercadorias","",66.97,0,"CARL ZEISS VISION BRASIL IND. OPTICA LTDA","","optcalia-shopping-vitoria"],["d","2026-08",18,"Compras de Mercadorias","",66.97,0,"CARL ZEISS VISION BRASIL IND. OPTICA LTDA","","optcalia-shopping-vitoria"],["d","2026-09",17,"Compras de Mercadorias","",66.97,0,"CARL ZEISS VISION BRASIL IND. OPTICA LTDA","","optcalia-shopping-vitoria"],["d","2026-10",17,"Compras de Mercadorias","",66.97,0,"CARL ZEISS VISION BRASIL IND. OPTICA LTDA","","optcalia-shopping-vitoria"],["d","2026-11",16,"Compras de Mercadorias","",66.97,0,"CARL ZEISS VISION BRASIL IND. OPTICA LTDA","","optcalia-shopping-vitoria"],["d","2026-12",16,"Compras de Mercadorias","",66.95,0,"CARL ZEISS VISION BRASIL IND. OPTICA LTDA","","optcalia-shopping-vitoria"],["d","2027-01",15,"Compras de Mercadorias","",66.97,0,"CARL ZEISS VISION BRASIL IND. OPTICA LTDA","","optcalia-shopping-vitoria"],["d","2027-02",14,"Compras de Mercadorias","",66.97,0,"CARL ZEISS VISION BRASIL IND. OPTICA LTDA","","optcalia-shopping-vitoria"],["d","2026-05",20,"Compras de Mercadorias","",53.43,0,"CARL ZEISS VISION BRASIL IND. OPTICA LTDA","","optcalia-shopping-vitoria"],["d","2026-06",19,"Compras de Mercadorias","",53.43,0,"CARL ZEISS VISION BRASIL IND. OPTICA LTDA","","optcalia-shopping-vitoria"],["d","2026-07",19,"Compras de Mercadorias","",53.43,0,"CARL ZEISS VISION BRASIL IND. OPTICA LTDA","","optcalia-shopping-vitoria"],["d","2026-08",18,"Compras de Mercadorias","",53.43,0,"CARL ZEISS VISION BRASIL IND. OPTICA LTDA","","optcalia-shopping-vitoria"],["d","2026-09",17,"Compras de Mercadorias","",53.43,0,"CARL ZEISS VISION BRASIL IND. OPTICA LTDA","","optcalia-shopping-vitoria"],["d","2026-10",17,"Compras de Mercadorias","",53.43,0,"CARL ZEISS VISION BRASIL IND. OPTICA LTDA","","optcalia-shopping-vitoria"],["d","2026-11",16,"Compras de Mercadorias","",53.43,0,"CARL ZEISS VISION BRASIL IND. OPTICA LTDA","","optcalia-shopping-vitoria"],["d","2026-12",16,"Compras de Mercadorias","",53.47,0,"CARL ZEISS VISION BRASIL IND. OPTICA LTDA","","optcalia-shopping-vitoria"],["d","2027-01",15,"Compras de Mercadorias","",53.43,0,"CARL ZEISS VISION BRASIL IND. OPTICA LTDA","","optcalia-shopping-vitoria"],["d","2027-02",14,"Compras de Mercadorias","",53.43,0,"CARL ZEISS VISION BRASIL IND. OPTICA LTDA","","optcalia-shopping-vitoria"],["d","2026-05",16,"Compras de Mercadorias","",230.18,0,"CD SUMARE (SP)","","optcalia-shopping-vitoria"],["d","2026-06",15,"Compras de Mercadorias","",230.18,0,"CD SUMARE (SP)","","optcalia-shopping-vitoria"],["d","2026-07",15,"Compras de Mercadorias","",230.18,0,"CD SUMARE (SP)","","optcalia-shopping-vitoria"],["d","2026-08",14,"Compras de Mercadorias","",230.18,0,"CD SUMARE (SP)","","optcalia-shopping-vitoria"],["d","2026-09",13,"Compras de Mercadorias","",230.18,0,"CD SUMARE (SP)","","optcalia-shopping-vitoria"],["d","2026-10",13,"Compras de Mercadorias","",230.17,0,"CD SUMARE (SP)","","optcalia-shopping-vitoria"],["d","2026-04",25,"Taxas e Licenças","",1844.55,0,"ASSOCIACAO DOS LOJISTAS CESSIONARIOS DA MARCA OPTICALIA","","optcalia-shopping-vitoria"],["d","2026-06",1,"Compras de Mercadorias","",2.73,0,"HTK LENTES OFTALMICAS S.A.","","optcalia-shopping-vitoria"],["d","2026-06",30,"Compras de Mercadorias","",2.73,0,"HTK LENTES OFTALMICAS S.A.","","optcalia-shopping-vitoria"],["d","2026-07",30,"Compras de Mercadorias","",2.73,0,"HTK LENTES OFTALMICAS S.A.","","optcalia-shopping-vitoria"],["d","2026-08",31,"Compras de Mercadorias","",2.71,0,"HTK LENTES OFTALMICAS S.A.","","optcalia-shopping-vitoria"],["d","2026-05",24,"Compras de Mercadorias","",16.18,0,"CARL ZEISS VISION BRASIL IND. OPTICA LTDA","","optcalia-shopping-vitoria"],["d","2026-06",23,"Compras de Mercadorias","",16.18,0,"CARL ZEISS VISION BRASIL IND. OPTICA LTDA","","optcalia-shopping-vitoria"],["d","2026-07",23,"Compras de Mercadorias","",16.18,0,"CARL ZEISS VISION BRASIL IND. OPTICA LTDA","","optcalia-shopping-vitoria"],["d","2026-08",22,"Compras de Mercadorias","",16.18,0,"CARL ZEISS VISION BRASIL IND. OPTICA LTDA","","optcalia-shopping-vitoria"],["d","2026-09",21,"Compras de Mercadorias","",16.18,0,"CARL ZEISS VISION BRASIL IND. OPTICA LTDA","","optcalia-shopping-vitoria"],["d","2026-10",21,"Compras de Mercadorias","",16.18,0,"CARL ZEISS VISION BRASIL IND. OPTICA LTDA","","optcalia-shopping-vitoria"],["d","2026-11",20,"Compras de Mercadorias","",16.18,0,"CARL ZEISS VISION BRASIL IND. OPTICA LTDA","","optcalia-shopping-vitoria"],["d","2026-12",20,"Compras de Mercadorias","",16.18,0,"CARL ZEISS VISION BRASIL IND. OPTICA LTDA","","optcalia-shopping-vitoria"],["d","2027-01",19,"Compras de Mercadorias","",16.18,0,"CARL ZEISS VISION BRASIL IND. OPTICA LTDA","","optcalia-shopping-vitoria"],["d","2027-02",18,"Compras de Mercadorias","",16.18,0,"CARL ZEISS VISION BRASIL IND. OPTICA LTDA","","optcalia-shopping-vitoria"],["d","2026-05",23,"Compras de Mercadorias","",4.81,0,"BRASLAB","","optcalia-shopping-vitoria"],["d","2026-06",20,"Compras de Mercadorias","",4.81,0,"BRASLAB","","optcalia-shopping-vitoria"],["d","2026-07",18,"Compras de Mercadorias","",4.81,0,"BRASLAB","","optcalia-shopping-vitoria"],["d","2026-08",15,"Compras de Mercadorias","",4.81,0,"BRASLAB","","optcalia-shopping-vitoria"],["d","2026-09",12,"Compras de Mercadorias","",4.81,0,"BRASLAB","","optcalia-shopping-vitoria"],["d","2026-04",22,"Compras de Mercadorias","",161.6,0,"VILA VELHA","","optcalia-shopping-vitoria"],["d","2026-04",22,"Compras de Mercadorias","",21,0,"VILA VELHA","","optcalia-shopping-vitoria"],["d","2026-05",18,"Compras de Mercadorias","",21.32,0,"BRASLAB","","optcalia-shopping-vitoria"],["d","2026-06",15,"Compras de Mercadorias","",21.32,0,"BRASLAB","","optcalia-shopping-vitoria"],["d","2026-07",13,"Compras de Mercadorias","",21.32,0,"BRASLAB","","optcalia-shopping-vitoria"],["d","2026-08",10,"Compras de Mercadorias","",21.32,0,"BRASLAB","","optcalia-shopping-vitoria"],["d","2026-09",7,"Compras de Mercadorias","",21.32,0,"BRASLAB","","optcalia-shopping-vitoria"],["d","2026-05",27,"Compras de Mercadorias","",785.67,0,"BAUSCH PORTO ALEGRE","","optcalia-shopping-vitoria"],["d","2026-06",26,"Compras de Mercadorias","",785.44,0,"BAUSCH PORTO ALEGRE","","optcalia-shopping-vitoria"],["d","2026-07",26,"Compras de Mercadorias","",785.44,0,"BAUSCH PORTO ALEGRE","","optcalia-shopping-vitoria"],["d","2026-05",28,"Compras de Mercadorias","",31.8,0,"CARL ZEISS VISION BRASIL IND. OPTICA LTDA","","optcalia-shopping-vitoria"],["d","2026-06",27,"Compras de Mercadorias","",31.8,0,"CARL ZEISS VISION BRASIL IND. OPTICA LTDA","","optcalia-shopping-vitoria"],["d","2026-07",27,"Compras de Mercadorias","",31.8,0,"CARL ZEISS VISION BRASIL IND. OPTICA LTDA","","optcalia-shopping-vitoria"],["d","2026-08",26,"Compras de Mercadorias","",31.8,0,"CARL ZEISS VISION BRASIL IND. OPTICA LTDA","","optcalia-shopping-vitoria"],["d","2026-09",25,"Compras de Mercadorias","",31.8,0,"CARL ZEISS VISION BRASIL IND. OPTICA LTDA","","optcalia-shopping-vitoria"],["d","2026-10",25,"Compras de Mercadorias","",31.8,0,"CARL ZEISS VISION BRASIL IND. OPTICA LTDA","","optcalia-shopping-vitoria"],["d","2026-11",24,"Compras de Mercadorias","",31.8,0,"CARL ZEISS VISION BRASIL IND. OPTICA LTDA","","optcalia-shopping-vitoria"],["d","2026-12",24,"Compras de Mercadorias","",31.78,0,"CARL ZEISS VISION BRASIL IND. OPTICA LTDA","","optcalia-shopping-vitoria"],["d","2027-01",23,"Compras de Mercadorias","",31.8,0,"CARL ZEISS VISION BRASIL IND. OPTICA LTDA","","optcalia-shopping-vitoria"],["d","2027-02",22,"Compras de Mercadorias","",31.8,0,"CARL ZEISS VISION BRASIL IND. OPTICA LTDA","","optcalia-shopping-vitoria"],["d","2026-05",29,"Compras de Mercadorias","",79.25,0,"CARL ZEISS VISION BRASIL IND. OPTICA LTDA","","optcalia-shopping-vitoria"],["d","2026-06",28,"Compras de Mercadorias","",79.25,0,"CARL ZEISS VISION BRASIL IND. OPTICA LTDA","","optcalia-shopping-vitoria"],["d","2026-07",28,"Compras de Mercadorias","",79.25,0,"CARL ZEISS VISION BRASIL IND. OPTICA LTDA","","optcalia-shopping-vitoria"],["d","2026-08",27,"Compras de Mercadorias","",79.25,0,"CARL ZEISS VISION BRASIL IND. OPTICA LTDA","","optcalia-shopping-vitoria"],["d","2026-09",26,"Compras de Mercadorias","",79.25,0,"CARL ZEISS VISION BRASIL IND. OPTICA LTDA","","optcalia-shopping-vitoria"],["d","2026-10",26,"Compras de Mercadorias","",79.25,0,"CARL ZEISS VISION BRASIL IND. OPTICA LTDA","","optcalia-shopping-vitoria"],["d","2026-11",25,"Compras de Mercadorias","",79.25,0,"CARL ZEISS VISION BRASIL IND. OPTICA LTDA","","optcalia-shopping-vitoria"],["d","2026-12",25,"Compras de Mercadorias","",79.26,0,"CARL ZEISS VISION BRASIL IND. OPTICA LTDA","","optcalia-shopping-vitoria"],["d","2027-01",24,"Compras de Mercadorias","",79.25,0,"CARL ZEISS VISION BRASIL IND. OPTICA LTDA","","optcalia-shopping-vitoria"],["d","2027-02",23,"Compras de Mercadorias","",79.25,0,"CARL ZEISS VISION BRASIL IND. OPTICA LTDA","","optcalia-shopping-vitoria"],["d","2026-04",27,"Compras de Mercadorias","",10.5,0,"VILA VELHA","","optcalia-shopping-vitoria"],["d","2026-06",1,"Compras de Mercadorias","",10.47,0,"HTK LENTES OFTALMICAS S.A.","","optcalia-shopping-vitoria"],["d","2026-06",30,"Compras de Mercadorias","",10.47,0,"HTK LENTES OFTALMICAS S.A.","","optcalia-shopping-vitoria"],["d","2026-07",30,"Compras de Mercadorias","",10.47,0,"HTK LENTES OFTALMICAS S.A.","","optcalia-shopping-vitoria"],["d","2026-08",31,"Compras de Mercadorias","",10.49,0,"HTK LENTES OFTALMICAS S.A.","","optcalia-shopping-vitoria"],["d","2026-05",7,"Salários","",938.01,0,"ARIADNE DE AZEVEDO ANDRADE","","optcalia-shopping-vitoria"],["d","2026-05",7,"Salários","",2336.51,0,"THAMIRYS CORREA PINTO","","optcalia-shopping-vitoria"],["d","2026-06",3,"Compras de Mercadorias","",58.16,0,"CARL ZEISS VISION BRASIL IND. OPTICA LTDA","","optcalia-shopping-vitoria"],["d","2026-07",3,"Compras de Mercadorias","",58.16,0,"CARL ZEISS VISION BRASIL IND. OPTICA LTDA","","optcalia-shopping-vitoria"],["d","2026-08",2,"Compras de Mercadorias","",58.16,0,"CARL ZEISS VISION BRASIL IND. OPTICA LTDA","","optcalia-shopping-vitoria"],["d","2026-09",1,"Compras de Mercadorias","",58.16,0,"CARL ZEISS VISION BRASIL IND. OPTICA LTDA","","optcalia-shopping-vitoria"],["d","2026-10",1,"Compras de Mercadorias","",58.16,0,"CARL ZEISS VISION BRASIL IND. OPTICA LTDA","","optcalia-shopping-vitoria"],["d","2026-10",31,"Compras de Mercadorias","",58.16,0,"CARL ZEISS VISION BRASIL IND. OPTICA LTDA","","optcalia-shopping-vitoria"],["d","2026-11",30,"Compras de Mercadorias","",58.16,0,"CARL ZEISS VISION BRASIL IND. OPTICA LTDA","","optcalia-shopping-vitoria"],["d","2026-12",30,"Compras de Mercadorias","",58.13,0,"CARL ZEISS VISION BRASIL IND. OPTICA LTDA","","optcalia-shopping-vitoria"],["d","2027-01",29,"Compras de Mercadorias","",58.16,0,"CARL ZEISS VISION BRASIL IND. OPTICA LTDA","","optcalia-shopping-vitoria"],["d","2027-02",28,"Compras de Mercadorias","",58.16,0,"CARL ZEISS VISION BRASIL IND. OPTICA LTDA","","optcalia-shopping-vitoria"],["d","2026-05",28,"Compras de Mercadorias","",11.64,0,"BRASLAB","","optcalia-shopping-vitoria"],["d","2026-06",25,"Compras de Mercadorias","",11.63,0,"BRASLAB","","optcalia-shopping-vitoria"],["d","2026-07",23,"Compras de Mercadorias","",11.63,0,"BRASLAB","","optcalia-shopping-vitoria"],["d","2026-08",20,"Compras de Mercadorias","",11.63,0,"BRASLAB","","optcalia-shopping-vitoria"],["d","2026-09",17,"Compras de Mercadorias","",11.63,0,"BRASLAB","","optcalia-shopping-vitoria"],["d","2026-04",9,"Seguros","",335.75,1,"BRADESCO AUTO/RE COMPANHIA DE SEGUROS","","optcalia-shopping-vitoria"],["d","2026-04",10,"Freelancers","",185.64,1,"THAMIRYS CORREA PINTO","","optcalia-shopping-vitoria"],["d","2026-04",10,"Freelancers","",70.5,1,"ARIADNE DE AZEVEDO ANDRADE","","optcalia-shopping-vitoria"],["d","2026-04",14,"Custo Serviços Terceirizados","",300,1,"RAFAEL FRAGOSO DA SILVA","","optcalia-shopping-vitoria"],["d","2026-04",14,"Internet/Telefone","",99.9,1,"LOGA INTERNET","","optcalia-shopping-vitoria"],["d","2026-04",15,"Rescisões","",3457.86,1,"MARCIO PEREIRA DOS SANTOS","","optcalia-shopping-vitoria"],["d","2026-04",15,"Compras de Mercadorias","",250,1,"TERCEIRIZADOS À PAGAR","","optcalia-shopping-vitoria"],["d","2026-04",16,"Taxas e Licenças","",103.7,1,"Secretaria de Estado da Fazenda","","optcalia-shopping-vitoria"],["d","2026-04",16,"Material de escritório","",60,1,"INVESTIMENTOS À PAGAR","","optcalia-shopping-vitoria"],["d","2026-04",17,"Freelancers","",185.64,1,"ARIADNE DE AZEVEDO ANDRADE","","optcalia-shopping-vitoria"],["d","2026-04",17,"Freelancers","",185.64,1,"OTAVIO MIRANDA COSTA","","optcalia-shopping-vitoria"],["d","2026-04",17,"Freelancers","",70.5,1,"SALÁRIOS À PAGAR","","optcalia-shopping-vitoria"],["d","2026-04",17,"Freelancers","",70.5,1,"THAMIRYS CORREA PINTO","","optcalia-shopping-vitoria"],["d","2026-04",17,"Dividendos","",70,1,"OPTICAL NIT","","optcalia-shopping-vitoria"],["d","2026-04",20,"Adiantamento","",660,1,"Diego Neri dos Santos","","optcalia-shopping-vitoria"],["d","2026-04",20,"Vale Refeição","",40.4,1,"Diego Neri dos Santos","","optcalia-shopping-vitoria"],["d","2026-04",20,"Vale Refeição","",20.2,1,"LUDMILA TEIXEIRA BARATA","","optcalia-shopping-vitoria"],["d","2026-04",20,"Adiantamento","",440,1,"LUDMILA TEIXEIRA BARATA","","optcalia-shopping-vitoria"],["d","2026-04",20,"Vale Refeição","",20,1,"OTAVIO MIRANDA COSTA","","optcalia-shopping-vitoria"],["d","2026-04",20,"Custo Serviços Terceirizados","",170.2,1,"TERCEIRIZADOS À PAGAR","","optcalia-shopping-vitoria"],["d","2026-04",20,"Adiantamento","",220,1,"OTAVIO MIRANDA COSTA","","optcalia-shopping-vitoria"],["d","2026-04",20,"Condomínio","",7925.33,1,"CONDOMINIO DO SHOPPING VITORIA","","optcalia-shopping-vitoria"],["d","2026-04",22,"Adiantamento","",700,1,"ARIADNE DE AZEVEDO ANDRADE","","optcalia-shopping-vitoria"],["d","2026-04",24,"Freelancers","",70.5,1,"ARIADNE DE AZEVEDO ANDRADE","","optcalia-shopping-vitoria"],["d","2026-04",24,"Material de escritório","",160,1,"INVESTIMENTOS À PAGAR","","optcalia-shopping-vitoria"],["d","2026-04",24,"Freelancers","",70.5,1,"OTAVIO MIRANDA COSTA","","optcalia-shopping-vitoria"],["d","2026-04",23,"Compras de Mercadorias","",4430,1,"DEX LUMEN VIX LTDA","","optcalia-shopping-vitoria"],["d","2026-04",27,"Marketing","",197.95,1,"EVALDO DE ALMEIDA HEIDERICH","","optcalia-shopping-vitoria"],["d","2026-04",27,"Custo Consultorias","",315,1,"EVALDO DE ALMEIDA HEIDERICH","","optcalia-shopping-vitoria"],["d","2026-04",27,"Custo Locomoção e Hospedagem Sócios em Viagens","",54.63,1,"EVALDO DE ALMEIDA HEIDERICH","","optcalia-shopping-vitoria"],["d","2026-04",28,"Custo Serviços Terceirizados","",1450,1,"TERCEIRIZADOS À PAGAR","","optcalia-shopping-vitoria"],["d","2026-04",28,"Serviços Softwares","",217.5,1,"E-CLIK","","optcalia-shopping-vitoria"],["d","2026-04",30,"Freelancers","",70.5,1,"OTAVIO MIRANDA COSTA","","optcalia-shopping-vitoria"],["d","2026-04",30,"Outros Custos com Pessoal","",45,1,"VANESSA ALVES PONTES MENEGUETTE","","optcalia-shopping-vitoria"],["d","2026-04",30,"Outros Custos com Pessoal","",45,1,"REEMBOLSO","","optcalia-shopping-vitoria"],["d","2026-04",30,"Vale Refeição","",265.2,1,"VA E VT À PAGAR","","optcalia-shopping-vitoria"],["d","2026-04",30,"Freelancers","",70.5,1,"Diego Neri dos Santos","","optcalia-shopping-vitoria"],["d","2026-04",30,"Vale Refeição","",1940,1,"CAJU","","optcalia-shopping-vitoria"],["d","2026-05",4,"Móveis e Utensílios","",21.62,1,"EVALDO DE ALMEIDA HEIDERICH","","optcalia-shopping-vitoria"],["d","2026-05",4,"Móveis e Utensílios","",27.83,1,"EVALDO DE ALMEIDA HEIDERICH","","optcalia-shopping-vitoria"],["d","2026-05",4,"Contabilidade","",810.5,1,"OFFICE ASSESSORIA CONTABIL LTDA","","optcalia-shopping-vitoria"],["d","2026-05",4,"Seguros","",334.56,1,"BRADESCO AUTO/RE COMPANHIA DE SEGUROS","","optcalia-shopping-vitoria"],["d","2026-05",5,"Vale Refeição","",20,1,"OTAVIO MIRANDA COSTA","","optcalia-shopping-vitoria"],["d","2026-05",5,"Freelancers","",220,1,"OTAVIO MIRANDA COSTA","","optcalia-shopping-vitoria"],["d","2026-05",6,"Tarifas Bancárias","",77.81,1,"REDECARD","","optcalia-shopping-vitoria"],["d","2026-05",6,"Vale Refeição","",430,1,"DENISE SILVA SANTOS","","optcalia-shopping-vitoria"],["d","2026-05",6,"Vale Refeição","",459.46,1,"SALÁRIOS À PAGAR","","optcalia-shopping-vitoria"],["d","2026-05",5,"Tarifas Bancárias","",72.44,1,"REDECARD","","optcalia-shopping-vitoria"],["d","2026-05",5,"Comissões","",242.54,1,"Diego Neri dos Santos","","optcalia-shopping-vitoria"],["d","2026-05",5,"Vale Refeição","",60.6,1,"LUDMILA TEIXEIRA BARATA","","optcalia-shopping-vitoria"],["d","2026-05",5,"Comissões","",28.5,1,"LUDMILA TEIXEIRA BARATA","","optcalia-shopping-vitoria"],["d","2026-05",5,"Freelancers","",330,1,"LUDMILA TEIXEIRA BARATA","","optcalia-shopping-vitoria"],["d","2026-05",5,"Freelancers","",550,1,"Diego Neri dos Santos","","optcalia-shopping-vitoria"],["d","2026-05",5,"Vale Refeição","",101,1,"Diego Neri dos Santos","","optcalia-shopping-vitoria"],["d","2026-05",5,"Compras de Mercadorias","",235.17,1,"CD SUMARE (SP)","","optcalia-shopping-vitoria"]];

const REF_YEAR = 2026;
const AVAILABLE_YEARS = [2027,2026,2025];

// aggregateTx: recomputa MONTH_DATA, KPIS, top categorias/clientes/fornecedores
// e EXTRATO a partir de uma lista filtrada de transacoes. Chamada pelas Pages
// quando drilldown ou statusFilter estao ativos.
function aggregateTx(txList, year) {
  year = year || REF_YEAR;
  const months = ["janeiro","fevereiro","março","abril","maio","junho","julho","agosto","setembro","outubro","novembro","dezembro"];
  const MONTH_DATA = months.map(m => ({ m, receita: 0, despesa: 0 }));
  const recCat = new Map(), despCat = new Map();
  const recCli = new Map(), despForn = new Map();
  const extratoArr = [];
  const extratoRecArr = [], extratoDespArr = [];
  let totalReceita = 0, totalDespesa = 0;

  for (const row of txList) {
    const [kind, mes, dia, categoria, cliente, valor, realizado, fornecedor, cc] = row;
    if (!mes) continue;
    const ymonth = mes.slice(0,4);
    if (Number(ymonth) !== year) continue;
    const mIdx = parseInt(mes.slice(5,7), 10) - 1;
    if (mIdx < 0 || mIdx > 11) continue;
    if (kind === 'r') {
      MONTH_DATA[mIdx].receita += valor;
      totalReceita += valor;
      recCat.set(categoria, (recCat.get(categoria) || 0) + valor);
      if (cliente) recCli.set(cliente, (recCli.get(cliente) || 0) + valor);
    } else {
      MONTH_DATA[mIdx].despesa += valor;
      totalDespesa += valor;
      despCat.set(categoria, (despCat.get(categoria) || 0) + valor);
      if (fornecedor) despForn.set(fornecedor, (despForn.get(fornecedor) || 0) + valor);
    }
    // Extrato compacto pra tabela (renomeado pra extRow porque outer for já usa 'row')
    const dataStr = String(dia).padStart(2,'0') + '/' + mes.slice(5,7) + '/' + mes.slice(0,4);
    const extRow = [dataStr, cc || 'Operações', categoria, kind === 'r' ? cliente : fornecedor, kind === 'r' ? valor : -valor, realizado ? 'PAGO' : ''];
    extratoArr.push(extRow);
    if (kind === 'r') extratoRecArr.push(extRow); else extratoDespArr.push(extRow);
  }

  // sort por data desc (string DD/MM/YYYY → Date) — aplica nos 3 arrays
  const sortByDateDesc = (a, b) => {
    const [da,ma,ya] = a[0].split('/').map(Number);
    const [db,mb,yb] = b[0].split('/').map(Number);
    return new Date(yb,mb-1,db) - new Date(ya,ma-1,da);
  };
  extratoArr.sort(sortByDateDesc);
  extratoRecArr.sort(sortByDateDesc);
  extratoDespArr.sort(sortByDateDesc);

  const topN = (mp, n) => Array.from(mp.entries()).map(([name,value]) => ({name,value})).sort((a,b)=>b.value-a.value).slice(0,n);
  const VALOR_LIQUIDO = totalReceita - totalDespesa;
  const MARGEM_LIQUIDA = totalReceita > 0 ? (VALOR_LIQUIDO / totalReceita) * 100 : 0;

  return {
    MONTH_DATA,
    RECEITA_CATEGORIAS: topN(recCat, 12),
    DESPESA_CATEGORIAS: topN(despCat, 12),
    RECEITA_CLIENTES: topN(recCli, 12),
    DESPESA_FORNECEDORES: topN(despForn, 12),
    EXTRATO: extratoArr.slice(0, 200),
    EXTRATO_RECEITAS: extratoRecArr.slice(0, 200),
    EXTRATO_DESPESAS: extratoDespArr.slice(0, 200),
    KPIS: {
      TOTAL_RECEITA: totalReceita,
      TOTAL_DESPESA: totalDespesa,
      VALOR_LIQUIDO,
      MARGEM_LIQUIDA,
      VALOR_LIQ_SERIES: MONTH_DATA.map(m => m.receita - m.despesa),
    },
  };
}

// applyDrilldown: filtra ALL_TX baseado em statusFilter + drilldown.
// statusFilter: 'realizado' | 'a_pagar_receber' | 'tudo'
// drilldown: null | { type: 'mes'|'categoria'|'cliente'|'fornecedor'|'conta', value: ... }
function filterTx(allTx, statusFilter, drilldown) {
  let out = allTx;
  if (statusFilter === 'realizado') out = out.filter(r => r[6] === 1);
  else if (statusFilter === 'a_pagar_receber') out = out.filter(r => r[6] === 0);
  if (drilldown) {
    if (drilldown.type === 'mes') out = out.filter(r => r[1] === drilldown.value);
    else if (drilldown.type === 'categoria') out = out.filter(r => r[3] === drilldown.value);
    else if (drilldown.type === 'cliente') out = out.filter(r => r[0] === 'r' && r[4] === drilldown.value);
    else if (drilldown.type === 'fornecedor') out = out.filter(r => r[0] === 'd' && r[7] === drilldown.value);
    else if (drilldown.type === 'conta') out = out.filter(r => r[9] === drilldown.value);
  }
  return out;
}

// Sintetiza um BIT "flat" baseado no filtro escolhido (window.BIT_FILTER).
// Default: 'realizado' (PAGO).
function _makeBit(filter) {
  const seg = SEGMENTS[filter] || SEGMENTS.realizado;
  const K = seg.KPIS;
  const indicadores = {
    TOTAL_RECEITA: K.TOTAL_RECEITA,
    TOTAL_DESPESA: K.TOTAL_DESPESA,
    VALOR_LIQUIDO: K.VALOR_LIQUIDO,
    MARGEM_LIQUIDA: K.MARGEM_LIQUIDA,
    IMPOSTOS: 0,
    EBITDA: K.VALOR_LIQUIDO,
    RESULTADO_OPERACIONAL: K.VALOR_LIQUIDO,
    CAPEX: 0,
    MARGEM_CONTRIB: K.MARGEM_LIQUIDA,
    EBITDA_PCT: K.MARGEM_LIQUIDA,
    IMPOSTOS_PCT: 0,
  };
  return Object.assign({
    META, POSICAO_CAIXA, COMPOSICAO_DESPESA, CONTAS, MONTH_DRE, ORCAMENTO, DRE_BY_CONTA,
    MONTHS, MONTHS_FULL, fmt, fmtK, fmtPct,
    SEGMENTS,
    MONTH_DATA: seg.MONTH_DATA,
    RECEITA_CATEGORIAS: seg.RECEITA_CATEGORIAS,
    DESPESA_CATEGORIAS: seg.DESPESA_CATEGORIAS,
    RECEITA_CLIENTES: seg.RECEITA_CLIENTES,
    DESPESA_FORNECEDORES: seg.DESPESA_FORNECEDORES,
    EXTRATO: seg.EXTRATO,
    DIAS: Array.from({ length: 31 }, (_, i) => i + 1),
    RECEITA_DIA: seg.RECEITA_DIA,
    DESPESA_DIA: seg.DESPESA_DIA,
    SALDOS_MES: seg.SALDOS_MES,
    VALOR_LIQ_SERIES: K.VALOR_LIQ_SERIES,
    FLUXO_RECEITA: seg.FLUXO_RECEITA,
    FLUXO_DESPESA: seg.FLUXO_DESPESA,
    COMP_DATA: seg.COMP_DATA,
    RECDESP_AREA: seg.MONTH_DATA.map(m => ({ m: m.m.slice(0,3), receita: m.receita, despesa: m.despesa })),
  }, indicadores);
}

window.BIT = _makeBit(window.BIT_FILTER || 'realizado');
window._makeBit = _makeBit;
window.BIT_SEGMENTS = SEGMENTS;
window.BIT_META = META;
window.ALL_TX = ALL_TX;
window.REF_YEAR = REF_YEAR;
window.AVAILABLE_YEARS = AVAILABLE_YEARS;
window.aggregateTx = aggregateTx;
window.filterTx = filterTx;
// getBit: SEMPRE recomputa via recomputeBit (sem cache de window.BIT).
// Evita lag no toggle Previsto/Realizado e suporta year/month arbitrario.
// month: 0 = ano completo, 1-12 = mes especifico.
window.getBit = function (statusFilter, drilldown, year, month) {
  const sf = statusFilter || window.BIT_FILTER || 'realizado';
  const y = year || window.REF_YEAR;
  let dd = drilldown;
  if (!dd && month && month >= 1 && month <= 12) {
    const mm = String(month).padStart(2, '0');
    const ym = y + '-' + mm;
    dd = { type: 'mes', value: ym, label: ym };
  }
  return window.recomputeBit(sf, dd, y);
};
// Cross-filter helper: combina statusFilter + drilldown e retorna BIT-like
// com KPIs/charts/extrato recalculados em ~10ms (17k rows).
window.recomputeBit = function (statusFilter, drilldown, year) {
  const filtered = filterTx(ALL_TX, statusFilter, drilldown);
  const agg = aggregateTx(filtered, year || REF_YEAR);
  // Mescla com BIT base pra preservar META, helpers (fmt, fmtK), MONTHS etc.
  const base = window.BIT || {};
  return Object.assign({}, base, agg, {
    TOTAL_RECEITA: agg.KPIS.TOTAL_RECEITA,
    TOTAL_DESPESA: agg.KPIS.TOTAL_DESPESA,
    VALOR_LIQUIDO: agg.KPIS.VALOR_LIQUIDO,
    MARGEM_LIQUIDA: agg.KPIS.MARGEM_LIQUIDA,
  });
};
