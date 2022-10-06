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

    let bright_arr = ["dark-bg", "light-bg-1", "light-bg-2", "light-bg-3", "light-bg-4"]
    let night_arr = ["dark-bg-night", "light-bg-1-night", "light-bg-2-night", "light-bg-3-night", "light-bg-4-night"]

    let to_find = bright_arr
    let change_to = night_arr

    if (night_btn_elem.hasAttribute("night_mode")) {
        to_find = night_arr
        change_to = bright_arr
        night_btn_elem.removeAttribute("night_mode")
    } else {
        night_btn_elem.setAttribute("night_mode", "")
    }

    //do thing
    for (e_idx in to_find) {
        e_to_find = to_find[e_idx]
        
        let curr_arr_to_edit = document.getElementsByClassName(e_to_find)

        // console.log(e_to_find)
        // console.log(curr_arr_to_edit)
        // console.log("----------------------------------------------------")

        for (e_elem_to_change of curr_arr_to_edit) {
            e_elem_to_change.classList.toggle(e_to_find)
            e_elem_to_change.classList.toggle(change_to[e_idx])
        }
    }
}