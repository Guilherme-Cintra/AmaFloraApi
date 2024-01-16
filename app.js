
import express from 'express'; // Importation de express
import 'dotenv/config';//Importer pour utiliser les variables d'environnement
import cors from 'cors'; // Cors pour donner accès à tous les ports 

import { sequelize } from './config/config.js'; // importer sequelize pour la syncrhonisation avec la base de données
import utilisateurRouter from './routes/user.route.js';
import plantRouter from './routes/plant.route.js';
import userPlantRouter from './routes/user_plant.js';
import rechercheRouter from './routes/plant_recherchee.route.js';
import wishRouter from './routes/wishlist.route.js';
import identificationRouter from './routes/identification.route.js';

// config();
const app = express();

//Toutes les méthodes sont accessibles à partir de toutes les origines
var corsOptions = {
    origin: '*',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    optionsSuccessStatus: 200 
}

// Utiliser les variables d'environnement 


app.use(express.json());// Pour lire les coprs de requêtes en format JSON



app.use('/api/users',cors(corsOptions), utilisateurRouter);
app.use('/api/plants',cors(corsOptions), plantRouter);
app.use('/api/userplants',cors(corsOptions), userPlantRouter);
app.use('/api/recherche',cors(corsOptions), rechercheRouter);
app.use('/api/wishlist',cors(corsOptions), wishRouter);
app.use('/api/identifications',cors(corsOptions), identificationRouter);
const PORT = process.env.PORT || 3000;

// Synchronisation avec la base de données et démarrage du serveur
sequelize.sync().then(() => {
    app.listen(PORT, () => console.log(`http://localhost:${PORT}`)); // Démarrage du serveur 
  }); 

  export default app; //Exporter app pour les tests