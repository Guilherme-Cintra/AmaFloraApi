
// //Exporter le middle authorize pour l'autorisation des routes selon le rôle de l'user
// export function authorize(roles = []) {

//     //Si role est un string, on transforme roles en tableau de strings
//     if (typeof roles === "string") {
//         roles = [roles]
//     }

//     // fonction qui sera retournée
//     return (req, res, next) => {

//         // Récupère l'user dans la requête
//         const user = req.user;

//         console.log(`role user ligne 16 ${user.role}`)
//         //Vérifie si le rôle de l'user fourni le permet de de faire l'action. 
//         //Si ce n'est pas le cas  ou bien l'user on renvoie une erreur

//         if(!user || (roles.length && !roles.includes(user.role))) {
            
//             return res.status(403).json({ message: 'Accès interdit' });
//         }

//         //Si l'user a le bon rôle  on passe
//         next();
//     }
// }