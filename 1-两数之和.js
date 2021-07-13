let nums = [2, 7, 11, 15]
let target = 9

function twoSum(nums, target) {
  let map = new Map()
  for(let i = 0; i < nums.length; i++) {
      res = target - nums[i]
      if(map.has(res)) {
        return [map.get(res), i]
      } else {
        map.set(nums[i], i)
      }
  }
}

console.log(twoSum(nums, target))