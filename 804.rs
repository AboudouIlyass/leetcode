use std::collections::HashMap;
struct Solution;

impl Solution {
    pub fn unique_morse_representations(words: Vec<String>) -> i32 {
        let mut map:HashMap<char, &str> = HashMap::new();

        let morse = [".-","-...","-.-.","-..",".","..-.","--.","....","..",".---","-.-",".-..","--","-.","---",".--.","--.-",".-.","...","-","..-","...-",".--","-..-","-.--","--.."];
        let t: Vec<_> = morse.iter().enumerate().map(|(i, m)| (i, m)).collect();

        for v in t {
            let key = (v.0 as u8 + 'a' as u8) as char ;
            map.insert( key, v.1);
        }
        
        let mut res: Vec<String> = Vec::new();
        
        for w in words {
            let mut temp = String::new();
            for i in w.chars(){
                temp += map[&i];
            }

            if !res.contains(&temp){
                res.push(temp.clone());
            }
        }
        res.len() as i32
    }
}