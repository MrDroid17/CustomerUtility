# Customer Utility v1.0.7

**Customer Utility**  is a repository of some inbuilt function that comes handy for both typescript and javascript based product.

## Step-1: Installation 
```
npm i sorting-customer
```

## Step-2: Importing
```javascript
import { Util } from 'sorting-customer';
```

## Step-3: Integration
Create a instance inside the class:
```typescript
util = new Util();
```
Then using Dot(.) operator access respective function.
```typescript
this.util.getDistanceFromLatLonInKm(lat1, lon1, lat2, lon2)
```

## List of functions:
So far there is three function:
* **getDistanceFromLatLonInKm(lat1, lon1, lat2, lon2)**
  * This functions takes Latitude and Longitude of two location and returns crow flies distance between those location.
  
* **sortByUserId(a: any, b: any)**
  * This functions takes two customer object as parameter and sort them as per their integer user_id.
  
* **degree2Radian(deg: number)**
  * This functions takes degree as input and returns corresponding radian value..



