import React from 'react';
import * as AiIcons from 'react-icons/ai';


function ButtonShare() {

return (
  <AiIcons.AiOutlineShareAlt size={45} style={{'color': '#6a82fb'}} cursor='pointer'/>
)


   }

export default ButtonShare

/* <Button 
  className='myWonderfulButton'
  onClick={
    () => { 
      navigator.share({
       title: 'Share', 
       text:  'whatevs'                     
       url:   this.state.link
      }
    )}
    }>
     Compartilhar
</Button> */