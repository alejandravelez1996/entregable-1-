export const getRandom = (list) => {
    const randonIndex = Math.floor(Math.random()* list.length) 
    return list[randonIndex]
   }

