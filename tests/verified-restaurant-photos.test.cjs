const test=require('node:test');
const assert=require('node:assert/strict');
const fs=require('node:fs');
const path=require('node:path');
const src=fs.readFileSync(path.join(__dirname,'../js/food-guide.js'),'utf8');
const html=fs.readFileSync(path.join(__dirname,'../index.html'),'utf8');
test('Only photo-verified restaurants display embedded pictures',()=>{
 assert.match(src,/if\(p\.meal\)return verifiedRestaurantPhoto\(p\)/);
 assert.match(src,/const VERIFIED_RESTAURANT_PHOTOS=/);
 assert.match(src,/d1:\{file:/);
 assert.match(src,/l5:\{file:/);
 assert.match(src,/if\(!photo\)\{/);
});
test('Restaurant real-photo links are always offered',()=>{
 assert.match(src,/function googleRealPhotosURL\(p\)/);
 assert.match(src,/www\.google\.com\/maps\/search/);
 assert.match(src,/restaurantPhotoSourceLinks\(p\)/);
 assert.match(src,/target="_blank" rel="noopener noreferrer"/);
});
test('Day timeline, meal groups and local map remain in the page',()=>{
 for(const id of ['dayNav','dd-meals-lunch','dd-meals-dinner','fg-local-map'])
  assert.ok(html.includes('id="'+id+'"'));
});
