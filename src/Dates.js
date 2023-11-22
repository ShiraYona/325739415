import { useState } from "react";
import { useEffect } from "react";
const Dates = () => {
    const styles = {
        height: '500px',
        margin: '5px',
        width: '20%',
        float: 'left',
        display: 'inline',
        borderStyle: 'solid'

    }
}
var flag = false
const [StartDate, setStartDate] = useState("");
const [EndDate, setEndDate] = useState("");
const [allDates, setAllDates] = useState([]);

const [checked, setChecked] = useState();
const [Flag, setFlag] = useState();



var allDay, className, description, hebrew, start, title

const a = async () => {
    if (!StartDate || !EndDate) {
        alert("StartDate or EndDate are reqiure")
        return;
    }
    else {
        fetchData()
    }
}

const fetchData = () => {
    JSON.stringify({
        "allDay": allDay,
        "className": className,
        "description": description,
        "hebrew": hebrew,
        "start": start,
        "title": title

    });

    fetch("https://www.hebcal.com/hebcal?cfg=fc&v=1&i=off&maj=on&min=on&nx=on&mf=on&ss=on&mod=on&lg=he&s&=on&start=2023-06-25&end=2023-08-06")
        // fetch(`https://www.hebcal.com/hebcal?cfg=fc&v=1&i=off&maj=on&min=on&nx=on&mf=on&ss=on&mod=on&lg=he&s&=on&start=${StartDate}&end=${EndDate}`)
        .then(res => res.json())
        .then(data => { setAllDates(data); console.log(data); })
        .catch(console.error("error in fetch"));
}

try {
    then(res => allDates(res))
    return allDates
}
catch {
    console.log("err");
}
var flag = false

useEffect(() =>
    fetchData(), []
)


const handleChange = event => {
    if (event.target.checked) {
        setChecked(!checked);
        setFlag(true)
    };
}
return (
    <div className="enterDate">
        <input id="StartdateInput"
            placeholder="תאריך התחלה"
            onChange={(e) => setStartDate(e.target.value)}
            // type="date"
            type="string"
        />
        <br></br>
        <input id="EdateInput"
            placeholder="תאריך סיום"
            onChange={(e) => setEndDate(e.target.value)}
        // type="date"
        />
        <br></br>
        <button onClick={() => a()}>הכנס</button>
        <div>
            <label>
                <input
                    type="checkbox"
                    checked={checked}
                    onChange={handleChange}
                />
                הצג פרשת שבוע בלבד
            </label>

            <p> {checked.toString()}:פרשת שבוע</p>
        </div>
        {allDates && allDates.map((i) => {
            return (
                <div className="show" key={i}>
                    <div>{i.title + " | " + i.allDay + " | " + i.className + " | " + i.description + " | " + i.hebrew + " | " + i.start + " | " + i.title}</div>
                    <br></br>
                </div>
            )
        })}
    </div>
);



export default Dates