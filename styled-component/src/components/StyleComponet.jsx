import React from 'react'
import styled, { css, keyframes, ThemeProvider, createGlobalStyle } from 'styled-components'

const StyleComponet = () => {

   let maincolor = "#db7093" //,
   // mainAlphaColor80 = "#db709380"

   // creamos una funcion para poder utilizarla en el styled components
   const setTransitionTime = (time) => `all ${time} ease-in-out`;

   const fadeIn = keyframes`
      0%{
         opacity:0;
      }

      50%{
         opacity:1

      }

      100%{
         opacity:0
      }
   `;

   // RECORDAR QUE ES UN TEMPLATE STRING SE PUEDE INTERPOLAR VARIABLES
   const ScH2 = styled.h2`
      padding: 1rem;
      text-align: center;
      background-color: ${maincolor};
      transition: ${setTransitionTime(".5s")};

      /* utilizamos props que le mandamos al componente */
      background-color:${(props) => props.color};
      
      /* renderizado condicional */
      background-color:${(props) => props.color || "#000"};

      /* animacion */
      animation: ${fadeIn} 2s infinite alternate;

      /* renderizado condicional si existe una propiedad o prop, utilizamos css que importamos de styled component
         utilizamos esta forma ya que si queremos meter mas css dentro de un template string
      */
      ${(props) => props.isButton && css`
         margin: auto;
         border-radius: 20px;
         cursor: pointer;
      ` }

      /* podemos utilziar tambien de sass su hover */
      &:hover{
         filter: brightness(.7);
      }

`
   // creamos objetos estylos para pasarselos al provider
   const ligth = {
      color: "#222",
      bgColor: "#DDD"
   }

   const dark = {
      color: "#DDD",
      bgColor: "#222"
   }

   const Box = styled.div`
      padding: 1rem;
      margin:1rem;
      color:${(props) => props.theme.color};
      background-color:${(props) => props.theme.bgColor};
   `

   // Ahora eredamos stylos usando styled. osea eredamos todo los estylos del Box y despues ponemos el nuestro que queramos
   const BoxRounded = styled(Box)`
      border-radius:1rem;
   `

   // Estylos globales esto como estamos ahora practicando esto es recomendable que valla en index o app
   const GlobalStyle = createGlobalStyle`
      /* aca dentro podemos poner css como si fuera una hoja de estylos */
      h2{
         padding: 2rem;
         display:block;
         text-transform: uppercase;
      }

   `;

   return (
      <>
         {/* ponemos de esta forma el estylo global para todo */}
         <GlobalStyle />
         <ScH2>
            Practicando Styled Components
         </ScH2>

         <ScH2 color="#4e7072">
            Practicando Styled Components props
         </ScH2>

         <ScH2 isButton>
            soy un boton
         </ScH2>

         <p>Aplicando ThemeProvider</p>

         <ThemeProvider theme={ligth}>
            <Box>Caja Ligth</Box>
         </ThemeProvider>

         <ThemeProvider theme={dark}>

            <Box>Caja Dark</Box>
            {/* tiene que estar aca adentro la herencia por que estamos utilizando providers para pasarle al Box css del theme */}
            <p>Usando erencia se ve que eredamos todo del box pero tambien le agregamos otra propiedad</p>
            <BoxRounded>Caja con border redondeados</BoxRounded>

         </ThemeProvider>

      </>
   )
}

export default StyleComponet
