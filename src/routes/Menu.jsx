const Menu = () => {
  return (
    <>
      <div className="p-8 bg-gray-100 min-h-screen flex flex-col items-center text-black">
        <h1>Wybierz Swoją Idealną Miskę</h1>
        <ul>
          Rameny:
          <li>
            Tonkotsu Ramen – kremowy bulion wieprzowy, makaron, jajko
            marynowane, chashu, szczypiorek
          </li>
          <li>
            Shoyu Ramen – bulion na bazie sosu sojowego, pieczona wieprzowina,
            bambus, jajko
          </li>
          <li>
            Miso Ramen – esencjonalny bulion miso, mielona wieprzowina,
            kukurydza, masło
          </li>
        </ul>
        <ul>
          Przystawki:
          <li>Gyoza – chrupiące pierożki z wieprzowiną i warzywami</li>
          <li>Edamame – zielona soja z solą morską</li>
          <li>Karaage – japoński kurczak w chrupiącej panierce</li>
         <p>Dostosuj swój ramen! Dodaj dodatkowe składniki, wybierz poziom
         ostrości lub wegańską opcję!</p> 
        </ul>
      </div>
    </>
  );
};

export default Menu;
