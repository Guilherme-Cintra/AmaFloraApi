// import Joi from "joi" //Import de Joi pour la validation de l'utilisateur

// //Pour un utilisateur valide les deux champs email et mot de passe doivent être présents(required) et il faut au moins 8 caractères pour un mot de passe
//  const userSchema = Joi.object({
//     email: Joi.string().email().required().messages({
//       'string.email': 'Email must be a valid email address',
//       'any.required': 'Email is required'
//     }),
//     firstName: Joi.string().trim().required().messages({
//       'any.required': 'First name is required'
//     }),
//     lastName: Joi.string().trim().required().messages({
//       'any.required': 'Last name is required'
//     }),
//     profilePic: Joi.string().allow(null, ''), // optional and can be null or empty
//     motDePasse: Joi.string().min(6).max(100).required().messages({
//       'string.min': 'Password must be at least 6 characters long',
//       'string.max': 'Password must not exceed 100 characters',
//       'any.required': 'Password is required'
//     }),
//     role: Joi.string(),
//   });


  
//   export const validerUser = (req, res, next) => {
//     const  { error } = userSchema.validate(req.body)
//     if (error) {
//         return res.status(400).send(error.details[0].message);
//       } else {
//       next();
//       }
//   }