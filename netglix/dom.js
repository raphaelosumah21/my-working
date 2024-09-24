//const items = document.querySelectorAll('input')
const button = document.querySelectorAll('button')


const checkseats = () => {
    let inputs =[];
    for (let i; i <= 39; i++){
        let items = document.getElementById(i);
        if (i < 7) {
            // document.getElementById(i)
            items.style.backgroundSolor = 'green'
        }
        if(inputs.value=== '') values.push(0)
            else values.push(inputs.value)
}
      canSeeFrontStage(values)

}
 const canSeeFrontStage = (arr) =>{
       let successColor = 'green'
       let failureColor = 'red'
 }