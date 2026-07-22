---
title: "Simple templates for FPGA"
date: "2026-05-28"
description: "Script collection"
tags: ["general"]
---

## Synthesis in Xilinx FPGA by Vivado

```tcl
set top_name #TOP
set part_name #FPGA_CHIP

file mkdir reports
file mkdir outputs


# Read files
read_verilog rtl/#{RTL_NAME}.v
read_xdc constraints/#{CONSTRAINTS}.xdc


# Run flow
synth_design -part $part_name -top $top_name
opt_design
place_design
phys_opt_design
route_design


# Export reports
report_utilization -hierarchical -file reports/utilization.rpt
report_timing_summary -file reports/timing_summary.rpt
report_timing -file reports/timing.rpt


# Write bitsteam
write_bitstream -force outputs/${top_name}.bit
```
