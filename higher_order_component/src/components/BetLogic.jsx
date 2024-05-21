import React,{useState} from 'react'

function BetLogic(MainLogic) {
    function HandleLogic()
    {
        const [money,setMoney] = useState(10)
        function handleIncrease()
        {
            setMoney(money*2)
        }
        return <MainLogic M={money} HC={handleIncrease}/>
    }
  return HandleLogic
}

export default BetLogic 