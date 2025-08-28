1. What is the difference between **getElementById, getElementsByClassName, and querySelector / querySelectorAll**?
2. How do you **create and insert a new element into the DOM**?
3. What is **Event Bubbling** and how does it work?
4. What is **Event Delegation** in JavaScript? Why is it useful?
5. What is the difference between **preventDefault() and stopPropagation()** methods?


<!-- Answer -->

1.    (A) getElementById = "Id" is used to get a Specific element. Finds Element by "Id" only.
       Always returns a single element,Because we know that an "Id" exists only once. It's used for a single purpose.

      (B) getElementsByClassName = Used to get all elements of the same Class. If the same class exists on many element, it returns an html Collection "Array-Like" of all the elements.

      (C) querySelector =  Works like a "css" selector (tag, id, class) can search. If I use "querySelector", No matter how many elements it finds, it only returns the first element.

      (D) querySelectorAll = This also works like a "css" selector. But "querySelectorAll" will give me a nodeList. There can be multiple elements in it.




2.    Create an element with createElement → give it content → then appendChild to a parent element.
      
      DOM এর মাধ্যমে একটি নতুন উপাদান যোগ করার জন্য, প্রথমে "createElement" ব্যবহার করে সেই উপাদানটি তৈরি করতে হয়। তারপর সেখানে যে উপাদানটি তৈরি করতে চাই তার ট্যাগ নাম দিতে হবে। আমি চাইলে এর ভিতরে কিছু লিখতে পারি, এবং চাইলে আরও উপাদান যোগ করতে পারি। তারপর, এটিকে একটি child হিসেবে DOM-এ ইতিমধ্যেই বিদ্যমান একটি উপাদানের সাথে যুক্ত করার মাধ্যমে আমি একটি Element তৈরি করতে পারি।





3.    The event "bubbles" from the inside out (child → parent → root).

      Event Bubbling হলো একটা process যেখানে কোনো child element-এ event ঘটলে সেটা প্রথমে ওই element-এ trigger হয়, তারপর ধাপে ধাপে তার parent → grandparent → উপরের root element পর্যন্ত ছড়িয়ে যায়।




4.     যখন আমরা child elements-এর জন্য আলাদা আলাদা event listener না বসিয়ে, 
       parent element-এ একটাই event listener   বসাই। Event bubbling এর কারণে child এ ঘটে যাওয়া event parent এ পৌঁছে যায়, আর parent সেই event কে handle করতে পারে।  


       এটি বাবহারে সুবিধাগুলোঃ
       * অনেকগুলো element-এর জন্য আলাদা listener না বসিয়ে, একটা parent listener দিয়েই সব handle করা যায়।
       * যদি কখনও নতুন "tag" add করি, তার জন্য আলাদা event বসাতে হবে না। কারণ parent listener আগেই আছে। 
       * এবং কম event listener মানে কম memory use, তাই performance ভালো পাওয়া যায়। 




5.     (A) preventDefault() = আমরা মডিউলে দেখেছি, form এর কাজের সময় যখন আমরা
       submit বাটনে ক্লিক করি তখন অটো রি-লোড  হয়ে যায়। তো এটাকে বন্ধ করার জন্য এই 
       preventDefault() ব্যবহার করা হয়। যদি গুছিয়ে বলি, "preventDefault()" default 
       behavior বন্ধ করে দেয়। মানে ব্রাউজার যেটা normally করে সেটা আর করবে না।


      (B) stopPropagation() = আমরা যদি Event Bubbling দেখি (child → parent → root) । এই যে Bubbling করে উপরে যাচ্ছে এটা Event Bubbling এর Default ভাবে কাজ করে। তাই এটাকে বন্ধ করার জন্য "stopPropagation()" ব্যবহার করা হয়। 