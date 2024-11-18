import './App.css';
import { useState} from 'react'

function App() {
    const names = [
    ['11', 'PALLAVI PATIL'],
    ['20', 'PRIYANSH GANG'],
    ['21', 'PRIYANSHI PATIDAR'],
    ['22', 'PRIYANSHU RATHORE'],
    ['23', 'PRIYANSHU THAKUR'],
    ['24', 'RAJ GUPTA'],
    ['25', 'RAJDEEP PATIDAR'],
    ['26', 'RAJESHWARI'],
    ['27', 'RAJU SHARMA'],
    ['29', 'RATHORE PARAS'],
    ['30', 'REENA DHAKE'],
    ['31', 'RIDYANSHI CHOUHAN'],
    ['32', 'RISHABH TONGIA'],
    ['33', 'RISHI JOSHI'],
    ['34', 'RISHI PIMPALKAR'],
    ['35', 'RISHITA SHAH'],
    ['36', 'RITIK PATIDAR'],
    ['37', 'ROHAN PAWAR'],
    ['38', 'ROHIT SINGH'],
    ['39', 'RUCHI BHADORIYA'],
    ['40', 'SAKSHI GOSAVI'],
    ['41', 'SAKSHI PATIL'],
    ['42', 'SALONI PATIDAR'],
    ['43', 'SALONI THAKUR'],
    ['44', 'SANGAM GEHLOT'],
    ['45', 'SANIYA MANSOORI'],
    ['46', 'SHADAB QURESHI'],
    ['47', 'SHAILESH MISHRA'],
    ['48', 'SHIVAM PARMAR'],
    ['49', 'SHIVAM S. SURYAVANSHI'],
    ['50', 'SHREYA JAISWAL'],
    ['51', 'SHREYA MAHAJAN'],
    ['52', 'SHREYANSH KALE'],
    ['53', 'SHUBH TIWARI'],
    ['54', 'SIDDANT LOWANSHI'],
    ['55', 'SIDDHARTH DUBEY'],
    ['56', 'SIDDHARTH HIRANI'],
    ['57', 'SIDDHI GHOSLE'],
    ['58', 'SIDHHARTH JHA'],
    ['59', 'SIFTY KAUR GANDHI'],
    ['60', 'SUDHANSHU BHADORIYA'],
    ['61', 'SUHANI JAISWAL'],
    ['62', 'SUMIT RATHORE'],
    ['63', 'SUMIT THAKUR'],
    ['64', 'TANISH MODH'],
    ['65', 'TANISHA VERMA'],
    ['66', 'TANISHQ TRIVEDI'],
    ['67', 'TEJASWINI PATIL'],
    ['69', 'VAIBHAV MANDLIYA'],
    ['71', 'VAIDEHI PATIDAR'],
    ['72', 'VIJAY DODIYA'],
    ['73', 'VIJAY MANKER'],
    ['74', 'VIJAY SINGH PARIHAR'],
    ['75', 'VINAY PATIDAR'],
    ['76', 'YASH TIWARI'],
    ['77', 'YASH VIJAYVARGIYA'],
    ['78', 'YOGANSH NINDARWAR'],
    ['79', 'YUSUF AMJHERAWALA'],
    ['80', 'ZAHARA RANGWALA']
    ]
    const [colorStyle,setColorStyle] = useState(0);
    const [num,setNum] = useState(0)
    const [final,setFinal] = useState([]);

    const handleUndo = ()=>{
        setNum((prev)=>prev===0?prev:prev-1);
        
        let n = final.length;
        if(n === 0)return;
        if(final[n-1][0] === names[num-1][0]){
            let arr = final;
            arr.pop()
            setFinal(arr);
        }
        
    }
    const handlePresent = ()=>{
        setColorStyle(1);
        setTimeout(()=>{
            setNum((prev)=>prev===names.length?prev:prev+1);
            setColorStyle(0)
        },400)
        
        setFinal((prev)=>[...prev,names[num]])
    }
    const handleAbsent = ()=>{
        setColorStyle(2);

        setTimeout(()=>{
            setNum((prev)=>prev===names.length?prev:prev+1)
            setColorStyle(0);
        },400)
        
    }

    const handleCopy = async () => {
        const str = final.join("\n")
        try {
            await window.navigator.clipboard.writeText(str);
            alert("Copied to clipboard!");
        } catch (err) {
            console.error(
                "Unable to copy to clipboard.",
                err
            );
            alert("Copy to clipboard failed.");
        }
    };

    return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-6">
        <h1 className="text-2xl font-bold mb-8">Attendance Taker</h1>

        {/* Attendance Card */}
        <div className="bg-gray-200 rounded-lg shadow-lg w-full max-w-md p-6">
            <h2 className="text-xl font-semibold text-center mb-6 transition-all  duration-200 transform" 
            style={{
                color : colorStyle ===2 ?"red":colorStyle === 1?"darkGreen":"black",
                transform : !colorStyle &&"translateY(4px)"
            }}>{names[num][0] + " : " +names[num][1]}</h2>
            
            {/* Attendance Buttons */}
            <div className="space-y-4">
            <button className="w-full bg-green-500 text-white py-3 rounded-lg font-semibold hover:bg-green-600" onClick={handlePresent}>
                Present
            </button>

            <button className="w-full bg-red-500 text-white py-3 rounded-lg font-semibold hover:bg-red-600" onClick={handleAbsent}>
                Absent
            </button>

            <button className="w-full bg-yellow-500 text-white py-3 rounded-lg font-semibold hover:bg-yellow-600" onClick={handleUndo}>
                Undo
            </button>
            </div>
        </div>

        {/* List of Present Students */}
        <div className="bg-gray-200 rounded-lg shadow-lg w-full max-w-md p-6 mt-8 text-center">
            
            <p className="font-semibold text-2xl mb-4">Total Present: {final.length}</p>
            <button className="w-full bg-blue-500 text-white py-3 rounded-lg font-semibold hover:bg-blue-600" onClick={handleCopy}>
            Copy List
            </button>
            
            <div className='list  mt-8'>
                {final.map((value,index)=>(
                    <h1 key={index} className='p-2 text-lg font-semibold'>{value[0] +" : " +value[1]}</h1>
                ))}
            </div>
        </div>
    </div>
    );}
export default App;
