export function selectBook(book){
    //select Book is an action creator, it return an action,
    // an object with type property
    return {
        type:'BOOK_SELECTED',
        payload: book
    }
}