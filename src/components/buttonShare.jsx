import React from 'react';


<Button 
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
</Button>