import React, { useState } from 'react'



// class Categories extends React.Component{
  
//   state ={
//     activeItem: 3,
//     test:123
//   }
//   onSelectItem= (index) => {
//     this.setState({
//       activeItem:index,
//       test:index
//     })
//    }
  
//   render() {
 
// const {items,onClick} = this.props
//     return (
//           <div className="categories">
//           <ul>
//             <li className='active'>Все</li>
//             {
//               items.map((item,index) => <li onClick={() => this.onSelectItem(index)} key={`${item}_${index}`}
//                className={this.state.activeItem === index?"active":""}>{item}</li>)
//             }
//           </ul>
//         </div>
//         )
//   }
// }

function Categories({items,onClick}) {
  const [activeItem,setActiveItem] =  useState("")
  
  /*  const onSelectItem = (index) =>{
    setActiveItem(index)
  }  */
  return (
    <div className="categories">
    <ul>
      <li onClick={() => setActiveItem(null)} className={activeItem === null?"active":""}>Все</li>
      {
        items.map((item,index) => <li onClick={() => setActiveItem(index)} key={`${item}_${index}`}
         className={activeItem === index?"active": ""}>{item}</li>)
      }
    </ul>
  </div>
  )
}

export default Categories


  