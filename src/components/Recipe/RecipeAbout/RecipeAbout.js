import React from 'react';

import classes from '../../../assets/style/RecipeAbout.module.css';

const RecipeAbout = () => (
    <div className={classes.Container}>
        <h1 className={classes.Info}>History of recipes</h1>
        <p className={classes.Info}>
            The earliest known written recipes date from approximately 1600 BC and come from an Akkadian tablet from southern Babylonia.
            There are also works in ancient Egyptian hieroglyphs depicting the preparation of food.
            Many ancient Greek recipes are known. Mithaecus's cookbook was an early one, but most of it has been lost;
            Athenaeus quotes one short recipe in his Deipnosophistae. Athenaeus mentions many other cookbooks, all of them lost.
            Roman recipes are known starting in the 2nd century BCE with Cato the Elder's De Agri Cultura. 
            Many authors of this period described eastern Mediterranean cooking in Greek and in Latin.
            Some Punic recipes are known in Greek and Latin translation.
            The large collection of recipes De re coquinaria, conventionally titled Apicius, 
            appeared in the 4th or 5th century and is the only complete surviving cookbook from the classical world.
            It lists the courses served in a meal as Gustatio (appetizer), Primae Mensae (main course) and Secundae Mensae (dessert). 
            Each recipe begins with the Latin command "Take...," "Recipe...."
            Arabic recipes are documented starting in the 10th century; see al-Warraq and al-Baghdadi.
            The earliest recipe in Persian dates from the 14th century. Several recipes have survived from the time of Safavids, 
            including Karnameh (1521) by Mohammad Ali Bavarchi, 
            which includes the cooking instruction of more than 130 different dishes and pastries, 
            and Madat-ol-Hayat (1597) by Nurollah Ashpaz. Recipe books from the Qajar period are numerous, 
            the most notable being Khorak-ha-ye Irani by prince Nader Mirza.
            King Richard II of England commissioned a recipe book called Forme of Cury in 1390, and around the same time, 
            another book was published entitled Curye on Inglish, "cury" meaning cooking.
            Both books give an impression of how food for the noble classes was prepared and served in England at that time. 
            The luxurious taste of the aristocracy in the Early Modern Period brought with it the start of what can be called 
            the modern recipe book. By the 15th century, numerous manuscripts were appearing detailing the recipes of the day. 
            Many of these manuscripts give very good information and record the re-discovery of many herbs and spices including coriander, 
            parsley, basil and rosemary, many of which had been brought back from the Crusades.
        </p>
    </div>
);

export default RecipeAbout;