import React from 'react';
import './App.css';
import {
 HashRouter as Router,
 Switch,
 Route,
} from  'react-router-dom';
import Main from './screens/Main';
import SecondScreen from './screens/SecondScreen';
import ThreeScreen from './screens/ThreeScreen';
import ImageCarousel from './screens/ImageCarousel';
import QuestionOne from './screens/QuestionOne';
import QuestionTwo from './screens/QuestionTwo';
import MultiBeneficiosMain from './screens/Multibeneficios/MultiBeneficiosMain';
import MultiBeneficiosMenu from './screens/Multibeneficios/MultiBeneficiosMenu';
import TotalCleanMint from './screens/Multibeneficios/TotalCleanMint';
import SaludVisible from './screens/Multibeneficios/SaludVisible';
import EnciasSaludables from './screens/Multibeneficios/EnciasSaludables';
import AlientoSaludable from './screens/Multibeneficios/AlientoSaludable';
import ResultQuestions from './screens/ResultQuestions';
import AdvancedTotal from './screens/Multibeneficios/AdvancedTotal';
import UltraSoft from './screens/Multibeneficios/UltraSoft';
/* Blanqueamiento Screens*/
import LuminousWhite from './screens/Blanqueamiento/LuminousWhite';
import BlanqueamientoMenu from './screens/Blanqueamiento/BlanqueamientoMenu';
import LuminousWhiteNormal from './screens/Blanqueamiento/LuminousWhiteNormal';
import LuminousWhiteInstant from './screens/Blanqueamiento/LuminousWhiteInstant';
import CarbonActivado from './screens/Blanqueamiento/CarbonActivado';
import MaxWhite from './screens/Blanqueamiento/MaxWhite';
import AdvancedLuminousWhite from './screens/Blanqueamiento/AdvancedLuminousWhite';
import LuminousWhite360 from './screens/Blanqueamiento/LuminousWhite360';
import EnjuagueLuminousWhite from './screens/Blanqueamiento/EnjuagueLuminousWhite';
/* Salud Natural Screens */
import SaludNaturalMain from'./screens/SaludNatural/SaludNaturalMain'
import SaludNaturalMenu from'./screens/SaludNatural/SaludNaturalMenu'
import SaludNaturalDefensaReforzada from'./screens/SaludNatural/SaludNaturalDefensaReforzada'
import SaludNaturalDetox from'./screens/SaludNatural/SaludNaturalDetox'
import SaludNaturalPurificante from'./screens/SaludNatural/SaludNaturalPurificante'
import SaludNaturalBamboo from'./screens/SaludNatural/SaludNaturalBamboo'
/* Cuidado Familiar Screens */
import CuidadoFamiliarMain from'./screens/CuidadoFamiliar/CuidadoFamiliarMain'
import CuidadoFamiliarMenu from'./screens/CuidadoFamiliar/CuidadoFamiliarMenu'
import CuidadoFamiliarMaximaProteccion from'./screens/CuidadoFamiliar/CuidadoFamiliarMaximaProteccion'
import CuidadoFamiliarMentaOriginal from'./screens/CuidadoFamiliar/CuidadoFamiliarMentaOriginal'
import CuidadoFamiliarXtraBlancura from'./screens/CuidadoFamiliar/CuidadoFamiliarXtraBlancura'
import CuidadoFamiliarXtraFrescura from'./screens/CuidadoFamiliar/CuidadoFamiliarXtraFrescura'
import CuidadoFamiliarTripleAccion from'./screens/CuidadoFamiliar/CuidadoFamiliarTripleAccion'
import CuidadoFamiliarSoftMint from'./screens/CuidadoFamiliar/CuidadoFamiliarSoftMint'
/* Sensibilidad Screens */
import SensibilidadMain from'./screens/Sensibilidad/SensibilidadMain'
import SensibilidadMenu from'./screens/Sensibilidad/SensibilidadMenu'
import SensibilidadRealWhite from'./screens/Sensibilidad/SensibilidadRealWhite'
import SensibilidadReparacionCompleta from'./screens/Sensibilidad/SensibilidadReparacionCompleta'
import SensibilidadProalivioOriginal from'./screens/Sensibilidad/SensibilidadProalivioOriginal'
import SensibilidadBlanqueamiento from'./screens/Sensibilidad/SensibilidadBlanqueamiento'
import SensibilidadProAlivioInmediato from'./screens/Sensibilidad/SensibilidadProalivioInmediato'
import SensibilidadCepillos from'./screens/Sensibilidad/SensibilidadCepillos'
import SensibilidadEnjuague from'./screens/Sensibilidad/SensibilidadEnjuague'
/* Cuidado de los mas peques Screens */
import CuidadoDeLosMasPequesMain from './screens/CuidadoDeLosMasPeques/CuidadoDeLosMasPequesMain'
import CuidadoDeLosMasPequesMenu from './screens/CuidadoDeLosMasPeques/CuidadoDeLosMasPequesMenu'
import CuidadoDeLosMasPequesBarbieMinions from './screens/CuidadoDeLosMasPeques/CuidadoDeLosMasPequesBarbieMinions'
import CuidadoDeLosMasPequesLigaDeLaJusticia from './screens/CuidadoDeLosMasPeques/CuidadoDeLosMasPequesLigaDeLaJusticia'
import CuidadoDeLosMasPequesCepillos from './screens/CuidadoDeLosMasPeques/CuidadoDeLosMasPequesCepillos'
import CuidadoDeLosMasPequesEnjuague from './screens/CuidadoDeLosMasPeques/CuidadoDeLosMasPequesEnjuague'
/* Fin Screens */
import MejoraTuSonrisa from './screens/MejoraTuSonrisa/MejoraTuSonrisa';
import CepillaTusDientes from './screens/MejoraTuSonrisa/CepillaTusDientes';
import UsaEnjuagueBucal from './screens/MejoraTuSonrisa/UsaEnjuagueBucal';
import VisitaAlDentista from './screens/MejoraTuSonrisa/VisitaAlDentista';
import CambiaTuCepillodeDientes from './screens/MejoraTuSonrisa/CambiaTuCepillodeDientes';
import ConsejosparaUnaBocaSana from './screens/MejoraTuSonrisa/ConsejosparaUnaBocaSana';


/* Mundo de ninios*/
import MundodeNinios from './screens/MundodeNinios/Mundodeninios';
class App extends React.Component{

  constructor(props){

    super(props);

    this.state = {
 
    }
  }

  render(){
    return (

       <Router>
        <Switch>
          <Route exact 
            path="/"
            component={Main}
           />
          <Route 
            path="/sencondscreen"
            component={SecondScreen}
          />
          <Route 
            path="/threescreen"
            component={ThreeScreen}
          />
          <Route
            path="/imagecarousel"
            component={ImageCarousel}
           />
           <Route
            path="/questionone"
            component={QuestionOne}
           />
           <Route
            path="/questiontwo"
            component={QuestionTwo}
           />
           <Route
            path="/multibeneficios/"
            component={MultiBeneficiosMain}
           />
           <Route
            path="/multibeneficiosmenu/"
            component={MultiBeneficiosMenu}
           />
           <Route
            path="/totalcleanmint/"
            component={TotalCleanMint}
           />
           <Route
            path="/saludvisible/"
            component={SaludVisible}
           />
           <Route
            path="/enciasaludables/"
            component={EnciasSaludables}
           />
           <Route
            path="/alientosaludable/"
            component={AlientoSaludable}
           />
           <Route
             path="/resultquestions"
             component={ResultQuestions}
           />
           <Route
             path="/advancedtotal"
             component={AdvancedTotal}
           />
           <Route
             path="/ultrasoft"
             component={UltraSoft}
           />
           <Route
             path="/luminouswhite"
             component={LuminousWhite}
           />
           <Route
             path="/blanqueamientomenu"
             component={BlanqueamientoMenu}
           />
           <Route
             path="/luminouswhitenormal"
             component={LuminousWhiteNormal}
           />  
           <Route
             path="/luminouswhiteinstant"
             component={LuminousWhiteInstant}
           /> 
           <Route
             path="/carbonactivado"
             component={CarbonActivado}
           />
          <Route
             path="/maxwhite"
             component={MaxWhite}
           />
          <Route
             path="/advancedluminouswhite"
             component={AdvancedLuminousWhite}
           />  
          <Route
             path="/luminouswhite360"
             component={LuminousWhite360}
           />
          <Route
            path="/enjuagueLuminousWhite"
            component={EnjuagueLuminousWhite}
          />
          <Route /* SALUD NATURAL */
            path="/saludnatural"
            component={SaludNaturalMain}
          />                   
          <Route
            path="/saludnaturalmenu"
            component={SaludNaturalMenu}
          />                   
          <Route
            path="/saludnaturaldefensareforzada"
            component={SaludNaturalDefensaReforzada}
          />                   
          <Route
            path="/saludnaturaldetox"
            component={SaludNaturalDetox}
          />                   
          <Route
            path="/saludnaturalpurificante"
            component={SaludNaturalPurificante}
          />                   
          <Route
            path="/saludnaturalbamboo"
            component={SaludNaturalBamboo}
          />                   
          <Route /* CUIDADO FAMILIAR */
            path="/cuidadofamiliar"
            component={CuidadoFamiliarMain}
          />                   
          <Route
            path="/cuidadofamiliarmenu"
            component={CuidadoFamiliarMenu}
          />                   
          <Route
            path="/cuidadofamiliarmaximaproteccion"
            component={CuidadoFamiliarMaximaProteccion}
          />                   
          <Route
            path="/cuidadofamiliarmentaoriginal"
            component={CuidadoFamiliarMentaOriginal}
          />                   
          <Route
            path="/cuidadofamiliarxtrablancura"
            component={CuidadoFamiliarXtraBlancura}
          />                   
          <Route
            path="/cuidadofamiliarxtrafrescura"
            component={CuidadoFamiliarXtraFrescura}
          />                   
          <Route
            path="/cuidadofamiliartripleaccion"
            component={CuidadoFamiliarTripleAccion}
          />                   
          <Route
            path="/cuidadofamiliarsoftmint"
            component={CuidadoFamiliarSoftMint}
          />                   
          <Route /* SENSIBILIDAD */
            path="/sensibilidad"
            component={SensibilidadMain}
          />                   
          <Route
            path="/sensibilidadmenu"
            component={SensibilidadMenu}
          />                   
          <Route
            path="/sensibilidadrealwhite"
            component={SensibilidadRealWhite}
          />                   
          <Route
            path="/sensibilidadreparacioncompleta"
            component={SensibilidadReparacionCompleta}
          />                   
          <Route
            path="/sensibilidadproaliviooriginal"
            component={SensibilidadProalivioOriginal}
          />                   
          <Route
            path="/sensibilidadblanqueamiento"
            component={SensibilidadBlanqueamiento}
          />                   
          <Route
            path="/sensibilidadproalivioinmediato"
            component={SensibilidadProAlivioInmediato}
          />                   
          <Route
            path="/sensibilidadcepillos"
            component={SensibilidadCepillos}
          />                   
          <Route
            path="/sensibilidadenjuague"
            component={SensibilidadEnjuague}
          />
          <Route /* CUIDADO DE LOS MAS PEQUEÑOS  */
            path='/cuidadodelosmaspeques'
            component={CuidadoDeLosMasPequesMain}
          />
          <Route
            path='/cuidadodelosmaspequesmenu'
            component={CuidadoDeLosMasPequesMenu}
          />
          <Route
            path='/cuidadodelosmaspequesbarbieminions'
            component={CuidadoDeLosMasPequesBarbieMinions}
          />
          <Route
            path='/cuidadodelosmaspequesligadelajusticia'
            component={CuidadoDeLosMasPequesLigaDeLaJusticia}
          />
          <Route
            path='/cuidadodelosmaspequescepillos'
            component={CuidadoDeLosMasPequesCepillos}
          />
          <Route
            path='/cuidadodelosmaspequesenjuague'
            component={CuidadoDeLosMasPequesEnjuague}
          />
          <Route 
            path="/mejoratusonrisa"
            component={MejoraTuSonrisa}
          />
          <Route 
            path="/cepillatusdientes"
            component={CepillaTusDientes}
          />
          <Route 
            path="/usaenjuaguebucal"
            component={UsaEnjuagueBucal}
          />
          <Route 
            path="/visitaldentista"
            component={VisitaAlDentista}
          />
          <Route 
            path="/cambiatucepillodedientes"
            component={CambiaTuCepillodeDientes}
          />
          <Route 
            path="/consejosparaunabocasana"
            component={ConsejosparaUnaBocaSana}
          />
          <Route 
            path="/Mundodeninios"
            component={MundodeNinios}
          />              
        </Switch>
      </Router>
    );
  }
}

export default App;