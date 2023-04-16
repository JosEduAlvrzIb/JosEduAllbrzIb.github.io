let _backHome = document.getElementById("BtnBackHome");
let _slctDay = document.getElementById("SlctDay");
let _slcMonth = document.getElementById("SlctMonth");
let _slcYear = document.getElementById("SlctYear");
let _inpName = document.getElementById("userName");
let _inpLstFNm = document.getElementById("userFirstLastName");
let _inpLstSNm = document.getElementById("userSecondLastName");
let _sendForm = document.getElementById("BtnSubmitFormRegister");
let _formUser = document.getElementById("FormRegisterUser");
let _tbodyUser = document.getElementById("TbodyUsers");
let _sortTable = document.getElementById("SlctSortings");
let _optionsUser = document.getElementById("SlctUsers");
// Table of Sells InpMonday InpTuesday InpWednesday InpThursday InpFriday
let _addSellUser = document.getElementById("BtnAddSellUser");
let _amountSellMonday = document.getElementById("InpMonday");
let _amountSellTuesday = document.getElementById("InpTuesday");
let _amountSellWednesday = document.getElementById("InpWednesday");
let _amountSellThursday = document.getElementById("InpThursday");
let _amountSellFriday = document.getElementById("InpFriday");
let _formSellRegister = document.getElementById("FormSellRegister");
let _tbodyUserSell = document.getElementById("TbodyUsersSells");
let _tfooterUserSell = document.getElementById("TfootUserSells");
let _sortTableSells = document.getElementById("SlctSortRegister");

const _userRegister = [];
const _sellRegister = [];

const addValueOptions = () => {
    //Days
    let _optionsDay = "";
    for(let i = 1; i <= 31; i++){
        _optionsDay += `<option value=${i}>${i}</option>`
        _slctDay.innerHTML = _optionsDay;
    }
    // Months
    const _monthsArray = [
        {month: "January", value: 01},
        {month: "February", value: 02},
        {month: "March", value: 03},
        {month: "April", value: 04},
        {month: "May", value: 05},
        {month: "June", value: 06},
        {month: "July", value: 07},
        {month: "August", value: 08},
        {month: "September", value: 09},
        {month: "October", value: 10},
        {month: "November", value: 11},
        {month: "December", value: 12}
    ];
    function _months  (_monthsArray) {
        let _optionsMonths = "";
        for(let months of _monthsArray){
            _optionsMonths += `<option value=${months.value}>${months.month}</option>`;
        }
        _slcMonth.innerHTML = _optionsMonths;
    }
    _months(_monthsArray);
    // Year
    let _optionsYear = "";
    for(let i = 1980; i <= 2000; i ++){
        _optionsYear += `<option value=${i}>${i}</option>`
        _slcYear.innerHTML = _optionsYear;
    }
}

const submitForm = () => {
    _sendForm.addEventListener("click" , function(e){
        e.preventDefault();
        let _nameData = _inpName.value;
        let _nameLstFData = _inpLstFNm.value;
        let _nameLstSData = _inpLstSNm.value;
        let _dayData = _slctDay.value;
        let _monthData = _slcMonth.value;
        let _yearData = _slcYear.value;
        let _nameUser = _nameData;
        let _lastNameUser = _nameLstFData+" "+_nameLstSData;
        let _birthdayUser = _dayData+"/"+_monthData+"/"+_yearData;
        let _id = Math.floor(Math.random() * 1001);
        const _dataUser = {
            _dataName: "",
            _dataLastName: "",
            _dataBirhtDay: "",
            _dataId: "",
        }
        if(_nameData == "" || _nameLstFData == "" || _nameLstSData == "" || _dayData == "" || _monthData == "" || _yearData == "")
        {
            alert("campo vacio");
        }
        else
        {
            _dataUser._dataName = _nameUser.toUpperCase();
            _dataUser._dataLastName = _lastNameUser.toUpperCase();
            _dataUser._dataBirhtDay = _birthdayUser;
            _dataUser._dataId = _id;
            _userRegister.push(_dataUser);
            console.table(
                _userRegister
            )
            _formUser.reset();
            alert("registrado!");
        }
        TableUser(_userRegister);
        OptionsUserRegister(_userRegister);
        const _userSortData = _userRegister.sort((_data1, _data2) => {
            return(_data1._dataName < _data2._dataName) ? -1 : 1
        });
    })
}

const SortingTable = () => {
    _sortTable.addEventListener("change" , function _sortDataTable(){
        let _valueSort = _sortTable.value;
        if( _valueSort == 1 ){
            const _userSortData = _userRegister.sort((_data1, _data2) => {
                return(_data1._dataName < _data2._dataName) ? -1 : 1
            })
            TableUser(_userRegister);
        }
        if( _valueSort == 2 ){
            const _userSortData = _userRegister.sort((_data1, _data2) => {
                return(_data1._dataName > _data2._dataName) ? -1 : 1
            })
            TableUser(_userRegister);
        }
        if( _valueSort == 3 ){
            const _userSortData = _userRegister.sort((_data1, _data2) => {
                return(_data1._dataLastName < _data2._dataLastName) ? -1 : 1
            })
            TableUser(_userRegister);
        }
        if( _valueSort == 4 ){
            const _userSortData = _userRegister.sort((_data1, _data2) => {
                return(_data1._dataLastName > _data2._dataLastName) ? -1 : 1
            })
            TableUser(_userRegister);
        }
        if( _valueSort == 5 ){
            const _userSortData = _userRegister.sort((_data1, _data2) => {
                if(_data1._dataBirhtDay < _data2._dataBirhtDay){
                    return -1;
                }
                else{
                    return 1;
                }
            })
            TableUser(_userRegister);
        }
        if( _valueSort == 6 ){
            const _userSortData = _userRegister.sort((_data1, _data2) => {
                if(_data1._dataId < _data2._dataId){
                    return -1;
                }
                else{
                    return 1;
                }
            })
            TableUser(_userRegister);
        }
        console.table(
            _userRegister
        )
    })
}

const TableUser = (_userRegister) => {
    let _bodyTable = "";
    for(let users of _userRegister) {
        _bodyTable += `
        <tr class="TrbodyUser">
            <td class="TdbodyUser">${users._dataName+" "+users._dataLastName}</td>
            <td class="TdbodyUser">${users._dataBirhtDay}</td>
            <td class="TdbodyUser">${users._dataId}</td>
        </tr>`;
    }
    _tbodyUser.innerHTML = _bodyTable;
}

// checking if the value of the select are already in the object 


const OptionsUserRegister = (_userRegister) => {
    let _optUser = "";
    for (let users of _userRegister ){
        _optUser = document.createElement("option");
        _optUser.value = users._dataId;
        _optUser.innerHTML = users._dataName+" "+users._dataLastName;
    }
    _optionsUser.append(_optUser);

}

let _optUserValue = "";
let _optUserValueId = "";
_optionsUser.addEventListener("change" , function (){
    _optUserValue = _optionsUser.options[_optionsUser.selectedIndex].text;
    _optUserValueId = _optionsUser.value;
});

console.log(_optUserValueId);
const SellUsersRegister = (_sellRegister) => {
    _addSellUser.addEventListener("click" ,  function(e){
        e.preventDefault();
        let _monday = _amountSellMonday.value;
        let _tuesday = _amountSellTuesday.value;
        let _wednesday = _amountSellWednesday.value;
        let _thursday = _amountSellThursday.value;
        let _friday = _amountSellFriday.value;
        const _dataSellUser = {
            _dataUsNm: "",
            _dataIdUsNm: "",
            _dataMonday: "",
            _dataTuesday: "",
            _dataWednesday: "",
            _dataThursday: "",
            _dataFriday: "",
            _dataTotalAmount: "",
        }
        let _userValidateId = "";
        let _chkId = false
        const ValidateUser = (_sellRegister) => {
            for(let IdValidate of _sellRegister){
                _userValidateId = IdValidate._dataIdUsNm;
                if(_optUserValueId == _userValidateId){
                    _chkId = true;
                }
            }
        }
        ValidateUser(_sellRegister);
        if(_chkId == true){
            alert("el usuario: "+_optUserValue+" con el id: "+_optUserValueId+" ya ha sido registrado!");
        }else if(_optUserValue == "" || _optUserValue == "Seleccionar"){
            alert("Seleccione un usuario");
        }else
        {
            let _mondaySell = Math.floor(_monday);
            let _tuesdaySell = Math.floor(_tuesday);
            let _wednesdaySell = Math.floor(_wednesday);
            let _thursdaySell = Math.floor(_thursday);
            let _fridaySell = Math.floor(_friday);
            let _amountTotal = _mondaySell+_tuesdaySell+_wednesdaySell+_thursdaySell+_fridaySell;
            _dataSellUser._dataUsNm = _optUserValue;
            _dataSellUser._dataIdUsNm = _optUserValueId;
            _dataSellUser._dataMonday = _mondaySell;
            _dataSellUser._dataTuesday = _tuesdaySell;
            _dataSellUser._dataWednesday = _wednesdaySell;
            _dataSellUser._dataThursday = _thursdaySell;
            _dataSellUser._dataFriday = _fridaySell;
            _dataSellUser._dataTotalAmount = _amountTotal;
            _sellRegister.push(_dataSellUser);
            console.table(_sellRegister); 
            _formSellRegister.reset();   
        }
        const _userSortData = _sellRegister.sort((_data1, _data2) => {
            if(_data1._dataMonday > _data2._dataMonday){
                return -1;
            }
            else{
                return 1;
            }
        })
        TableUserSell(_sellRegister);
        TableFooterSell(_sellRegister);
    })
}

const TableUserSell = (_sellRegister) => {
    let _bodyTableSells = "";
    for(let usersSell of _sellRegister) {
        _bodyTableSells += `
        <tr class="TrbodyUser">
            <td class="TdbodyUser">${usersSell._dataUsNm}</td>
            <td class="TdbodyUser">$${usersSell._dataMonday}</td>
            <td class="TdbodyUser">$${usersSell._dataTuesday}</td>
            <td class="TdbodyUser">$${usersSell._dataWednesday}</td>
            <td class="TdbodyUser">$${usersSell._dataThursday}</td>
            <td class="TdbodyUser">$${usersSell._dataFriday}</td>
            <td class="TdbodyUser">$${usersSell._dataTotalAmount}</td>
        </tr>`;
    }
    _tbodyUserSell.innerHTML = _bodyTableSells;
}

const TableFooterSell = (_sellRegister) => {
    let _footerTableSells = ""; 
    let _totalMonday = 0;
    let _totalTuesday = 0;
    let _totalWednesday = 0;
    let _totalThursday = 0;
    let _totalFriday = 0;
    let _totalAmount = 0;
    for(let x of _sellRegister){
        _totalMonday += x._dataMonday;
        _totalTuesday += x._dataTuesday;
        _totalWednesday += x._dataWednesday;
        _totalThursday += x._dataThursday;
        _totalFriday += x._dataFriday;
        _totalAmount += x._dataTotalAmount;
    }
    _footerTableSells = `
    <tr class="TrbodyUser">
        <td class="TdbodyUser">Totales</td>
        <td class="TdbodyUser">$${_totalMonday}</td>
        <td class="TdbodyUser">$${_totalTuesday}</td>
        <td class="TdbodyUser">$${_totalWednesday}</td>
        <td class="TdbodyUser">$${_totalThursday}</td>
        <td class="TdbodyUser">$${_totalFriday}</td>
        <td class="TdbodyUser">$${_totalAmount}</td>
    </tr>
    `;
    _tfooterUserSell.innerHTML = _footerTableSells;
}


const SortingTableSells = () => {
    _sortTableSells.addEventListener("change" , function _sortDataTableSells() {
        let _valueSortSells = _sortTableSells.value;
        if( _valueSortSells == 1){
            const _userSortData = _sellRegister.sort((_data1, _data2) => {
                if(_data1._dataMonday > _data2._dataMonday){
                    return -1;
                }
                else{
                    return 1;
                }
            })
            TableUserSell(_sellRegister);
        }
        if( _valueSortSells == 2){
            const _userSortData = _sellRegister.sort((_data1, _data2) => {
                if(_data1._dataTuesday > _data2._dataTuesday){
                    return -1;
                }
                else{
                    return 1;
                }
            })
            TableUserSell(_sellRegister);
        }
        if( _valueSortSells == 3){
            const _userSortData = _sellRegister.sort((_data1, _data2) => {
                if(_data1._dataWednesday > _data2._dataWednesday){
                    return -1;
                }
                else{
                    return 1;
                }
            })
            TableUserSell(_sellRegister);
        }
        if( _valueSortSells == 4){
            const _userSortData = _sellRegister.sort((_data1, _data2) => {
                if(_data1._dataThursday > _data2._dataThursday){
                    return -1;
                }
                else{
                    return 1;
                }
            })
            TableUserSell(_sellRegister);
        }
        if( _valueSortSells == 5){
            const _userSortData = _sellRegister.sort((_data1, _data2) => {
                if(_data1._dataFriday > _data2._dataFriday){
                    return -1;
                }
                else{
                    return 1;
                }
            })
            TableUserSell(_sellRegister);
        }
        if( _valueSortSells == 6){
            const _userSortData = _sellRegister.sort((_data1, _data2) => {
                if(_data1._dataTotalAmount > _data2._dataTotalAmount){
                    return -1;
                }
                else{
                    return 1;
                }
            })
            TableUserSell(_sellRegister);
        }
        console.table(
            _sellRegister
        )
    })
}

const BackHome = () => {
    _backHome.addEventListener("click" , function(){
        window.open("index.html" , "_self");
    })
}

window.onload = () => {
    addValueOptions();
    submitForm();
    SortingTable();
    BackHome();
    SellUsersRegister(_sellRegister);
    OptionsUserRegister(_userRegister);
    TableUser(_userRegister);
    TableUserSell(_sellRegister);
    TableFooterSell(_sellRegister);
    SortingTableSells();
}