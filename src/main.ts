import "./style.css";

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
  <iframe allow="*" csp="default-src 'self' *.kookapp.cn kookapp.cn" referrerpolicy="no-referrer" src="https://www.kookapp.cn/app"></iframe>
`;
