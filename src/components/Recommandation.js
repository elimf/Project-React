
function Recommandation() {
  const currenthMonth = new Date().getMonth();
  const isSpring = currenthMonth >= 2 && currenthMonth <= 5;
  if (!isSpring) {
      return <div> Ce n'est pas le moment de rempoter </div>;
      
  }
  return <div>C'est le printemps, rempoter</div>
}
export default Recommandation
    