import React, { Component } from 'react'
// import './style.css'
const statesCities = [
    {
        country: 'India',
        state: 'Andhra Pradesh (AP)',
        cities: [
            'Adilabad',
            'Anantapur',
            'Chittoor',
            'Kakinada',
            'Guntur',
            'Hyderabad',
            'Karimnagar',
            'Khammam',
            'Krishna',
            'Kurnool',
            'Mahbubnagar',
            'Medak',
            'Nalgonda',
            'Nizamabad',
            'Ongole',
            'Srikakulam',
            'Nellore',
            'Visakhapatnam',
            'Vizianagaram',
            'Warangal',
            'Eluru',
            'Kadapa'
        ]
    },
    {
        country: 'India',
        state: 'Arunachal Pradesh (AR)',
        cities: [
            'Anjaw',
            'Changlang',
            'East Siang',
            'Kurung Kumey',
            'Lohit',
            'Lower Dibang Valley',
            'Lower Subansiri',
            'Papum Pare',
            'Tawang',
            'Tirap',
            'Dibang Valley',
            'Upper Siang',
            'Upper Subansiri',
            'West Kameng',
            'West Siang'
        ]
    },
    {
        country: 'India',
        state: 'Assam (AS)',
        cities: [
            'Baksa',
            'Barpeta',
            'Bongaigaon',
            'Cachar',
            'Chirang',
            'Darrang',
            'Dhemaji',
            'Dima Hasao',
            'Dhubri',
            'Dibrugarh',
            'Goalpara',
            'Golaghat',
            'Hailakandi',
            'Jorhat',
            'Kamrup',
            'Kamrup Metropolitan',
            'Karbi Anglong',
            'Karimganj',
            'Kokrajhar',
            'Lakhimpur',
            'Marigaon',
            'Nagaon',
            'Nalbari',
            'Sibsagar',
            'Sonitpur',
            'Tinsukia',
            'Udalguri'
        ]
    },
    {
        country: 'India',
        state: 'Bihar (BR)',
        cities: [
            'Araria',
            'Arwal',
            'Aurangabad',
            'Banka',
            'Begusarai',
            'Bhagalpur',
            'Bhojpur',
            'Buxar',
            'Darbhanga',
            'East Champaran',
            'Gaya',
            'Gopalganj',
            'Jamui',
            'Jehanabad',
            'Kaimur',
            'Katihar',
            'Khagaria',
            'Kishanganj',
            'Lakhisarai',
            'Madhepura',
            'Madhubani',
            'Munger',
            'Muzaffarpur',
            'Nalanda',
            'Nawada',
            'Patna',
            'Purnia',
            'Rohtas',
            'Saharsa',
            'Samastipur',
            'Saran',
            'Sheikhpura',
            'Sheohar',
            'Sitamarhi',
            'Siwan',
            'Supaul',
            'Vaishali',
            'West Champaran',
            'Chandigarh'
        ]
    },
    {
        country: 'India',
        state: 'Chhattisgarh (CG)',
        cities: [
            'Bastar',
            'Bijapur',
            'Bilaspur',
            'Dantewada',
            'Dhamtari',
            'Durg',
            'Jashpur',
            'Janjgir-Champa',
            'Korba',
            'Koriya',
            'Kanker',
            'Kabirdham (Kawardha)',
            'Mahasamund',
            'Narayanpur',
            'Raigarh',
            'Rajnandgaon',
            'Raipur',
            'Surguja'
        ]
    },
    {
        country: 'India',
        state: 'Dadra and Nagar Haveli (DN)',
        cities: [
            'Dadra and Nagar Haveli'
        ]
    },
    {
        country: 'India',
        state: 'Daman and Diu (DD)',
        cities: [
            'Daman',
            'Diu'
        ]
    },
    {
        country: 'India',
        state: 'Delhi (DL)',
        cities: [
            'Central Delhi',
            'East Delhi',
            'New Delhi',
            'North Delhi',
            'North East Delhi',
            'North West Delhi',
            'South Delhi',
            'South West Delhi',
            'West Delhi'
        ]
    },
    {
        country: 'India',
        state: 'Goa (GA)',
        cities: [
            'North Goa',
            'South Goa'
        ]
    },
    {
        country: 'India',
        state: 'Gujarat (GJ)',
        cities: [
            'Ahmedabad',
            'Amreli district',
            'Anand',
            'Banaskantha',
            'Bharuch',
            'Bhavnagar',
            'Dahod',
            'The Dangs',
            'Gandhinagar',
            'Jamnagar',
            'Junagadh',
            'Kutch',
            'Kheda',
            'Mehsana',
            'Narmada',
            'Navsari',
            'Patan',
            'Panchmahal',
            'Porbandar',
            'Rajkot',
            'Sabarkantha',
            'Surendranagar',
            'Surat',
            'Vyara',
            'Vadodara',
            'Valsad'
        ]
    },
    {
        country: 'India',
        state: 'Haryana (HR)',
        cities: [
            'Ambala',
            'Bhiwani',
            'Faridabad',
            'Fatehabad',
            'Gurgaon',
            'Hissar',
            'Jhajjar',
            'Jind',
            'Karnal',
            'Kaithal',
            'Kurukshetra',
            'Mahendragarh',
            'Mewat',
            'Palwal',
            'Panchkula',
            'Panipat',
            'Rewari',
            'Rohtak',
            'Sirsa',
            'Sonipat',
            'Yamuna Nagar'
        ]
    },
    {
        country: 'India',
        state: 'Himachal Pradesh (HP)',
        cities: [
            'Bilaspur',
            'Chamba',
            'Hamirpur',
            'Kangra',
            'Kinnaur',
            'Kullu',
            'Lahaul and Spiti',
            'Mandi',
            'Shimla',
            'Sirmaur',
            'Solan',
            'Una'
        ]
    },
    {
        country: 'India',
        state: 'Jammu and Kashmir (JK)',
        cities: [
            'Anantnag',
            'Badgam',
            'Bandipora',
            'Baramulla',
            'Doda',
            'Ganderbal',
            'Jammu',
            'Kargil',
            'Kathua',
            'Kishtwar',
            'Kupwara',
            'Kulgam',
            'Leh',
            'Poonch',
            'Pulwama',
            'Rajauri',
            'Ramban',
            'Reasi',
            'Samba',
            'Shopian',
            'Srinagar',
            'Udhampur'
        ]
    },
    {
        country: 'India',
        state: 'Jharkhand (JH)',
        cities: [
            'Bokaro',
            'Chatra',
            'Deoghar',
            'Dhanbad',
            'Dumka',
            'East Singhbhum',
            'Garhwa',
            'Giridih',
            'Godda',
            'Gumla',
            'Hazaribag',
            'Jamtara',
            'Khunti',
            'Koderma',
            'Latehar',
            'Lohardaga',
            'Pakur',
            'Palamu',
            'Ramgarh',
            'Ranchi',
            'Sahibganj',
            'Seraikela Kharsawan',
            'Simdega',
            'West Singhbhum'
        ]
    },
    {
        country: 'India',
        state: 'Karnataka (KA)',
        cities: [
            'Bagalkot',
            'Bangalore Rural',
            'Bangalore Urban',
            'Belgaum',
            'Bellary',
            'Bidar',
            'Bijapur',
            'Chamarajnagar',
            'Chikkamagaluru',
            'Chikkaballapur',
            'Chitradurga',
            'Davanagere',
            'Dharwad',
            'Dakshina Kannada',
            'Gadag',
            'Gulbarga',
            'Hassan',
            'Haveri district',
            'Kodagu',
            'Kolar',
            'Koppal',
            'Mandya',
            'Mysore',
            'Raichur',
            'Shimoga',
            'Tumkur',
            'Udupi',
            'Uttara Kannada',
            'Ramanagara',
            'Yadgir'
        ]
    },
    {
        country: 'India',
        state: 'Kerala (KL)',
        cities: [
            'Alappuzha',
            'Ernakulam',
            'Idukki',
            'Kannur',
            'Kasaragod',
            'Kollam',
            'Kottayam',
            'Kozhikode',
            'Malappuram',
            'Palakkad',
            'Pathanamthitta',
            'Thrissur',
            'Thiruvananthapuram',
            'Wayanad'
        ]
    },
    {
        country: 'India',
        state: 'Madhya Pradesh (MP)',
        cities: [
            'Alirajpur',
            'Anuppur',
            'Ashok Nagar',
            'Balaghat',
            'Barwani',
            'Betul',
            'Bhind',
            'Bhopal',
            'Burhanpur',
            'Chhatarpur',
            'Chhindwara',
            'Damoh',
            'Datia',
            'Dewas',
            'Dhar',
            'Dindori',
            'Guna',
            'Gwalior',
            'Harda',
            'Hoshangabad',
            'Indore',
            'Jabalpur',
            'Jhabua',
            'Katni',
            'Khandwa (East Nimar)',
            'Khargone (West Nimar)',
            'Mandla',
            'Mandsaur',
            'Morena',
            'Narsinghpur',
            'Neemuch',
            'Panna',
            'Rewa',
            'Rajgarh',
            'Ratlam',
            'Raisen',
            'Sagar',
            'Satna',
            'Sehore',
            'Seoni',
            'Shahdol',
            'Shajapur',
            'Sheopur',
            'Shivpuri',
            'Sidhi',
            'Singrauli',
            'Tikamgarh',
            'Ujjain',
            'Umaria',
            'Vidisha'
        ]
    },
    {
        country: 'India',
        state: 'Maharashtra (MH)',
        cities: [
            'Ahmednagar',
            'Akola',
            'Amravati',
            'Aurangabad',
            'Bhandara',
            'Beed',
            'Buldhana',
            'Chandrapur',
            'Dhule',
            'Gadchiroli',
            'Gondia',
            'Hingoli',
            'Jalgaon',
            'Jalna',
            'Kolhapur',
            'Latur',
            'Mumbai City',
            'Mumbai suburban',
            'Nandurbar',
            'Nanded',
            'Nagpur',
            'Nashik',
            'Osmanabad',
            'Parbhani',
            'Pune',
            'Raigad',
            'Ratnagiri',
            'Sindhudurg',
            'Sangli',
            'Solapur',
            'Satara',
            'Thane',
            'Wardha',
            'Washim',
            'Yavatmal'
        ]
    },
    {
        country: 'India',
        state: 'Manipur (MN)',
        cities: [
            'Bishnupur',
            'Churachandpur',
            'Chandel',
            'Imphal East',
            'Senapati',
            'Tamenglong',
            'Thoubal',
            'Ukhrul',
            'Imphal West'
        ]
    },
    {
        country: 'India',
        state: 'Meghalaya (ML)',
        cities: [
            'East Garo Hills',
            'East Khasi Hills',
            'Jaintia Hills',
            'Ri Bhoi',
            'South Garo Hills',
            'West Garo Hills',
            'West Khasi Hills'
        ]
    },
    {
        country: 'India',
        state: 'Mizoram (MZ)',
        cities: [
            'Aizawl',
            'Champhai',
            'Kolasib',
            'Lawngtlai',
            'Lunglei',
            'Mamit',
            'Saiha',
            'Serchhip'
        ]
    },
    {
        country: 'India',
        state: 'Nagaland (NL)',
        cities: [
            'Dimapur',
            'Kohima',
            'Mokokchung',
            'Mon',
            'Phek',
            'Tuensang',
            'Wokha',
            'Zunheboto'
        ]
    },
    {
        country: 'India',
        state: 'Orissa (OR)',
        cities: [
            'Angul',
            'Boudh (Bauda)',
            'Bhadrak',
            'Balangir',
            'Bargarh (Baragarh)',
            'Balasore',
            'Cuttack',
            'Debagarh (Deogarh)',
            'Dhenkanal',
            'Ganjam',
            'Gajapati',
            'Jharsuguda',
            'Jajpur',
            'Jagatsinghpur',
            'Khordha',
            'Kendujhar (Keonjhar)',
            'Kalahandi',
            'Kandhamal',
            'Koraput',
            'Kendrapara',
            'Malkangiri',
            'Mayurbhanj',
            'Nabarangpur',
            'Nuapada',
            'Nayagarh',
            'Puri',
            'Rayagada',
            'Sambalpur',
            'Subarnapur (Sonepur)',
            'Sundergarh'
        ]
    },
    {
        country: 'India',
        state: 'Pondicherry (Puducherry) (PY)',
        cities: [
            'Karaikal',
            'Mahe',
            'Pondicherry',
            'Yanam'
        ]
    },
    {
        country: 'India',
        state: 'Punjab (PB)',
        cities: [
            'Amritsar',
            'Barnala',
            'Bathinda',
            'Firozpur',
            'Faridkot',
            'Fatehgarh Sahib',
            'Fazilka',
            'Gurdaspur',
            'Hoshiarpur',
            'Jalandhar',
            'Kapurthala',
            'Ludhiana',
            'Mansa',
            'Moga',
            'Sri Muktsar Sahib',
            'Pathankot',
            'Patiala',
            'Rupnagar',
            'Ajitgarh (Mohali)',
            'Sangrur',
            'Nawanshahr',
            'Tarn Taran'
        ]
    },
    {
        country: 'India',
        state: 'Rajasthan (RJ)',
        cities: [
            'Ajmer',
            'Alwar',
            'Bikaner',
            'Barmer',
            'Banswara',
            'Bharatpur',
            'Baran',
            'Bundi',
            'Bhilwara',
            'Churu',
            'Chittorgarh',
            'Dausa',
            'Dholpur',
            'Dungapur',
            'Ganganagar',
            'Hanumangarh',
            'Jhunjhunu',
            'Jalore',
            'Jodhpur',
            'Jaipur',
            'Jaisalmer',
            'Jhalawar',
            'Karauli',
            'Kota',
            'Nagaur',
            'Pali',
            'Pratapgarh',
            'Rajsamand',
            'Sikar',
            'Sawai Madhopur',
            'Sirohi',
            'Tonk',
            'Udaipur'
        ]
    },
    {
        country: 'India',
        state: 'Sikkim (SK)',
        cities: [
            'East Sikkim',
            'North Sikkim',
            'South Sikkim',
            'West Sikkim'
        ]
    },
    {
        country: 'India',
        state: 'Tamil Nadu (TN)',
        cities: [
            'Ariyalur',
            'Chennai',
            'Coimbatore',
            'Cuddalore',
            'Dharmapuri',
            'Dindigul',
            'Erode',
            'Kanchipuram',
            'Kanyakumari',
            'Karur',
            'Madurai',
            'Nagapattinam',
            'Nilgiris',
            'Namakkal',
            'Perambalur',
            'Pudukkottai',
            'Ramanathapuram',
            'Salem',
            'Sivaganga',
            'Tirupur',
            'Tiruchirappalli',
            'Theni',
            'Tirunelveli',
            'Thanjavur',
            'Thoothukudi',
            'Tiruvallur',
            'Tiruvarur',
            'Tiruvannamalai',
            'Vellore',
            'Viluppuram',
            'Virudhunagar'
        ]
    },
    {
        country: 'India',
        state: 'Tripura (TR)',
        cities: [
            'Dhalai',
            'North Tripura',
            'South Tripura',
            'Khowai',
            'West Tripura'
        ]
    },
    {
        country: 'India',
        state: 'Uttar Pradesh (UP)',
        cities: [
            'Agra',
            'Allahabad',
            'Aligarh',
            'Ambedkar Nagar',
            'Auraiya',
            'Azamgarh',
            'Barabanki',
            'Budaun',
            'Bagpat',
            'Bahraich',
            'Bijnor',
            'Ballia',
            'Banda',
            'Balrampur',
            'Bareilly',
            'Basti',
            'Bulandshahr',
            'Chandauli',
            'Chhatrapati Shahuji Maharaj Nagar',
            'Chitrakoot',
            'Deoria',
            'Etah',
            'Kanshi Ram Nagar',
            'Etawah',
            'Firozabad',
            'Farrukhabad',
            'Fatehpur',
            'Ayodhya',
            'Gautam Buddh Nagar',
            'Gonda',
            'Ghazipur',
            'Gorakhpur',
            'Ghaziabad',
            'Hamirpur',
            'Hardoi',
            'Mahamaya Nagar',
            'Jhansi',
            'Jalaun',
            'Jyotiba Phule Nagar',
            'Jaunpur district',
            'Ramabai Nagar (Kanpur Dehat)',
            'Kannauj',
            'Kanpur',
            'Kaushambi',
            'Kushinagar',
            'Lalitpur',
            'Lakhimpur Kheri',
            'Lucknow',
            'Mau',
            'Meerut',
            'Maharajganj',
            'Mahoba',
            'Mirzapur',
            'Moradabad',
            'Mainpuri',
            'Mathura',
            'Muzaffarnagar',
            'Panchsheel Nagar district (Hapur)',
            'Pilibhit',
            'Shamli',
            'Pratapgarh',
            'Rampur',
            'Raebareli',
            'Saharanpur',
            'Sitapur',
            'Shahjahanpur',
            'Sant Kabir Nagar',
            'Siddharthnagar',
            'Sonbhadra',
            'Sant Ravidas Nagar',
            'Sultanpur',
            'Shravasti',
            'Unnao',
            'Varanasi'
        ]
    },
    {
        country: 'India',
        state: 'Uttarakhand (UK)',
        cities: [
            'Almora',
            'Bageshwar',
            'Chamoli',
            'Champawat',
            'Dehradun',
            'Haridwar',
            'Nainital',
            'Pauri Garhwal',
            'Pithoragarh',
            'Rudraprayag',
            'Tehri Garhwal',
            'Udham Singh Nagar',
            'Uttarkashi'
        ]
    },
    {
        country: 'India',
        state: 'West Bengal (WB)',
        cities: [
            'Birbhum',
            'Bankura',
            'Bardhaman',
            'Darjeeling',
            'Dakshin Dinajpur',
            'Hooghly',
            'Howrah',
            'Jalpaiguri',
            'Cooch Behar',
            'Kolkata',
            'Maldah',
            'Paschim Medinipur',
            'Purba Medinipur',
            'Murshidabad',
            'Nadia',
            'North 24 Parganas',
            'South 24 Parganas',
            'Purulia',
            'Uttar Dinajpur'
        ]
    }
]
export default class StateList extends Component {
    constructor(props) {
        super(props)
        this.storeValueWithWordboundation = this.storeValueWithWordboundation.bind(this)
    }
    storeValueWithWordboundation(limit, id, e) {
        this.props.onChange &&
            this.props.onChange(e)
        if (document.getElementById(id)) {
            document.getElementById(id).innerHTML = `${e.currentTarget.value.length}/${limit}`
        }
    }
    render() {
        return (
            <>
                {
                    this.props.inline ?
                        this.props.onlyState ?
                            <div className={`inlineselectlist ${this.props.stateCustomClassName}`}>
                                <label htmlFor={this.props.htmlFor} style={this.props.stateLabelStyle}>State
                                    {
                                        this.props.required ?
                                            <span style={{ color: 'red', fontSize: "18px", fontWeight: "600", paddingLeft: "5px" }}>*</span>
                                            : null
                                    }
                                </label>
                                <select className='form-select' style={{ marginLeft: "10px" }} onChange={(e) => this.props.onStateChange && this.props.onStateChange(e)} value={this.props.stateValue}>
                                    <option value="" disabled>Select State</option>
                                    {
                                        statesCities.map((data, index) => {
                                            return (
                                                <option key={data.state} value={data.state}>{data.state}</option>
                                            )
                                        })
                                    }
                                </select>
                            </div>
                            :
                            <>
                                <div style={{ display: "flex", flexDirection: "column", minHeight: "100px", justifyContent: "space-around" }}>
                                    <div className={`inlineselectlist ${this.props.stateCustomClassName}`}>
                                        <label htmlFor={this.props.htmlFor} style={this.props.stateLabelStyle}>State
                                            {
                                                this.props.required ?
                                                    <span style={{ color: 'red', fontSize: "18px", fontWeight: "600", paddingLeft: "5px" }}>*</span>
                                                    : null
                                            }
                                        </label>
                                        <select className='form-select' style={{ marginLeft: "10px" }} onChange={(e) => this.props.onStateChange && this.props.onStateChange(e)} value={this.props.stateValue}>
                                            <option value="" disabled>Select State</option>
                                            {
                                                statesCities.map((data, index) => {
                                                    return (
                                                        <option key={data.state} value={data.state}>{data.state}</option>
                                                    )
                                                })
                                            }
                                        </select>
                                    </div>
                                    <div className={`inlineselectlist ${this.props.cityCustomClassName}`}>
                                        <label htmlFor={this.props.htmlFor} style={this.props.cityLabelStyle}>City
                                            {
                                                this.props.required ?
                                                    <span style={{ color: 'red', fontSize: "18px", fontWeight: "600", paddingLeft: "5px" }}>*</span>
                                                    : null
                                            }
                                        </label>
                                        <select disabled={this.props.stateValue == "" ? true : false} className='form-select' style={{ marginLeft: "10px" }} onChange={(e) => this.props.onCityChange && this.props.onCityChange(e)} value={this.props.cityValue}>
                                            <option value="" disabled>Select City</option>
                                            {
                                                statesCities.map((data, index) => {
                                                    if (data.state == this.props.stateValue) {
                                                        return (
                                                            data.cities.map((cityname) => {
                                                                return (
                                                                    <option key={cityname} value={cityname}>{cityname}</option>
                                                                )
                                                            })
                                                        )
                                                    }
                                                })
                                            }
                                        </select>
                                    </div>
                                </div>
                            </>
                        :
                        this.props.onlyState ?
                            <div className={`${this.props.stateCustomClassName}`}>
                                <label htmlFor={this.props.htmlFor} style={this.props.stateLabelStyle}>State
                                    {
                                        this.props.required ?
                                            <span style={{ color: 'red', fontSize: "18px", fontWeight: "600", paddingLeft: "5px" }}>*</span>
                                            : null
                                    }
                                </label>
                                <select className='form-select' onChange={(e) => this.props.onStateChange && this.props.onStateChange(e)} value={this.props.stateValue}>
                                    <option value="" disabled>Select State</option>
                                    {
                                        statesCities.map((data, index) => {
                                            return (
                                                <option key={data.state} value={data.state}>{data.state}</option>
                                            )
                                        })
                                    }
                                </select>
                            </div>
                            :
                            <>
                                <div style={{ display: "flex", flexDirection: "column", minHeight: "100px", justifyContent: "space-around" }}>
                                    <div className={`${this.props.stateCustomClassName && this.props.stateCustomClassName}`}>
                                        <label htmlFor={this.props.htmlFor} style={this.props.stateLabelStyle}>State
                                            {
                                                this.props.required ?
                                                    <span style={{ color: 'red', fontSize: "18px", fontWeight: "600", paddingLeft: "5px" }}>*</span>
                                                    : null
                                            }
                                        </label>
                                        <select className='form-select' onChange={(e) => this.props.onStateChange && this.props.onStateChange(e)} value={this.props.stateValue}>
                                            <option value="" disabled>Select State</option>
                                            {
                                                statesCities.map((data, index) => {
                                                    return (
                                                        <option key={data.state} value={data.state}>{data.state}</option>
                                                    )
                                                })
                                            }
                                        </select>
                                    </div>
                                    <div className={`${ this.props.cityCustomClassName ? this.props.cityCustomClassName : ""}`}>
                                        <label htmlFor={this.props.htmlFor} style={this.props.cityLabelStyle}>City
                                            {
                                                this.props.required ?
                                                    <span style={{ color: 'red', fontSize: "18px", fontWeight: "600", paddingLeft: "5px" }}>*</span>
                                                    : null
                                            }
                                        </label>
                                        <select className='form-select' disabled={this.props.stateValue == "" ? true : false} onChange={(e) => this.props.onCityChange && this.props.onCityChange(e)} value={this.props.cityValue}>
                                            <option value="" disabled>Select City</option>
                                            {
                                                statesCities.map((data, index) => {
                                                    if (data.state == this.props.stateValue) {
                                                        return (
                                                            data.cities.map((cityname) => {
                                                                return (
                                                                    <option key={cityname} value={cityname}>{cityname}</option>
                                                                )
                                                            })
                                                        )
                                                    }
                                                })
                                            }
                                        </select>
                                    </div>
                                </div>
                            </>
                }
            </>

        )
    }
}