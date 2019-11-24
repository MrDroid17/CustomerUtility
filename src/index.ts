export const Greeter = (name: string) => `Hello ${name}`;

// export class Util {

//   public getDistanceFromLatLonInKm(lat1, lon1, lat2, lon2) {
//     let R = 6371;   // Earth Radius(in Km)
//     let dLat = this.degree2Radian(lat2 - lat1);
//     let dLon = this.degree2Radian(lon2 - lon1);
//     let a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
//       Math.cos(this.degree2Radian(lat1)) * Math.cos(this.degree2Radian(lat2)) *
//       Math.sin(dLon / 2) * Math.sin(dLon / 2);
//     let c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
//     return R * c;
//   }

//   // degree to radian conversion
//   degree2Radian = deg => deg * (Math.PI / 180);

//   /**
//  * Sort function to sort array of customers by user_id
//  * @param a
//  * @param b
//  */
//   public sortByUserId(a, b) {
//     const id1 = a.user_id;
//     const id2 = b.user_id;
//     let comparison = 0;

//     if (id1 > id2) comparison = 1;
//     else if (id1 < id2) comparison = -1;

//     return comparison;
//   }
// }
