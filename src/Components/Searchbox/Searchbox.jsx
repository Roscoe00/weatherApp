import React from 'react'

const Searchbox = (props) => {
   // console.log(props)
   const { setSearchTerm, handleSubmit } = props;
   return (
      <div>
         <form onSubmit={(search) => handleSubmit(search)}>
            <input type="text"
               onInput={(search) => setSearchTerm(search.target.value)}
            />
            <button type='submit'>Search</button>
         </form>
      </div>
   )
}

export default Searchbox