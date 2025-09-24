//your JS code he const changeBtn = document.getElementById("change_button");
    const resetBtn = document.getElementById("Reset");

    changeBtn.addEventListener("click", () => {
      // Reset all to transparent first
      const items = document.querySelectorAll(".grid-item");
      items.forEach(item => item.style.backgroundColor = "transparent");

      // Get values
      const blockId = document.getElementById("block_id").value;
      const color = document.getElementById("colour_id").value;

      // Change specific block
      if (blockId && color) {
        const block = document.getElementById(blockId);
        if (block) block.style.backgroundColor = color;
      }
    });

    resetBtn.addEventListener("click", () => {
      const items = document.querySelectorAll(".grid-item");
      items.forEach(item => item.style.backgroundColor = "transparent");
    });