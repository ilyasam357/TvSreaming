import CardDark from "../uiDark/TemplateDark";

function MainContent({ children }) {
  return (
    <CardDark>
      <section className=" dark:bg-slate-800">{children}</section>
    </CardDark>
  );
}

export default MainContent;
