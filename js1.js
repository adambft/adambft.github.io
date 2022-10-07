function create_draw_table() {
    let div_elem_to_add_table = document.getElementById("draw_table1_here")

    console.log(div_elem_to_add_table)

    let new_table = "<table class='pretty_table_1'>"
    let row_to_add = ""
    for (let i=0; i<40; i++) {
        row_to_add += "<td></td>"
    }

    row_to_add = "<tr>" + row_to_add + "</tr>"

    for (let i=0; i<20; i++) {
        new_table += row_to_add
    }

    new_table += "</table>"

    div_elem_to_add_table.innerHTML = new_table
}

function night_mode() {
    //check if alr night mode
    let night_btn_elem = document.getElementById("night-btn")

    let bright_arr = ["dark-bg", "light-bg-1", "light-bg-2", "light-bg-3", "light-bg-4", "dark-bg-2", "pretty_table_1"]
    let night_arr = ["dark-bg-night", "light-bg-1-night", "light-bg-2-night", "light-bg-3-night", "light-bg-4-night", "dark-bg-2-night", "pretty_table_1-night"]

    let to_find = bright_arr
    let change_to = night_arr
    let vid_elem = document.getElementById("main-vid-1")
    let vid_title = document.getElementsByClassName("main-div-6")[0].children[0].children[0]
    let div_6_elem = document.getElementsByClassName("main-div-6")

    if (night_btn_elem.hasAttribute("night_mode")) {
        to_find = night_arr
        change_to = bright_arr
        night_btn_elem.removeAttribute("night_mode")
        night_btn_elem.innerHTML = "Click Here to Switch to Night Mode &#127769"

        vid_elem.innerHTML = `<iframe width="560" height="315" src="https://www.youtube.com/embed/a5lphRkbaNA?autoplay=1&mute=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`
        vid_title.innerText = "Here's a place I went to awhile ago:"
    } else {
        night_btn_elem.setAttribute("night_mode", "")
        night_btn_elem.innerHTML = "Click Here to Switch to Day Mode &#127774"

        vid_elem.innerHTML = `<iframe width="560" height="315" src="https://www.youtube.com/embed/AF_nfazQaek?autoplay=1&mute=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`
        vid_title.innerText = "Quick word from our sponsor:"
        
        div_6_elem.scrollIntoView()
    }

    // console.log("to_find: ",to_find)
    // console.log("change_to",change_to)

    //do thing
    for (e_idx in to_find) {
        e_to_find = to_find[e_idx]
        
        let curr_arr_to_edit = document.getElementsByClassName(e_to_find)

        for (let i=curr_arr_to_edit.length-1; i>=0; i--) {
            e_elem_to_change = curr_arr_to_edit[i]
            e_elem_to_change.classList.toggle(e_to_find)
            e_elem_to_change.classList.toggle(change_to[e_idx])

            console.log(e_elem_to_change)
        }
    }

    console.log(document.getElementById("test123"))
}