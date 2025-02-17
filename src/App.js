import './App.css';
import { useState } from 'react';
import {
  Pets 
 } from './ui-components';

 import {
  NavBarHeader 
 } from './ui-components';
 
 import {
  MarketingFooter 
 } from './ui-components';

 import {
  AddPet 
 } from './ui-components';

import {
  PetDetails 
 } from './ui-components';

import { signOut } from 'aws-amplify/auth';

import { withAuthenticator } from '@aws-amplify/ui-react';

async function handleSignOut() {
  try {
    await signOut();
  } catch (error) {
    console.log('error signing out: ', error);
  }
}


function App({user, signOut}) {
  const [showForm, setShowForm] = useState(false)
  const [showPetDetails, setPetDetails] = useState(false) 
  const [pet, setPet] = useState()
  const [updatePet, setUpdatePet] = useState()

  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [breed, setBreed] = useState("");
  const [about, setAbout] = useState("");
  const [color, setColor] = useState("");
  const [image, setImage] = useState("");
  
  const petDetailOverride = {
    Close: {
      style: {
        cursor: "pointer"
      },
      onClick: () => {
        setPetDetails(false);
      },
    },
  };


  const formOverride = {
    TextField29766922: {
      placeholder: name
    },
    TextField29766923: {
      placeholder: age
    },
    TextField29766924: {
      placeholder: breed
    },
    TextField3855443: {
      placeholder: about
    },
    TextField3855450: {
      placeholder: color
    },
    TextField3855457: {
      placeholder: image
    },
    image: {
      src: updatePet == null 
      ? "https://media.istockphoto.com/id/1474618307/vector/cute-labrador-retriever-puppy-sitting-cartoon-vector-illustration.jpg?s=612x612&w=0&k=20&c=p3p78uBQyap2csx8LsRKXvhNl92LzOInZ5QVN_pAGUw="
      :  updatePet.image,
    },
    Button3857468: {
      isDisabled: !updatePet ? true : false
    },
    Button29766926: {
      isDisabled: updatePet ? true : false
    },

    MyIcon: {
      onClick: () => {
        setShowForm(false);
      },
    },
  };


  const NavBarHeaderOverides = {
    "Add Pet": {
      style: {
        cursor: "pointer"
      }, 
      onClick: () => {
        setShowForm(!showForm);
      },
    },
    "Button": {
      onClick: () => {
        handleSignOut();
      }
    }
  }
  return (
    <div className='App'>
      <NavBarHeader width={"100%"} overrides={NavBarHeaderOverides}/>
      <header className="App-header">
      
      {showPetDetails && <PetDetails 
      overrides={petDetailOverride}
      pet={pet}
      style={{
        textAlign: "left",
        margin: "1rem",
    }}
      />
      }
        {showForm && (
          <AddPet 
            pet={pet}
            overrides={formOverride}
              style={{
                textAlign: "left",
                margin: "1rem",
            }}
          />
        )}

      
      <Pets 
        overrideItems={({item, index }) => ({
          overrides: {
            Breed: {color: "red"},

            Button29766907: {
              onClick: () => {
                setPetDetails(!showPetDetails);
                setPet(item);
              },
            },
            Button3851537: {
              onClick: () => {
                if (!showForm) setShowForm(true);
                  setUpdatePet(item);
                  setName(item.name);
                  setAge(item.age);
                  setBreed(item.breed);
                  setAbout(item.about);
                  setColor(item.color);
                  setImage(item.image);
                                
              },
            },
            Button38664164: {
              onClick: () => {
                if (!showForm) setShowForm(true);
                  setUpdatePet(item);
                  setName(item.name);
                  setAge(item.age);
                  setBreed(item.breed);
                  setAbout(item.about);
                  setColor(item.color);
                  setImage(item.image);
                                
              },
            },
          },


        })}/>
      

      </header>
      <MarketingFooter width={"100%"}></MarketingFooter>
    </div>
  );
}

export default withAuthenticator(App);
