import React, {useState} from 'react';
import './HeroAbility.css';
import axios from 'axios';
import {useParams} from 'react-router-dom';




const HeroAbilities = ({Hero}) => {
    const [edit, setEdit] = useState(false)


    const {id} = useParams()
    // const url = 'http://localhost:4545'


    const [Strength, setStrength] = useState(Hero.Strength)
    const [Speed, setSpeed] = useState(Hero.Speed)
    const [IQ, setIQ] = useState(Hero.IQ)
    const [Durability, setDurabilty] = useState(Hero.Durability)
    const [Skill, setSkill] = useState(Hero.Skill)
    const [Weapon, setWeapon] = useState(Hero.Weapon)
    const [PowerSupply, setPowerSupply] = useState(Hero.PowerSupply)
    const [CombatAbility, setCombatAbility] = useState(Hero.CombatAbility)
    const [SpecialAbility, setSpecialAbility] = useState(Hero.SpecialAbility)

    const updateAbilities = (e) => {
        e.preventDefault()
        const body ={
            Strength, Speed, IQ,
            Durability, Skill, Weapon,
            PowerSupply, CombatAbility, 
            SpecialAbility, id: Hero.id
        }
        
        axios.put(`/Heros/${id}`, body)
        .then(res => console.log(res.data))
        .catch(err => console.log(err))
    }

  
    console.log(Hero)
    return (
        <div className='Ability_Card'>

        {!edit ? (
            <div className='addedHeros'>
            <p>Strength: {Hero.Strength}</p>
            <p>Speed: {Hero.Speed}</p>
            <p>IQ: {Hero.IQ}</p>
            <p>Durability: {Hero.Durability}</p>
            <p>Skill: {Hero.Skill}</p>
            <p> Weapon: {Hero.Weapon}</p>
            <p>PowerSupply: {Hero.PowerSupply}</p>
            <p>CombatAbility: {Hero.CombatAbility}</p>
            <p>SpecialAbility: {Hero.SpecialAbility}</p>
            </div>
        ) : (
            <form onSubmit ={e => updateAbilities(e)}>
                <input placeholder='Strength' type='text' onChange={e => setStrength(e.target.value)} value={Strength}></input>
                <input placeholder='Speed' type='text' onChange={e => setSpeed(e.target.value)} value={Speed}></input>
                <input placeholder='IQ' type='text' onChange={e => setIQ(e.target.value)} value={IQ}></input>
                <input placeholder='Durability' type='text' onChange={e => setDurabilty(e.target.value)} value={Durability}></input>
                <input placeholder='Skill' type='text' onChange={e => setSkill(e.target.value)} value={Skill}></input>
                <input placeholder='Weapon' type='text' onChange={e => setWeapon(e.target.value)} value={Weapon}></input>
                <input placeholder='PowerSupply' type='text' onChange={e => setPowerSupply(e.target.value)} value={PowerSupply}></input>
                <input placeholder='CombatAbility' type='text' onChange={e => setCombatAbility(e.target.value)} value={CombatAbility}></input>
                <input placeholder='SpecialAbility' type='text' onChange={e => setSpecialAbility(e.target.value)} value={SpecialAbility}></input>

                <button className='saveHero'> Save Abilities</button>
            </form>
        ) }

            

            <button className='editBtn' onClick={() => setEdit(!edit)}>{edit ? 'Cancel Edit' : 'Edit Abilities'}</button>
        </div>
    )
}

export default HeroAbilities;