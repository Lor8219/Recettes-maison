-- SQLBook: Code

CREATE TABLE images (
  id int(11) PRIMARY KEY NOT NULL AUTO_INCREMENT,
  src VARCHAR(255),
  alt VARCHAR(255)
)ENGINE=InnoDB DEFAULT CHARSET=utf8;

INSERT INTO images(src, alt)
VALUES('https://media.discordapp.net/attachments/1081687214460780575/1131858936836935680/Cookies1_modif.jpg', 'cookies');
INSERT INTO images(src, alt)
VALUES("https://p7.storage.canalblog.com/78/75/1332261/103966229.jpg", 'roulé chorizo');

INSERT INTO images(src, alt)
VALUES( "https://assets.afcdn.com/recipe/20100120/29797_w512h384cx256cy192.webp", "gloubiboulga");


CREATE TABLE recettes (
  id int(11) PRIMARY KEY NOT NULL AUTO_INCREMENT,
  title VARCHAR(255) NOT NULL,
  subtitle VARCHAR(255) NOT NULL,
  ingredients TEXT,
  preparation LONGTEXT,
  image_id INT,
  CONSTRAINT image_id_fk FOREIGN KEY (image_id) REFERENCES images(id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

INSERT INTO recettes(title, subtitle, ingredients, preparation, image_id)

VALUES("Cookies Crousti-Moelleux", "temps de préparation 30 min, temps de cuisson 30 min", "250 g de farine, 125 g de sucre de canne roux, 2 sachets de sucre vanillée, 1/2 sachet de levure alsacienne, 1 œuf, 125 g de beurre, 1 c. à soupe de lait, 1 pincée de sel, 1 c. à soupe de miel, 100 g de pétites de chocolat, (ou nougatine)",
"Préchauffer le four à 170°. Dans le bol, mettre le farine, le sucre roux, le sucre vanillé, la levure , le sel, le lait et l'oeuf battu. 
Programmer 45 sec/vitesse 2.Ajouter le beurre fondu (au micro-onde), le miel, mélanger 45 sec/vitesse 3.Ajouter les pépites de chocolats ou la nougatine ou les 2. 
Programmer  1mn/sens inverse/vitesse 2. Tapisser une plaque à patisserie de papier sulfurisé et prélever l'équivalent d'1 petite c à soupe et la déposer sur le papier, bien espacér les cookies. 
Faire cuire 12 à 15 mn selon le four (bien surveiller la cuisson)", 1);

INSERT INTO recettes(title, subtitle, ingredients, preparation, image_id)

VALUES("Roulé a la tomate fromage chorizo", "temps de préparation 15 min, temps de cuisson 10 min","3 oeufs séparé du blanc du jaune,1 c a soupe d'eau,20 g de farine,20 g de maizena,80 g de beurre,2 c a soupe de concentré de tomate ou de sauce tomate,1/2 sachet de levure chimique,1 c a café de paprika,50 gr de gruyère ou de parmesan râpé pour la garniture,100g de crème fraîche ou fromage blanc,150 g de fromage a tartiner st moret, chorizo en tranche",     
"Préchauffez votre four à 180°C. Mettez dans le bol avec le fouet les jaunes d'œufs et la cuillère d'eau. Mettez sur vit 3 pendant 2 min, puis augmentez jusqu'à vit 5. Ensuite, ajoutez le reste des ingrédients sans le fouet. Montez vos blancs en neige et mélangez à la spatule les deux préparations. Étalez sur la lèche-frite avec du papier sulfurisé. Cuisez pendant 8 à 10 min. Enroulez avec un torchon humide et laissez refroidir pendant environ 5 min. Préparez la garniture en mélangeant la crème avec le fromage, puis étalez-la sur le roulé et ajoutez le chorizo. Enroulez de nouveau et filmez. 
Mettez au réfrigérateur pendant plusieurs heures ou placez au congélateur pendant 30 min et coupez des tronçons. Mettez 1 m 30 en mode épi.", 2);

INSERT INTO recettes(title, subtitle, ingredients, preparation, image_id)

VALUES("gloubiboulga", "temps de préparation 20 min, temps de cuisson 0 min","1 banane mure à point, moutarde de dijon, confiture de fraises, copeaux de chocolat, 1 saucisse de Toulouse crue mais tiède",
"Dans un grand saladier vous mélanger de la confiture de fraises, du chocolat râpé, de la banane écrasée, de la moutarde très forte et des saucisses crues mais tièdes, c'est très important.
Vous pouvez ajouter quelques anchois,ou un peu de crème Chantilly.A table et bon appétit pour déguster le Gloubi-Boulga.", 3);


CREATE TABLE categories (
  id int(11) PRIMARY KEY NOT NULL AUTO_INCREMENT,
  label VARCHAR(255)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

INSERT INTO categories(label)
VALUES ('apéritif'), ('entrée'), ('plat'),('dessert');

CREATE TABLE categories_to_recettes (
  id int(11) PRIMARY KEY NOT NULL AUTO_INCREMENT,
  recette_id INTEGER,
  categorie_id INTEGER,
  CONSTRAINT categorie_id_fk FOREIGN KEY (categorie_id) REFERENCES categories(id),
  CONSTRAINT recette_id_fk FOREIGN KEY (recette_id) REFERENCES recettes(id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

INSERT INTO
 categories_to_recettes(recette_id, categorie_id)
  VALUES (1, 4), (2, 2), (2, 1), (3, 3);




-- SQLBook: Code

-- SQLBook: Markup
