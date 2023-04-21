export const Obfuscated = (props) => {
  const obfuscated = props.children
    .split("")
    .map((char, index) => <span key={index}>{char}</span>);
  return <div className="obfuscated">{obfuscated}</div>;
};

export const githubLink = "https://github.com/Typhoon-Games";
export const discordLink = "https://discord.gg/MRbGSskmZz";

export const isMobile = /Mobi/i.test(navigator.userAgent) || /Android/i.test(navigator.userAgent) || /webOS/i.test(navigator.userAgent) || /iPhone/i.test(navigator.userAgent) || /iPad/i.test(navigator.userAgent) || /iPod/i.test(navigator.userAgent) || /BlackBerry/i.test(navigator.userAgent) || /Windows Phone/i.test(navigator.userAgent);