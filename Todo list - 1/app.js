new Vue({
    el: "#app",
    data: {
        title: "Список заметок",
        notes: ["Заметка 1", "Заметка 2"],
        inputChanged: "",
        update: false,
        updatePost: null,
        noteUpdateIndex: null
    },
    methods: {
        updateNote: function (index) {
            this.update = true;
            this.updatePost = this.notes[index];
            this.inputChanged = this.updatePost;
            this.noteUpdateIndex = index;
        },
        addNote: function () {
            if (this.update === false) {
                if(this.inputChanged !== "") {
                    this.notes.push(this.inputChanged);
                    this.inputChanged = "";
                }
            }
            else {
                this.notes.splice(this.noteUpdateIndex, 1, this.inputChanged);
                this.inputChanged = "";
                this.update = false;
                this.updatePost = null;
                this.noteUpdateIndex = null;
            }
        },
        deleteNote: function (index) {
            this.notes.splice(index, 1);
        }
    }
});