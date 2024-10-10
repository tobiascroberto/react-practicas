
{/*Se puede agregar valores por default en las props!!*/}
export default function TabsMenu({
    buttons = <li><button>Boton por defecto</button></li>,
    children = <p>Contenido por defecto</p>,
    ButtonContainer = "menu"
}){
    return(
        <>
        <ButtonContainer>
            {buttons}
        </ButtonContainer>
        {children}
        </>
    );
}