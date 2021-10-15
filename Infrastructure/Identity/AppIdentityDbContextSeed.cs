// using System.Linq;
// using System.Threading.Tasks;
// using Core.Entities.Identity;
// using Microsoft.AspNetCore.Identity;

// namespace Infrastructure.Identity
// {
//     public class AppIdentityDbContextSeed
//     {
//         public static async Task SeedUsersAsync(UserManager<AppUser> userManager)
//         {
//             if (!userManager.Users.Any())
//             {
//                 var user = new AppUser
//                 {
//                     DisplayName = "Seunghye",
//                     Email = "seunghyeyang@yahoo.com",
//                     UserName = "seunghyeyang@yahoo.com",
//                     Address = new Address
//                     {
//                         FirstName = "Seunghye",
//                         LastName = "Yang",
//                         Street = "kassai 26",
//                         City = "Debrecen",
//                         State = "Hajdu Bihar",
//                         ZipCode = "4028"
//                     }
//                 };

//                 await userManager.CreateAsync(user, "Uk130919!");
//             }
//         }
//     }
// }