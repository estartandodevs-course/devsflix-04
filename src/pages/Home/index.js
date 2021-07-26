import { Header } from "../../components/Header";
import { Suggestions } from "../../components/ContainerSuggestions";
import { SectionDescription } from "../SectionDescription";
import { Icons } from "../../components/ContainerIcons";
import { CatalogCard } from "../../components/ContainerCatalogCard";


const Home = () => {
  return (
    <>
      <Header title="Bohemian Rhapsody" />
      <Icons />
      <CatalogCard title="25,000 films and soap operas for free" />
      <SectionDescription />
      <Suggestions sectionTitle="Similar films" />
    </>
  );
};
export { Home };
